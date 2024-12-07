import "../Footer.css";
import logo from "../assets/SafemaxLogo.svg";
import mappinarea from "../assets/MapPinArea.svg";
import email from "../assets/Gmail.svg";
import linkedin from "../assets/Linkedin.svg";

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
          
          <div className="footer-logo">
            <img src={logo} alt="Safemax Security Logo" className="logo-image" />
          </div>

          
          <div className="footer-links">
            <h3 className="font-nunito"><b>Quick Links</b></h3>
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
             
            </ul>
          </div>

          
          <div className="footer-contact">
            <h3 className="font-nunito"><b>Reach Us</b></h3>
            <ul>
              <li className="font-nunito">
                <i>
                <img src={mappinarea}></img>
                 </i>

                <font className="font-nunito">First Floor, Survey No. 79, Kothrud, Pune, Maharashtra, India - 411038.</font>
              </li>
              <li>
                <i>
                
                <img style={{position:"relative",top:"15px"}} src={email}></img>
                </i>
                <a className="font-nunito" href="mailto:support@safemaxsecurity.services">
                  support@safemaxsecurity.services
                </a>
              </li>
              <li>
                <i>
               <img style={{position:"relative",top:"10px"}} src={linkedin}></img>
</i>
                <a  className="font-nunito"
                  href="https://www.linkedin.com/company/safemax-security/"
                  target="_blank"
                  
                >
                  https://www.linkedin.com/company/safemax-security/
                </a>
              </li>
            </ul>
            
          </div>
        </div>
      </div>
    </footer>
  );
}
