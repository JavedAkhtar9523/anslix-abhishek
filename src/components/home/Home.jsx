import React, { useState, useEffect } from "react";
import homeImage1 from "../../assets/linkedin-sales-solutions-I9P9uJ_SFU0-unsplash.jpg";
import homeImage2 from "../../assets/icons8-team-yTwXpLO5HAA-unsplash.jpg";
import {
  Code,
  Server,
  Cloud,
  Palette,
  Database,
  TestTube,
  GitBranch,
  Shield,
  Smartphone,
  Globe,
  Zap,
  Users,
  Award,
  ArrowRight,
  ChevronRight,
  Star,
  CheckCircle,
  Target,
  Monitor,
} from "lucide-react";
import "../home/Home.css";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Animation trigger when component mounts
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className={`hero ${isVisible ? "visible" : ""}`}>
        <div className="hero-content">
          <h1 className="hero-title">
            Transforming Ideas into Digital Reality
          </h1>
          <p className="hero-subtitle">
            Leading IT solutions provider specializing in custom software
            development, cloud computing, mobile applications, and digital
            transformation. We deliver cutting-edge technology solutions that
            drive business growth and innovation for enterprises worldwide.
          </p>
          <div className="hero-actions">
            <button className="btn-primary">Our Services</button>
            <button className="btn-secondary">
              Get Started <ChevronRight size={16} />
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-container">
            <div className="floating-elements">
              <div className="float-element planet-1"></div>
              <div className="float-element planet-2"></div>
              <div className="float-element plus"></div>
              <div className="float-element circle"></div>
            </div>
            <div className="students-img">
              <img
                src={homeImage1}
                alt="Technology professionals collaborating"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={`features ${isVisible ? "visible" : ""}`}>
        <div className="feature-container">
          <div className="feature-card">
            <div className="feature-icon orange">
              <Code size={24} />
            </div>
            <h3>Custom Software Development</h3>
            <p>
              Build scalable, robust applications tailored to your business
              needs. From enterprise solutions to startup MVPs, we deliver
              quality software that drives results.
            </p>
            <a href="#" className="read-more">
              Learn More <ArrowRight size={14} />
            </a>
          </div>

          <div className="feature-card">
            <div className="feature-icon orange">
              <Cloud size={24} />
            </div>
            <h3>Cloud Solutions & DevOps</h3>
            <p>
              Modernize your infrastructure with cloud migration,
              containerization, and automated deployment pipelines for improved
              scalability and efficiency.
            </p>
            <a href="#" className="read-more">
              Learn More <ArrowRight size={14} />
            </a>
          </div>

          <div className="feature-card">
            <div className="feature-icon orange">
              <Smartphone size={24} />
            </div>
            <h3>Mobile App Development</h3>
            <p>
              Create engaging mobile experiences for iOS and Android platforms.
              Native and cross-platform solutions that connect with your
              audience.
            </p>
            <a href="#" className="read-more">
              Learn More <ArrowRight size={14} />
            </a>
          </div>

          <div className="feature-card">
            <div className="feature-icon orange">
              <Palette size={24} />
            </div>
            <h3>UI/UX Design & Development</h3>
            <p>
              Design intuitive, user-centered interfaces that enhance user
              experience and drive engagement across all digital touchpoints.
            </p>
            <a href="#" className="read-more">
              Learn More <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className={`community ${isVisible ? "visible" : ""}`}>
        <div className="community-image">
          <img src={homeImage2} alt="Technology team collaboration" />
        </div>
        <div className="community-content">
          <h2>About TechInnovate Solutions</h2>
          <p>
            We are a leading technology company delivering innovative IT
            solutions that transform businesses worldwide. With expertise in
            cutting-edge technologies and a commitment to excellence.
          </p>

          <div className="community-features">
            <div className="community-feature">
              <div className="feature-icon blue">
                <Target size={24} />
              </div>
              <div className="feature-text">
                <h4>Innovation-Driven Approach</h4>
                <p>
                  We leverage the latest technologies including AI, IoT,
                  blockchain, and cloud computing to deliver future-ready
                  solutions that give your business a competitive edge.
                </p>
              </div>
            </div>

            <div className="community-feature">
              <div className="feature-icon blue">
                <CheckCircle size={24} />
              </div>
              <div className="feature-text">
                <h4>Proven Track Record</h4>
                <p>
                  With 500+ successful projects delivered across 30+ countries,
                  we have established ourselves as a trusted technology partner
                  for businesses of all sizes.
                </p>
              </div>
            </div>
          </div>

          <button className="btn-primary">Learn More About Us</button>
        </div>
      </section>

      {/* Topics Section */}
      <section className={`topics ${isVisible ? "visible" : ""}`}>
        <h2 className="section-title-home" style={{ marginBottom: "30px" }}>
          Our Core Expertise
        </h2>

        <div className="topics-grid">
          <div className="topic-card">
            <div className="topic-icon orange">
              <Database size={24} />
            </div>
            <h3>Data Analytics & Business Intelligence</h3>
            <span className="topic-count">
              Transform your data into actionable insights with our
              comprehensive BI solutions. We provide data warehousing,
              analytics, reporting, and machine learning services that help you
              make informed business decisions and gain competitive advantage.
            </span>
          </div>

          <div className="topic-card">
            <div className="topic-icon orange">
              <Globe size={24} />
            </div>
            <h3>Enterprise Web Applications</h3>
            <span className="topic-count">
              Build powerful, scalable web applications that drive your business
              forward. From e-commerce platforms to enterprise portals, we
              create robust solutions using modern frameworks and best practices
              for optimal performance and security.
            </span>
          </div>

          <div className="topic-card">
            <div className="topic-icon orange">
              <Shield size={24} />
            </div>
            <h3>Cybersecurity & Quality Assurance</h3>
            <span className="topic-count">
              Protect your digital assets with our comprehensive security
              solutions and rigorous QA testing. We ensure your applications are
              secure, reliable, and perform flawlessly across all platforms and
              environments.
            </span>
          </div>

          <div className="topic-card">
            <div className="topic-icon orange">
              <Zap size={24} />
            </div>
            <h3>Digital Transformation & Automation</h3>
            <span className="topic-count">
              Modernize your business processes with intelligent automation and
              digital transformation strategies. We help organizations
              streamline operations, improve efficiency, and adapt to the
              digital-first world.
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
