import React from 'react'
import { ArrowDownwardRounded } from '@mui/icons-material';

const HeroPage = () => {
  return (
    <div className=' relative text-white w-[80%] m-auto mt-[10%] text-center'>

    <h1 className='text-3xl mb-4 text-[#C0A842]'>Lorem ipsum dolor sit amet consectetur.</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quibusdam tempore pariatur nemo, distinctio incidunt laudantium sunt aperiam, amet esse rerum. Nisi blanditiis, repellat dicta deleniti velit cumque veniam accusamus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem voluptatem, eos tempora, mollitia vel earum minima esse reprehenderit accusantium aliquid nostrum, necessitatibus aspernatur? Maxime commodi ullam, alias quae minima deserunt.</p>
    <button className='text-sm mt-4 bg-[#C0A842] text-white px-6 py-2 mx-4 hover:bg-[#9d8f53]  transition-all duration-500 rounded '>Courses we offer</button>
    <div className=" mt-[100px] text-[#C0A842]"><span className='border-[1px] border-[#C0A842] border-solid rounded-[100%] p-1 mr-2'><ArrowDownwardRounded/></span>Why Choose us</div>
    </div>
  )
}

export default HeroPage;
