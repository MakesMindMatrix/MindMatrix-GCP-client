import React from 'react'
import './SlotCard.css'
import { GoClock } from "react-icons/go";
import { LuUsers } from "react-icons/lu";
import { toast } from 'react-toastify';

const SlotCard = ({ data, handleSelect, selectedSlots, slotData, handleInputChange,setValidAttenees }) => {
    const date = new Date(data.startTiming).toDateString()
    const startTime = new Date(data.startTiming).toLocaleTimeString()
    const endTime = new Date(data.endTiming).toLocaleTimeString()
    const isSelected = selectedSlots.includes(data._id)
    const slotInputs = slotData[data._id] || { attendees: '', remarks: '' } 

    function AttendeesAlert(){
        if(slotInputs.attendees > data.attendees - data.enrolledAttendees){
            setValidAttenees(false)          
        }else{
            return slotInputs.attendees;
        }
    }

    AttendeesAlert()

    const handleFullSeat = () => {
        toast.error("Seats are full")
    }

    return (
        <div className='slotCard_container'>
            <div className='slot_content_box' style={{justifyContent: 'space-between'}}>
                <h1 className='slot_date'>{date}</h1>
                <h3 className='slot_seatsLeft'>{data.attendees - data.enrolledAttendees} seats left</h3>
            </div>
            <div className='slot_content_box' style={{marginBottom: '1rem'}}>
                <GoClock className='slot_icon'/>
                <h2 className='slot_timing'>{startTime} - {endTime}</h2> 
            </div>

            <div className='slot_content_box' style={{marginBottom: '2rem'}}>
                <LuUsers className='slot_icon'/>
                <h2 className='slot_attendees'>Current attendees {data.enrolledAttendees}/{data.attendees}</h2>
            </div>
            {isSelected && (
                <div className='slot_form'>
                    <h1 className='expeced_attendees'>Expected Attendees</h1>
                    <input
                        type="number"
                        placeholder='Number of attendees'
                        value={slotInputs.attendees}
                        onChange={(e) => handleInputChange(data._id, "attendees", e.target.value)}
                    />
                    <h1 className='slot_remarks'>Remarks</h1>
                    <textarea
                        placeholder='Specify the Year and Branch of Students'
                        value={slotInputs.remarks}
                        onChange={(e) => handleInputChange(data._id, "remarks", e.target.value)}
                    />
                </div>
            )}
            <button onClick={data.attendees - data.enrolledAttendees === 0 ? () => handleFullSeat()  : () => handleSelect(data._id)} className='slot_select_btn'>
                {isSelected ? "Unselect" : "Select Slot"}
            </button>
        </div>
    )
}
// () => handleSelect(data._id)

export default SlotCard
