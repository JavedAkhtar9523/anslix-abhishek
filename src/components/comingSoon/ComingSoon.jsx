import React, { useState, useEffect } from "react";
import {
  Mail,
  Calendar,
  Rocket,
  Star,
  ArrowRight,
  Code,
  Users,
  Shield,
  Zap,
  Globe,
  Award,
  CheckCircle,
  Phone,
  MapPin,
  Sparkles,
  TrendingUp,
  Target,
} from "lucide-react";

const ComingSoon = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = [];
    for (let i = 0; i < 50; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        speed: Math.random() * 2 + 1,
        delay: Math.random() * 5,
      });
    }
    setParticles(newParticles);
  }, []);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <div className="coming-soon-container">
      {/* Animated Background */}
      <div className="background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>

        {/* Floating Particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.speed + 3}s`,
            }}
          />
        ))}
      </div>

      <div className="content">
        {/* Logo/Brand */}
        <div className="brand">
          <div className="logo-icon">
            <Rocket size={40} />
          </div>
          <h1 className="brand-name">
            Ans<span className="accent">lix</span>
          </h1>
          <div className="company-tagline">
            <span>Innovative IT Solutions</span>
          </div>
        </div>

        {/* Main Heading */}
        <div className="main-content">
          <div className="announcement">
            <Star className="star-icon" size={16} />
            <span>Revolutionary IT Platform Coming Soon</span>
            <Star className="star-icon" size={16} />
          </div>

          <h2 className="main-title">
            We're Building the Future of
            <span className="gradient-text"> Technology</span>
          </h2>

          <p className="subtitle">
            Our expert team is crafting cutting-edge IT solutions that will
            transform how businesses operate. Get ready for innovation,
            efficiency, and excellence like never before!
          </p>

          {/* Animated Stats Section */}
          <div className="stats-showcase">
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon">
                  <TrendingUp size={32} />
                </div>
                <div className="stat-number">500+</div>
                <div className="stat-label">Projects Delivered</div>
                <div className="stat-glow"></div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">
                  <Users size={32} />
                </div>
                <div className="stat-number">200+</div>
                <div className="stat-label">Happy Clients</div>
                <div className="stat-glow"></div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">
                  <Award size={32} />
                </div>
                <div className="stat-number">10+</div>
                <div className="stat-label">Years Experience</div>
                <div className="stat-glow"></div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">
                  <Target size={32} />
                </div>
                <div className="stat-number">99%</div>
                <div className="stat-label">Success Rate</div>
                <div className="stat-glow"></div>
              </div>
            </div>

            {/* Animated Progress Bars */}
            <div className="progress-section">
              <h3 className="progress-title">
                <Sparkles size={20} />
                Our Expertise Levels
              </h3>
              <div className="progress-bars">
                <div className="progress-item">
                  <div className="progress-label">
                    <span>Web Development</span>
                    <span>95%</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: "95%", animationDelay: "0.5s" }}
                    ></div>
                  </div>
                </div>
                <div className="progress-item">
                  <div className="progress-label">
                    <span>Mobile Apps</span>
                    <span>90%</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: "90%", animationDelay: "1s" }}
                    ></div>
                  </div>
                </div>
                <div className="progress-item">
                  <div className="progress-label">
                    <span>Cloud Solutions</span>
                    <span>88%</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: "88%", animationDelay: "1.5s" }}
                    ></div>
                  </div>
                </div>
                <div className="progress-item">
                  <div className="progress-label">
                    <span>AI & ML</span>
                    <span>85%</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: "85%", animationDelay: "2s" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services Preview */}
          <div className="services-section">
            <h3 className="section-title">Our Expertise</h3>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">
                  <Code size={32} />
                </div>
                <h4>Software Development</h4>
                <p>
                  Custom web & mobile applications built with latest
                  technologies
                </p>
              </div>
              <div className="service-card">
                <div className="service-icon">
                  <Globe size={32} />
                </div>
                <h4>Cloud Solutions</h4>
                <p>Scalable cloud infrastructure and migration services</p>
              </div>
              <div className="service-card">
                <div className="service-icon">
                  <Shield size={32} />
                </div>
                <h4>Cybersecurity</h4>
                <p>Advanced security solutions to protect your business</p>
              </div>
              <div className="service-card">
                <div className="service-icon">
                  <Zap size={32} />
                </div>
                <h4>Digital Transformation</h4>
                <p>Modernize your business processes with AI & automation</p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="why-choose-section">
            <h3 className="section-title">Why Choose Anslix?</h3>
            <div className="features-grid">
              <div className="feature-item">
                <CheckCircle className="check-icon" size={20} />
                <span>10+ Years of Industry Experience</span>
              </div>
              <div className="feature-item">
                <CheckCircle className="check-icon" size={20} />
                <span>100+ Successful Projects Delivered</span>
              </div>
              <div className="feature-item">
                <CheckCircle className="check-icon" size={20} />
                <span>24/7 Technical Support</span>
              </div>
              <div className="feature-item">
                <CheckCircle className="check-icon" size={20} />
                <span>Certified IT Professionals</span>
              </div>
              <div className="feature-item">
                <CheckCircle className="check-icon" size={20} />
                <span>Agile Development Methodology</span>
              </div>
              <div className="feature-item">
                <CheckCircle className="check-icon" size={20} />
                <span>Cost-Effective Solutions</span>
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div className="tech-section">
            <h3 className="section-title">Technologies We Master</h3>
            <div className="tech-grid">
              <div className="tech-item">React</div>
              <div className="tech-item">Node.js</div>
              <div className="tech-item">Python</div>
              <div className="tech-item">AWS</div>
              <div className="tech-item">Docker</div>
              <div className="tech-item">MongoDB</div>
              <div className="tech-item">TypeScript</div>
              <div className="tech-item">Kubernetes</div>
            </div>
          </div>

          {/* Email Subscription */}
          <div className="subscription-section">
            <div className="subscription-header">
              <Calendar size={20} />
              <span>Be the first to experience our innovative solutions!</span>
            </div>

            <div className="email-form">
              <div className="input-group">
                <Mail className="input-icon" size={20} />
                <input
                  type="email"
                  placeholder="Enter your business email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="email-input"
                  onKeyPress={(e) => e.key === "Enter" && handleEmailSubmit(e)}
                />
                <button
                  onClick={handleEmailSubmit}
                  className={`submit-btn ${isSubscribed ? "success" : ""}`}
                  disabled={isSubscribed}
                >
                  {isSubscribed ? (
                    <span>✓ Subscribed!</span>
                  ) : (
                    <>
                      <span>Get Early Access</span>
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="contact-section">
            <h3 className="section-title">Get In Touch</h3>
            <div className="contact-info">
              <div className="contact-item">
                <Phone size={20} />
                <span>+91-XXXX-XXXXXX</span>
              </div>
              <div className="contact-item">
                <Mail size={20} />
                <span>info@anslix.com</span>
              </div>
              <div className="contact-item">
                <MapPin size={20} />
                <span>Patna, Bihar, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .coming-soon-container {
          min-height: 100vh;
          background: linear-gradient(
            135deg,
            #0a0e27 0%,
            #1a1b3a 50%,
            #2d1b69 100%
          );
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(40px);
          opacity: 0.7;
          animation: float 6s ease-in-out infinite;
        }

        .orb-1 {
          width: 300px;
          height: 300px;
          background: linear-gradient(45deg, #ff6b00, #ff8b30);
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }

        .orb-2 {
          width: 250px;
          height: 250px;
          background: linear-gradient(45deg, #4f46e5, #7c3aed);
          top: 60%;
          right: 10%;
          animation-delay: 2s;
        }

        .orb-3 {
          width: 200px;
          height: 200px;
          background: linear-gradient(45deg, #06b6d4, #3b82f6);
          bottom: 20%;
          left: 50%;
          animation-delay: 4s;
        }

        .particle {
          position: absolute;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 50%;
          animation: particle-float 5s ease-in-out infinite;
        }

        .content {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 1200px;
          padding: 40px 20px;
          color: white;
        }

        .brand {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 15px;
          margin-bottom: 60px;
          animation: slideDown 1s ease-out;
        }

        .logo-icon {
          background: linear-gradient(45deg, #ff6b00, #ff8b30);
          padding: 15px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 30px rgba(255, 107, 0, 0.3);
          animation: rotate 3s linear infinite;
        }

        .brand-name {
          font-size: 2.5rem;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .accent {
          color: #ff6b00;
        }

        .company-tagline {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          padding: 8px 20px;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.8);
        }

        .main-content {
          animation: fadeInUp 1s ease-out 0.3s both;
        }

        .announcement {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50px;
          padding: 10px 25px;
          margin-bottom: 30px;
          display: inline-flex;
          font-size: 0.9rem;
          animation: pulse 2s ease-in-out infinite;
        }

        .star-icon {
          color: #fbbf24;
          animation: twinkle 2s ease-in-out infinite;
        }

        .main-title {
          font-size: 3.5rem;
          font-weight: 900;
          line-height: 1.2;
          margin-bottom: 20px;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        .gradient-text {
          background: linear-gradient(45deg, #ff6b00, #ff8b30, #fbbf24);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient-shift 3s ease-in-out infinite;
        }

        .subtitle {
          font-size: 1.2rem;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 50px;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        /* Stats Showcase Styles */
        .stats-showcase {
          margin-bottom: 80px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 30px;
          margin-bottom: 60px;
        }

        .stat-card {
          position: relative;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 25px;
          padding: 30px 20px;
          text-align: center;
          transition: all 0.3s ease;
          animation: fadeInUp 1s ease-out;
          overflow: hidden;
        }

        .stat-card:hover {
          transform: translateY(-10px) scale(1.02);
          background: rgba(255, 255, 255, 0.1);
          box-shadow: 0 25px 50px rgba(255, 107, 0, 0.2);
        }

        .stat-card:hover .stat-glow {
          opacity: 1;
          transform: scale(1.2);
        }

        .stat-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100px;
          height: 100px;
          background: radial-gradient(
            circle,
            rgba(255, 107, 0, 0.3) 0%,
            transparent 70%
          );
          border-radius: 50%;
          transform: translate(-50%, -50%) scale(0.8);
          opacity: 0;
          transition: all 0.5s ease;
          z-index: -1;
        }

        .stat-icon {
          color: #ff6b00;
          margin-bottom: 15px;
          animation: bounceIn 1s ease-out;
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 900;
          color: #ff6b00;
          margin-bottom: 10px;
          text-shadow: 0 0 20px rgba(255, 107, 0, 0.3);
          animation: countUp 2s ease-out;
        }

        .stat-label {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.7);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Progress Section Styles */
        .progress-section {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 25px;
          padding: 40px;
          max-width: 600px;
          margin: 0 auto;
        }

        .progress-title {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-size: 1.3rem;
          font-weight: 600;
          color: #ff6b00;
          margin-bottom: 30px;
          text-shadow: 0 0 10px rgba(255, 107, 0, 0.3);
        }

        .progress-bars {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .progress-item {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .progress-label {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.8);
          font-weight: 500;
        }

        .progress-bar {
          height: 8px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          overflow: hidden;
          position: relative;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #ff6b00, #ff8b30, #fbbf24);
          border-radius: 10px;
          position: relative;
          animation: progressFill 2s ease-out forwards;
          transform-origin: left;
          transform: scaleX(0);
        }

        .progress-fill::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
          );
          animation: progressShine 2s ease-in-out infinite;
        }

        .section-title {
          font-size: 2.2rem;
          font-weight: 700;
          margin-bottom: 40px;
          color: #ff6b00;
          text-shadow: 0 0 20px rgba(255, 107, 0, 0.3);
        }

        .services-section {
          margin-bottom: 80px;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          margin-bottom: 20px;
        }

        .service-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 30px;
          text-align: center;
          transition: all 0.3s ease;
          animation: fadeInUp 1s ease-out;
        }

        .service-card:hover {
          transform: translateY(-10px);
          background: rgba(255, 255, 255, 0.1);
          box-shadow: 0 20px 40px rgba(255, 107, 0, 0.2);
        }

        .service-icon {
          background: linear-gradient(45deg, #ff6b00, #ff8b30);
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          color: white;
          box-shadow: 0 10px 30px rgba(255, 107, 0, 0.3);
        }

        .service-card h4 {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 15px;
          color: white;
        }

        .service-card p {
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
        }

        .why-choose-section {
          margin-bottom: 80px;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
          max-width: 800px;
          margin: 0 auto;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 15px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          padding: 20px;
          transition: all 0.3s ease;
          text-align: left;
        }

        .feature-item:hover {
          transform: translateY(-3px);
          background: rgba(255, 255, 255, 0.1);
        }

        .check-icon {
          color: #10b981;
          flex-shrink: 0;
        }

        .tech-section {
          margin-bottom: 80px;
        }

        .tech-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 15px;
          max-width: 600px;
          margin: 0 auto;
        }

        .tech-item {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 25px;
          padding: 10px 20px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.9);
          transition: all 0.3s ease;
        }

        .tech-item:hover {
          background: rgba(255, 107, 0, 0.2);
          border-color: #ff6b00;
          color: #ff6b00;
        }

        .subscription-section {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 25px;
          padding: 40px;
          margin-bottom: 60px;
        }

        .subscription-header {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-bottom: 25px;
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.9);
        }

        .email-form {
          max-width: 500px;
          margin: 0 auto;
        }

        .input-group {
          display: flex;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50px;
          padding: 5px;
          align-items: center;
          transition: all 0.3s ease;
        }

        .input-group:focus-within {
          border-color: #ff6b00;
          box-shadow: 0 0 20px rgba(255, 107, 0, 0.3);
        }

        .input-icon {
          margin-left: 20px;
          color: rgba(255, 255, 255, 0.6);
        }

        .email-input {
          flex: 1;
          background: none;
          border: none;
          padding: 15px 20px;
          color: white;
          font-size: 1rem;
          outline: none;
        }

        .email-input::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }

        .submit-btn {
          background: linear-gradient(45deg, #ff6b00, #ff8b30);
          border: none;
          border-radius: 50px;
          padding: 15px 30px;
          color: white;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(255, 107, 0, 0.4);
        }

        .submit-btn.success {
          background: linear-gradient(45deg, #10b981, #059669);
        }

        .contact-section {
          margin-bottom: 40px;
        }

        .contact-info {
          display: flex;
          justify-content: center;
          gap: 40px;
          flex-wrap: wrap;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 10px;
          color: rgba(255, 255, 255, 0.8);
          font-size: 1rem;
        }

        /* Animations */
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes particle-float {
          0%,
          100% {
            transform: translateY(0px) opacity(0.8);
          }
          50% {
            transform: translateY(-100px) opacity(0.2);
          }
        }

        @keyframes slideDown {
          from {
            transform: translateY(-50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

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

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes twinkle {
          0%,
          100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.2);
          }
        }

        @keyframes gradient-shift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes bounceIn {
          0% {
            transform: scale(0.8);
            opacity: 0;
          }
          50% {
            transform: scale(1.1);
            opacity: 1;
          }
          100% {
            transform: scale(1);
          }
        }

        @keyframes countUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes progressFill {
          to {
            transform: scaleX(1);
          }
        }

        @keyframes progressShine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .main-title {
            font-size: 2.5rem;
          }

          .brand-name {
            font-size: 2rem;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }

          .progress-section {
            padding: 30px 20px;
          }

          .subscription-section {
            padding: 30px 20px;
          }

          .input-group {
            flex-direction: column;
            border-radius: 20px;
            gap: 10px;
          }

          .submit-btn {
            width: 100%;
            justify-content: center;
            border-radius: 20px;
          }

          .services-grid {
            grid-template-columns: 1fr;
          }

          .features-grid {
            grid-template-columns: 1fr;
          }

          .contact-info {
            flex-direction: column;
            gap: 20px;
          }

          .section-title {
            font-size: 1.8rem;
          }
        }

        @media (max-width: 480px) {
          .content {
            padding: 20px 15px;
          }

          .main-title {
            font-size: 2rem;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .orb-1,
          .orb-2,
          .orb-3 {
            width: 150px;
            height: 150px;
          }

          .service-card {
            padding: 25px;
          }

          .service-icon {
            width: 60px;
            height: 60px;
          }

          .progress-title {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default ComingSoon;
