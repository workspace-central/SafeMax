import "./Footer.css";
import logo from "../assets/safemax_logo.svg"

export default function Footer() {
  return (
<footer className="footer">
<div className="footer-container">
  <div className="footer-top">
    <h1 className="footer-heading">
      <span> Fight Fraud and Safely</span> Onboard <br></br>Customers with a Powerful Platform
    </h1>
    <button className="get-started-btn">Get Started</button>
  </div>

  <hr className="footer-divider" />

  <div className="footer-bottom">
    <div className="footer-logo">
      <img src={logo} alt="Safemax Security Logo" className="logo-image" />
    </div>

    <div className="footer-links">
      <h3>Quick Links</h3>
      <ul>
        <li>
          <a href="#about">About Us</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#careers">Careers</a>
        </li>
      </ul>
    </div>

    <div className="footer-contact">
      <h3>Reach Us</h3>
      <ul>
        <li>
          <i className="fas fa-map-marker-alt"></i> First Floor, Survey No. 79, Kothrud, Pune, Maharashtra, India - 411038
        </li>
        <li>
          <i className="fas fa-envelope"></i> support@safemaxsecurity.services
        </li>
        <li>
          <i className="fab fa-linkedin"></i>{" "}
          <a href="https://www.linkedin.com/company/safemax-security/" target="_blank" rel="noopener noreferrer">
            https://www.linkedin.com/company/safemax-security/
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>
</footer>
  )
}
