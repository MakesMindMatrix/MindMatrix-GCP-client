import React, { useEffect, useState } from 'react'
import './CollegeDashboard.css'
import Navbar from '../../component/layout/Navbar/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { allSlotsAction, updateSlotAction } from '../../actions/collegeAction'
import SlotCard from '../Cards/SlotCard/SlotCard'
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { toast } from 'react-toastify'

const CollegeDashboard = () => {
  const dispatch = useDispatch()

  const { allSlots } = useSelector((state) => state.slots)
  const { user } = useSelector((state) => state.user)
  const [validAttendees, setValidAttenees] = useState(true)
  const [selectedSlots, setSelectedSlots] = useState([])
  const [slotData, setSlotData] = useState({})
  const [userEmail, setUserEmail] = useState('')


  const handleSelect = (id) => {
    setSelectedSlots((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((slotId) => slotId !== id)
        : [...prevSelected, id] // Select new slot
    )
    setSlotData((prevData) => ({
      ...prevData,
      [id]: prevData[id] || { attendees: '', remarks: '' }
    }))
  }
  // console.log(selectedSlots)

  const handleInputChange = (id, field, value) => {
    setSlotData((prevData) => ({
      ...prevData,
      [id]: {
        ...prevData[id], // Preserve other fields
        [field]: value
      }
    }))
    setValidAttenees(true)
  }
  
  const submitSlot = () => {
    for (const key in slotData) {
      if (Object.prototype.hasOwnProperty.call(slotData, key)) {
        const element = slotData[key];
        if (element.attendees === '') {
          return toast.error("Please enter the number of attendees")
        }
        // console.log(element.attendees === '')
        if (Number(element.attendees) === 0) {
          return toast.error("Please enter more than zero")
        }
      }
    }
    if( !userEmail) {
      return toast.error("Please Enter your Email")
    }

    if (selectedSlots.length === 0) {
      return toast.error("Please select any slot first")
    }
    if (validAttendees === false) {
      return toast.error(`You can't enter more than available seat`)
    }
      dispatch(updateSlotAction(slotData, userEmail))
      dispatch(allSlotsAction())
      toast.success("Mail sent successfully")
      setSlotData({})
      setValidAttenees(true)
  }
  // console.log("slotData",slotData)

  useEffect(() => {
    dispatch(allSlotsAction())
  }, [dispatch, slotData])
  return (
    <>
      <div className='collegeDashboard_container'>
        <Navbar />
        <h1 className='college_hero_heading'>Book Workshop slots</h1>

        {/* College details */}
        <div className='college-container'>
          <HiOutlineBuildingLibrary className='slot_icon' style={{ color: '#0080ff' }} />
          <div style={{ marginLeft: '1rem' }}>
            <h1 className='college_container_heading'>Your Institute</h1>
            <h3 className='college_container_name'>{user.college.name}</h3>
            <p className='college_container_subHeading'>Select workshop slots for your students below. You can select multiple slots.</p>
            <input placeholder='Enter your Email' value={userEmail} type="text" onChange={(e) => setUserEmail(e.target.value)} className='slot_email_input'/>
          </div>
        </div>

        {/* Selected workshops */}
        {allSlots?.mySlot?.length > 0 && <div>
          <h1>Your Selected slots</h1>

          {allSlots?.mySlot.map((elm, index) => {
            return <div key={index} className='selectedSlot_container'>
              <div>
                <h1 className='slot_date'>{new Date(elm.startTiming).toDateString()}</h1>
                <h1>{new Date(elm.startTiming).toLocaleTimeString()} - {new Date(elm.endTiming).toLocaleTimeString()}</h1>
              </div>
              <div>
                <h1>Attendees: {elm.attendees}</h1>
              </div>
            </div>
          })}
        </div>}

        {/* Book slots */}
        <div className='card-heading'>
          <h1 className='college_slot_heading'>Available Workshop Slots</h1>

          <div className='college-line'></div>

          <div className='slot_container'>
            {allSlots?.filterSlots.map((elm) => (
              <SlotCard
                key={elm._id}
                data={elm}
                handleSelect={handleSelect}
                selectedSlots={selectedSlots}
                slotData={slotData}
                setValidAttenees={setValidAttenees}
                handleInputChange={handleInputChange}
              />
            ))}
          </div>
        </div>

        <button onClick={submitSlot} className='book_slot' >Book selected slot</button>

      </div>
    </>
  )
}

export default CollegeDashboard
