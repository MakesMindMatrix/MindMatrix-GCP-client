import React, { useEffect, useState } from "react";
import "./DashboardMindmatrix.css";
import axios from "axios";
import Navbar from "../layout/Navbar/Navbar";
import positionIcon from "./images/position-icon.svg";
import taskIcon from "./images/total_task_icon.svg";
import submittedIcon from "./images/task_submitted_icon.svg";
import { createChatAction, getChatBySessionId } from "../../actions/courseAction";
import { useDispatch, useSelector } from "react-redux";

const DashboardMindmatrix = () => {
  const { createChatData, chatData } = useSelector((state) => state.chatBot);
  const {user} = useSelector((state) => state.user);
  // const {  } = useSelector((state) => state.user);
  const [data, setData] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [showChat, setShowChat] = useState(false);
  const dispatch = useDispatch();

  console.log(chatData)

  const handleChatSend = () => {
    console.log("called")
    if (inputValue.trim() === "") return;
    console.log("send")

    dispatch(createChatAction(inputValue));
    setInputValue("");
  }

  useEffect(() => {
    // axios
    //   .get("http://your-backend-api.com/dashboard-data")
    //   .then((res) => setData(res.data))
    //   .catch((err) => console.error("Error fetching dashboard data:", err));
    dispatch(getChatBySessionId("mindmatrix-session-1"))
  }, [createChatData, dispatch]);
  useEffect(() => {
    // Dummy data instead of real API call
    const dummyData = {
      // user: {
      //   name: "Aniket ",
      //   college: " Government Engineering College (GEC) - Hassan",
      // },
      progress: {
        position: "25/200",
        tasksCompleted: "5/25",
        tasksSubmitted: "5/25",
        progressPercent: 25,
      },
      course: {
        title: "Mastering React.js",
        description:
          "A complete guide to learn React.js from basics to advanced.",
      },
    };

    // Simulate network delay
    setTimeout(() => {
      setData(dummyData);
    }, 500);
  }, []);

  if (!data) return <div>Loading...</div>;

  const { progress, course } = data;

  // FAQ Button Click Handler
  const handleFAQClick = (text) => {
    setInputValue(text);
  };
  return (
    <>
      <Navbar />
      <div className="dashboard-body">
        <div className="greeting">
          <p>
            Hello <strong>{user.name}</strong>,
          </p>
          <span className="subtext">from {user.college.name}</span>
        </div>

        <div className="main-content">

          {/* Course Info */}
          <div className="main-content-left">
            <div className="card course-card">
              <h3>{course.title}</h3>
              <p>{course.description}</p>

              <label className="progress-label">Progress</label>

              <div className="progress-bar_">
                <div
                  className="progress-fill"
                  style={{
                    width: `${progress.progressPercent}%`,
                  }}
                ></div>
                <span className="progress-text">25%</span>
              </div>

              <button className="continue-btn">Continue Learning</button>
            </div>

            {/* Progress Stats */}
            <div className="card progress-card">
              <h3>
                Progress Statistics
                <br />
                Overall
              </h3>

              <div className="progress-item">
                <img src={positionIcon} alt="icon" />
                <div>
                  <p className="label">Position</p>
                  <p className="value">{progress.position}</p>
                </div>
              </div>

              <div className="progress-item">
                <img src={taskIcon} alt="icon" />
                <div>
                  <p className="label">Total Tasks Completed</p>
                  <p className="value">{progress.tasksCompleted}</p>
                </div>
              </div>

              <div className="progress-item">
                <img src={submittedIcon} alt="icon" />
                <div>
                  <p className="label">Total Tasks Submitted</p>
                  <p className="value">{progress.tasksSubmitted}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Chat Bot */}
          <div className="main-content-right">
            <div className="zuno-container">
              {/* Zuno Card */}
              <div className="zuno-card">
                <div className="zuno-header">
                  <img src={positionIcon} alt="Zuno Icon" className="zuno-icon" />
                  <h3>Zuno</h3>
                </div>

                <div className="chat-history">
                  {chatData?.data.map((chat, index) => (
                    <div key={chat._id || index}>
                      <div className="chat-bubble user">
                        <strong>You:</strong> {chat.userMessage}
                      </div>
                      <div className="chat-bubble bot">
                        <strong>Zuno:</strong> {chat.botResponse}
                      </div>
                    </div>
                  ))}

                  {/* {loading && <div className="chat-bubble bot">Zuno is typing...</div>} */}
                  {/* {error && <div className="chat-error">Something went wrong: {error}</div>} */}
                </div>
                {/* <div className="zuno-msg">
                <img src={submittedIcon} alt="Zuno" className="zuno-avatar" />
                <p>
                  Hi <strong>{user.name}</strong>, I am Zuno.
                  <br />
                  I am your personal career buddy.
                  <br />
                  You can ask me any career- or academics-related doubts and
                  questions.
                </p>
              </div>

              <p className="faq-title">Frequently Asked Questions</p>

              <div className="faq">
                <button
                  onClick={() => handleFAQClick(`Hi Zuno, I am ${user.name}.`)}
                >
                  Hi Zuno, I am {user.name}.
                </button>
                <button
                  onClick={() =>
                    handleFAQClick("Tell me about current job market.")
                  }
                >
                  Tell me about current job market.
                </button>
                <button
                  onClick={() =>
                    handleFAQClick("I want to know about new technologies.")
                  }
                >
                  I want to know about new technologies.
                </button>
              </div> */}
              </div>

              {/*  Chatbox  */}
              <div className="chatbox-bar">
                <input
                  type="text"
                  placeholder="Ask Zuno Anything...."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <button className="send-btn">
                  <img src={positionIcon} alt="Send" className="send-icon" onClick={handleChatSend} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardMindmatrix;
