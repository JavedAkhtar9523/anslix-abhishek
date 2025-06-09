import React, { useState, useEffect } from "react";
import homeImage1 from "../../assets/linkedin-sales-solutions-I9P9uJ_SFU0-unsplash.jpg";
import homeImage2 from "../../assets/icons8-team-yTwXpLO5HAA-unsplash.jpg";
import {
  Book,
  Monitor,
  Video,
  Award,
  ArrowRight,
  ChevronRight,
  Star,
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
          <h1 className="hero-title">Empowering Digital Transformation</h1>
          <p className="hero-subtitle">
            We specialize in custom software development, web & mobile app
            solutions, cloud integration, and IT consulting—empowering startups,
            enterprises, and SMEs worldwide with cost-effective, scalable, and
            secure offshore development services from India.
          </p>
          <div className="hero-actions">
            <button className="btn-primary">Read More</button>
            <button className="btn-secondary">
              Find The Solution <ChevronRight size={16} />
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
              <img src={homeImage1} alt="Students collaborating" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={`features ${isVisible ? "visible" : ""}`}>
        <div className="feature-container">
          <div className="feature-card">
            <div className="feature-icon orange">
              <Book size={24} />
            </div>
            <h3>Custom Software Development</h3>
            <p>
              Our custom software development services help clients build and
              integrate....
            </p>
            <a href="#" className="read-more">
              Read More <ArrowRight size={14} />
            </a>
          </div>

          <div className="feature-card">
            <div className="feature-icon orange">
              <Monitor size={24} />
            </div>
            <h3>Agile / DevOps Development</h3>
            <p>
              Agile refers to an iterative approach which focuses on
              collaboration, customer
            </p>
            <a href="#" className="read-more">
              Read More <ArrowRight size={14} />
            </a>
          </div>

          <div className="feature-card">
            <div className="feature-icon orange">
              <Video size={24} />
            </div>
            <h3>Cloud Computing Services</h3>
            <p>
              Our ERP services range from managing the ERP system, upgrades,
              migrations,
            </p>
            <a href="#" className="read-more">
              Read More <ArrowRight size={14} />
            </a>
          </div>

          <div className="feature-card">
            <div className="feature-icon orange">
              <Award size={24} />
            </div>
            <h3>UI/UX Design & Development</h3>
            <p>
              We are specialized in providing custom database solutions that
              support your specific business.
            </p>
            <a href="#" className="read-more">
              Read More <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className={`community ${isVisible ? "visible" : ""}`}>
        <div className="community-image">
          <img src={homeImage2} alt="Learning community" />
        </div>
        <div className="community-content">
          <h2>A few word about us</h2>
          <p>
            We, at ANSLIX IT Services Private Limited, provide software
            consulting and technology services on a global level.
          </p>

          <div className="community-features">
            <div className="community-feature">
              <div className="feature-icon blue">
                <Star size={24} />
              </div>
              <div className="feature-text">
                <h4>Global Technology Partner</h4>
                <p>
                  ANSLIX IT Services Private Limited delivers expert software
                  consulting and end-to-end technology solutions to clients
                  worldwide
                </p>
              </div>
            </div>

            <div className="community-feature">
              <div className="feature-icon blue">
                <Monitor size={24} />
              </div>
              <div className="feature-text">
                <h4>Driven by Innovation</h4>
                <p>
                  We specialize in building scalable, customized software that
                  empowers businesses through digital transformation and
                  innovation
                </p>
              </div>
            </div>
          </div>

          <button className="btn-primary">Discover More</button>
        </div>
      </section>

      {/* Topics Section */}
      <section className={`topics ${isVisible ? "visible" : ""}`}>
        <h2 className="section-title-home" style={{ marginBottom: "30px" }}>
          Services We Provide
        </h2>

        <div className="topics-grid">
          <div className="topic-card">
            <div className="topic-icon orange">
              <Star size={24} />
            </div>
            <h3>DB Modeling/Design & BI/Data Warehousing</h3>
            <span className="topic-count">
              We offer end-to-end BI and DW services – Reporting and Analytics,
              Maintenance and Support. Our services cover Business Intelligence
              road map, data warehousing implementation, analytics, data mining,
              data quality and master data management. Our business
              result-oriented approach ensures return on information.
            </span>
          </div>

          <div className="topic-card">
            <div className="topic-icon orange">
              <Monitor size={24} />
            </div>
            <h3>Custom Software Development</h3>
            <span className="topic-count">
              Our custom software development services help clients build and
              integrate sophisticated business applications and/or websites with
              client server and legacy systems. We create and deploy robust,
              scalable and extensible architectures for use in a wide range of
              industries.Our expertise ensures deliverables on time, of
              excellent quality, and effective in meeting client challenges.
            </span>
          </div>

          <div className="topic-card">
            <div className="topic-icon orange">
              <Video size={24} />
            </div>
            <h3>Independent QA & Testing</h3>
            <span className="topic-count">
              We have a unique combination of software testing and Quality
              Assurance (QA) specialists with proven expertise in testing tools
              and methodologies. Our ISTQB-certified testers will maintain
              constant communication with your development team while testing
              your mobile/desktop application.
            </span>
          </div>

          <div className="topic-card">
            <div className="topic-icon orange">
              <Award size={24} />
            </div>
            <h3>Agile / DevOps</h3>
            <span className="topic-count">
              Agile refers to an iterative approach which focuses on
              collaboration, customer feedback, and small, rapid releases.
              DevOps is considered a practice of bringing development and
              operations teams together. Purpose. Agile helps to manage complex
              projects.
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
