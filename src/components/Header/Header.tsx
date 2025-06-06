import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../CartContext";
import { CartContextType } from "../../types";
import "./Header.css";

function Header() {
  const context = useContext(CartContext);

  if (!context) return null;

  const { cartCount, cartTotal } = context as CartContextType;

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-wrapper">
          <img src="/logo.svg" alt="logo" className="header-logo" />
        </div>

        <nav className="header-nav">
          <NavLink
            to="/"
            className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
          >
            Home
          </NavLink>

          <NavLink
            to="/menu"
            className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
          >
            Menu
          </NavLink>

          <span className="nav-item">Company</span>

          <NavLink
            to="/login"
            className={({ isActive }) => `nav-item login ${isActive ? "active" : ""}`}
          >
            Login
          </NavLink>

          <div className="cart-wrapper">
            <div className="cart">
              <img src="/cart.svg" alt="basket" className="cart-icon" />
              <span className="cart-badge">{cartCount}</span>
            </div>
            <div className="cart-total">
              Total: ${cartTotal.toFixed(2)}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;