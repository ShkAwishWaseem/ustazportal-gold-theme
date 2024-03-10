"use client";

import React, { useEffect ,useState } from 'react'
import { useRouter } from 'next/navigation'

const Card = ({title, paragraph , img , date , duration , ID }) => {
  const router = useRouter()
  const truncateText = (text, maxWords) => {
    const words = text.split(' ').slice(0, maxWords).join(' ');
    return words + (text.split(' ').length > maxWords ?  " Read more ......" : '');
  };
  const handlerClick  = (id) => {
    router.push(`/update/${id}`);
              }
  return (
    <div className="max-h-[500px] max-w-sm rounded overflow-hidden shadow-2xl bg-[#eaebed]">
    <img className="w-full max-h-96" src={img} alt="Sunset in the mountains" />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-gray-700 text-base text-[15px]">
        {truncateText(paragraph , 12)}
      </p>
    </div>
    <div className="px-6 pb-2">
      <button className='text-sm ml-0 my-4 bg-[#38664D] text-white duration-500 px-6 py-2 mx-4 hover:bg-[#406f55] rounded ' onClick={() => handlerClick(ID)}>Read more</button>
    </div>
  </div>
  )
}

export default Card
