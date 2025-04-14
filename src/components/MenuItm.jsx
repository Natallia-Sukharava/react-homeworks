import { useState } from "react";
import "./MenuItm.css";

function MenuItm({ item }) {
  const [qty, setQty] = useState(1);

  return (
    <div className="menu-item">
      <img src={item.image} alt={item.name} className="menu-item-image" />
      <div className="menu-item-content">
        <div className="menu-item-header">
          <h3 className="menu-item-name">{item.name}</h3>
          <div className="menu-item-price">${item.price.toFixed(2)} USD</div>
        </div>
        <p className="menu-item-description">{item.description}</p>
        <div className="menu-item-controls">
          <input
            type="number"
            min={1}
            value={qty}
            onChange={(e) => setQty(e.target.value)}
            className="menu-item-quantity"
          />
          <button className="menu-item-button">Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default MenuItm;
