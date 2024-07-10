import React from 'react'
import MissionVision from './MissionVision'
import WhatApart from './WhatApart'
import CoreValues from './CoreValues'
import portfolioBg from '../components/Image/Resolute-UI-Portfolio.jpg'

const About = () => {
  return (
    <>
    <section className=" bg-[#F4F5F6]">
        <div className='max-w-[1300px] mx-auto p-4 pt-6 md:p-6 lg:p-12  bg-[#0E4669] text-white'
        style={{
          backgroundImage: `url(${portfolioBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        >
            <h2 className="text-4xl uppercase font-bold mb-5 text-center">About Us</h2>
            <h4 className="text-center text-xl mb-5 font-semibold">Dedicated to transforming opportunities into successes</h4>
        </div>
        <MissionVision/>
    </section>
    <WhatApart/>
    <CoreValues/>
    </>
    
  )
}

export default About