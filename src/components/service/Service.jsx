import React, { useState, useEffect } from "react";
import {
  Monitor,
  Smartphone,
  Globe,
  ShoppingCart,
  Database,
  Cloud,
  Lock,
  Palette,
  Search,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Users,
  Star,
  Award,
  Zap,
  Shield,
  Target,
} from "lucide-react";
import homeImage1 from "../../assets/linkedin-sales-solutions-I9P9uJ_SFU0-unsplash.jpg";
import homeImage2 from "../../assets/icons8-team-yTwXpLO5HAA-unsplash.jpg";

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      id: 1,
      title: "Web Development",
      icon: <Monitor size={40} />,
      shortDesc:
        "Custom websites and web applications built with modern technologies",
      fullDesc:
        "At ANSLIX IT Services Private Limited, we craft responsive, secure, and scalable websites tailored to your business needs. Our team of expert developers uses the latest technologies to deliver seamless user experiences and high-performance web applications",
      features: [
        "Responsive Design",
        "Modern Frameworks",
        "SEO Optimization",
        "Fast Loading Speed",
        "Cross-browser Compatibility",
        "Content Management Systems",
      ],
      clientsServed: "200+",
      projectsCompleted: "350+",
      satisfactionRate: "98%",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      image: homeImage1,
    },
    {
      id: 2,
      title: "Mobile Development",
      icon: <Smartphone size={40} />,
      shortDesc: "Native and cross-platform mobile apps for iOS and Android",
      fullDesc:
        "Transform your ideas into powerful mobile applications. We develop both native and cross-platform mobile apps that provide seamless user experiences across all devices. From concept to deployment, we handle everything.",
      features: [
        "Native iOS & Android Apps",
        "Cross-platform Solutions",
        "App Store Optimization",
        "Push Notifications",
        "Offline Functionality",
        "Real-time Synchronization",
      ],
      clientsServed: "150+",
      projectsCompleted: "180+",
      satisfactionRate: "97%",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
      image: homeImage2,
    },
    {
      id: 3,
      title: "E-commerce Solutions",
      icon: <ShoppingCart size={40} />,
      shortDesc: "Complete online store solutions with payment integration",
      fullDesc:
        "Launch your online business with our comprehensive e-commerce solutions. We build secure, scalable online stores with integrated payment systems, inventory management, and customer analytics to maximize your sales potential.",
      features: [
        "Payment Gateway Integration",
        "Inventory Management",
        "Customer Analytics",
        "Multi-vendor Support",
        "Mobile Commerce",
        "Security & SSL",
      ],
      clientsServed: "120+",
      projectsCompleted: "140+",
      satisfactionRate: "99%",
      technologies: ["Shopify", "WooCommerce", "Magento", "Custom"],
      image: homeImage1,
    },
    {
      id: 4,
      title: "Cloud Services",
      icon: <Cloud size={40} />,
      shortDesc: "Scalable cloud infrastructure and deployment solutions",
      fullDesc:
        "Leverage the power of cloud computing with our comprehensive cloud services. We help you migrate, deploy, and manage your applications on leading cloud platforms with maximum efficiency and security.",
      features: [
        "Cloud Migration",
        "Auto Scaling",
        "Load Balancing",
        "Backup & Recovery",
        "Monitoring & Analytics",
        "Cost Optimization",
      ],
      clientsServed: "180+",
      projectsCompleted: "250+",
      satisfactionRate: "96%",
      technologies: ["AWS", "Azure", "Google Cloud", "Docker"],
      image: homeImage2,
    },
    {
      id: 5,
      title: "Database Management",
      icon: <Database size={40} />,
      shortDesc: "Robust database design and optimization services",
      fullDesc:
        "Optimize your data management with our expert database services. We design, implement, and maintain robust database systems that ensure data integrity, security, and high performance for your applications.",
      features: [
        "Database Design",
        "Performance Optimization",
        "Data Migration",
        "Backup Strategies",
        "Security Implementation",
        "24/7 Monitoring",
      ],
      clientsServed: "300+",
      projectsCompleted: "400+",
      satisfactionRate: "95%",
      technologies: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
      image: homeImage1,
    },
    {
      id: 6,
      title: "Cybersecurity",
      icon: <Lock size={40} />,
      shortDesc:
        "Comprehensive security solutions to protect your digital assets",
      fullDesc:
        "Protect your business with our advanced cybersecurity solutions. We provide comprehensive security assessments, implement robust protection measures, and ensure your digital assets remain safe from evolving threats.",
      features: [
        "Security Audits",
        "Penetration Testing",
        "Firewall Configuration",
        "Data Encryption",
        "Compliance Management",
        "Incident Response",
      ],
      clientsServed: "90+",
      projectsCompleted: "110+",
      satisfactionRate: "100%",
      technologies: ["Firewall", "SSL/TLS", "VPN", "SIEM"],
      image: homeImage2,
    },
    {
      id: 7,
      title: "UI/UX Design",
      icon: <Palette size={40} />,
      shortDesc: "Beautiful and intuitive user interface and experience design",
      fullDesc:
        "Create exceptional user experiences with our UI/UX design services. We craft beautiful, intuitive interfaces that not only look stunning but also provide seamless user journeys that convert visitors into customers.",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Visual Design",
        "Usability Testing",
        "Design Systems",
      ],
      clientsServed: "220+",
      projectsCompleted: "280+",
      satisfactionRate: "98%",
      technologies: ["Figma", "Adobe XD", "Sketch", "InVision"],
      image: homeImage1,
    },
    {
      id: 8,
      title: "SEO & Digital Marketing",
      icon: <Search size={40} />,
      shortDesc: "Boost your online visibility and drive targeted traffic",
      fullDesc:
        "Increase your online presence with our comprehensive SEO and digital marketing services. We help you rank higher in search results, drive qualified traffic, and convert visitors into loyal customers.",
      features: [
        "Keyword Research",
        "On-page Optimization",
        "Content Marketing",
        "Link Building",
        "Analytics & Reporting",
        "Social Media Marketing",
      ],
      clientsServed: "500+",
      projectsCompleted: "Ongoing",
      satisfactionRate: "94%",
      technologies: ["Google Analytics", "SEMrush", "Ahrefs", "Social Media"],
      image: homeImage2,
    },
  ];

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const handleBackClick = () => {
    setSelectedService(null);
  };

  if (selectedService) {
    return (
      <div className="service-detail">
        <div className="service-detail-container">
          <button className="back-btn" onClick={handleBackClick}>
            <ArrowLeft size={20} />
            Back to Services
          </button>

          <div className="service-detail-content">
            <div className="service-detail-header">
              <div className="service-icon-large">{selectedService.icon}</div>
              <div className="service-header-text">
                <h1>{selectedService.title}</h1>
                <p>{selectedService.shortDesc}</p>
              </div>
            </div>

            <div className="service-detail-grid">
              <div className="service-main-content">
                <div className="service-image">
                  <img
                    src={selectedService.image}
                    alt={selectedService.title}
                  />
                </div>

                <div className="service-description">
                  <h2>About This Service</h2>
                  <p>{selectedService.fullDesc}</p>
                </div>

                <div className="service-features">
                  <h2>What's Included</h2>
                  <div className="features-grid">
                    {selectedService.features.map((feature, index) => (
                      <div key={index} className="feature-item">
                        <CheckCircle size={20} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="service-technologies">
                  <h2>Technologies We Use</h2>
                  <div className="tech-tags">
                    {selectedService.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="service-sidebar">
                <div className="service-info-card">
                  <div className="info-item">
                    <div className="info-icon">
                      <Users size={24} />
                    </div>
                    <div className="info-text">
                      <h4>Clients Served</h4>
                      <p>{selectedService.clientsServed}</p>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon">
                      <Target size={24} />
                    </div>
                    <div className="info-text">
                      <h4>Projects Completed</h4>
                      <p>{selectedService.projectsCompleted}</p>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon">
                      <Star size={24} />
                    </div>
                    <div className="info-text">
                      <h4>Satisfaction Rate</h4>
                      <p>{selectedService.satisfactionRate}</p>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon">
                      <Award size={24} />
                    </div>
                    <div className="info-text">
                      <h4>Experience</h4>
                      <p>5+ Years</p>
                    </div>
                  </div>

                  <button className="cta-btn">
                    Get Started
                    <ArrowRight size={20} />
                  </button>
                </div>

                <div className="contact-card">
                  <h3>Need Custom Solution?</h3>
                  <p>
                    Let's discuss your specific requirements and create a
                    tailored solution just for you.
                  </p>
                  <button className="contact-btn">Contact Us</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .service-detail {
            min-height: 100vh;
            background: linear-gradient(135deg, #081932 0%, #0a1d3a 100%);
            color: #fff;
            padding: 20px 0;
            font-family: "Poppins", sans-serif;
          }

          .service-detail-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
          }

          .back-btn {
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            color: #fff;
            padding: 12px 20px;
            border-radius: 30px;
            display: flex;
            align-items: center;
            gap: 8px;
            cursor: pointer;
            transition: all 0.3s ease;
            margin-bottom: 30px;
            font-size: 14px;
            font-weight: 500;
          }

          .back-btn:hover {
            background: rgba(255, 255, 255, 0.15);
            transform: translateX(-5px);
          }

          .service-detail-header {
            display: flex;
            align-items: center;
            gap: 30px;
            margin-bottom: 50px;
            padding: 30px 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }

          .service-icon-large {
            width: 80px;
            height: 80px;
            background: linear-gradient(135deg, #ff6b00, #ff8b30);
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            box-shadow: 0 10px 30px rgba(255, 107, 0, 0.3);
          }

          .service-header-text h1 {
            font-size: 36px;
            margin-bottom: 10px;
            font-weight: 700;
          }

          .service-header-text p {
            font-size: 18px;
            color: rgba(255, 255, 255, 0.8);
            line-height: 1.6;
          }

          .service-detail-grid {
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 50px;
          }

          .service-main-content {
            display: flex;
            flex-direction: column;
            gap: 40px;
          }

          .service-image {
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          }

          .service-image img {
            width: 100%;
            height: 300px;
            object-fit: cover;
          }

          .service-description h2,
          .service-features h2,
          .service-technologies h2 {
            font-size: 24px;
            margin-bottom: 20px;
            color: #ff6b00;
          }

          .service-description p {
            font-size: 16px;
            line-height: 1.8;
            color: rgba(255, 255, 255, 0.8);
          }

          .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 15px;
          }

          .feature-item {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 15px;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 10px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.3s ease;
          }

          .feature-item:hover {
            background: rgba(255, 255, 255, 0.08);
            transform: translateX(5px);
          }

          .feature-item svg {
            color: #ff6b00;
            flex-shrink: 0;
          }

          .tech-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
          }

          .tech-tag {
            background: linear-gradient(135deg, #ff6b00, #ff8b30);
            color: #fff;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 14px;
            font-weight: 500;
            box-shadow: 0 5px 15px rgba(255, 107, 0, 0.3);
          }

          .service-sidebar {
            display: flex;
            flex-direction: column;
            gap: 30px;
          }

          .service-info-card,
          .contact-card {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            padding: 30px;
            backdrop-filter: blur(10px);
          }

          .info-item {
            display: flex;
            align-items: center;
            gap: 15px;
            margin-bottom: 20px;
            padding-bottom: 15px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }

          .info-item:last-of-type {
            border-bottom: none;
            margin-bottom: 30px;
          }

          .info-icon {
            width: 50px;
            height: 50px;
            background: rgba(255, 107, 0, 0.15);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #ff6b00;
          }

          .info-text h4 {
            font-size: 16px;
            margin-bottom: 5px;
            font-weight: 600;
          }

          .info-text p {
            color: rgba(255, 255, 255, 0.7);
            font-size: 14px;
            font-weight: 600;
          }

          .cta-btn {
            width: 100%;
            background: linear-gradient(135deg, #ff6b00, #ff8b30);
            color: #fff;
            border: none;
            padding: 15px 20px;
            border-radius: 12px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            transition: all 0.3s ease;
            box-shadow: 0 10px 25px rgba(255, 107, 0, 0.3);
          }

          .cta-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 35px rgba(255, 107, 0, 0.4);
          }

          .contact-card h3 {
            font-size: 20px;
            margin-bottom: 15px;
            color: #ff6b00;
          }

          .contact-card p {
            color: rgba(255, 255, 255, 0.7);
            margin-bottom: 20px;
            line-height: 1.6;
          }

          .contact-btn {
            width: 100%;
            background: rgba(255, 255, 255, 0.1);
            color: #fff;
            border: 1px solid rgba(255, 255, 255, 0.2);
            padding: 12px 20px;
            border-radius: 12px;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .contact-btn:hover {
            background: rgba(255, 255, 255, 0.15);
            border-color: rgba(255, 255, 255, 0.3);
          }

          @media (max-width: 1024px) {
            .service-detail-grid {
              grid-template-columns: 1fr;
              gap: 30px;
            }

            .service-sidebar {
              order: -1;
            }
          }

          @media (max-width: 768px) {
            .service-detail-header {
              flex-direction: column;
              text-align: center;
              gap: 20px;
            }

            .service-header-text h1 {
              font-size: 28px;
            }

            .features-grid {
              grid-template-columns: 1fr;
            }

            .service-detail-container {
              padding: 0 15px;
            }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="services-page">
      <div className="services-container">
        <div className={`services-header ${isVisible ? "visible" : ""}`}>
          <h1>Our Services</h1>
          <p>
            We provide comprehensive digital solutions to help your business
            grow and succeed in the modern world
          </p>
        </div>

        <div className={`services-grid ${isVisible ? "visible" : ""}`}>
          {services.map((service, index) => (
            <div
              key={service.id}
              className="service-card"
              onClick={() => handleServiceClick(service)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.shortDesc}</p>
              <div className="service-card-footer">
                <span className="learn-more">
                  Learn More <ArrowRight size={16} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .services-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #081932 0%, #0a1d3a 100%);
          color: #fff;
          padding: 60px 0;
          font-family: "Poppins", sans-serif;
          position: relative;
          overflow: hidden;
        }

        .services-page::before {
          content: "";
          position: absolute;
          top: -50%;
          right: -50%;
          width: 100%;
          height: 100%;
          background: radial-gradient(
            circle,
            rgba(255, 107, 0, 0.05) 0%,
            transparent 50%
          );
          border-radius: 50%;
          pointer-events: none;
          z-index: 1;
        }

        .services-page::after {
          content: "";
          position: absolute;
          bottom: -50%;
          left: -50%;
          width: 100%;
          height: 100%;
          background: radial-gradient(
            circle,
            rgba(30, 144, 255, 0.03) 0%,
            transparent 50%
          );
          border-radius: 50%;
          pointer-events: none;
          z-index: 1;
        }

        .services-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 2;
        }

        .services-header {
          text-align: center;
          margin-bottom: 80px;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }

        .services-header.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .services-header h1 {
          font-size: 48px;
          font-weight: 700;
          margin-bottom: 20px;
          background: linear-gradient(135deg, #fff 0%, #ff6b00 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .services-header p {
          font-size: 18px;
          color: rgba(255, 255, 255, 0.8);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 30px;
          opacity: 0;
          transition: all 0.8s ease-out;
        }

        .services-grid.visible {
          opacity: 1;
        }

        .service-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 40px 30px;
          text-align: center;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(10px);
          opacity: 0;
          transform: translateY(50px);
          animation: slideInUp 0.8s ease-out forwards;
        }

        .service-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            135deg,
            rgba(255, 107, 0, 0.1) 0%,
            transparent 50%
          );
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
        }

        .service-card:hover::before {
          opacity: 1;
        }

        .service-card:hover {
          transform: translateY(-15px);
          border-color: rgba(255, 107, 0, 0.3);
          box-shadow: 0 25px 50px rgba(255, 107, 0, 0.15);
        }

        .service-icon {
          width: 80px;
          height: 80px;
          margin: 0 auto 25px;
          background: linear-gradient(135deg, #ff6b00, #ff8b30);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(255, 107, 0, 0.3);
        }

        .service-card:hover .service-icon {
          transform: scale(1.1) rotate(5deg);
          box-shadow: 0 15px 40px rgba(255, 107, 0, 0.5);
        }

        .service-card h3 {
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 15px;
          color: #fff;
        }

        .service-card p {
          color: rgba(255, 255, 255, 0.7);
          font-size: 16px;
          line-height: 1.6;
          margin-bottom: 30px;
        }

        .service-card-footer {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .learn-more {
          color: #ff6b00;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
          font-size: 16px;
        }

        .service-card:hover .learn-more {
          gap: 12px;
          color: #ff8b30;
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .services-header h1 {
            font-size: 36px;
          }

          .services-header p {
            font-size: 16px;
          }

          .services-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .service-card {
            padding: 30px 20px;
          }

          .services-container {
            padding: 0 15px;
          }
        }

        @media (max-width: 576px) {
          .services-header h1 {
            font-size: 28px;
          }

          .service-icon {
            width: 60px;
            height: 60px;
          }

          .service-card h3 {
            font-size: 20px;
          }

          .service-card p {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
};

export default ServicesPage;
