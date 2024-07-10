import React from 'react'

import WhatApartimg from '../assets/WhatApart.jpg'
const WhatApart = () => {
  return (
    <section className="w-full bg-[#0A235C] py-10">
      <div className="relative max-w-[1300px] mx-auto p-4 pt-5 md:p-6 lg:p-1">
      <div className="text-overlay absolute top-[5%] md:top-[10%] md:left-[50%] left-0 right-0 text-center transform -translate-y-1/2  md:transform md:-translate-x-1/2 ">
          <h2 className="text-3xl font-bold text-white pb-4 md:text-4xl">What sets us Apart?</h2>
          <p className='pb-6 mb-10 text-white'> Empowering Your Financial Journey with Expertise and Integrity</p>
        </div>
        <div className='pt-28'>
        <div className=' m-auto py-2  px-2 grid lg:grid-cols-2 gap-5 '>

        {/* left Side  */}
        <div className='flex flex-col h-full justify-center '>
            <div className='py-4 px-6  bg-white text-black shadow-md rounded'>
             <h3 className='text-xl md:text-xl font-semibold pt-4 pb-2 text-[#0E4669]'>Strategic Diversification:</h3>
            <p className='text-x py-1 text-justify'>Resolute excels in identifying and investing in a diverse range of industries, ensuring a balanced and robust portfolio that mitigates risks and maximizes returns. </p>
            <h3 className='text-xl md:text-xl font-semibold pt-4 pb-2 text-[#0E4669]'>Innovative Investment Strategies:</h3>
            <p className='text-x py-1 text-justify'>Resolute employs cutting-edge investment techniques and innovative strategies to stay ahead of market trends, ensuring that each investment is positioned for optimal growth and success. </p>
            <h3 className='text-xl md:text-xl font-semibold pt-4 pb-2 text-[#0E4669]'>Proven Track Record:</h3>
            <p className='text-x py-1 text-justify'>With successful partnerships and investments like Sanghi Industries Ltd., Hair Drama Co., ShareSquare and Delhi Toofans Volleyball team, Resolute showcases a proven track record of identifying and nurturing high-potential ventures, demonstrating its ability to achieve significant returns.</p>
            </div>
        </div>
        {/* Right Side  */}
        <div className='grid rounded '>
            <img className='object-cover w-full h-[460px] rounded' src={WhatApartimg} alt='WhatSetApart'></img>
        </div>
    </div>
    </div>
      </div>
    </section>
    
  )
}

export default WhatApart