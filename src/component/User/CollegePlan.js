import React, { useEffect, useState } from "react";
import "./CollegePlan.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { allPlanAction } from "../../actions/collegeAction";
import Navbar from "../layout/Navbar/Navbar";

const CollegePlan = () => {
  const dispatch = useDispatch()
  // const { loading: loadingProfile, isUpdated, error } = useSelector((state) => state.profile)
  const { loading: userLoading, user, isAuthenticated } = useSelector((state) => state.user)
  const { loading: slotLoading, allPlans } = useSelector((state) => state.slots)
  console.log(isAuthenticated)
  const [selectedPlan, setSelectedPlan] = useState("1-year");
  // const navigate = useNavigate();

  useEffect(() => {
    dispatch(allPlanAction())
  }, [dispatch])

  return (
    <div className="pricing-container">
      {isAuthenticated ? <Navbar /> : <div className="navbar">
        <Link to="/">
          <div className="logo"></div>
        </Link>
        <div className="nav_right">

          <Link
            to="/register"
            className="btnTwo auth_btn"
          >
            Sign Up
          </Link>
          <div className="auth-buttons">
            <button className="filled-btn" onClick={() => navigate("/")}>
              Logout
            </button>
          </div>
          <Link
            to="/login"
            className="btnOne auth_btn"
          >
            Login
          </Link
        </div>
      </div>}

      <div className="main-content">
        <h1 className="welcome-text">Hello {user.name} from {user.collegeName},</h1>
        <p className="subtitle">Select the Right Plan for Your College</p>

        <div className="plan-toggle">
          <button
            className={`toggle-btn ${selectedPlan === "1-year" ? "active" : ""
              }`}
            onClick={() => setSelectedPlan("1-year")}
          >
            1-year
          </button>
          <button
            className={`toggle-btn ${selectedPlan === "4-year" ? "active" : ""
              }`}
            onClick={() => setSelectedPlan("4-year")}
          >
            4-year
          </button>
        </div>

        <p className="plan-description">
          Gold and Platinum plans are designed
          <br />
          to help you empower students at
          <br />
          scale.
        </p>

        {/* Plan cards */}
        <div className="pricing-cards">
          {allPlans && allPlans.collegeSubscription.map((elm) => {
            return (
              <div className="pricing-card diamond">
                <div className="card-header diamond-header">
                  <div className="plan-icon">💎</div>
                  <h3 className="plan-name">{elm.name}</h3>
                  <p className="plan-subtitle">Subscription</p>
                  <p className="plan-capacity">
                    Best for: Unlimited student access
                  </p>
                </div>
                <div className="card-body diamond-body">
                  <ul className="features-list">
                    <li className="feature-item">
                      ✓✓ Premium programs + Internships
                    </li>
                    <li className="feature-item">
                      ✓✓ Access to GenAI Certification (Advanced)
                    </li>
                    <li className="feature-item">
                      ✓✓ Advanced analytics dashboard
                    </li>
                    <li className="feature-item">
                      ✓✓ Mentor support: Priority access
                    </li>
                    <li className="feature-item">
                      ✓✓ Co-branded certificates with MM
                    </li>
                    <li className="feature-item">
                      ✓✓ Eligible for Recruiter & Hiring Partner Inclusion
                    </li>
                  </ul>

                  <div className="pricing-section">
                    <div className="price-row">
                      <span className="original-price">₹{elm.price}</span>
                      <span className="discount-badge">10% OFF</span>
                    </div>
                    <div className="current-price">₹18,000</div>
                  </div>
                </div>
                <button className="choose-btn diamond-btn">
                  Choose
                  <br />
                  Diamond Plan
                </button>
              </div>
            )
          })}
          {/* Gold Plan */}
          {/* <div className="pricing-card gold">
            <div className="card-header gold-header">
              <div className="plan-icon">🪙</div>
              <h3 className="plan-name">Gold</h3>
              <p className="plan-subtitle">Subscription</p>
              <p className="plan-capacity">Best for: Up to 250 students</p>
            </div>
            <div className="card-body gold-body">
              <ul className="features-list">
                <li className="feature-item">
                  ✓✓ Standard Industry-backed programs
                </li>
                <li className="feature-item">
                  ✓✓ Access to GenAI Certification (Advanced)
                </li>
                <li className="feature-item">
                  ✓✓ College dashboard for tracking
                </li>
                <li className="feature-item">✓✓ Mentor support: Limited</li>
                <li className="feature-item tighter">
                  <span class="cross-icon">✗</span> No co-branded certifications
                </li>
                <li className="feature-item">
                  <span class="cross-icon tighter">✗</span> No career placement
                  pipeline
                </li>
              </ul>

              <div className="pricing-section">
                <div className="price-row">
                  <span className="original-price">₹9,999</span>
                  <span className="discount-badge">10% OFF</span>
                </div>
                <div className="current-price">₹9,000</div>
              </div>
            </div>

            <button className="choose-btn gold-btn">
              Choose
              <br />
              Gold Plan
            </button>
          </div> */}

          {/* Diamond Plan */}
        </div>
      </div>
    </div>
  );
};

export default CollegePlan;
