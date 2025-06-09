import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  User,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  X,
} from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const showNotification = (type, message) => {
    setNotification({ type, message });
    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace with your actual backend URL
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        showNotification("success", data.message);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        showNotification("error", data.message || "Something went wrong!");
      }
    } catch (error) {
      console.error("Error:", error);
      showNotification(
        "error",
        "Network error. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeNotification = () => {
    setNotification(null);
  };

  return (
    <div className="contact-page">
      {/* Notification */}
      {notification && (
        <div className={`notification ${notification.type}`}>
          <div className="notification-content">
            {notification.type === "success" ? (
              <CheckCircle size={24} />
            ) : (
              <AlertCircle size={24} />
            )}
            <span>{notification.message}</span>
            <button onClick={closeNotification} className="close-btn">
              <X size={20} />
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-content">
          <h1 className="hero-title-contact">Get In Touch</h1>
          <p className="hero-subtitle">
            Have questions about our courses or need guidance? We're here to
            help you on your learning journey.
          </p>
        </div>
        <div className="floating-elements">
          <div className="float-element circle-1"></div>
          <div className="float-element circle-2"></div>
          <div className="float-element plus-1"></div>
          <div className="float-element plus-2"></div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info">
              <h2 className="section-title">Let's Start a Conversation</h2>
              <p className="section-subtitle">
                Ready to transform your future through learning? Reach out to us
                and let's discuss how we can help you achieve your educational
                goals.
              </p>

              <div className="contact-cards">
                <div className="contact-card">
                  <div className="card-icon">
                    <Mail size={24} />
                  </div>
                  <div className="card-content">
                    <h3>Email Us</h3>
                    <p>support@anslix.com</p>
                    <p>info@anslix.com</p>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="card-icon">
                    <Phone size={24} />
                  </div>
                  <div className="card-content">
                    <h3>Call Us</h3>
                    <p>(+91) 9131890800</p>
                    <p>(+91) 8358909154</p>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="card-icon">
                    <MapPin size={24} />
                  </div>
                  <div className="card-content">
                    <h3>Visit Us</h3>
                    <p>123 Education Street</p>
                    <p>Learning City, LC 12345</p>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="card-icon">
                    <Clock size={24} />
                  </div>
                  <div className="card-content">
                    <h3>Office Hours</h3>
                    <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                    <p>Sat - Sun: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="social-section">
                <h3>Connect With Us</h3>
                <div className="social-icons">
                  <a href="#" className="social-icon">
                    <div className="icon-circle">
                      <span className="icon">fb</span>
                    </div>
                  </a>
                  <a href="#" className="social-icon">
                    <div className="icon-circle">
                      <span className="icon">tw</span>
                    </div>
                  </a>
                  <a href="#" className="social-icon">
                    <div className="icon-circle">
                      <span className="icon">in</span>
                    </div>
                  </a>
                  <a href="#" className="social-icon">
                    <div className="icon-circle">
                      <span className="icon">ig</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-section">
              <div className="form-container">
                <h2 className="form-title">Send Us a Message</h2>
                <p className="form-subtitle">
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </p>

                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name</label>
                      <div className="input-wrapper">
                        <User className="input-icon" size={20} />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <div className="input-wrapper">
                        <Mail className="input-icon" size={20} />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email address"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <div className="input-wrapper">
                      <MessageSquare className="input-icon" size={20} />
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What's this about?"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us more about your inquiry..."
                      rows="6"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className={`submit-btn ${isSubmitting ? "submitting" : ""}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="spinner"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How quickly will I receive a response?</h3>
              <p>
                We typically respond to all inquiries within 24 hours during
                business days.
              </p>
            </div>
            <div className="faq-item">
              <h3>Can I schedule a consultation call?</h3>
              <p>
                Yes! Contact us to schedule a free consultation about our
                courses and programs.
              </p>
            </div>
            <div className="faq-item">
              <h3>Do you offer technical support?</h3>
              <p>
                We provide full technical support for all our students
                throughout their learning journey.
              </p>
            </div>
            <div className="faq-item">
              <h3>What if I need help choosing a course?</h3>
              <p>
                Our education consultants are here to help you find the perfect
                course for your goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .contact-page {
          font-family: "Poppins", sans-serif;
          color: #fff;
          background-color: #081932;
          min-height: 100vh;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 5%;
        }

        /* Notification Styles */
        .notification {
          position: fixed;
          top: 20px;
          right: 20px;
          z-index: 1000;
          border-radius: 12px;
          padding: 16px 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(10px);
          animation: slideIn 0.3s ease-out;
          max-width: 400px;
        }

        .notification.success {
          background: rgba(34, 197, 94, 0.95);
          border: 1px solid rgba(34, 197, 94, 0.3);
          color: white;
        }

        .notification.error {
          background: rgba(239, 68, 68, 0.95);
          border: 1px solid rgba(239, 68, 68, 0.3);
          color: white;
        }

        .notification-content {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .close-btn {
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          padding: 4px;
          border-radius: 4px;
          transition: background-color 0.2s;
        }

        .close-btn:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        /* Hero Section */
        .contact-hero {
          position: relative;
          background: linear-gradient(135deg, #081932 0%, #0a2040 100%);
          padding: 80px 5% 60px;
          text-align: center;
          overflow: hidden;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 600px;
          margin: 0 auto;
        }

        .hero-title-contact {
          font-size: 48px;
          font-weight: 700;
          margin-bottom: 20px;
          background: linear-gradient(135deg, #fff 0%, #ff6b00 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: fadeInUp 0.8s ease-out;
        }

        .hero-subtitle {
          font-size: 18px;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          animation: fadeInUp 0.8s ease-out 0.2s both;
        }

        .floating-elements {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .float-element {
          position: absolute;
          border-radius: 50%;
        }

        .circle-1 {
          width: 80px;
          height: 80px;
          background: rgba(255, 107, 0, 0.1);
          top: 20%;
          right: 10%;
          animation: floatElement 8s ease-in-out infinite;
        }

        .circle-2 {
          width: 60px;
          height: 60px;
          background: rgba(30, 144, 255, 0.1);
          bottom: 30%;
          left: 15%;
          animation: floatElement 6s ease-in-out infinite 2s;
        }

        .plus-1 {
          width: 40px;
          height: 40px;
          background: transparent;
          border: 2px solid rgba(255, 255, 255, 0.2);
          top: 60%;
          right: 20%;
          border-radius: 0;
          transform: rotate(45deg);
          animation: rotate 15s linear infinite;
        }

        .plus-2 {
          width: 30px;
          height: 30px;
          background: rgba(255, 107, 0, 0.6);
          bottom: 20%;
          right: 40%;
          animation: floatElement 4s ease-in-out infinite 1s;
        }

        /* Contact Content */
        .contact-content {
          padding: 80px 0;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }

        /* Contact Info */
        .contact-info {
          animation: fadeInLeft 0.8s ease-out;
        }

        .section-title {
          font-size: 36px;
          font-weight: 700;
          margin-bottom: 20px;
          position: relative;
        }

        .section-title::after {
          content: "";
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 60px;
          height: 3px;
          background-color: #ff6b00;
        }

        .section-subtitle {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          margin-bottom: 40px;
        }

        .contact-cards {
          display: grid;
          gap: 25px;
          margin-bottom: 50px;
        }

        .contact-card {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          background: rgba(255, 255, 255, 0.05);
          padding: 25px;
          border-radius: 15px;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .contact-card:hover {
          background: rgba(255, 255, 255, 0.08);
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .card-icon {
          width: 50px;
          height: 50px;
          background: rgba(255, 107, 0, 0.15);
          color: #ff6b00;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .card-content h3 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .card-content p {
          color: rgba(255, 255, 255, 0.7);
          font-size: 14px;
          margin-bottom: 4px;
        }

        .social-section {
          background: rgba(255, 255, 255, 0.05);
          padding: 30px;
          border-radius: 15px;
          text-align: center;
        }

        .social-section h3 {
          font-size: 20px;
          margin-bottom: 20px;
        }

        .social-icons {
          display: flex;
          justify-content: center;
          gap: 15px;
        }

        .social-icon {
          text-decoration: none;
        }

        .icon-circle {
          width: 45px;
          height: 45px;
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

        /* Contact Form */
        .contact-form-section {
          animation: fadeInRight 0.8s ease-out;
        }

        .form-container {
          background: rgba(255, 255, 255, 0.05);
          padding: 40px;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
        }

        .form-title {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 10px;
          text-align: center;
        }

        .form-subtitle {
          color: rgba(255, 255, 255, 0.7);
          text-align: center;
          margin-bottom: 30px;
          font-size: 16px;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-group label {
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 8px;
          color: rgba(255, 255, 255, 0.9);
        }

        .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .input-icon {
          position: absolute;
          left: 15px;
          color: rgba(255, 255, 255, 0.5);
          z-index: 1;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 15px 15px 15px 50px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 10px;
          color: #fff;
          font-size: 16px;
          transition: all 0.3s ease;
          outline: none;
        }

        .form-group textarea {
          padding-left: 15px;
          resize: vertical;
          font-family: inherit;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          border-color: #ff6b00;
          background: rgba(255, 255, 255, 0.12);
          box-shadow: 0 0 0 3px rgba(255, 107, 0, 0.1);
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }

        .submit-btn {
          background: linear-gradient(135deg, #ff6b00 0%, #ff8b30 100%);
          color: white;
          border: none;
          border-radius: 12px;
          padding: 15px 30px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          box-shadow: 0 5px 20px rgba(255, 107, 0, 0.3);
          position: relative;
          overflow: hidden;
        }

        .submit-btn:hover:not(:disabled) {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(255, 107, 0, 0.5);
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .submit-btn.submitting::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          animation: shimmer 1.5s infinite;
        }

        .spinner {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top: 2px solid #fff;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        /* FAQ Section */
        .faq-section {
          background: rgba(255, 255, 255, 0.02);
          padding: 80px 0;
        }

        .faq-section .section-title {
          text-align: center;
          margin-bottom: 50px;
        }

        .faq-section .section-title::after {
          left: 50%;
          transform: translateX(-50%);
        }

        .faq-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }

        .faq-item {
          background: rgba(255, 255, 255, 0.05);
          padding: 30px;
          border-radius: 15px;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .faq-item:hover {
          background: rgba(255, 255, 255, 0.08);
          transform: translateY(-5px);
        }

        .faq-item h3 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 15px;
          color: #ff6b00;
        }

        .faq-item p {
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          font-size: 14px;
        }

        /* Animations */
        @keyframes fadeInUp {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fadeInLeft {
          from {
            transform: translateX(-30px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes fadeInRight {
          from {
            transform: translateX(30px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes floatElement {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(10px, -10px);
          }
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes shimmer {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }

        /* Responsive Design */
        @media (max-width: 1100px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }
        }

        @media (max-width: 768px) {
          .hero-title-contact {
            font-size: 36px;
          }

          .section-title {
            font-size: 28px;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .form-container {
            padding: 30px 20px;
          }

          .contact-content {
            padding: 60px 0;
          }

          .contact-hero {
            padding: 60px 5% 40px;
          }

          .notification {
            top: 10px;
            right: 10px;
            left: 10px;
            max-width: none;
          }
        }

        @media (max-width: 576px) {
          .hero-title-contact {
            font-size: 28px;
          }

          .section-title {
            font-size: 24px;
          }

          .contact-cards {
            gap: 20px;
          }

          .contact-card {
            padding: 20px;
          }

          .form-container {
            padding: 25px 15px;
          }

          .faq-grid {
            grid-template-columns: 1fr;
          }

          .social-icons {
            flex-wrap: wrap;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactPage;
