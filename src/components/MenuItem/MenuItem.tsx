import { useState, useContext } from "react";
import { CartContext } from "../../CartContext";
import { MenuItemProps } from "../../types";
import "./MenuItem.css";

function MenuItem({ item }: MenuItemProps) {
  const [qty, setQty] = useState(1);

  const context = useContext(CartContext);
  if (!context) return null;

  const { addToCart } = context;

  const handleAddToCart = () => {
    addToCart((item.price || 0) * qty, qty);
  };

  const imageUrl = item.img || "/burger1.png";
  const title = item.meal || "No Title";
  const description =
    item.instructions.length > 100
      ? `${item.instructions.slice(0, 100)}...`
      : item.instructions;

  return (
    <div className="menu-item">
      <img src={imageUrl} alt={title} className="menu-item-image" />
      <div className="menu-item-content">
        <div className="menu-item-header">
          <h3 className="menu-item-name">{title}</h3>
          <div className="menu-item-price">
            ${item.price.toFixed(2)} USD
          </div>
        </div>
        <p className="menu-item-description">{description}</p>
        <div className="menu-item-controls">
          <input
            type="number"
            min={1}
            value={qty}
            onChange={(e) => setQty(Number(e.target.value))}
            className="menu-item-quantity"
          />
          <button className="menu-item-button" onClick={handleAddToCart}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;