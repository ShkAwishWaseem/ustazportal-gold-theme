"use client"
import React from 'react'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import GroupsIcon from '@mui/icons-material/Groups';
import { GrCertificate } from "react-icons/gr";


const ApproachPage = () => {
  return (
    <div className='mt-[100px] w-[90%] m-auto '>
               <h1 className='text-3xl text-white'>Our <span className='text-[#C0A842]'> Approach</span></h1>
               <p className='sm:text-sm  mt-2 md:text-[16px] text-white '>We are dedicated to offering students the chance to learn Arabic and the Quran conveniently from their homes through our online Quran and Arabic teachers. Enrolling in our courses will make it effortless for you to read the Quran online.</p>
               <p className= "sm:text-sm md:text-xl mt-2 text-[#C0A842]">We go beyond being an ordinary online Quran academy. We serve as a portal connecting tutors with tutees.</p>
               <p className='sm:text-sm mt-2 md:text-[16px] text-white'>We guide you in matters of faith and offer an optimal environment for learning Tajweed online at our UstazPortal. Discover the best way to learn Quran online with us!</p>
               <div className='flex mt-4 flex-col bg-[#eaebed] text-[#406f55] shadow-2xl h-auto p-4 rounded '>
                    <div>
               <ul className=''>
                    <li className='my-3'><GroupsIcon/> Select your perfect tutor from our diverse pool of Islamic tutors</li>
                    <li className='my-3 '><AssignmentTurnedInIcon/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius distinctio molestias ratione explicabo beatae? Molestiae sequi inventore mollitia quibusdam voluptate, ratione natus fugit aspernatur distinctio dicta rem nesciunt voluptas velit?</li>
                    <li className='my-3 '><VerifiedUserIcon/> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod natus rem harum quasi debitis, assumenda sunt accusantium nulla atque dolorem maxime placeat molestias odit nostrum! Error maxime libero modi veritatis.</li>
                    <li className='my-3 '><span className='inline-block text-2xl '><GrCertificate/></span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum quidem rerum sint quia quam natus, repellendus reprehenderit iure nulla, praesentium ipsa mollitia corporis aspernatur asperiores rem consequatur sunt totam recusandae.</li>
                    
               </ul>
               </div>
               <div>
                    <button className='text-sm mt-4 bg-[#38664D] text-white duration-500 px-6 py-2 m-auto w-[200px] rounded hover:-translate-y-2 hover:bg-[#C0A842] '>Get a free trail </button>
               </div>
               </div>
    </div>
  )
}

export default ApproachPage
