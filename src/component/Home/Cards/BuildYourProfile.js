import React from "react";
import "./BuildYourProfile.css"; // Link to the CSS file
import { useNavigate } from "react-router-dom";

const BuildYourProfile = () => {
  const navigate = useNavigate();
  return (
    <div className="build-profile">
      <h2 className="profile-title">Build Your Profile</h2>

      <div className="profile-grid">
        <div className="card tall-card">
          <img
            src="https://images.unsplash.com/photo-1599566150163-29194dcaad36"
            alt="Activities"
          />
          <div
            className="card-text"
            onClick={() => navigate("/courses/gen-ai-builder---xpress")}
          >
            Activities →
          </div>
        </div>

        <div className="card small-card_">
          <img
            src="https://res.cloudinary.com/djsg8kbaz/image/upload/v1745835437/payment_modal_rekmbb.jpg"
            alt="Know Where You Stand"
          />
          <div
            className="card-text"
            onClick={() => navigate("/courses/gen-ai-builder---xpress")}
          >
            Know Where You Stand →
          </div>
        </div>

        <div className="card small-card_">
          <div
            className="card-text"
            onClick={() => navigate("/courses/gen-ai-builder---xpress")}
          >
            Life Skills →
          </div>
          <img
            src="https://res.cloudinary.com/djsg8kbaz/image/upload/v1745835437/payment_modal_rekmbb.jpg"
            alt="Life Skills"
          />
        </div>
      </div>
    </div>
  );
};

export default BuildYourProfile;
