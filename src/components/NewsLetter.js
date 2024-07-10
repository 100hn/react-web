import React from 'react'

const NewsLetter = () => {
    return (
        <section className='bg-[#F4F5F6] shadow-md '>
        <div className="max-w-[1300px] m-auto p-4 md:p-6 lg:p-8">
        <div className="flex flex-wrap items-center lg:flex-row flex-col border-t border-[#0E4669] ">
            <div className="w-full lg:w-2/3 p-4 md:p-6 lg:p-8 md:order-1">
            <h2 className="text-3xl font-bold pb-2 text-[#0E4669]">PITCH US</h2>
            <p className="text-sm">
                The best way to reach out to us is to be introduced through the Resolute founder who knows you personally and can vouch for you, or you can come through a mutual contact. If you don't know anyone who can introduce you to Resolute, then do reach out to us directly.
            </p>
            </div>
            <div className="lg:w-1/3 w-full p-4 md:p-6 lg:p-8 text-center order-1 md:order-2">
            <a href="mailto:your-email@example.com" className="bg-white hover:bg-[#0E4669] text-[#0E4669] hover:text-white font-bold py-2 px-4 border border-[#0E4669] rounded-full">
                Email Us
            </a>
            </div>
        </div>
        </div>
        </section>
    );
};

export default NewsLetter