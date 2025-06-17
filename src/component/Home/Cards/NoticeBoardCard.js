import React from "react";
import "./NoticeBoardCard.css";
import { Link } from "react-router-dom";
import certificateProgram from '../images/certificate_program_icon.svg'
import attachmentBullet from '../images/Attachment_bullets_icon.svg'
import eligibiltyBullet from '../images/eligibility_bullets_icon.svg'
import view from '../images/view_icon.svg'
// import download from '../images/download.svg'

const NoticeBoardCard = ({ data }) => {


  const handleView = (fileId) => {
    const viewUrl = `https://drive.google.com/file/d/${fileId}/view`;
    window.open(viewUrl, '_blank');
  };

  const handleDownload = (fileId) => {
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
      window.open(downloadUrl, '_blank');
  };

  // console.log(data)
  return (
    <div className="noticeboard-card">
      <p className="noticeboard-course-type"><img src={certificateProgram} alt="certificate-Program" /> {data.course_type === "certification" ? "Certificate Program" : data.course_type}</p>
      <h2 className="noticeboard-course-name">{data.course_name}</h2>

      <div className="noticeboard-section notice-dates">
        {data.notices.map((notice, idx) => (
          <>
            <p key={idx}>
              <span>{notice.title} :</span> {notice.description}
            </p>
            <div className="notice-dates-line"></div>
          </>
        ))}
      </div>

      <div className="noticeboard-section notice-doc">
        {data.attachments && data.attachments.length > 0 && <p>Attachments:</p>}

        {data.attachments.map((att, idx) => (
          <div className="noticeboard-attachment-row" key={idx}>
            <span><img src={attachmentBullet} alt="attachment-bullet" /> {att.title}</span>
            <div>
              <Link onClick={() => handleView(att.url)} target="_blank" className="noticeboard-view-btn">View<img src={view} alt="View" /></Link>
              {/* <Link onClick={() => handleDownload(att.url)} download target="_blank" className="noticeboard-download-btn">Download<img src={download} alt="Download" rel="noopener noreferrer"/></Link> */}
            </div>
          </div>
        ))}
        {data.attachments && data.attachments.length > 0 && <div className="notice-dates-line"></div>}
      </div>

      <div className="noticeboard-section notice-academic">
        <p>Eligibility :</p>
        {data.eligiblity.map((elig, idx) => (
          <p key={idx}>
            <img src={eligibiltyBullet} alt="attachment-bullet" />{elig.title} : {elig.description}
          </p>
        ))}
      </div>
    </div>
  );
}

export default NoticeBoardCard;