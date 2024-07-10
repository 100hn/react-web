import React from 'react'
import MissionVisionimg from '../assets/MissionVis.jpg'
const MissionVision = () => {
  return (
    <section className='w-full'>
    <div className='max-w-[1300px] m-auto py-10 grid lg:grid-cols-2 gap-4  text-black'>
        {/* left Side  */}
      <div className='grid rounded-md pr-2'>
           <img className='object-cover w-full h-full p-2 rounded ' src={MissionVisionimg} alt='About-company'></img>
      </div>
        {/* Right Side  */}
        <div className='flex flex-col h-full justify-center pl-2'>
            <div className='mb-3'>
               <h3 className='text-3xl md:text-3xl font-bold text-left pb-4'>Mission</h3>
               <p className='text-x py-2 text-justify'>Our mission is to leverage our unparalleled expertise for creating global investment opportunities. 
                We intend to do it by investing in cutting-edge technologies, fostering innovation and attracting enterprising asset managers. 
                We also wish to consistently exceed expectations in dynamic markets by diversifying across assets and geographies ensuring sustainable growth and risk mitigation.</p>
            </div>
            <div className='mb-3'>
               <h3 className='text-3xl md:text-3xl font-bold text-left pb-4'>Vision</h3>
               <p className='text-x py-2 text-justify'>To be the premier global investment platform - delivering exceptional and sustainable returns, 
                through investments in diversified asset classes; driven by cutting-edge technology, talent and capital allocation.</p>
            </div>
        </div>
    </div>
    </section>
  )
}

export default MissionVision