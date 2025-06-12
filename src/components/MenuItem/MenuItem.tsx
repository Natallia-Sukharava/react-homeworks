import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import { MenuItemProps } from "../../types";
import "./MenuItem.css";

function MenuItem({ item }: MenuItemProps) {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        totalPrice: (item.price || 0) * qty,
        quantity: qty,
      })
    );
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