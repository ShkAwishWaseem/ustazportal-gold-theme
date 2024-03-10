
import React from 'react';

const ChoosePage = (props) => {
  return (
    <div className="bg-[#C0A842] mt-[200px]">
      <section
        id="features"
        className="relative block px-6 py-10 md:py-20 md:px-10 "
      >
        <div className="relative mx-auto max-w-5xl text-center">
          <span className="text-white my-3 flex items-center justify-center font-medium uppercase tracking-wider">
            Why choose us
          </span>
          <h2 className="block w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
            Build a Website That Your Customers Love
          </h2>
          <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-white">
            Our templates allow for maximum customization. No technical skills required – our intuitive design tools
            let you get the job done easily.
          </p>
        </div>

        <div className="relative  mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">

          <div className=" text-white rounded-md bg-[#406f55] p-8 text-center shadow">
          
            <h3 className="mt-6 ">Customizable</h3>
            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-[#C0A842] ">
              Tailor your landing pages look and feel, from the color scheme to the font size, to the design of the page.
            </p>
          </div>

          <div className="  text-white rounded-md p-8 text-center shadow bg-[#406f55]">
            <h3 className="mt-6 ">Fast Performance</h3>
            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-[#C0A842]
]">  
              We build our templates for speed in mind, for super-fast load times so your customers never waver.
            </p>
          </div>

          <div className="text-white rounded-md  bg-[#406f55] p-8 text-center shadow">
            
            <h3 className="mt-6 ">Fully Featured</h3>
            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-[#C0A842]">
              Everything you need to succeed and launch your landing page, right out of the box. No need to install
              anything else.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChoosePage;
