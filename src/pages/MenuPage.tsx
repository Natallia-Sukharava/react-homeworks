import { useState } from "react";
import useFetch from "../hooks/useFetch";
import MenuItem from "../components/MenuItem/MenuItem";
import Tooltip from "../components/Tooltip";
import "./MenuPage.css";
import { Meal } from "../types";
import { useSelector } from "react-redux";
import type { RootState } from "../store";

function MenuPage() {
  const itemsPerClick = 6;
  const [visibleCount, setVisibleCount] = useState<number>(itemsPerClick);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const { data: meals, status } = useFetch<Meal[]>(
    "https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals"
  );

const cart = useSelector((state: RootState) => state.cart);

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
            {["Dessert", "Dinner", "Breakfast"].map((category) => (
              <button
                key={category}
                className={`menu-btn ${selectedCategory === category ? "active" : ""}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="menu-items">
            {filteredMeals
              ?.slice(0, visibleCount)
              .map((item) => (
                <MenuItem key={item.id} item={item} />
              ))}
          </div>

          {filteredMeals && visibleCount < filteredMeals.length && (
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