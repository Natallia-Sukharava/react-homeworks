import { useState, useContext } from "react";
import { CartContext } from "../../CartContext";
import "./MenuItem.css";

function MenuItem({ item }) {
  const [qty, setQty] = useState(1);
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    for (let i = 0; i < qty; i++) {
      addToCart(item.price || 0);
    }
  };

  if (!item) {
    return null;
  }

  const imageUrl = item.img || "/burger1.png";
  const title = item.meal || "No Title";
  const description = item.instructions
    ? (item.instructions.length > 100
        ? `${item.instructions.slice(0, 100)}...`
        : item.instructions)
    : "No description available";

  return (
    <div className="menu-item">
      <img src={imageUrl} alt={title} className="menu-item-image" />
      <div className="menu-item-content">
        <div className="menu-item-header">
          <h3 className="menu-item-name">{title}</h3>
          <div className="menu-item-price">
            ${item.price?.toFixed(2) || "0.00"} USD
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