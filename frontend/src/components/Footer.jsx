import "../Footer.css";
import logo from "../assets/safemax_logo.svg";

export default function Footer() {
  return (
    <footer id="contact" className="footer bg-gray-900 text-white">
      <div className="footer-container px-4 py-8 md:px-12">
        {/* Footer Top */}
        <div className="footer-top text-center space-y-6">
          <h1 className="footer-heading font-montserrat text-xl md:text-3xl font-bold">
            <span>Fight Fraud and Safely</span> Onboard <br />
            Customers with a Powerful Platform
          </h1>
          <button className="get-started-btn bg-orange-400 text-white font-bold px-6 py-2 rounded-full hover:bg-orange-500 transition duration-200">
            <a href="mailto:support@safemaxsecurity.services">Get Started</a>
          </button>
        </div>

        <hr className="footer-divider border-gray-700 my-8" />

        {/* Footer Bottom */}
        <div className="footer-bottom grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo Section */}
          <div className="footer-logo text-center md:text-left">
            <img
              src={logo}
              alt="Safemax Security Logo"
              className="logo-image mx-auto md:mx-0 h-16 w-auto"
            />
          </div>

          {/* Quick Links */}
          <div className="footer-links text-center md:text-left">
            <h3 className="font-nunito text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="#about"
                  className="font-nunito text-gray-400 hover:text-orange-400 transition duration-200"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="font-nunito text-gray-400 hover:text-orange-400 transition duration-200"
                >
                  Services
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="footer-contact text-center md:text-left">
            <h3 className="font-nunito text-lg font-semibold">Reach Us</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <i className="fas fa-map-marker-alt mr-2"></i>
                First Floor, Survey No. 79, Kothrud, Pune, Maharashtra, India -
                411038.
              </li>
              <li>
                <i className="fas fa-envelope mr-2"></i>
                <a
                  href="mailto:support@safemaxsecurity.services"
                  className="font-nunito text-gray-400 hover:text-orange-400 transition duration-200"
                >
                  support@safemaxsecurity.services
                </a>
              </li>
              <li>
                <i className="fab fa-linkedin mr-2"></i>
                <a
                  href="https://www.linkedin.com/company/safemax-security/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-nunito text-gray-400 hover:text-orange-400 transition duration-200"
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
