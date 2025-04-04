import React from 'react'
import './Profile.css'
import Navbar from '../layout/Navbar/Navbar'
import { useSelector } from 'react-redux'
import csv from '../../adminComponent/Home/csvjson.json'

const Profile = () => {
  const { user } = useSelector((state) => state.user)
  // const { report_data } = useSelector((state) => state.myCourse)
  // console.log(csv)

  // Profile calculation
  const email = user.email
  // const email = 'srinidhisalunke09@gmail.com'
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

  const curUser = csv.filter((elm) => elm.student_email === email && elm.task_type === "MCQ")
  console.log(curUser)
  curUser.map((elm) => {
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

  const percentage = (partialValue, totalValue) => Math.round((100 * partialValue) / totalValue);

  const Problem_Solving = percentage(correct_How, total_How)
  const Creativity = percentage(correct_What + correct_Which, total_What + total_Which)
  const Collaboration = percentage(correct_Who, total_Who)
  const Contextual_Thinking = percentage(correct_Where, total_Where)
  const Prioritization = percentage(correct_When, total_When)
  const Curiosity = percentage(correct_Why, total_Why)

  console.log("How", total_How, correct_How, incorrect_How, Problem_Solving)
  // console.log("what",total_What, correct_What, incorrect_What, Creativity)
  // console.log("who",total_Who, correct_Who, incorrect_Who, Collaboration)
  // console.log("where",total_Where, correct_Where, incorrect_Where, Contextual_Thinking)
  // console.log("when",total_When, correct_When, incorrect_When, Prioritization)
  // console.log("which",total_Which, correct_Which, incorrect_Which, Creativity)
  // console.log("why",total_Why, correct_Why, incorrect_Why, Curiosity)

  // console.log("Problem_Solving", percentage(correct_How, total_How))
  console.log("Creativity", Creativity)
  console.log("Collaboration", Collaboration)
  console.log("Contextual_Thinking", Contextual_Thinking)
  console.log("Prioritization", Prioritization)
  console.log("Curiosity", Curiosity)

  console.log(Number((100 * 0) / 0))

  return (
    <>
      <Navbar />
      {/* <iframe src='https://www.interleap.com/' title='interlib' className='iframe-custom'/> */}
      <div className='profile_container'>
        <div className='profile_container_left'>
          <h1 className='academic_heading'>Name</h1>
          <h3 className='academic_subHeading'>{user.name}</h3>

          <h1 className='academic_heading'>Email</h1>
          <h3 className='academic_subHeading'>{user.email}</h3>

          <h1 className='academic_heading'>Branch</h1>
          <h3 className='academic_subHeading'>{user.branch.name}</h3>

          <h1 className='academic_heading'>Phone</h1>
          <h3 className='academic_subHeading'>{user.phone}</h3>

          <h1 className='academic_heading'>Usn</h1>
          <h3 className='academic_subHeading'>{user.roll_no}</h3>

          <h1 className='academic_heading'>College</h1>
          <h3 className='academic_subHeading'>{user.college.name}</h3>

          <h1 className='academic_heading'>University</h1>
          <h3 className='academic_subHeading'>{user.university.name}</h3>
        </div>


        <div class="dashboard">

          {/* <div class="card">
            <div class="profile">
              <div class="profile-info">
                <p>Regularity</p>
                <p>Determination</p>
                <p>Focus</p>
                <p>Goal Orientation</p>
              </div>
            </div>
          </div> */}


          <div class="card task-grid">
            <div class="task-card">
              <h4>Prioritized Tasks</h4>
              <p>83%</p>
            </div>
            <div class="task-card">
              <h4>Additional Tasks</h4>
              <p>56%</p>
            </div>
          </div>


          <div class="card developed-areas">
            <h3>Developed Areas</h3>
            <div class="area">
              <h4>Curiosity</h4>
              <div class="bar-container"><div class="bar curiosity-bar"></div></div>
            </div>
            <div class="area">
              <h4>Creativity</h4>
              <div class="bar-container"><div class="bar creativity-bar"></div></div>
            </div>
            <div class="area">
              <h4>Problem Solving</h4>
              <div class="bar-container"><div class="bar problem-solving-bar"></div></div>
            </div>
            <div class="area">
              <h4>Collaboration</h4>
              <div class="bar-container"><div class="bar teamwork-bar"></div></div>
            </div>
            <div class="area">
              <h4>Contextual Thinking</h4>
              <div class="bar-container"><div class="bar adaptability-bar"></div></div>
            </div>
            <div class="area">
              <h4>Prioritization,</h4>
              <div class="bar-container"><div class="bar adaptability-bar"></div></div>
            </div>
          </div>


          <div class="card meetings">
            <h3>Live Sessions</h3>
            <ul>
              <li>
                <span>Quick Daily Meeting</span>
                <span>8:15 AM</span>
              </li>
              <li>
                <span>John Onboarding</span>
                <span>9:30 PM</span>
              </li>
              <li>
                <span>Call With a New Team</span>
                <span>2:22 PM</span>
              </li>
              <li>
                <span>Lead Designers Event</span>
                <span>4:00 PM</span>
              </li>
            </ul>
          </div>


          <div class="card course-progress">
            <h3>Where do I stand</h3>
            <h4>Determination</h4>
            <div class="progress-bar"><span ></span></div>
            <h4>Focus</h4>
            <div class="progress-bar"><span ></span></div>
            <h4>Regularity</h4>
            <div class="progress-bar"><span ></span></div>
            <h4>Goal Orientation</h4>
            <div class="progress-bar"><span ></span></div>
            <div class="position-chart">
              <canvas id="positionChart"></canvas>
            </div>
          </div>
        </div>
        {/* <div className='profile_container_right'>
          <h1>Your Courses</h1>
          <div className='course_report_container'>
            <h1 className='course_report_heading'>{report_data.courseName}</h1>
            <div className='course_topic_card_parent'>
              {report_data?.topic?.map((elm, index) => {
                return <div className='course_topic_card' key={index}>
                  <h1 className='course_report_subHeading'>Topic Name - {elm.topicName}</h1>
                  <path className='course_report_subHeading'>Total Task - {elm.totalTasks}</path>
                  <path className='course_report_subHeading'>Completed Task - {elm.tasksStatus.completed}</path>
                  <path className='course_report_subHeading'>Task In Progress - {elm.tasksStatus.inProgress}</path>
                  <path className='course_report_subHeading'>Pending Task - {elm.tasksStatus.pending}</path>
                </div>
              })}
            </div>
          </div>
        </div> */}
      </div>
    </>
  )
}

export default Profile
