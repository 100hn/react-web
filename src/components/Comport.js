import React from 'react'
import portfolioBg from '../components/Image/Resolute-UI-Portfolio.jpg'

import Sanghi from '../assets/Portfolio/sanghi-logo.jpg'
import shareSquare from '../assets/Portfolio/shareSquare.jpg'
import HDC from '../assets/Portfolio/hdc-logo.jpg'
import Delhi from '../assets/Portfolio/dt-logo.jpg'
const Comport = () => {
  return (
    <section className=" bg-white">
      <div className=" h-410 relative">
        <img src={portfolioBg} alt="Image description" className="w-full object-cover" />
        <div className="text-overlay absolute top-1/2 left-0 right-0 text-center transform -translate-y-1/2 md:-translate-y-[100px]">
          <h2 className=" text-4xl font-bold text-white md:top-[-100px]">PORTFOLIO</h2>
        </div>
      </div>
      <div className="max-w-[1300px] mx-auto p-2 pt-5 md:p-6 lg:p-1">
        <div className="grid md:grid-cols-4 gap-10 justify-center relative md:top-[-140px]">
          <div className="relative h-350 bg-cover bg-center rounded-lg overflow-hidden shadow-md transition duration-300 ease-in-out cursor-pointer">
            <div className="relative h-full overflow-hidden">
             <a href='/portfolio'>
              <img src={Sanghi} alt="Sanghi Industries Ltd. logo" className="w-full h-full object-cover transition duration-300 ease-in-out" />
              </a>
            </div>
          </div>
          <div className="relative h-350 bg-cover bg-center rounded-lg overflow-hidden shadow-md transition duration-300 ease-in-out cursor-pointer">
            
            <div className="relative h-full overflow-hidden">
            <a href='/portfolio'>
              <img src={shareSquare} alt="ShareSquare logo" className="w-full h-full object-cover transition duration-300 ease-in-out" />
              </a>
            </div>
          </div>
          <div className="relative h-350 bg-cover bg-center rounded-lg overflow-hidden shadow-md transition duration-300 ease-in-out cursor-pointer">
            
            <div className="relative h-full overflow-hidden">
            <a href='/portfolio'>
              <img src={HDC} alt="ShareSquare logo" className="w-full h-full object-cover transition duration-300 ease-in-out" />
              </a>
            </div>
        </div>
        <div className="relative h-350 bg-cover bg-center rounded-lg overflow-hidden shadow-md transition duration-300 ease-in-out cursor-pointer">
            <div className="relative h-full overflow-hidden">
            <a href='/portfolio'>
              <img src={Delhi} alt="ShareSquare logo" className="w-full h-full object-cover transition duration-300 ease-in-out" />
              </a>
            </div>
        </div>
        
    </div>
    </div>
    </section>
        
  )
}

export default Comport