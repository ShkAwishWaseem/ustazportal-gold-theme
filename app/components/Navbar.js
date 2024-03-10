// "use client"

// import React , {useEffect, useState} from 'react'
// import {motion} from "framer-motion"
// import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
// import CloseIcon from '@mui/icons-material/Close';
// import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
// import EmailIcon from '@mui/icons-material/Email';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import XIcon from '@mui/icons-material/X';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import "../globals.css"
// import Image from "next/image"
// import logo from "../../public/assets/whiteLogo.png"


// const NavbarPage = () => {
//      const [open , isOpen ] = useState(false);
//      useEffect(() => {
//                isOpen(false)
//      }, []) 
//   return (


//     <>
//     <header className="header relative">
//      <motion.div className="w-full bg-[#C0A842] flex justify-around p-2 flex-wrap mob-header">
//           <motion.div className="left"
//                   initial={{x:-100 , opacity:0}}
//                   animate={{x:0, opacity:1 }}
//           >
//                <span><EmailIcon/> info@ustazportal.com</span>
//                <span className='ml-2'><LocalPhoneIcon/> +1 (929) 553-9388</span>
//           </motion.div>
//           <motion.div className="right "
//           initial={{x:100 , opacity:0}}
//           animate={{x:0, opacity:1 }}
          
//           >
               
//                <a href='#' className='ml-3 '><InstagramIcon/></a>
//                <a href='#' className='ml-3 '><FacebookIcon/></a>
//                <a href='#' className='ml-3 '><XIcon/></a>
//           </motion.div>
//      </motion.div>
//           <nav className='p-5 bg-white shadow  flex  items-center  justify-between   '>
//                <div className='flex justify-between items-center '>
//                     <a className='text-2xl text-[#406f55] cursor-pointer font-bold tracking-[7px]'>
//                         USTAZPORTAL
//                     </a>
//                     <span className="text-3xl cursor-pointer mx-2  mob-icons ">
//                          {open ? 
//                          <div onClick={() => isOpen(false)}><CloseIcon fontSize='30px' /> </div> :
//                          <div className="absolute r-0" onClick={() => isOpen(true)}><MenuOutlinedIcon fontSize='30px' /></div>
//                          }
//                     </span> 
//                </div>
//                {/* For Desktop  */}
//                <ul className='mob-lists flex items-center justify-center'> 
                    // <li className='mx-4     my-0'><a href="#" className='text-sm uppercase hover:text-[#C0A842] duration-50'>Home</a></li>
                    // <li className='mx-4     my-0'><a href="#" className='text-sm uppercase hover:text-[#C0A842] duration-50'>Courses</a></li>
                    // <li className='mx-4     my-0'><a href="#" className='text-sm uppercase hover:text-[#C0A842] duration-50'>Our Reach</a></li>
                    // <li className='mx-4     my-0'><a href="#" className='text-sm uppercase hover:text-[#C0A842] duration-50'>Resources</a></li>
                    // <li className='mx-4     my-0'><a href="#" className='text-sm uppercase hover:text-[#C0A842] duration-50'>About us</a></li>
                    // <li className='mx-4     my-0'><a href="#" className='text-sm uppercase hover:text-[#C0A842] duration-50'>Contact</a></li>
                    // <button className='text-sm bg-[#38664D] text-white duration-500 px-6 py-2 mx-4 hover:bg-[#406f55] rounded animate-[wiggle_1s_ease-in-out_infinite] '>Get a free trail </button>
