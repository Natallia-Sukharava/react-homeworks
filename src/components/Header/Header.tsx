import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { ThemeContext } from "../../themeContext";
import "./Header.css";

function Header() {
  const cartCount = useSelector((state: RootState) => state.cart.count);
  const cartTotal = useSelector((state: RootState) => state.cart.total);
  const userName = useSelector((state: RootState) => state.user?.name || "");
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleCartClick = () => {
    const user = localStorage.getItem("user");
    if (user) {
      navigate("/order");
    } else {
      alert("Please log in first");
      navigate("/login");
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-wrapper">
          <img src="/src/assets/logo.svg" alt="logo" className="header-logo" />
        </div>
        <div className="header-right">
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
            to={userName ? "/profile" : "/login"} 
            className={({ isActive }) => `nav-item login ${isActive ? "active" : ""}`}
          >
          {userName || "Login"}
          </NavLink>
          </nav>

          <div className="header-actions">
          <button onClick={toggleTheme} className="theme-toggle-btn">
          {theme === "dark" ? "🌙 theme" : "☀️ theme"}
          </button>

          <div className="cart-wrapper" onClick={handleCartClick}>
            <div className="cart">
              <img src="/src/assets/cart.svg" alt="basket" className="cart-icon" />
              <span className="cart-badge">{cartCount}</span>
            </div>
            <div className="cart-total">
            Total: ${isNaN(cartTotal) ? "0.00" : cartTotal.toFixed(2)}
            </div>
            </div>
          </div>
          </div>
        

      </div>
    </header>
  );
}

export default Header;