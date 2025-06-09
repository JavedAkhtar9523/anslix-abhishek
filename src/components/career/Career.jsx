import React, { useState, useEffect } from "react";
import {
  MapPin,
  Clock,
  Users,
  TrendingUp,
  Award,
  Heart,
  Coffee,
  Briefcase,
  ChevronRight,
  Search,
  Filter,
  Globe,
  Calendar,
  DollarSign,
  Star,
} from "lucide-react";

const CareerPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const jobCategories = [
    { id: "all", name: "All Positions", count: 12 },
    { id: "engineering", name: "Engineering", count: 5 },
    { id: "design", name: "Design", count: 3 },
    { id: "marketing", name: "Marketing", count: 2 },
    { id: "education", name: "Education", count: 2 },
  ];

  const jobListings = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Remote / New York",
      type: "Full-time",
      experience: "5+ years",
      salary: "$120k - $150k",
      category: "engineering",
      tags: ["React", "Node.js", "AWS", "MongoDB"],
      description:
        "Join our engineering team to build cutting-edge educational platforms that impact millions of learners worldwide.",
    },
    {
      id: 2,
      title: "UX/UI Designer",
      department: "Design",
      location: "San Francisco / Remote",
      type: "Full-time",
      experience: "3+ years",
      salary: "$90k - $120k",
      category: "design",
      tags: ["Figma", "Adobe Creative", "Prototyping", "User Research"],
      description:
        "Create beautiful, intuitive learning experiences that make education accessible and engaging for everyone.",
    },
    {
      id: 3,
      title: "Digital Marketing Manager",
      department: "Marketing",
      location: "Chicago / Hybrid",
      type: "Full-time",
      experience: "4+ years",
      salary: "$80k - $100k",
      category: "marketing",
      tags: ["SEO", "Content Marketing", "Analytics", "Social Media"],
      description:
        "Drive growth and engagement through innovative marketing strategies in the education technology space.",
    },
    {
      id: 4,
      title: "Course Content Developer",
      department: "Education",
      location: "Remote",
      type: "Full-time",
      experience: "2+ years",
      salary: "$60k - $80k",
      category: "education",
      tags: [
        "Curriculum Design",
        "Video Production",
        "Learning Design",
        "Assessment",
      ],
      description:
        "Develop world-class educational content that transforms how students learn and achieve their goals.",
    },
    {
      id: 5,
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Austin / Remote",
      type: "Full-time",
      experience: "4+ years",
      salary: "$110k - $140k",
      category: "engineering",
      tags: ["AWS", "Docker", "Kubernetes", "CI/CD"],
      description:
        "Build and maintain scalable infrastructure that supports millions of students in their learning journey.",
    },
    {
      id: 6,
      title: "Product Designer",
      department: "Design",
      location: "Seattle / Remote",
      type: "Full-time",
      experience: "3+ years",
      salary: "$95k - $125k",
      category: "design",
      tags: [
        "Product Design",
        "User Testing",
        "Design Systems",
        "Collaboration",
      ],
      description:
        "Shape the future of online education through thoughtful product design and user-centered thinking.",
    },
  ];

  const benefits = [
    {
      icon: <Heart size={24} />,
      title: "Health & Wellness",
      description:
        "Comprehensive health insurance, dental, vision, and mental health support",
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Growth & Development",
      description:
        "Learning stipend, conference attendance, and career advancement opportunities",
    },
    {
      icon: <Coffee size={24} />,
      title: "Work-Life Balance",
      description: "Flexible hours, unlimited PTO, and remote work options",
    },
    {
      icon: <Award size={24} />,
      title: "Recognition & Rewards",
      description:
        "Performance bonuses, equity options, and peer recognition programs",
    },
  ];

  const companyStats = [
    { number: "500K+", label: "Students Served" },
    { number: "50+", label: "Team Members" },
    { number: "15+", label: "Countries" },
    { number: "4.8/5", label: "Employee Rating" },
  ];

  const filteredJobs = jobListings.filter((job) => {
    const matchesFilter =
      activeFilter === "all" || job.category === activeFilter;
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.department.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="career-page">
      {/* Hero Section */}
      <section className={`career-hero ${isVisible ? "visible" : ""}`}>
        <div className="hero-content">
          <div className="hero-badge">
            <span>🚀 We're Hiring</span>
          </div>
          <h1 className="hero-title">
            Join Our Mission to Transform
            <span className="accent">Build the Future. Grow With Us</span>
          </h1>
          <p className="hero-subtitle">
            ANSLIX IT Services Private Limited, we don’t just build software —
            we build careers. We believe that our greatest strength lies in our
            people. That’s why we’re always on the lookout for passionate,
            driven, and innovative individuals ready to make a real impact
          </p>
          <div className="hero-stats">
            {companyStats.map((stat, index) => (
              <div key={index} className="stat-item">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
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

      {/* Values Section */}
      <section className={`values-section ${isVisible ? "visible" : ""}`}>
        <div className="section-content">
          <h2 className="section-title">Why Work With Us</h2>
          <div className="values-grid">
            <div className="value-card main-card">
              <div className="value-icon">
                <Globe size={32} />
              </div>
              <h3>Global Impact</h3>
              <p>
                Your work directly impacts millions of learners worldwide,
                helping them achieve their dreams and build better futures.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <Users size={24} />
              </div>
              <h4>Collaborative Culture</h4>
              <p>
                Work with passionate, talented individuals who support each
                other's growth.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <TrendingUp size={24} />
              </div>
              <h4>Innovation First</h4>
              <p>
                Push boundaries and experiment with cutting-edge technologies
                and methodologies.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <Star size={24} />
              </div>
              <h4>Excellence</h4>
              <p>
                Maintain the highest standards in everything we do, from code to
                content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section className={`jobs-section ${isVisible ? "visible" : ""}`}>
        <div className="section-content">
          <h2 className="section-title">Open Positions</h2>

          {/* Search and Filter */}
          <div className="jobs-controls">
            <div className="search-box">
              <Search size={20} />
              <input
                type="text"
                placeholder="Search positions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="filter-tabs">
              {jobCategories.map((category) => (
                <button
                  key={category.id}
                  className={`filter-tab ${
                    activeFilter === category.id ? "active" : ""
                  }`}
                  onClick={() => setActiveFilter(category.id)}
                >
                  {category.name}
                  <span className="count">({category.count})</span>
                </button>
              ))}
            </div>
          </div>

          {/* Job Listings */}
          <div className="jobs-grid">
            {filteredJobs.map((job) => (
              <div key={job.id} className="job-card">
                <div className="job-header">
                  <div className="job-title-section">
                    <h3 className="job-title">{job.title}</h3>
                    <span className="job-department">{job.department}</span>
                  </div>
                  <div className="job-type-badge">{job.type}</div>
                </div>

                <p className="job-description">{job.description}</p>

                <div className="job-details">
                  <div className="detail-item">
                    <MapPin size={16} />
                    <span>{job.location}</span>
                  </div>
                  <div className="detail-item">
                    <Briefcase size={16} />
                    <span>{job.experience}</span>
                  </div>
                  <div className="detail-item">
                    <DollarSign size={16} />
                    <span>{job.salary}</span>
                  </div>
                </div>

                <div className="job-tags">
                  {job.tags.map((tag, index) => (
                    <span key={index} className="job-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="apply-btn">
                  Apply Now
                  <ChevronRight size={16} />
                </button>
              </div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="no-results">
              <div className="no-results-icon">
                <Search size={48} />
              </div>
              <h3>No positions found</h3>
              <p>Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className={`benefits-section ${isVisible ? "visible" : ""}`}>
        <div className="section-content">
          <h2 className="section-title">Benefits & Perks</h2>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="additional-benefits">
            <h3>And Much More...</h3>
            <div className="benefits-list">
              <div className="benefit-item">
                <span className="check">✓</span>
                <span>Stock options for all employees</span>
              </div>
              <div className="benefit-item">
                <span className="check">✓</span>
                <span>Home office setup stipend</span>
              </div>
              <div className="benefit-item">
                <span className="check">✓</span>
                <span>Company retreats and team building</span>
              </div>
              <div className="benefit-item">
                <span className="check">✓</span>
                <span>Parental leave and family support</span>
              </div>
              <div className="benefit-item">
                <span className="check">✓</span>
                <span>Professional development budget</span>
              </div>
              <div className="benefit-item">
                <span className="check">✓</span>
                <span>Flexible working arrangements</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`cta-section ${isVisible ? "visible" : ""}`}>
        <div className="cta-content">
          <h2>Don't See Your Perfect Role?</h2>
          <p>
            We're always looking for talented individuals who share our passion
            for education and innovation.
          </p>
          <div className="cta-actions">
            <button className="btn-primary">Send General Application</button>
            <button className="btn-secondary">Join Our Talent Network</button>
          </div>
        </div>
      </section>

      <style jsx>{`
        .career-page {
          font-family: "Poppins", sans-serif;
          color: #fff;
          background: linear-gradient(
            180deg,
            #081932 0%,
            #0a1a33 50%,
            #081932 100%
          );
          min-height: 100vh;
        }

        .section-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 5%;
        }

        .section-title {
          text-align: center;
          font-size: 36px;
          margin-bottom: 50px;
          position: relative;
          font-weight: 700;
        }

        .section-title:after {
          content: "";
          position: absolute;
          bottom: -15px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 3px;
          background-color: #ff6b00;
        }

        .btn-primary {
          background-color: #ff6b00;
          color: white;
          border: none;
          border-radius: 30px;
          padding: 14px 32px;
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
          padding: 12px 28px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-secondary:hover {
          background-color: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.5);
        }

        .accent {
          color: #ff6b00;
        }

        /* Animation classes */
        section {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
          padding: 80px 0;
        }

        section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Hero Section */
        .career-hero {
          display: flex;
          align-items: center;
          justify-content: space-between;
          min-height: 90vh;
          position: relative;
          overflow: hidden;
        }

        .hero-content {
          flex: 1;
          max-width: 600px;
          z-index: 2;
          padding-left: 5%;
        }

        .hero-badge {
          display: inline-block;
          background: rgba(255, 107, 0, 0.15);
          color: #ff6b00;
          padding: 8px 20px;
          border-radius: 25px;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 20px;
          border: 1px solid rgba(255, 107, 0, 0.3);
        }

        .hero-title {
          font-size: 52px;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 24px;
        }

        .hero-subtitle {
          font-size: 18px;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 40px;
          line-height: 1.7;
        }

        .hero-stats {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
          margin-top: 40px;
        }

        .stat-item {
          text-align: center;
          padding: 20px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 15px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .stat-number {
          display: block;
          font-size: 28px;
          font-weight: 700;
          color: #ff6b00;
          margin-bottom: 5px;
        }

        .stat-label {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.7);
        }

        .hero-visual {
          flex: 1;
          position: relative;
          height: 100%;
          min-height: 400px;
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
          width: 120px;
          height: 120px;
          background: linear-gradient(
            45deg,
            rgba(255, 107, 0, 0.1),
            rgba(30, 144, 255, 0.1)
          );
          top: 20%;
          right: 20%;
          animation: float 6s ease-in-out infinite;
        }

        .circle-2 {
          width: 80px;
          height: 80px;
          background: rgba(255, 107, 0, 0.08);
          bottom: 30%;
          right: 40%;
          animation: float 8s ease-in-out infinite;
          animation-delay: 2s;
        }

        .plus-1,
        .plus-2 {
          width: 40px;
          height: 40px;
          background: transparent;
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-radius: 0;
          transform: rotate(45deg);
        }

        .plus-1 {
          top: 60%;
          right: 10%;
          animation: rotate 20s linear infinite;
        }

        .plus-2 {
          top: 10%;
          right: 60%;
          animation: rotate 15s linear infinite reverse;
        }

        /* Values Section */
        .values-section {
          background: rgba(255, 255, 255, 0.02);
        }

        .values-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          align-items: start;
        }

        .value-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          padding: 30px;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .main-card {
          grid-row: span 2;
          padding: 40px;
          background: linear-gradient(
            135deg,
            rgba(255, 107, 0, 0.1),
            rgba(30, 144, 255, 0.05)
          );
        }

        .value-card:hover {
          transform: translateY(-10px);
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
        }

        .value-icon {
          width: 60px;
          height: 60px;
          background: rgba(255, 107, 0, 0.15);
          color: #ff6b00;
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .main-card .value-icon {
          width: 80px;
          height: 80px;
          margin-bottom: 30px;
        }

        .value-card h3 {
          font-size: 24px;
          margin-bottom: 15px;
          font-weight: 600;
        }

        .value-card h4 {
          font-size: 18px;
          margin-bottom: 10px;
          font-weight: 600;
        }

        .value-card p {
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          font-size: 15px;
        }

        .main-card p {
          font-size: 16px;
        }

        /* Jobs Section */
        .jobs-controls {
          display: flex;
          flex-direction: column;
          gap: 30px;
          margin-bottom: 50px;
        }

        .search-box {
          position: relative;
          max-width: 400px;
          margin: 0 auto;
        }

        .search-box svg {
          position: absolute;
          left: 15px;
          top: 50%;
          transform: translateY(-50%);
          color: rgba(255, 255, 255, 0.5);
        }

        .search-box input {
          width: 100%;
          padding: 15px 15px 15px 50px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 30px;
          color: #fff;
          font-size: 16px;
          outline: none;
          transition: all 0.3s ease;
        }

        .search-box input:focus {
          border-color: rgba(255, 107, 0, 0.5);
          background: rgba(255, 255, 255, 0.08);
        }

        .filter-tabs {
          display: flex;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .filter-tab {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.8);
          padding: 12px 20px;
          border-radius: 25px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 14px;
          font-weight: 500;
        }

        .filter-tab:hover {
          background: rgba(255, 255, 255, 0.08);
        }

        .filter-tab.active {
          background: #ff6b00;
          color: white;
          border-color: #ff6b00;
        }

        .count {
          margin-left: 5px;
          opacity: 0.7;
        }

        .jobs-grid {
          display: grid;
          gap: 30px;
        }

        .job-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          padding: 30px;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .job-card:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
        }

        .job-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 20px;
        }

        .job-title {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 5px;
        }

        .job-department {
          color: #ff6b00;
          font-size: 14px;
          font-weight: 500;
        }

        .job-type-badge {
          background: rgba(30, 144, 255, 0.15);
          color: #1e90ff;
          padding: 6px 12px;
          border-radius: 15px;
          font-size: 12px;
          font-weight: 600;
        }

        .job-description {
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .job-details {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          margin-bottom: 20px;
        }

        .detail-item {
          display: flex;
          align-items: center;
          gap: 8px;
          color: rgba(255, 255, 255, 0.7);
          font-size: 14px;
        }

        .detail-item svg {
          color: #ff6b00;
        }

        .job-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 25px;
        }

        .job-tag {
          background: rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.8);
          padding: 4px 12px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 500;
        }

        .apply-btn {
          background: #ff6b00;
          color: white;
          border: none;
          border-radius: 25px;
          padding: 12px 24px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .apply-btn:hover {
          background: #ff8b30;
          transform: translateX(5px);
        }

        .no-results {
          text-align: center;
          padding: 60px 20px;
          color: rgba(255, 255, 255, 0.6);
        }

        .no-results-icon {
          margin-bottom: 20px;
          opacity: 0.5;
        }

        /* Benefits Section */
        .benefits-section {
          background: rgba(255, 255, 255, 0.02);
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          margin-bottom: 60px;
        }

        .benefit-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          padding: 30px;
          text-align: center;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .benefit-card:hover {
          transform: translateY(-10px);
          background: rgba(255, 255, 255, 0.08);
        }

        .benefit-icon {
          width: 60px;
          height: 60px;
          background: rgba(255, 107, 0, 0.15);
          color: #ff6b00;
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
        }

        .benefit-card h3 {
          font-size: 18px;
          margin-bottom: 15px;
          font-weight: 600;
        }

        .benefit-card p {
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          font-size: 14px;
        }

        .additional-benefits {
          text-align: center;
          padding: 40px;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .additional-benefits h3 {
          font-size: 24px;
          margin-bottom: 30px;
          font-weight: 600;
        }

        .benefits-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 15px;
          max-width: 800px;
          margin: 0 auto;
        }

        .benefit-item {
          display: flex;
          align-items: center;
          gap: 12px;
          color: rgba(255, 255, 255, 0.8);
          font-size: 15px;
        }

        .check {
          color: #ff6b00;
          font-weight: bold;
          font-size: 16px;
        }

        /* CTA Section */
        .cta-section {
          text-align: center;
          background: linear-gradient(
            135deg,
            rgba(255, 107, 0, 0.1),
            rgba(30, 144, 255, 0.05)
          );
          border-radius: 30px;
          margin: 0 5%;
          position: relative;
          overflow: hidden;
        }

        .cta-section::before {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(
            circle,
            rgba(255, 107, 0, 0.05) 0%,
            transparent 50%
          );
          animation: rotate 30s linear infinite;
        }

        .cta-content {
          position: relative;
          z-index: 2;
          padding: 60px 40px;
        }

        .cta-content h2 {
          font-size: 32px;
          margin-bottom: 15px;
          font-weight: 700;
        }

        .cta-content p {
          font-size: 18px;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 40px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
        }

        .cta-actions {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        /* Animations */
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
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

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .hero-stats {
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
          }

          .stat-item {
            padding: 15px;
          }

          .stat-number {
            font-size: 24px;
          }
        }

        @media (max-width: 992px) {
          .career-hero {
            flex-direction: column;
            text-align: center;
            padding-top: 40px;
          }

          .hero-content {
            max-width: 100%;
            padding-left: 0;
            margin-bottom: 40px;
          }

          .hero-title {
            font-size: 42px;
          }

          .hero-stats {
            grid-template-columns: repeat(2, 1fr);
          }

          .values-grid {
            grid-template-columns: 1fr;
          }

          .main-card {
            grid-row: span 1;
          }

          .section-title {
            font-size: 32px;
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 36px;
          }

          .hero-subtitle {
            font-size: 16px;
          }

          .section-title {
            font-size: 28px;
          }

          .jobs-controls {
            gap: 20px;
          }

          .filter-tabs {
            gap: 8px;
          }

          .filter-tab {
            padding: 10px 16px;
            font-size: 13px;
          }

          .job-header {
            flex-direction: column;
            gap: 15px;
            align-items: flex-start;
          }

          .job-details {
            flex-direction: column;
            gap: 10px;
          }

          .benefits-grid {
            grid-template-columns: 1fr;
          }

          .benefits-list {
            grid-template-columns: 1fr;
            text-align: left;
          }

          .cta-content {
            padding: 40px 20px;
          }

          .cta-content h2 {
            font-size: 28px;
          }

          .cta-actions {
            flex-direction: column;
            align-items: center;
          }

          .btn-primary,
          .btn-secondary {
            width: 100%;
            max-width: 280px;
            justify-content: center;
          }
        }

        @media (max-width: 576px) {
          .hero-title {
            font-size: 28px;
          }

          .hero-stats {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .section-title {
            font-size: 24px;
          }

          .search-box {
            max-width: 100%;
          }

          .filter-tabs {
            justify-content: flex-start;
            overflow-x: auto;
            padding-bottom: 10px;
          }

          .filter-tab {
            flex-shrink: 0;
          }

          .job-card,
          .benefit-card,
          .value-card {
            padding: 20px;
          }

          .additional-benefits {
            padding: 30px 20px;
          }

          .cta-content h2 {
            font-size: 24px;
          }

          .cta-content p {
            font-size: 16px;
          }
        }

        /* Accessibility improvements */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }

        /* Focus states for accessibility */
        .btn-primary:focus,
        .btn-secondary:focus,
        .apply-btn:focus,
        .filter-tab:focus {
          outline: 2px solid #ff6b00;
          outline-offset: 2px;
        }

        .search-box input:focus {
          box-shadow: 0 0 0 3px rgba(255, 107, 0, 0.3);
        }

        /* High contrast mode support */
        @media (prefers-contrast: high) {
          .job-card,
          .benefit-card,
          .value-card {
            border-color: rgba(255, 255, 255, 0.3);
          }

          .job-tag,
          .job-type-badge {
            border: 1px solid rgba(255, 255, 255, 0.3);
          }
        }
      `}</style>
    </div>
  );
};

export default CareerPage;
