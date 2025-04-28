import { useContext } from "react";
import { CartContext } from "../CartContext";
import "./Header.css";

function Header() {
  const { cartCount, cartTotal } = useContext(CartContext);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-wrapper">
          <img src="/logo.svg" alt="logo" className="header-logo" />
        </div>

        <nav className="header-nav">
          <span className="nav-item">Home</span>
          <span className="nav-item active">Menu</span>
          <span className="nav-item">Company</span>
          <span className="nav-item login">Login</span>
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