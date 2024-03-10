"use client"

import React , {useEffect , useState}from 'react'
import axios from "axios"
import Card from './Card'
import FooterPage from './Footer'
import Spinner from './Spinner'
import ScrollToTopButton from './STT'

const Courses = () => {
     const [courses, setCourses] = useState([]);
     const [loader , setLoader] = useState(false);
     useEffect(() => {
          const fetchData = async () => {
            try {
              const response = await axios.get('/api/courses');
              setCourses(response.data.courses);
              if(response) {
                   setLoader(false)
               }

            } catch (error) {
              console.error('Error fetching data:', error);
              setLoader(true)
            }
          };
      
          fetchData();
        }, []);
  return (
<>
{/* {
     loader ? 
<Spinner/>
      :   
      <>
      <div className='flex justify-center items-center flex-wrap my-[100px] gap-5'>
          {courses && courses.map((item) => {
               return (
                    <div key={item._id}>
                         <Card title={item.headline} paragraph={item.content} img={item.image} date={item.createdAt}
                              duration={item.duration} ID={item._id}
                         />
                    </div>
               )
          })}
      </div> */}
 <div className='flex justify-center items-center flex-wrap my-[100px] gap-5'>
          {courses && courses.map((item) => {
               return (
                    <div key={item._id}>
                         <Card title={item.headline} paragraph={item.content} img={item.image} date={item.createdAt}
                              duration={item.duration} ID={item._id}
                         />
                    </div>
               )
          })}
          </div> 
          <ScrollToTopButton/>
<FooterPage/>
      </>
  )
}

export default Courses
