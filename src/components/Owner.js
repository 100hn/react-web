import React from 'react'
import onwerimg from '../components/Image/Resolute-UI-Alok-Sir.jpg'
const Owner = () => {
    return (
    <div className='w-full bg-[#f4f5f6]'>
    <div className='max-w-[1300px] m-auto py-16 px-8 grid lg:grid-cols-2 gap-4 '>

        {/* left Side  */}
        <div className='flex flex-col h-full justify-center '>
            <div className='py-5 px-10  bg-white text-black shadow-md rounded'>
            <p className='text-x py-1 text-justify'>Meet Alok Sanghi, the pioneering leader behind Resolute Group. Alok is a Finance and Economics graduate from Indiana University, Bloomington, USA. Alok steered Sanghi Industries Ltd. with a strong commitment to sustainability. Before joining the company, he has worked with Merrill Lynch and Regency Securities. Known for his innovative approach, Alok has driven operational excellence and efficiency within every organization he has been part of. </p>
            <p className='text-x py-1 text-justify'>Alok likes to focus on people, entrepreneurship, and management quality. He would like to add value to the lives of people in the world through his business and to contribute to society through sustainability and skill development initiatives.</p>
            <p className='text-x py-1 text-justify'>As a director with key roles in various companies, including Resolute, Samruddhi, Sanghi Infrastructure Limited, and Sanghi Energy Limited, Alok embodies a forward-thinking and holistic approach to business. His leadership ensures long-term success across all ventures. </p>
            <h3 className='text-2xl md:text-3xl font-bold uppercase text-center pt-6 pb-2'>Alok Sanghi</h3>
            <p className='text-x py-1 text-center'>Director, Resolute Group</p>
            </div>
        </div>
        {/* Right Side  */}
        <div className='grid h-full'>
            <img className='object-cover w-full p-2' src={onwerimg} alt='Owner Image'></img>
        </div>
    </div>
    </div>
    )
}

export default Owner