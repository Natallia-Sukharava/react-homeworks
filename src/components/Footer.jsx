import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo-section">
            <img src="public/logo.svg" alt="logo" className="footer-logo" />
            <p className="footer-description">
              Takeaway & Delivery template
              <br />
              <span>for small - medium businesses.</span>
            </p>
          </div>

          {[
            {
              title: "Company",
              items: ["Home", "Order", "FAQ", "Contact"],
            },
            {
              title: "Template",
              items: [
                "Style Guide",
                "Changelog",
                "Licence",
                "Webflow University",
              ],
            },
            {
              title: "Flowbase",
              items: ["More Cloneables"],
            },
          ].map((col, i) => (
            <div className="footer-column" key={i}>
              <h4 className="footer-title">{col.title}</h4>
              <ul className="footer-list">
                {col.items.map((item) => (
                  <li className="footer-item" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <div className="footer-credits">
            <span>Built by</span>
            <span className="highlight">Flowbase</span>
            <span>· Powered by</span>
            <span className="highlight">Webflow</span>
          </div>

          <div className="footer-icons">
            <img
              src="public/icons/instagram.svg"
              alt="instagram"
              width="40"
              height="40"
            />
            <img
              src="public/icons/twitter.svg"
              alt="twitter"
              width="40"
              height="40"
            />
            <img
              src="public/icons/youtube.svg"
              alt="youtube"
              width="40"
              height="40"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
