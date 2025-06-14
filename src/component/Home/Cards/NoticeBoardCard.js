import React from "react";
import "./NoticeBoardCard.css";
const NoticeBoardCard = ({data}) => {
    return (
    <div className="noticeboard-card">
      <p className="noticeboard-course-type">📜 {data.course_type === "certification" ? "Certificate Program" : data.course_type}</p>
      <h2 className="noticeboard-course-name">{data.course_name}</h2>

      <div className="noticeboard-section">
        {data.notices.map((notice, idx) => (
          <p key={idx}>
            <strong>{notice.title} :</strong> {notice.description}
          </p>
        ))}
      </div>

      <div className="noticeboard-section">
        <p><strong>Attachments :</strong></p>
        {data.attachments.map((att, idx) => (
          <div className="noticeboard-attachment-row" key={idx}>
            <span>➕ {att.title}</span>
            <div>
              <a href={att.url} target="_blank" rel="noreferrer" className="noticeboard-view-btn">View</a>
              <a href={att.url} download className="noticeboard-download-btn">Download</a>
            </div>
          </div>
        ))}
      </div>

      <div className="noticeboard-section">
        <p><strong>Eligibility :</strong></p>
        {data.eligiblity.map((elig, idx) => (
          <p key={idx}>
            {elig.title} : {elig.description}
          </p>
        ))}
      </div>
    </div>
  );
}

export default NoticeBoardCard;