//                </ul>
//                   {open ? 
//                     <ul className=' opacity-0 bg-[#C0A842] text-white left-0 top-[93px] py-20 w-full text-center  transition-all duration-500 mob-navbar'>
//                     <li className='mx-4     my-0'><a href="#" className='text-xl hover:text-[#38664D] duration-50 transition-all'>HOME</a></li>
//                     <li className='mx-4     my-0'><a href="#" className='text-xl hover:text-[#38664D] duration-50 transition-all'>WHY CHOOSE USE</a></li>
//                     <li className='mx-4     my-0'><a href="#" className='text-xl hover:text-[#38664D] duration-50 transition-all'>OUR APPROACH</a></li>
//                     <li className='mx-4     my-0'><a href="#" className='text-xl hover:text-[#38664D] duration-50 transition-all'>PROFILE</a></li>
//                     <li className='mx-4     my-0'><a href="#" className='text-xl hover:text-[#38664D] duration-50 transition-all'>COURSES</a></li>
//                     <li className='mx-4     my-0'><a href="#" className='text-xl hover:text-[#38664D] duration-50 transition-all'>ENROLLMENT</a></li>
//                     <li className='mx-4     my-0'><a href="#" className='text-xl hover:text-[#38664D] duration-50 transition-all'>REVIEWS</a></li>
//                     <li className='mx-4     my-0'><a href="#" className='text-xl hover:text-[#38664D] duration-50 transition-all'>PRIVACY POLICY</a></li>
//                     <li className='mx-4     my-0'><a href="#" className='text-xl hover:text-[#38664D] duration-50 transition-all'>REFUND POLICY</a></li>
//                     <li className='mx-4     my-0'><a href="#" className='text-xl hover:text-[#38664D] duration-50 transition-all'>TERMS AND CONDITIONS</a></li>
//                     <li className='mx-4     my-0'><a href="#" className='text-xl hover:text-[#38664D] duration-50 transition-all'>REQUEST A DEMO</a></li>
//                     <li className='mx-4     my-0'><a href="#" className='text-xl hover:text-[#38664D] duration-50 transition-all'>CONTACT</a></li>
//                     <li className='mx-4     my-0'><a href="#" className='text-xl hover:text-[#38664D] duration-50 transition-all'>PRICING</a></li>
//                     <li className='mx-4     my-0'><a href="#" className='text-xl hover:text-[#38664D] duration-50 transition-all'>FAQS</a></li>
//                     <li className='mx-4     my-0'><a href="#" className='text-xl hover:text-[#38664D] duration-50 transition-all'>OUR APPROACH</a></li>
//                     <li></li>
//                </ul>: " "}
//           </nav> 
//           </header>
//     </>
//   )
// }

// export default NavbarPage



"use client"

import React , {useEffect, useState} from 'react'
import {motion} from "framer-motion"
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseIcon from '@mui/icons-material/Close';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import "../globals.css"
import Image from "next/image"
import logo from "../../public/assets/whiteLogo.png"
import Link from "next/link"


