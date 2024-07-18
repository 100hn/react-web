import React from 'react'
import portfolioBg from '../components/Image/Resolute-UI-Portfolio.jpg'

import Sanghi from '../assets/Portfolio/sanghi-logo.jpg'
import shareSquare from '../assets/Portfolio/shareSquare.jpg'
import HDC from '../assets/Portfolio/hdc-logo.jpg'
import Delhi from '../assets/Portfolio/dt-logo.jpg'
import { Link } from 'react-router-dom'
const Comport = () => {
  return (
    <section className=" bg-white">
      <div className=" h-410 relative">
        <img src={portfolioBg} alt="description" className="w-full object-cover" />
        <div className="text-overlay absolute top-1/2 left-0 right-0 text-center transform -translate-y-1/2 md:-translate-y-[55px]">
          <h2 className=" text-4xl font-bold text-white md:top-[-100px]">PORTFOLIO</h2>
        </div>
      </div>
      <div className="max-w-[1300px] mx-auto p-2 pt-5 md:p-3 lg:p-1">
        <div className="grid md:grid-cols-4 gap-12 justify-center relative md:top-[-100px]">
          <div className="relative h-350 bg-cover bg-center border-[2px] border-[#0A235C] rounded-lg overflow-hidden shadow-md transition duration-300 ease-in-out cursor-pointer">
            <div className="relative h-full overflow-hidden">
              <Link href='/portfolio'>
               <img src={Sanghi} alt="Sanghi Industries Ltd. logo" className="w-full h-full object-cover transition duration-300 ease-in-out" />
              </Link>
            </div>
          </div>
          <div className="relative h-350 bg-cover bg-center border-[2px] border-[#0A235C]  rounded-lg overflow-hidden shadow-md transition duration-300 ease-in-out cursor-pointer">
            <div className="relative h-full overflow-hidden">
              <a href='/portfolio'>
                <img src={shareSquare} alt="ShareSquare logo" className="w-full h-full object-cover transition duration-300 ease-in-out" />
              </a>
            </div>
          </div>
          <div className="relative h-350 bg-cover bg-center border-[2px] border-[#0A235C] rounded-lg overflow-hidden shadow-md transition duration-300 ease-in-out cursor-pointer">
            <div className="relative h-full overflow-hidden">
              <a href='/portfolio'>
               <img src={HDC} alt="HDC logo" className="w-full h-full object-cover transition duration-300 ease-in-out" />
              </a>
            </div>
          </div>
          <div className="relative h-350 bg-cover bg-center border-[2px] border-[#0A235C]  rounded-lg overflow-hidden shadow-md transition duration-300 ease-in-out cursor-pointer">
            <div className="relative h-full overflow-hidden">
              <a href='/portfolio'>
                <img src={Delhi} alt="Delhi logo" className="w-full h-full object-cover transition duration-300 ease-in-out" />
              </a>
            </div>
          </div>
        </div>
        <div className=' grid justify-center items-center pb-5 md:pb-10 md:top-[-10px] bottom-[-12px]'>
           <Link to={'/portfolio'} className='text-center bg-[#0E4669] hover:bg-[#0A235C] py-1 px-3 text-white rounded shadow'>View More</Link>
        </div>
      </div>
    </section>
    
        
  )
}

export default Comport