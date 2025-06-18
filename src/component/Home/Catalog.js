import React, { useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Catalog.css";
import PartnerIcon from "../Home/images/partner-as-a-college-icon.svg";
import LandingImage from "../Home/images/course-landing-page-hero-section.svg";
// import BannerImage from "../Home/images/share-your-experience-card-design.svg";
import FilterIcon from "../Home/images/filter-icon.svg";
import SearchIcon from "../Home/images/search-icon.svg";
import RecCard from "./Cards/RecCard";

const Catalog = () => {
  const navigate = useNavigate();
  const [selectedLevel, setSelectedLevel] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState([]);
  const [sortBy, setSortBy] = useState("relevance");
  const [isLevelOpen, setIsLevelOpen] = useState(true);
  const [isPriceOpen, setIsPriceOpen] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // Items per page
  const itemsPerPage = 9;

  // Sample course data
  const courses = [
    {
      external_batch_id: "batch_001",
      course_name: "Options Trading for Beginners",
      course_description:
        "Master the fundamentals of options trading with comprehensive hands-on training.",
      image: "/api/placeholder/300/200",
      batch_price: 10999,
      batch_start_date: "2024-07-15",
      mentor_image: "/api/placeholder/60/60",
      mentor_company_logo: "/api/placeholder/80/30",
      level: "Year 1",
      type: "Paid",
    },
    {
      external_batch_id: "batch_002",
      course_name: "Internet and Web Development Fundamentals",
      course_description:
        "Learn the core concepts of web development including HTML, CSS, and JavaScript.",
      image: "/api/placeholder/300/200",
      batch_price: 7959,
      batch_start_date: "2024-08-01",
      mentor_image: "/api/placeholder/60/60",
      mentor_company_logo: "/api/placeholder/80/30",
      level: "Year 2",
      type: "Paid",
    },
    {
      external_batch_id: "batch_003",
      course_name: "CSS, Bootstrap, JavaScript, Web Development Course",
      course_description:
        "Advanced frontend development with modern frameworks and responsive design.",
      image: "/api/placeholder/300/200",
      batch_price: 4999,
      batch_start_date: "2024-07-20",
      mentor_image: "/api/placeholder/60/60",
      mentor_company_logo: "/api/placeholder/80/30",
      level: "Year 1",
      type: "Paid",
    },
    {
      external_batch_id: "batch_004",
      course_name: "The Complete 2023 PHP Full Stack Web Developer Bootcamp",
      course_description:
        "Comprehensive full-stack development course covering PHP, MySQL, and modern frameworks.",
      image: "/api/placeholder/300/200",
      batch_price: 10999,
      batch_start_date: "2024-08-10",
      mentor_image: "/api/placeholder/60/60",
      mentor_company_logo: "/api/placeholder/80/30",
      level: "Year 3",
      type: "Paid",
    },
    {
      external_batch_id: "batch_005",
      course_name: "Internet and Web Development Fundamentals",
      course_description:
        "Learn the core concepts of web development including HTML, CSS, and JavaScript.",
      image: "/api/placeholder/300/200",
      batch_price: 7999,
      batch_start_date: "2024-09-01",
      mentor_image: "/api/placeholder/60/60",
      mentor_company_logo: "/api/placeholder/80/30",
      level: "Year 2",
      type: "Paid",
    },
    {
      external_batch_id: "batch_006",
      course_name: "CSS, Bootstrap, JavaScript, Web Development Course",
      course_description:
        "Advanced frontend development with modern frameworks and responsive design.",
      image: "/api/placeholder/300/200",
      batch_price: 4999,
      batch_start_date: "2024-08-15",
      mentor_image: "/api/placeholder/60/60",
      mentor_company_logo: "/api/placeholder/80/30",
      level: "Year 1",
      type: "Paid",
    },
    {
      external_batch_id: "batch_007",
      course_name: "Options Trading for Beginners",
      course_description:
        "Master the fundamentals of options trading with comprehensive hands-on training.",
      image: "/api/placeholder/300/200",
      batch_price: 10999,
      batch_start_date: "2024-07-15",
      mentor_image: "/api/placeholder/60/60",
      mentor_company_logo: "/api/placeholder/80/30",
      level: "Year 1",
      type: "Paid",
    },
    {
      external_batch_id: "batch_008",
      course_name: "Options Trading for Beginners",
      course_description:
        "Master the fundamentals of options trading with comprehensive hands-on training.",
      image: "/api/placeholder/300/200",
      batch_price: 10999,
      batch_start_date: "2024-07-15",
      mentor_image: "/api/placeholder/60/60",
      mentor_company_logo: "/api/placeholder/80/30",
      level: "Year 1",
      type: "Paid",
    },
    {
      external_batch_id: "batch_009",
      course_name: "Options Trading for Beginners",
      course_description:
        "Master the fundamentals of options trading with comprehensive hands-on training.",
      image: "/api/placeholder/300/200",
      batch_price: 10999,
      batch_start_date: "2024-07-15",
      mentor_image: "/api/placeholder/60/60",
      mentor_company_logo: "/api/placeholder/80/30",
      level: "Year 1",
      type: "Paid",
    },
    {
      external_batch_id: "batch_010",
      course_name: "Options Trading for Beginners",
      course_description:
        "Master the fundamentals of options trading with comprehensive hands-on training.",
      image: "/api/placeholder/300/200",
      batch_price: 10999,
      batch_start_date: "2024-07-15",
      mentor_image: "/api/placeholder/60/60",
      mentor_company_logo: "/api/placeholder/80/30",
      level: "Year 1",
      type: "Paid",
    },
  ];

  // Filter courses based on selected filters
  const filteredCourses = useMemo(() => {
    let filtered = courses;

    // Filter by level
    if (selectedLevel.length > 0 && !selectedLevel.includes("All Years")) {
      filtered = filtered.filter((course) =>
        selectedLevel.includes(course.level)
      );
    }

    // Filter by price
    if (selectedPrice.length > 0) {
      filtered = filtered.filter((course) =>
        selectedPrice.includes(course.type)
      );
    }

    return filtered;
  }, [courses, selectedLevel, selectedPrice]);

  const totalPages = 48;

  const currentCourses = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const slicedCourses = filteredCourses.slice(startIndex, endIndex);

    return slicedCourses;
  }, [filteredCourses, currentPage, itemsPerPage]);

  // PAGINATION HANDLERS
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: "smooth" });
    console.log(`Clicked page: ${pageNumber}`);
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      setCurrentPage(newPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
      console.log(`Previous: Now on page ${newPage}`);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      const newPage = currentPage + 1;
      setCurrentPage(newPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
      console.log(`Next: Now on page ${newPage}`);
    }
  };

  // Reset to page 1 when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [selectedLevel, selectedPrice]);

  const handleLevelChange = (level) => {
    setSelectedLevel((prev) =>
      prev.includes(level) ? prev.filter((l) => l !== level) : [...prev, level]
    );
  };

  const handlePriceChange = (price) => {
    setSelectedPrice((prev) =>
      prev.includes(price) ? prev.filter((p) => p !== price) : [...prev, price]
    );
  };

  return (
    <div>
      <header className="register-header">
        <div className="header-content">
          <Link to="/">
            <div className="logo"></div>
          </Link>

          <div className="auth-buttons">
            <button
              className="partner-btn"
              onClick={() => navigate("/partner-with-us")}
            >
              <img
                src={PartnerIcon}
                alt="Partner Icon"
                className="partner-icon-img"
              />{" "}
              Partner as a college
            </button>

            <button
              className="outline-btn"
              onClick={() => navigate("/register")}
            >
              SignUp
            </button>

            <button className="filled-btn" onClick={() => navigate("/login")}>
              Login
            </button>
          </div>
        </div>
      </header>

      {/* ---------- HERO SECTION ---------- */}
      <div className="hero-section-cata">
        {/* Left Section */}
        <div className="hero-content-cata">
          <div className="hero-text">
            <h2 className="hero-heading">
              Curated Career-First Learning Tracks
            </h2>
            <p className="hero-subtext">
              Master industry-relevant skills with hands-on AI-powered programs
              designed for the future of work.
            </p>

            {/* Search Bar */}
            <div className="search-container">
              <img src={SearchIcon} alt="Search" className="search-icon-img" />
              <input
                type="text"
                className="search-input"
                placeholder="Search Development Courses..."
              />
            </div>

            {/* Filter Buttons */}
            <div className="filters">
              {[
                "AECs",
                "Minor Degrees",
                "Certificate Programs",
                "Internship Programs",
                "Industry-Programs",
              ].map((item) => (
                <button key={item} className="filter-button">
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="hero-image-cata">
          <img src={LandingImage} alt="Course Landing" />
        </div>
      </div>

      {/* ---------- MAIN CONTENT SECTION ---------- */}
      <div className="main-content">
        <div className="content-wrapper">
          {/* Left Column - Filters and Banners */}
          <div className="left-column">
            {/* Sidebar Filters */}
            <aside className="filters-sidebar">
              <div className="filter-toggle-container">
                <button
                  className="filter-toggle-btn"
                  onClick={() => setShowFilters((prev) => !prev)}
                >
                  <span className="filter-text">Filter</span>
                  <img
                    src={FilterIcon}
                    alt="Filter Logo"
                    className="filter-logo-toggle"
                  />
                </button>
              </div>

              {/* Filters Section */}
              {showFilters && (
                <>
                  {/* Level Filter */}
                  <div className="filter-section">
                    <div className="filter-divider" />
                    <div
                      className="filter-dropdown-header"
                      onClick={() => setIsLevelOpen((prev) => !prev)}
                    >
                      <h4 className="dropdown-title">
                        Level{" "}
                        <span className="arrow">{isLevelOpen ? "▲" : "▼"}</span>
                      </h4>
                    </div>
                    {isLevelOpen && (
                      <div className="filter-options">
                        <label className="filter-option">
                          <input
                            type="checkbox"
                            onChange={() => handleLevelChange("All Years")}
                          />
                          <span>All Years (25)</span>
                        </label>
                        <label className="filter-option">
                          <input
                            type="checkbox"
                            onChange={() => handleLevelChange("Year 1")}
                          />
                          <span>Year 1 (14)</span>
                        </label>
                        <label className="filter-option">
                          <input
                            type="checkbox"
                            onChange={() => handleLevelChange("Year 2")}
                          />
                          <span>Year 2 (7)</span>
                        </label>
                        <label className="filter-option">
                          <input
                            type="checkbox"
                            onChange={() => handleLevelChange("Year 3")}
                          />
                          <span>Year 3 (8)</span>
                        </label>
                        <label className="filter-option">
                          <input
                            type="checkbox"
                            onChange={() => handleLevelChange("Year 4")}
                          />
                          <span>Year 4 (5)</span>
                        </label>
                      </div>
                    )}{" "}
                    <div className="filter-divider" />
                  </div>

                  {/* Price Filter */}
                  <div className="filter-section">
                    <div
                      className="filter-dropdown-header"
                      onClick={() => setIsPriceOpen((prev) => !prev)}
                    >
                      <h4 className="dropdown-title">
                        Price{" "}
                        <span className="arrow">{isPriceOpen ? "▲" : "▼"}</span>
                      </h4>
                    </div>

                    {isPriceOpen && (
                      <div className="filter-options">
                        <label className="filter-option">
                          <input
                            type="checkbox"
                            onChange={() => handlePriceChange("Paid")}
                          />
                          <span>Paid (28,497)</span>
                        </label>
                        <label className="filter-option">
                          <input
                            type="checkbox"
                            onChange={() => handlePriceChange("Free")}
                          />
                          <span>Free (1,807)</span>
                        </label>
                      </div>
                    )}
                  </div>
                  <div className="filter-divider" />
                </>
              )}
            </aside>

            {/* Promotional Banner */}
            <div className="promo-banner">
              <h3>
                Get 25% Off for your College GenAI preparedness with Platinum!
              </h3>
              <p>Hurry! Sale Ends in 2 Days</p>
              <button className="promo-btn">Start Today</button>
            </div>

            {/* Share Expertise Banner */}
            <div className="share-banner">
              <div className="share-content">
                <h3>Share your expertise and earn extra income</h3>
                <p>
                  Share your knowledge and inspire the next generation of
                  learners.
                </p>
                <button className="share-btn">Become an Instructor</button>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <main className="courses-main">
            <div className="sort-header">
              <div className="results-count">
                <span className="results-text">
                  {filteredCourses.length}{" "}
                  {filteredCourses.length === 1 ? "result" : "results"}
                </span>
              </div>
              <div className="sort-controls">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="sort-select"
                >
                  <option value="relevance">Sort by</option>
                  <option value="newest">Newest</option>
                  <option value="rating">Highest Rated</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Course Grid  */}
            <div className="courses-grid">
              {currentCourses.map((course, index) => (
                <RecCard
                  key={`${course.external_batch_id}-${index}`}
                  data={course}
                />
              ))}
            </div>

            {/* Show message for empty pages beyond available data */}
            {currentCourses.length === 0 && currentPage > 1 && (
              <div className="no-results">
                <p>No more courses available on this page.</p>
              </div>
            )}
          </main>
        </div>

        {/* Pagination */}
        <div className="pagination">
          <button
            className={`pagination-btn prev ${
              currentPage === 1 ? "disabled" : ""
            }`}
            onClick={handlePrevClick}
            disabled={currentPage === 1}
          >
            ‹
          </button>

          <button
            className={`pagination-btn ${currentPage === 1 ? "active" : ""}`}
            onClick={() => handlePageClick(1)}
          >
            1
          </button>

          {(currentPage <= 4 || currentPage === 2) && (
            <button
              className={`pagination-btn ${currentPage === 2 ? "active" : ""}`}
              onClick={() => handlePageClick(2)}
            >
              2
            </button>
          )}

          {(currentPage <= 4 || currentPage === 3) && (
            <button
              className={`pagination-btn ${currentPage === 3 ? "active" : ""}`}
              onClick={() => handlePageClick(3)}
            >
              3
            </button>
          )}

          {currentPage > 4 && <span className="pagination-dots">...</span>}

          {currentPage > 3 && currentPage < 48 && (
            <button
              className="pagination-btn active"
              onClick={() => handlePageClick(currentPage)}
            >
              {currentPage}
            </button>
          )}

          {currentPage < 47 && <span className="pagination-dots">...</span>}
          {currentPage !== 48 && (
            <button
              className={`pagination-btn ${currentPage === 48 ? "active" : ""}`}
              onClick={() => handlePageClick(48)}
            >
              48
            </button>
          )}

          <button
            className={`pagination-btn next ${
              currentPage === totalPages ? "disabled" : ""
            }`}
            onClick={handleNextClick}
            disabled={currentPage === totalPages}
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
