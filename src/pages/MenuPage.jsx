import { useState } from "react";
import useFetch from "../hooks/useFetch";
import MenuItem from "../components/MenuItem/MenuItem";
import Tooltip from "../components/Tooltip";
import "./MenuPage.css";

function MenuPage() {
  const itemsPerClick = 6;
  const [visibleCount, setVisibleCount] = useState(itemsPerClick);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const { data: meals, status } = useFetch("https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals");

  const handleSeeMore = () => {
    setVisibleCount((prev) => prev + itemsPerClick);
  };

  const filteredMeals = selectedCategory
    ? meals?.filter((meal) => meal.category === selectedCategory)
    : meals;

  if (status === null || !meals) {
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
            <button
              className={`menu-btn ${selectedCategory === "Dessert" ? "active" : ""}`}
              onClick={() => setSelectedCategory("Dessert")}
            >
              Dessert
            </button>
            <button
              className={`menu-btn ${selectedCategory === "Dinner" ? "active" : ""}`}
              onClick={() => setSelectedCategory("Dinner")}
            >
              Dinner
            </button>
            <button
              className={`menu-btn ${selectedCategory === "Breakfast" ? "active" : ""}`}
              onClick={() => setSelectedCategory("Breakfast")}
            >
              Breakfast
            </button>
          </div>

          <div className="menu-items">
            {filteredMeals.slice(0, visibleCount).map((item) => (
              <MenuItem key={item.id} item={item} />
            ))}
          </div>

          {visibleCount < filteredMeals.length && (
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
