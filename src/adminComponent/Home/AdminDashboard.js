import React from "react";
import "./AdminDashboard.css";
import AdminNavbar from "../Layout/AdminNavbar/AdminNavbar";
import csv from './csvjson.json'

const AdminDashboard = () => {
  console.log(csv.map((elm) => {
    return elm.task_type
  }))

  const email = 'srinidhisalunke09@gmail.com'
  let total_How = 0
  let correct_How = 0
  let incorrect_How = 0

  let total_What = 0
  let correct_What = 0
  let incorrect_What = 0

  let total_Who = 0
  let correct_Who = 0
  let incorrect_Who = 0

  let total_Where = 0
  let correct_Where = 0
  let incorrect_Where = 0

  let total_When = 0
  let correct_When = 0
  let incorrect_When = 0

  let total_Which = 0
  let correct_Which = 0
  let incorrect_Which = 0

  let total_Why = 0
  let correct_Why = 0
  let incorrect_Why = 0

  const user = csv.filter((elm) => elm.student_email === email && elm.task_type === "MCQ")
  user.map((elm) => {
    const splitted_que = elm.task_question.split(" ")[0]

    switch (splitted_que) {
      case 'How':
        total_How = total_How + 1;
        elm.submission_content.task.task_answer.option.correct ? correct_How = correct_How + 1 : incorrect_How = incorrect_How + 1
        break;

      case 'What':
        total_What = total_What + 1;
        elm.submission_content.task.task_answer.option.correct ? correct_What = correct_What + 1 : incorrect_What = incorrect_What + 1
        break;

      case 'Who':
        total_Who = total_Who + 1;
        elm.submission_content.task.task_answer.option.correct ? correct_Who = correct_Who + 1 : incorrect_Who = incorrect_Who + 1
        break;

      case 'Where':
        total_Where = total_Where + 1;
        elm.submission_content.task.task_answer.option.correct ? correct_Where = correct_Where + 1 : incorrect_Where = incorrect_Where + 1
        break;

      case 'When':
        total_When = total_When + 1;
        elm.submission_content.task.task_answer.option.correct ? correct_When = correct_When + 1 : incorrect_When = incorrect_When + 1
        break;

      case 'Which':
        total_Which = total_Which + 1;
        elm.submission_content.task.task_answer.option.correct ? correct_Which = correct_Which + 1 : incorrect_Which = incorrect_Which + 1
        break;

      case 'Why':
        total_Why = total_Why + 1;
        elm.submission_content.task.task_answer.option.correct ? correct_Why = correct_Why + 1 : incorrect_Why = incorrect_Why + 1

        break;
      default:
        return null
    }
    return splitted_que
  })

  // const percentage = (partialValue, totalValue) => (100 * partialValue) / totalValue;

  // const Problem_Solving = percentage(correct_How, total_How)
  // const Creativity = percentage(correct_What + correct_Which, total_What + total_Which)
  // const Collaboration = percentage(correct_Who, total_Who)
  // const Contextual_Thinking = percentage(correct_Where, total_Where)
  // const Prioritization = percentage(correct_When, total_When)
  // const Curiosity = percentage(correct_Why, total_Why)

  // console.log("How",total_How, correct_How, incorrect_How, Problem_Solving)
  // console.log("what",total_What, correct_What, incorrect_What, Creativity)
  // console.log("who",total_Who, correct_Who, incorrect_Who, Collaboration)
  // console.log("where",total_Where, correct_Where, incorrect_Where, Contextual_Thinking)
  // console.log("when",total_When, correct_When, incorrect_When, Prioritization)
  // console.log("which",total_Which, correct_Which, incorrect_Which, Creativity)
  // console.log("why",total_Why, correct_Why, incorrect_Why, Curiosity)

  // console.log(filtered_user.map((elm) => elm.filter((element) => {
  //   return element === "How"
  //     || element === "What"
  //     || element === "Who"
  //     || element === "Where"
  //     || element === "When"
  //     || element === "Which"
  //     || element === "Why"
  // })))
  return (
    <div className="dashboard-container">
      {/* Sidebar Menu */}
      <AdminNavbar />

      {/* Main Content Area */}
      <div className="main-content">
        <h1>Welcome to the Admin Dashboard</h1>
        <p>This is where the main content will go.</p>
      </div>
    </div>
  );
};

export default AdminDashboard;