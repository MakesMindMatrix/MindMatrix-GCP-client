import React, { useEffect } from 'react'
import './AllCourses'
import { useDispatch } from 'react-redux'
import { allCourse } from '../../actions/courseAction'

const AllCourses = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(allCourse())
    }, [ dispatch])
  return (
    <>
      <div className='allcourses_container'>
        <h1>All courses</h1>
      </div>
    </>
  )
}

export default AllCourses
