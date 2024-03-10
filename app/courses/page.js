// "use client"
import React from 'react'
import Navbar from '../components/Navbar'
import FooterPage from '../components/Footer'
import Courses from '../components/Courses'
import axios from "axios"

const CoursesPage = async() => {
    //  let response = await axios.get("/api/courses")
    //  console.log(response);

  return (
    <>
     <Navbar/>
     <Courses/>
   {/* <FooterPage/> */}
    </>
  )
}

export default CoursesPage
