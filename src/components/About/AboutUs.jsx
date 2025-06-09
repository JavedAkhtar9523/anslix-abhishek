import React, { useState, useEffect } from "react";
import {
  Users,
  Target,
  Award,
  Code,
  TrendingUp,
  Globe,
  Star,
  CheckCircle,
  ArrowRight,
  Play,
  Server,
  Shield,
} from "lucide-react";
import teamImage from "../../assets/admin.png";
import homeImage2 from "../../assets/icons8-team-yTwXpLO5HAA-unsplash.jpg";
import homeImage1 from "../../assets/linkedin-sales-solutions-I9P9uJ_SFU0-unsplash.jpg";
import { Twitter, Linkedin } from "lucide-react";

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("mission");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: "200+", label: "Clients Worldwide", icon: Users },
    { number: "50+", label: "Technology Experts", icon: Code },
    { number: "15+", label: "Years Experience", icon: Award },
    { number: "98%", label: "Client Satisfaction", icon: TrendingUp },
  ];

  const values = [
    {
      icon: Target,
      title: "Technical Excellence",
      description:
        "We deliver cutting-edge solutions with robust architecture and clean code that stands the test of time.",
    },
    {
      icon: Server,
      title: "Scalable Solutions",
      description:
        "Building systems that grow with your business, ensuring performance at any scale.",
    },
    {
      icon: Star,
      title: "Innovation & Quality",
      description:
        "Continuous improvement in our technical processes to deliver superior quality products.",
    },
    {
      icon: Shield,
      title: "Security First",
      description:
        "Implementing industry best practices to protect your data and systems from threats.",
    },
  ];

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Chief Executive Officer",
      image: teamImage,
      bio: "15+ years in technology leadership with expertise in digital transformation.",
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      image: teamImage,
      bio: "Expert in cloud architecture and scalable system design with 12 years experience.",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Development",
      image: teamImage,
      bio: "Full-stack development specialist with deep expertise in modern frameworks.",
    },
    {
      name: "David Thompson",
      role: "Head of Client Success",
      image: teamImage,
      bio: "Dedicated to ensuring seamless project delivery and client satisfaction.",
    },
  ];

  const milestones = [
    {
      year: "2010",
      title: "Company Founded",
      description:
        "TechNova Solutions was established with a vision to deliver innovative IT services",
    },
    {
      year: "2013",
      title: "First Enterprise Client",
      description:
        "Secured our first Fortune 500 client, marking our breakthrough",
    },
    {
      year: "2016",
      title: "Cloud Specialization",
      description: "Launched our cloud migration and optimization services",
    },
    {
      year: "2019",
      title: "Global Expansion",
      description:
        "Opened offices in Europe and Asia to serve international clients",
    },
    {
      year: "2022",
      title: "AI/ML Division",
      description: "Established dedicated artificial intelligence practice",
    },
  ];

  return (
    <div className="about-us">
      {/* Hero Section */}
      <section className={`hero-section ${isVisible ? "visible" : ""}`}>
        <div className="hero-content">
          <h1 className="hero-title">About TechNova Solutions</h1>
          <p className="hero-subtitle">
            Driving digital transformation through innovative technology
            solutions and expert consulting services.
          </p>
          <div className="hero-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-icon">
                  <stat.icon size={24} />
                </div>
                <div className="stat-content">
                  <h3>{stat.number}</h3>
                  <p>{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-elements">
            <div className="float-element circle-1"></div>
            <div className="float-element circle-2"></div>
            <div className="float-element plus-1"></div>
            <div className="float-element plus-2"></div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className={`story-section ${isVisible ? "visible" : ""}`}>
        <div className="story-content">
          <div className="story-text">
            <h2>Our Story</h2>
            <p>
              Founded in 2010, TechNova Solutions began as a small team of
              passionate technologists with a vision to bridge the gap between
              business needs and technological innovation. What started as a
              boutique software development firm has grown into a full-service
              IT solutions provider serving clients across multiple industries
              and continents.
            </p>
            <p>
              Over the years, we've evolved alongside the technology landscape,
              continuously expanding our expertise to include cloud computing,
              AI/ML, cybersecurity, and enterprise digital transformation. Our
              commitment to technical excellence and client success has been the
              cornerstone of our growth, earning us long-term partnerships with
              businesses ranging from startups to Fortune 500 companies.
            </p>
            <button className="btn-primary">
              <Play size={16} />
              Watch Our Story
            </button>
          </div>
          <div className="story-image">
            <img src={homeImage1} alt="Our Story" />
            <div className="image-overlay">
              <div className="play-button">
                <Play size={24} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className={`mvv-section ${isVisible ? "visible" : ""}`}>
        <div className="mvv-header">
          <h2>Our Foundation</h2>
          <div className="tab-navigation">
            <button
              className={`tab-btn ${activeTab === "mission" ? "active" : ""}`}
              onClick={() => setActiveTab("mission")}
            >
              Mission
            </button>
            <button
              className={`tab-btn ${activeTab === "vision" ? "active" : ""}`}
              onClick={() => setActiveTab("vision")}
            >
              Vision
            </button>
            <button
              className={`tab-btn ${activeTab === "values" ? "active" : ""}`}
              onClick={() => setActiveTab("values")}
            >
              Values
            </button>
          </div>
        </div>

        <div className="tab-content">
          {activeTab === "mission" && (
            <div className="tab-panel">
              <div className="panel-content">
                <h3>Our Mission</h3>
                <p>
                  To empower businesses through innovative technology solutions
                  that drive efficiency, growth, and competitive advantage. We
                  combine technical expertise with business acumen to deliver
                  transformative results for our clients.
                </p>
                <div className="mission-points">
                  <div className="point">
                    <CheckCircle size={20} />
                    <span>Deliver cutting-edge technical solutions</span>
                  </div>
                  <div className="point">
                    <CheckCircle size={20} />
                    <span>Bridge business needs with technology</span>
                  </div>
                  <div className="point">
                    <CheckCircle size={20} />
                    <span>Ensure measurable business impact</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "vision" && (
            <div className="tab-panel">
              <div className="panel-content">
                <h3>Our Vision</h3>
                <p>
                  To be the most trusted technology partner for businesses
                  worldwide, recognized for our technical excellence, innovative
                  approach, and unwavering commitment to client success in an
                  increasingly digital world.
                </p>
                <div className="vision-goals">
                  <div className="goal">
                    <Globe size={24} />
                    <h4>Global Reach</h4>
                    <p>Serve clients across all major markets</p>
                  </div>
                  <div className="goal">
                    <Code size={24} />
                    <h4>Technical Leadership</h4>
                    <p>Pioneer in emerging technologies</p>
                  </div>
                  <div className="goal">
                    <TrendingUp size={24} />
                    <h4>Sustainable Growth</h4>
                    <p>Deliver consistent value to clients</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "values" && (
            <div className="tab-panel">
              <div className="values-grid">
                {values.map((value, index) => (
                  <div key={index} className="value-card">
                    <div className="value-icon">
                      <value.icon size={24} />
                    </div>
                    <h4>{value.title}</h4>
                    <p>{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Timeline Section */}
      <section className={`timeline-section ${isVisible ? "visible" : ""}`}>
        <h2>Our Journey</h2>
        <div className="timeline">
          {milestones.map((milestone, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-year">{milestone.year}</div>
                <h3>{milestone.title}</h3>
                <p>{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className={`team-section ${isVisible ? "visible" : ""}`}>
        <h2>Meet Our Leadership</h2>
        <p className="team-subtitle">
          Seasoned technology experts driving innovation and client success
        </p>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-image">
                <img src={member.image} alt={member.name} />
                <div className="team-overlay">
                  <div className="social-links">
                    <a href="#" className="social-link">
                      <Linkedin size={18} />
                    </a>
                    <a href="#" className="social-link">
                      <Twitter size={18} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className={`cta-section ${isVisible ? "visible" : ""}`}>
        <div className="cta-content">
          <h2>Ready to Transform Your Business?</h2>
          <p>
            Partner with TechNova Solutions to leverage cutting-edge technology
            for your business growth.
          </p>
          <div className="cta-actions">
            <button className="btn-primary">
              Get Started Today
              <ArrowRight size={16} />
            </button>
            <button className="btn-secondary">Explore Our Services</button>
          </div>
        </div>
      </section>

      {/* CSS remains the same */}
      <style jsx>{`
        .about-us {
          font-family: "Poppins", sans-serif;
          color: #fff;
          background-color: #081932;
          overflow-x: hidden;
        }

        section {
          padding: 80px 5%;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }

        section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .btn-primary {
          background-color: #ff6b00;
          color: white;
          border: none;
          border-radius: 30px;
          padding: 12px 28px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(255, 107, 0, 0.4);
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .btn-primary:hover {
          background-color: #ff8b30;
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(255, 107, 0, 0.6);
        }

        .btn-secondary {
          background-color: transparent;
          color: white;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 30px;
          padding: 10px 24px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-secondary:hover {
          background-color: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.5);
        }

        /* Hero Section */
        .hero-section {
          display: flex;
          align-items: center;
          justify-content: space-between;
          min-height: 70vh;
          position: relative;
          padding: 100px 5% 80px;
        }

        .hero-content {
          flex: 1;
          max-width: 800px;
          z-index: 2;
        }

        .hero-title {
          font-size: 48px;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 20px;
          animation: fadeInUp 0.8s ease-out forwards;
          animation-delay: 0.3s;
          opacity: 0;
        }

        .hero-subtitle {
          font-size: 18px;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 50px;
          line-height: 1.6;
          animation: fadeInUp 0.8s ease-out forwards;
          animation-delay: 0.5s;
          opacity: 0;
        }

        .hero-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 30px;
          animation: fadeInUp 0.8s ease-out forwards;
          animation-delay: 0.7s;
          opacity: 0;
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: 15px;
          background-color: rgba(255, 255, 255, 0.05);
          padding: 20px;
          border-radius: 15px;
          transition: all 0.3s ease;
        }

        .stat-item:hover {
          transform: translateY(-5px);
          background-color: rgba(255, 255, 255, 0.08);
        }

        .stat-icon {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          background-color: rgba(255, 107, 0, 0.15);
          color: #ff6b00;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stat-content h3 {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 5px;
        }

        .stat-content p {
          color: rgba(255, 255, 255, 0.7);
          font-size: 14px;
        }

        .hero-visual {
          flex: 1;
          position: relative;
          height: 400px;
        }

        .floating-elements {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .float-element {
          position: absolute;
          border-radius: 50%;
        }

        .circle-1 {
          width: 80px;
          height: 80px;
          background-color: rgba(255, 107, 0, 0.1);
          top: 20%;
          right: 10%;
          animation: floatElement 8s ease-in-out infinite;
        }

        .circle-2 {
          width: 60px;
          height: 60px;
          background-color: rgba(30, 144, 255, 0.1);
          bottom: 30%;
          right: 30%;
          animation: floatElement 6s ease-in-out infinite;
          animation-delay: 2s;
        }

        .plus-1 {
          width: 30px;
          height: 30px;
          background-color: transparent;
          border: 2px solid rgba(255, 255, 255, 0.2);
          top: 40%;
          left: 20%;
          border-radius: 0;
          transform: rotate(45deg);
          animation: rotate 15s linear infinite;
        }

        .plus-2 {
          width: 20px;
          height: 20px;
          background-color: rgba(255, 107, 0, 0.6);
          bottom: 10%;
          left: 40%;
          animation: floatElement 4s ease-in-out infinite;
          animation-delay: 1s;
        }

        /* Story Section */
        .story-section {
          background: linear-gradient(
            135deg,
            rgba(255, 107, 0, 0.05) 0%,
            transparent 100%
          );
        }

        .story-content {
          display: flex;
          align-items: center;
          gap: 60px;
        }

        .story-text {
          flex: 1;
          max-width: 600px;
        }

        .story-text h2 {
          font-size: 36px;
          margin-bottom: 30px;
          position: relative;
        }

        .story-text h2::after {
          content: "";
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 60px;
          height: 3px;
          background-color: #ff6b00;
        }

        .story-text p {
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 20px;
          font-size: 16px;
          line-height: 1.7;
        }

        .story-image {
          flex: 1;
          position: relative;
          max-width: 500px;
        }

        .story-image img {
          width: 100%;
          height: auto;
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(0, 0, 0, 0.3);
          border-radius: 20px;
          opacity: 0;
          transition: all 0.3s ease;
        }

        .story-image:hover .image-overlay {
          opacity: 1;
        }

        .play-button {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background-color: #ff6b00;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .play-button:hover {
          transform: scale(1.1);
        }

        /* MVV Section */
        .mvv-section {
          background-color: rgba(255, 255, 255, 0.02);
        }

        .mvv-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .mvv-header h2 {
          font-size: 36px;
          margin-bottom: 30px;
        }

        .tab-navigation {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-bottom: 40px;
        }

        .tab-btn {
          background-color: transparent;
          color: rgba(255, 255, 255, 0.7);
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-radius: 30px;
          padding: 12px 30px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .tab-btn.active,
        .tab-btn:hover {
          background-color: #ff6b00;
          color: white;
          border-color: #ff6b00;
        }

        .tab-content {
          max-width: 900px;
          margin: 0 auto;
        }

        .tab-panel {
          animation: fadeInUp 0.5s ease-out;
        }

        .panel-content h3 {
          font-size: 28px;
          margin-bottom: 20px;
          text-align: center;
        }

        .panel-content p {
          color: rgba(255, 255, 255, 0.8);
          font-size: 16px;
          line-height: 1.7;
          text-align: center;
          margin-bottom: 30px;
        }

        .mission-points {
          display: flex;
          justify-content: center;
          gap: 40px;
          flex-wrap: wrap;
        }

        .point {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #ff6b00;
          font-weight: 600;
        }

        .vision-goals {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 30px;
          margin-top: 40px;
        }

        .goal {
          text-align: center;
          padding: 20px;
          background-color: rgba(255, 255, 255, 0.03);
          border-radius: 15px;
        }

        .goal svg {
          color: #ff6b00;
          margin-bottom: 15px;
        }

        .goal h4 {
          font-size: 18px;
          margin-bottom: 10px;
        }

        .goal p {
          color: rgba(255, 255, 255, 0.7);
          font-size: 14px;
          margin: 0;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }

        .value-card {
          background-color: rgba(255, 255, 255, 0.05);
          border-radius: 15px;
          padding: 30px;
          text-align: center;
          transition: all 0.3s ease;
        }

        .value-card:hover {
          transform: translateY(-10px);
          background-color: rgba(255, 255, 255, 0.08);
        }

        .value-icon {
          width: 60px;
          height: 60px;
          border-radius: 12px;
          background-color: rgba(255, 107, 0, 0.15);
          color: #ff6b00;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
        }

        .value-card h4 {
          font-size: 20px;
          margin-bottom: 15px;
        }

        .value-card p {
          color: rgba(255, 255, 255, 0.7);
          font-size: 14px;
          line-height: 1.6;
        }

        /* Timeline Section */
        .timeline-section {
          background: linear-gradient(
            135deg,
            rgba(30, 144, 255, 0.05) 0%,
            transparent 100%
          );
        }

        .timeline-section h2 {
          font-size: 36px;
          text-align: center;
          margin-bottom: 60px;
        }

        .timeline {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
        }

        .timeline::before {
          content: "";
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background-color: rgba(255, 107, 0, 0.3);
          transform: translateX(-50%);
        }

        .timeline-item {
          position: relative;
          margin-bottom: 60px;
          display: flex;
          align-items: center;
        }

        .timeline-item:nth-child(odd) {
          flex-direction: row-reverse;
        }

        .timeline-item:nth-child(odd) .timeline-content {
          text-align: right;
          padding-right: 40px;
        }

        .timeline-item:nth-child(even) .timeline-content {
          text-align: left;
          padding-left: 40px;
        }

        .timeline-marker {
          position: absolute;
          left: 50%;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background-color: #ff6b00;
          transform: translateX(-50%);
          z-index: 2;
          box-shadow: 0 0 0 4px rgba(255, 107, 0, 0.2);
        }

        .timeline-content {
          flex: 1;
          background-color: rgba(255, 255, 255, 0.05);
          border-radius: 15px;
          padding: 20px;
          transition: all 0.3s ease;
        }

        .timeline-content:hover {
          background-color: rgba(255, 255, 255, 0.08);
          transform: translateY(-5px);
        }

        .timeline-year {
          color: #ff6b00;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .timeline-content h3 {
          font-size: 20px;
          margin-bottom: 10px;
        }

        .timeline-content p {
          color: rgba(255, 255, 255, 0.7);
          font-size: 14px;
          line-height: 1.6;
        }

        /* Team Section */
        .team-section {
          background-color: rgba(255, 255, 255, 0.02);
        }

        .team-section h2 {
          font-size: 36px;
          text-align: center;
          margin-bottom: 20px;
        }

        .team-subtitle {
          text-align: center;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 50px;
          font-size: 16px;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
        }

        .team-card {
          background-color: rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          padding: 30px;
          text-align: center;
          transition: all 0.3s ease;
        }

        .team-card:hover {
          transform: translateY(-10px);
          background-color: rgba(255, 255, 255, 0.08);
        }

        .team-image {
          position: relative;
          width: 150px;
          height: 150px;
          margin: 0 auto 20px;
          border-radius: 50%;
          overflow: hidden;
        }

        .team-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .team-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(255, 107, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: all 0.3s ease;
        }

        .team-image:hover .team-overlay {
          opacity: 1;
        }

        .social-links {
          display: flex;
          gap: 15px;
        }

        .social-link {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background-color: white;
          color: #ff6b00;
        }

        .team-info h3 {
          font-size: 22px;
          margin-bottom: 5px;
        }

        .team-role {
          color: #ff6b00;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 15px;
        }

        .team-bio {
          color: rgba(255, 255, 255, 0.7);
          font-size: 14px;
          line-height: 1.6;
        }

        /* CTA Section */
        .cta-section {
          background: linear-gradient(
            135deg,
            rgba(255, 107, 0, 0.1) 0%,
            rgba(30, 144, 255, 0.1) 100%
          );
          text-align: center;
          padding: 100px 5%;
        }

        .cta-content h2 {
          font-size: 36px;
          margin-bottom: 20px;
        }

        .cta-content p {
          color: rgba(255, 255, 255, 0.8);
          font-size: 18px;
          margin-bottom: 40px;
        }

        .cta-actions {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
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

        /* Media Queries */
        @media (max-width: 1200px) {
          .hero-section {
            flex-direction: column;
            text-align: center;
            padding-top: 60px;
          }

          .hero-visual {
            margin-top: 40px;
            height: 300px;
          }

          .story-content {
            flex-direction: column-reverse;
            text-align: center;
          }

          .story-text {
            max-width: 100%;
            margin-top: 40px;
          }
        }

        @media (max-width: 968px) {
          .hero-title {
            font-size: 36px;
          }

          .hero-stats {
            grid-template-columns: repeat(2, 1fr);
          }

          .tab-navigation {
            flex-wrap: wrap;
            gap: 10px;
          }

          .mission-points {
            flex-direction: column;
            align-items: center;
            gap: 20px;
          }

          .timeline::before {
            left: 20px;
          }

          .timeline-item {
            flex-direction: row !important;
            padding-left: 50px;
          }

          .timeline-item .timeline-content {
            text-align: left !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
          }

          .timeline-marker {
            left: 20px !important;
            transform: translateX(-50%);
          }

          .team-grid {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          }
        }

        @media (max-width: 768px) {
          section {
            padding: 60px 5%;
          }

          .hero-title {
            font-size: 28px;
          }

          .hero-subtitle {
            font-size: 16px;
          }

          .hero-stats {
            grid-template-columns: 1fr;
          }

          .stat-item {
            padding: 15px;
          }

          .story-text h2,
          .mvv-header h2,
          .timeline-section h2,
          .team-section h2,
          .cta-content h2 {
            font-size: 28px;
          }

          .tab-btn {
            padding: 10px 20px;
            font-size: 14px;
          }

          .values-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 576px) {
          .hero-section {
            padding: 40px 5% 60px;
          }

          .hero-title {
            font-size: 24px;
          }

          .cta-actions {
            flex-direction: column;
            align-items: center;
          }

          .cta-actions button {
            width: 100%;
            max-width: 300px;
          }

          .team-image {
            width: 120px;
            height: 120px;
          }

          .timeline-item {
            padding-left: 40px;
          }

          .timeline-marker {
            left: 15px !important;
          }

          .timeline::before {
            left: 15px;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutUs;
