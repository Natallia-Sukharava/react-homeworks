import Header from "../components/Header";
import Footer from "../components/Footer";
import MenuItm from "../components/MenuItm";
import Tooltip from "../components/Tooltip";
import dataItems from "../dataItems";
import "./MenuPage.css";

function MenuPage() {
  return (
    <>
      <Header />
      <main className="menu-wrapper">
        <div className="menu-container">
          <div className="menu-inner">
            <h2 className="menu-title">Browse our menu</h2>
            <p className="menu-subtitle">
              Use our menu to place an order online, or{" "}
              <Tooltip tooltipText="+370-12345678">
                <span className="menu-contact-phone">phone</span>
              </Tooltip>{" "}
              our store <br /> to place a pickup order. Fast and fresh food.
            </p>

            <div className="menu-buttons">
              <button className="menu-btn active">Desert</button>
              <button className="menu-btn">Dinner</button>
              <button className="menu-btn">Breakfast</button>
            </div>

            <div className="menu-items">
              {dataItems.map((item) => (
                <MenuItm key={item.id} item={item} />
              ))}
            </div>
            <div className="menu-see-more">
              <button className="menu-btn-see-more">See more</button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default MenuPage;
