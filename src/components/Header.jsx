import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div>
          <img
            src="public/logo.svg"
            alt="logo"
            className="header-logo"
          />
        </div>

        <nav className="header-nav">
          <span className="nav-item">Home</span>
          <span className="nav-item active">Menu</span>
          <span className="nav-item">Company</span>
          <span className="nav-item login">Login</span>

          <div className="cart">
            <img
              src="public/cart.svg"
              alt="basket"
              className="cart-icon"
            />
            <span className="cart-badge">0</span>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
