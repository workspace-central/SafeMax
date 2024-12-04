import "../Footer.css";
import logo from "../assets/safemax_logo.svg";

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <h1 className="footer-heading font-montserrat">
            <span>Fight Fraud and Safely</span> Onboard <br />
            Customers with a Powerful Platform
          </h1>
          <button className="get-started-btn">
           <a href="mailto:support@safemaxsecurity.services">
                  Get Started
                </a>
          </button>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          {/* Logo Section */}
          <div className="footer-logo">
            <img src={logo} alt="Safemax Security Logo" className="logo-image" />
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h3 className="font-nunito">Quick Links</h3>
            <ul>
              <li>
                <a href="#about" className="font-nunito">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="font-nunito">
                  Services
                </a>
              </li>
              <li>
                <a href="#careers" className="font-nunito">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="footer-contact">
            <h3 className="font-nunito">Reach Us</h3>
            <ul>
              <li>
                <i className="fas fa-map-marker-alt font-nunito"></i>
                First Floor, Survey No. 79, Kothrud, Pune, Maharashtra, India - 411038.
              </li>
              <li>
                <i className="fas fa-envelope font-nunito"></i>
                <a href="mailto:support@safemaxsecurity.services">
                  support@safemaxsecurity.services
                </a>
              </li>
              <li>
                <i className="fab fa-linkedin font-nunito"></i>
                <a
                  href="https://www.linkedin.com/company/safemax-security/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
