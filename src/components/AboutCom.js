import React from 'react'
import about from '../components/Image/Resolute-UI-About.jpg'
const AboutCom = () => {
  return (
    <section className='bg-[#0E4669] w-full'>
    <div className='max-w-[1300px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4  text-white'>
        {/* left Side  */}
      <div className='grid h-full'>
           <img className='object-cover w-full h-full p-2' src={about} alt='About-company'></img>
      </div>
        {/* Right Side  */}
        <div className='flex flex-col h-full justify-center'>
          <h3 className='text-3xl md:text-4xl font-bold uppercase text-center pb-4'>About Us</h3>
          <p className='text-x py-1 text-justify'>Welcome to the Resolute Group, a distinguished investment firm with a rich legacy of building and managing diverse investments across the globe. The Group has a long history of strategic investments and business ventures that span various sectors and geographies. The journey began with the establishment of Sanghi Industries Ltd. in 1985, marking the foundation of our commitment to excellence. </p>
          <p className='text-x py-1 text-justify'>Under the visionary leadership of Alok Sanghi, Director at Resolute Group, we continue to expand this legacy, harnessing deep industry knowledge and innovative strategies to drive financial growth in dynamic markets. </p>
          <p className='text-x py-1 text-justify'>Resolute stands at the forefront of global investment, committed to creating opportunities that leverage cutting-edge strategies and foster innovation. Our investments span the Cement, Real Estate, Fashion, and Sports sectors, each venture reflecting our dedication to excellence and growth across a broad spectrum of industries. </p>
          <p className='text-x py-1 text-justify'>At Resolute, we consistently exceed expectations by diversifying our investments across assets and geographies. This approach ensures sustainable growth and effective risk mitigation, allowing us to navigate and thrive in ever-changing markets. </p>
          <p className='text-x py-1 text-justify'>Join us as we explore new territories, uncover exciting opportunities, and build a future defined by exceptional financial success and innovation.</p>
        </div>
    </div>
    </section>
  )
}

export default AboutCom