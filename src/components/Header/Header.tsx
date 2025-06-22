import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
  const cartCount = useSelector((state: RootState) => state.cart.count);
  const cartTotal = useSelector((state: RootState) => state.cart.total);
  const userName = useSelector((state: RootState) => state.user?.name || "");

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
            to={userName ? "/profile" : "/login"} 
            className={({ isActive }) => `nav-item login ${isActive ? "active" : ""}`}
          >
          {userName || "Login"}
          </NavLink>

          <div className="cart-wrapper" onClick={handleCartClick} style={{ cursor: "pointer" }}>
            <div className="cart">
              <img src="/cart.svg" alt="basket" className="cart-icon" />
              <span className="cart-badge">{cartCount}</span>
            </div>
            <div className="cart-total">
            Total: ${isNaN(cartTotal) ? "0.00" : cartTotal.toFixed(2)}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;