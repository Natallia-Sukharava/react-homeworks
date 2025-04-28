import { useState, useEffect } from "react";
import MenuItem from "../components/MenuItem";
import Tooltip from "../components/Tooltip";
import "./MenuPage.css";

function MenuPage() {

  const itemsPerClick = 6;

  const [meals, setMeals] = useState([]);
  const [visibleCount, setVisibleCount] = useState(itemsPerClick);

  useEffect(() => {
    fetch("https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals")
      .then((response) => response.json())
      .then((data) => setMeals(data))
      .catch((error) => console.error("Error fetching meals:", error));
  }, []);

  const handleSeeMore = () => {
    setVisibleCount((prev) => prev + itemsPerClick);
  };

  if (meals.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <main className="menu-wrapper">
      <div className="menu-container">
        <div className="menu-inner">
          <h2 className="menu-title">Browse our menu</h2>
          <div className="menu-subtitle">
  Use our menu to place an order online, or{" "}
  <Tooltip tooltipText="+370-12345678">
    <span className="menu-contact-phone">phone</span>
  </Tooltip>{" "}
  our store <br /> to place a pickup order. Fast and fresh food.
</div>
          <div className="menu-buttons">
            <button className="menu-btn active">Desert</button>
            <button className="menu-btn">Dinner</button>
            <button className="menu-btn">Breakfast</button>
          </div>

          <div className="menu-items">
            {meals.slice(0, visibleCount).map((item) => (
              <MenuItem key={item.id} item={item} />
            ))}
          </div>

          {visibleCount < meals.length && (
            <div className="menu-see-more">
              <button className="menu-btn-see-more" onClick={handleSeeMore}>
                See more
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default MenuPage;