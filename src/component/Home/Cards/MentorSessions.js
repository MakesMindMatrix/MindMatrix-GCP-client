import React, { useEffect, useState } from "react";
import "./MentorSessions.css";

const MentorSessions = () => {
  const [sessions, setSessions] = useState([
    {
      sessionName: "Session 1 ",
      mentorName: "Tirumal Desai",
      date: "24th July 2025",
      time: "5 p.m.",
    },
    {
      sessionName: "Session 2 ",
      mentorName: "Ankush Mehta",
      date: "26th July 2025",
      time: "7 p.m.",
    },
  ]);

  return (
    <div className="mentor-container">
      <h2>Connect with Mentor</h2>
      {sessions.map((session, index) => (
        <div key={index} className="mentor-card">
          <h3>{session.sessionName}</h3>
          <p>
            Mentor Name : <strong>{session.mentorName}</strong>
          </p>
          <p>Date : {session.date}</p>
          <p>Time : {session.time}</p>
          <button className="book-button">Book Your Seat →</button>
        </div>
      ))}
    </div>
  );
};

export default MentorSessions;
