import React, { useState, useEffect, useRef } from "react";
import logoImage from "../../assets/anslix_logo.svg";
import { Search, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();
  const searchInputRef = useRef(null);
  const searchContainerRef = useRef(null);

  const searchData = [
    {
      id: 1,
      title: "Web Development Services",
      url: "/services",
      category: "Services",
    },
    {
      id: 2,
      title: "Mobile App Development",
      url: "/services",
      category: "Services",
    },
    {
      id: 3,
      title: "Digital Marketing",
      url: "/services",
      category: "Services",
    },
    { id: 4, title: "About Our Company", url: "/about", category: "About" },
    { id: 5, title: "Our Team", url: "/about", category: "About" },
    {
      id: 6,
      title: "Career Opportunities",
      url: "/career",
      category: "Career",
    },
    {
      id: 7,
      title: "Software Developer Jobs",
      url: "/career",
      category: "Career",
    },
    {
      id: 8,
      title: "Contact Information",
      url: "/contact",
      category: "Contact",
    },
    { id: 9, title: "Get In Touch", url: "/contact", category: "Contact" },
    { id: 10, title: "Home Page", url: "/", category: "Home" },
  ];

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
    setSearchQuery("");
  }, [location]);

  // Handle search input
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      return;
    }

    const filtered = searchData.filter(
      (item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filtered);
  }, [searchQuery]);

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target)
      ) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Focus search input when opened
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  // Function to check if link is active
  const isActiveLink = (path) => {
    if (path === "/" && location.pathname === "/") {
      return true;
    }
    return location.pathname.startsWith(path) && path !== "/";
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setSearchQuery("");
      setSearchResults([]);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() && searchResults.length > 0) {
      // Navigate to first search result or handle search submission
      window.location.href = searchResults[0].url;
    }
  };

  const handleResultClick = (url) => {
    setIsSearchOpen(false);
    setSearchQuery("");
    window.location.href = url;
  };

  return (
    <>
      <header className="header">
        <div className="header-container">
          {/* Logo */}
          <div className="logo">
            <Link to="/" className="logo-link">
              <img src={logoImage} alt="Anslix Logo" className="logo-image" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="nav-menu desktop-nav">
            <ul>
              <li>
                <Link
                  to="/"
                  className={isActiveLink("/") ? "nav-link active" : "nav-link"}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className={
                    isActiveLink("/services") ? "nav-link active" : "nav-link"
                  }
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={
                    isActiveLink("/about") ? "nav-link active" : "nav-link"
                  }
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/career"
                  className={
                    isActiveLink("/career") ? "nav-link active" : "nav-link"
                  }
                >
                  Career
                </Link>
              </li>
              <li>
                <Link
                  to="/solution"
                  className={
                    isActiveLink("/solution") ? "nav-link active" : "nav-link"
                  }
                >
                  Solution
                </Link>
              </li>
            </ul>
          </nav>

          {/* Header Actions */}
          <div className="header-actions">
            {/* Search Container */}
            <div className="search-container" ref={searchContainerRef}>
              <button
                className="search-btn"
                aria-label="Search"
                onClick={toggleSearch}
              >
                <Search size={20} />
              </button>

              {/* Search Dropdown */}
              {isSearchOpen && (
                <div className="search-dropdown">
                  <form onSubmit={handleSearchSubmit} className="search-form">
                    <input
                      ref={searchInputRef}
                      type="text"
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="search-input"
                    />
                  </form>

                  {/* Search Results */}
                  {searchResults.length > 0 && (
                    <div className="search-results">
                      {searchResults.map((result) => (
                        <div
                          key={result.id}
                          className="search-result-item"
                          onClick={() => handleResultClick(result.url)}
                        >
                          <div className="result-title">{result.title}</div>
                          <div className="result-category">
                            {result.category}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* No Results */}
                  {searchQuery.trim() && searchResults.length === 0 && (
                    <div className="no-results">
                      No results found for "{searchQuery}"
                    </div>
                  )}
                </div>
              )}
            </div>

            <button className="login-btn">
              <Link
                to="/contact"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                Contact
              </Link>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="mobile-menu-toggle"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav
          className={`mobile-nav ${isMobileMenuOpen ? "mobile-nav-open" : ""}`}
        >
          <ul>
            <li>
              <Link
                to="/"
                className={isActiveLink("/") ? "nav-link active" : "nav-link"}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className={
                  isActiveLink("/services") ? "nav-link active" : "nav-link"
                }
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={
                  isActiveLink("/about") ? "nav-link active" : "nav-link"
                }
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/career"
                className={
                  isActiveLink("/career") ? "nav-link active" : "nav-link"
                }
              >
                Career
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={
                  isActiveLink("/contact") ? "nav-link active" : "nav-link"
                }
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <style jsx>{`
        .accent {
          color: #ff6b00;
        }

        /* Header Styles */
        .header {
          background-color: rgba(8, 25, 50, 0.95);
          backdrop-filter: blur(10px);
          position: sticky;
          top: 0;
          z-index: 1000;
          box-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
        }

        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 5%;
          max-width: 1400px;
          margin: 0 auto;
        }

        /* Logo Styles */
        .logo-link {
          text-decoration: none;
          display: flex;
          align-items: center;
        }

        .logo-image {
          height: 50px;
          width: auto;
          transition: all 0.3s ease;
          filter: brightness(1);
        }

        .logo-link:hover .logo-image {
          filter: brightness(1.2);
          transform: scale(1.3);
        }

        /* Desktop Navigation */
        .desktop-nav {
          display: flex;
        }

        .desktop-nav ul {
          display: flex;
          list-style: none;
          gap: 30px;
          margin: 0;
          padding: 0;
          align-items: center;
        }

        .nav-link {
          color: white;
          text-decoration: none;
          font-size: 16px;
          font-weight: 500;
          padding: 8px 16px;
          border-radius: 25px;
          transition: all 0.3s ease;
          position: relative;
          list-style: none;
        }

        .nav-link:hover {
          color: #ff6b00;
          background-color: rgba(255, 107, 0, 0.1);
        }

        .nav-link.active {
          color: #ff6b00;
          background-color: rgba(255, 107, 0, 0.15);
        }

        .nav-link.active::after {
          content: "";
          position: absolute;
          bottom: -2px;
          left: 50%;
          transform: translateX(-50%);
          width: 6px;
          height: 6px;
          background-color: #ff6b00;
          border-radius: 50%;
        }

        /* Header Actions */
        .header-actions {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        /* Search Styles */
        .search-container {
          position: relative;
        }

        .search-btn {
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .search-btn:hover {
          background-color: rgba(255, 255, 255, 0.1);
          color: #ff6b00;
          transform: scale(1.1);
        }

        .search-dropdown {
          position: absolute;
          top: 100%;
          right: 0;
          background: rgba(8, 25, 50, 0.98);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          width: 320px;
          max-height: 400px;
          overflow: hidden;
          z-index: 1001;
          margin-top: 10px;
          animation: searchDropdownIn 0.3s ease;
        }

        @keyframes searchDropdownIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .search-form {
          padding: 16px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .search-input {
          width: 100%;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 8px;
          padding: 12px 16px;
          color: white;
          font-size: 14px;
          outline: none;
          transition: all 0.3s ease;
        }

        .search-input::placeholder {
          color: rgba(255, 255, 255, 0.6);
        }

        .search-input:focus {
          border-color: #ff6b00;
          background: rgba(255, 255, 255, 0.15);
        }

        .search-results {
          max-height: 300px;
          overflow-y: auto;
        }

        .search-result-item {
          padding: 12px 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .search-result-item:hover {
          background: rgba(255, 107, 0, 0.1);
        }

        .search-result-item:last-child {
          border-bottom: none;
        }

        .result-title {
          color: white;
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 4px;
        }

        .result-category {
          color: #ff6b00;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .no-results {
          padding: 20px 16px;
          text-align: center;
          color: rgba(255, 255, 255, 0.6);
          font-size: 14px;
        }

        .login-btn {
          background-color: #ff6b00;
          color: white;
          border: none;
          border-radius: 30px;
          padding: 10px 24px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .login-btn:hover {
          background-color: #ff8b30;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(255, 107, 0, 0.3);
        }

        /* Mobile Menu Toggle */
        .mobile-menu-toggle {
          display: none;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          padding: 8px;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .mobile-menu-toggle:hover {
          background-color: rgba(255, 255, 255, 0.1);
          color: #ff6b00;
        }

        /* Mobile Navigation */
        .mobile-nav {
          display: none;
          background-color: rgba(8, 25, 50, 0.98);
          backdrop-filter: blur(15px);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
        }

        .mobile-nav-open {
          max-height: 400px;
        }

        .mobile-nav ul {
          list-style: none;
          margin: 0;
          padding: 20px 5%;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .mobile-nav .nav-link {
          display: block;
          padding: 12px 20px;
          border-radius: 12px;
          font-size: 16px;
          text-align: center;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .header-container {
            padding: 16px 4%;
          }

          .desktop-nav ul {
            gap: 20px;
          }

          .nav-link {
            padding: 6px 12px;
            font-size: 15px;
          }

          .logo-image {
            height: 36px;
          }
        }

        @media (max-width: 768px) {
          .desktop-nav {
            display: none;
          }

          .mobile-menu-toggle {
            display: block;
          }

          .mobile-nav {
            display: block;
          }

          .header-actions {
            gap: 12px;
          }

          .search-btn {
            padding: 8px;
          }

          .search-dropdown {
            width: 280px;
            right: -20px;
          }

          .login-btn {
            padding: 8px 16px;
            font-size: 14px;
          }

          .logo-image {
            height: 32px;
          }
        }

        @media (max-width: 480px) {
          .header-container {
            padding: 12px 4%;
          }

          .logo-image {
            height: 28px;
          }

          .header-actions {
            gap: 8px;
          }

          .search-dropdown {
            width: 260px;
            right: -40px;
          }

          .login-btn {
            padding: 6px 12px;
            font-size: 13px;
          }

          .search-btn {
            padding: 6px;
          }
        }

        /* Animation for mobile menu */
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .mobile-nav-open ul {
          animation: slideDown 0.3s ease;
        }

        /* Focus states for accessibility */
        .nav-link:focus,
        .search-btn:focus,
        .login-btn:focus,
        .mobile-menu-toggle:focus,
        .search-input:focus {
          outline: 2px solid #ff6b00;
          outline-offset: 2px;
        }

        /* Custom scrollbar for search results */
        .search-results::-webkit-scrollbar {
          width: 6px;
        }

        .search-results::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
        }

        .search-results::-webkit-scrollbar-thumb {
          background: #ff6b00;
          border-radius: 3px;
        }
      `}</style>
    </>
  );
};

export default Header;
