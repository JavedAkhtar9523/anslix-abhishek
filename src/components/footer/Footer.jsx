import React from "react";
import {
  ArrowRight,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

const Footer = ({ isVisible = true }) => {
  return (
    <>
      <footer className={`footer ${isVisible ? "visible" : ""}`}>
        <div className="footer-top">
          <div className="footer-col brand-col">
            <div className="logo">
              <span className="logo-text">
                Ans<span className="accent">lix</span>
              </span>
            </div>
            <p className="footer-desc">
              Empowering education through innovative learning solutions and
              world-class courses designed to transform your future.
            </p>
            <div className="social-icons">
              <a href="#" className="social-icon">
                <div className="icon-circle">
                  <span className="icon">
                    <Facebook size={16} />
                  </span>
                </div>
              </a>
              <a href="#" className="social-icon">
                <div className="icon-circle">
                  <span className="icon">
                    <Twitter size={16} />
                  </span>
                </div>
              </a>
              <a href="#" className="social-icon">
                <div className="icon-circle">
                  <span className="icon">
                    <Linkedin size={16} />
                  </span>
                </div>
              </a>
              <a href="#" className="social-icon">
                <div className="icon-circle">
                  <span className="icon">
                    <Instagram size={16} />
                  </span>
                </div>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Our Courses</a>
              </li>
              <li>
                <a href="#">Instructors</a>
              </li>
              <li>
                <a href="#">Testimonials</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h3 className="footer-title">Support</h3>
            <ul className="footer-links">
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">Student Support</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h3 className="footer-title">Newsletter</h3>
            <p className="newsletter-text">
              Subscribe to get updates on new courses and special offers
            </p>
            <div className="newsletter-form">
              <input type="email" placeholder="Your email address" />
              <button className="subscribe-btn">Subscribe</button>
            </div>
            <div className="footer-contact">
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <span>(+91) 9131890800</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <span>support@anslix.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            <p>© 2025 ansLix. All rights reserved.</p>
          </div>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Sitemap</a>
          </div>
          <div className="back-to-top">
            <button
              className="top-btn"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <ArrowRight size={20} style={{ transform: "rotate(-90deg)" }} />
            </button>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .accent {
          color: #ff6b00;
        }

        .logo-text {
          font-size: 24px;
          font-weight: 700;
          letter-spacing: 1px;
          color: white;
        }

        /* Footer Styles */
        .footer {
          background: linear-gradient(180deg, #081932 0%, #050e1d 100%);
          color: #fff;
          position: relative;
          overflow: hidden;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }

        .footer.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .footer::before {
          content: "";
          position: absolute;
          top: -50px;
          left: 0;
          width: 100%;
          height: 50px;
          background: linear-gradient(
            to bottom right,
            transparent 49%,
            #081932 50%
          );
        }

        .footer::after {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          width: 300px;
          height: 300px;
          background: radial-gradient(
            circle,
            rgba(255, 107, 0, 0.03) 0%,
            transparent 70%
          );
          border-radius: 50%;
          pointer-events: none;
          z-index: 1;
        }

        .footer-top {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 50px;
          padding: 80px 5% 60px;
          position: relative;
          z-index: 2;
        }

        .footer-col {
          display: flex;
          flex-direction: column;
        }

        .brand-col {
          max-width: 300px;
        }

        .footer-desc {
          color: rgba(255, 255, 255, 0.7);
          margin: 20px 0;
          line-height: 1.6;
          font-size: 15px;
        }

        .social-icons {
          display: flex;
          gap: 15px;
          margin-top: 10px;
        }

        .social-icon {
          text-decoration: none;
        }

        .icon-circle {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 16px;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .icon-circle:hover {
          background-color: #ff6b00;
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(255, 107, 0, 0.3);
          border-color: #ff6b00;
        }

        .footer-title {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 25px;
          position: relative;
          padding-bottom: 12px;
        }

        .footer-title::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 40px;
          height: 3px;
          background-color: #ff6b00;
          transition: width 0.3s ease;
        }

        .footer-col:hover .footer-title::after {
          width: 60px;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links li {
          margin-bottom: 15px;
          transition: transform 0.3s ease;
        }

        .footer-links li:hover {
          transform: translateX(5px);
        }

        .footer-links a {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          font-size: 15px;
          transition: color 0.3s ease;
          display: flex;
          align-items: center;
        }

        .footer-links a::before {
          content: "→";
          margin-right: 8px;
          font-size: 14px;
          opacity: 0;
          transition: all 0.3s ease;
          transform: translateX(-10px);
        }

        .footer-links a:hover {
          color: #ff6b00;
        }

        .footer-links a:hover::before {
          opacity: 1;
          transform: translateX(0);
        }

        .newsletter-text {
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 20px;
          font-size: 15px;
          line-height: 1.6;
        }

        .newsletter-form {
          display: flex;
          margin-bottom: 25px;
        }

        .newsletter-form input {
          flex: 1;
          padding: 12px 15px;
          background-color: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #fff;
          border-radius: 6px 0 0 6px;
          font-size: 14px;
          outline: none;
          transition: all 0.3s ease;
        }

        .newsletter-form input:focus {
          border-color: rgba(255, 107, 0, 0.5);
          background-color: rgba(255, 255, 255, 0.08);
        }

        .subscribe-btn {
          background-color: #ff6b00;
          color: #fff;
          border: none;
          padding: 12px 20px;
          border-radius: 0 6px 6px 0;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .subscribe-btn:hover {
          background-color: #ff8b30;
          box-shadow: 0 5px 15px rgba(255, 107, 0, 0.3);
        }

        .footer-contact {
          margin-top: 20px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          margin-bottom: 12px;
          color: rgba(255, 255, 255, 0.7);
          font-size: 14px;
        }

        .contact-icon {
          margin-right: 10px;
          font-size: 18px;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 25px 5%;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          position: relative;
          z-index: 2;
        }

        .copyright {
          color: rgba(255, 255, 255, 0.6);
          font-size: 14px;
        }

        .footer-bottom-links {
          display: flex;
          gap: 20px;
        }

        .footer-bottom-links a {
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          font-size: 14px;
          transition: color 0.3s ease;
        }

        .footer-bottom-links a:hover {
          color: #ff6b00;
        }

        .back-to-top {
          position: relative;
        }

        .top-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: #ff6b00;
          border: none;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 5px 15px rgba(255, 107, 0, 0.3);
          animation: pulse 2s infinite;
        }

        .top-btn:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(255, 107, 0, 0.5);
          animation: none;
        }

        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(255, 107, 0, 0.6);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(255, 107, 0, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(255, 107, 0, 0);
          }
        }

        /* Media Queries for Footer */
        @media (max-width: 1100px) {
          .footer-top {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 30px;
          }
        }

        @media (max-width: 768px) {
          .footer-top {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }

          .brand-col {
            grid-column: span 2;
            max-width: 100%;
          }

          .footer-bottom {
            flex-direction: column;
            gap: 20px;
            text-align: center;
          }

          .footer-bottom-links {
            order: -1;
          }
        }

        @media (max-width: 576px) {
          .footer-top {
            grid-template-columns: 1fr;
          }

          .brand-col {
            grid-column: 1;
          }

          .newsletter-form {
            flex-direction: column;
          }

          .newsletter-form input {
            border-radius: 6px;
            margin-bottom: 10px;
          }

          .subscribe-btn {
            border-radius: 6px;
            width: 100%;
          }

          .footer-bottom-links {
            flex-direction: column;
            gap: 10px;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;