const Navbar = () => {
     const [open , isOpen] = useState(false)
  return (
    <header>
          <nav>
               <div className="w-full head bg-[#C0A842]  flex justify-around p-2">
                    <div className="l px-2">
                    <span><EmailIcon/> info@ustazportal.com</span>
                    <span className='ml-2'><LocalPhoneIcon/> +1 (929) 553-9388</span>
                    </div>
                    <div className="r px-2">
                    <span className='ml-2'><FacebookIcon/></span>
                    <span className='ml-2'><InstagramIcon/></span>
                    <span className='ml-2'><XIcon/></span>
                    </div>
               </div>
               <div className="mob-head flex justify-around bg-[#C0A842]  w-full">
               <div className="p-2">
                    <span className='text-sm'><EmailIcon/> info@ustazportal.com</span>
                    <span className='ml-2 text-sm'><LocalPhoneIcon/> +1 (929) 553-9388</span>
                    </div>
               </div>
               {/* Navbar */}
               <div className="relative flex justify-between items-center bg-slate-100 w-full p-5 ">
               <button  onClick={() => isOpen(true)} className="icon absolute right-4 text-[#C0A842]" >
                    <MenuOutlinedIcon/>
               </button>
               <div className="left">
               <Link href="/" className='text-2xl text-[#406f55] cursor-pointer font-bold tracking-[7px]'>                         USTAZPORTAL                     </Link>
               </div>
               <div className="right">
                    <ul className='flex items-center '>
                         {/* <li className='px-3'><Link href="#">Home</Link></li>
                         <li className='px-3'><Link href="#">about</Link></li>
                         <li className='px-3'><Link href="#">myself</Link></li>
                         <li className='px-3'><Link href="#">Contact</Link></li>
                         <li className='px-3'><Link href="#">more</Link></li>
                         <li className='px-3'><Link href="#">reasources</Link></li> */}
                         <li className='mx-4     my-0'><Link href="#" className='text-sm uppercase hover:text-[#C0A842] duration-50'>Home</Link></li>
                    <li className='mx-4     my-0'><Link href="#" className='text-sm uppercase hover:text-[#C0A842] duration-50'>Courses</Link></li>
                    <li className='mx-4     my-0'><Link href="#" className='text-sm uppercase hover:text-[#C0A842] duration-50'>Our Reach</Link></li>
                    <li className='mx-4     my-0'><Link href="#" className='text-sm uppercase hover:text-[#C0A842] duration-50'>Resources</Link></li>
                    <li className='mx-4     my-0'><Link href="#" className='text-sm uppercase hover:text-[#C0A842] duration-50'>About us</Link></li>
                    <li className='mx-4     my-0'><Link href="#" className='text-sm uppercase hover:text-[#C0A842] duration-50'>Contact</Link></li>
                         <button className='text-sm bg-[#38664D] text-white duration-500 px-6 py-2 mx-4 hover:bg-[#406f55] rounded animate-[wiggle_1s_ease-in-out_infinite] '>Get a free trail </button>
                    </ul>
               </div>
              
</div>
{open ? 
               <>

                    <ul className='z-50 absolute bg-[#C0A842] text-white left-0 top-0 py-20  w-full text-center  transition-all duration-500 mob-navbar'>
                         <button className='cursor-pointer' onClick={() => isOpen(false)}><CloseIcon/> </button>
                    <li className='mx-4  mb-4 mt-4'><a href="#" className='text-xl hover:text-[#38664D] duration-50 transition-all'>HOME</a></li>
                    <li className='mx-4  mb-4   my-0'><a href="#" className='text-xl hover:text-[#38664D] duration-50 transition-all'>WHY CHOOSE USE</a></li>
                    <li className='mx-4  mb-4   my-0'><a href="#" className='text-xl hover:text-[#38664D] duration-50 transition-all'>OUR APPROACH</a></li>
                    <li className='mx-4  mb-4   my-0'><a href="#" className='text-xl hover:text-[#38664D] duration-50 transition-all'>PROFILE</a></li>
                    <li className='mx-4  mb-4   my-0'><a href="#" className='text-xl hover:text-[#38664D] duration-50 transition-all'>COURSES</a></li>
                    <li className='mx-4  mb-4   my-0'><a href="#" className='text-xl hover:text-[#38664D] duration-50 transition-all'>ENROLLMENT</a></li>
                    <li className='mx-4  mb-4   my-0'><a href="#" className='text-xl hover:text-[#38664D] duration-50 transition-all'>REVIEWS</a></li>
                    <li className='mx-4  mb-4   my-0'><a href="#" className='text-xl hover:text-[#38664D] duration-50 transition-all'>PRIVACY POLICY</a></li>
                    <li className='mx-4  mb-4   my-0'><a href="#" className='text-xl hover:text-[#38664D] duration-50 transition-all'>REFUND POLICY</a></li>
                    <li className='mx-4  mb-4   my-0'><a href="#" className='text-xl hover:text-[#38664D] duration-50 transition-all'>TERMS AND CONDITIONS</a></li>
                    <li className='mx-4  mb-4   my-0'><a href="#" className='text-xl hover:text-[#38664D] duration-50 transition-all'>REQUEST A DEMO</a></li>
                    <li className='mx-4  mb-4   my-0'><a href="#" className='text-xl hover:text-[#38664D] duration-50 transition-all'>CONTACT</a></li>
                    <li className='mx-4  mb-4   my-0'><a href="#" className='text-xl hover:text-[#38664D] duration-50 transition-all'>PRICING</a></li>
                    <li className='mx-4  mb-4   my-0'><a href="#" className='text-xl hover:text-[#38664D] duration-50 transition-all'>FAQS</a></li>
                    
               </ul>
               </>: " " }
               
          </nav>

    </header>
  )
}

export default Navbar
