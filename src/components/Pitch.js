import React from 'react'
import portfolioBg from '../components/Image/Resolute-UI-Portfolio.jpg'

const Pitch = () => {
  return (
    <section className='bg-[#F4F5F6]'>
      <div className='max-w-[1300px] mx-auto'>
        <div className='p-4 pt-6 mb-6 md:p-6 lg:p-12  bg-[#0E4669] text-white'
        style={{
          backgroundImage: `url(${portfolioBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        >
          <h2 className="text-4xl uppercase font-bold mb-5 text-center">Got a Game-Changer Idea?</h2>
          <h4 className="text-center text-xl mb-5 font-semibold">Join our team and turn opportunities into triumphs</h4>
        </div>
        
        <div className='bg-white p-4 mb-6 rounded shadow-md'>
          <form className=' max-w-[1000px] mx-auto py-4'>
            <div className='flex flex-wrap -mx-3 mb-6'>
              <div className='px-3 w-full mb-6 md:mb-0'>
                <label className="block uppercase tracking-wide text-gray-700 text-base font-bold mb-3" htmlFor="message">
                  your groundbreaking idea:
                </label>
                <textarea
                  className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-4 leading-tight focus:outline-none focus:bg-white"
                  id="message"
                  name="message"
                  required
                  placeholder='Write a brief about your idea'
                />
              </div>
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-black text-base font-bold mb-3" htmlFor="pdf_file">
                  Upload your Pitch Deck:
                </label>
                <input
                  className="appearance-none block w-full border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                  type="file"
                  id="pdf_file"
                  name="pdf_file"
                  accept=".pdf"
                />
                <small className="text-gray-500">Drag and Drop or upload additional relevant material</small>
              </div>
              <div className="w-full px-3 mb-6 md:mb-0 pt-4">
                <label className="block uppercase tracking-wide text-gray-700 text-base font-bold mb-3" htmlFor="website">
                  Additional Relevant Material Links
                </label>
                <input
                  className="appearance-none block w-full  border border-gray-200 rounded py-3 mb-4 px-4 leading-tight focus:outline-none focus:bg-white"
                  type="text"
                  id="website"
                  name="website"
                  placeholder='Include any other relevant material for our evaluantion'
                />
              </div>
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-base font-bold mb-3" htmlFor="select_option">
                  What’s your Business Sector?
                </label>
                <select
                  className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 mb-4 px-4 leading-tight focus:outline-none focus:bg-white"
                  id="select_option"
                  name="select_option"
                  required
                >
                  <option value="">—Please choose an option—</option>
                  <option value="ConsumerTech">ConsumerTech</option>
                  <option value="Content">Content</option>
                  <option value="Crypto">Crypto</option>
                  <option value="E-commerce">E-commerce</option>
                  <option value="FoodTech">FoodTech</option>
                  <option value="Gaming">Gaming</option>
                  <option value="HealthTech">HealthTech</option>
                  <option value="Mobility">Mobility</option>
                  <option value="Social Commerce">Social Commerce</option>
                  <option value="SportsTech">SportsTech</option>
                  <option value="TravelTech">TravelTech</option>
                  <option value="AgriTech">AgriTech</option>
                  <option value="B2B E-commerce">B2B E-commerce</option>
                  <option value="DeepTech">DeepTech</option>
                  <option value="EdTech">EdTech</option>
                  <option value="Environment Tech">Environment Tech</option>
                  <option value="FinTech">FinTech</option>
                  <option value="SaaS">SaaS</option>
                  <option value="Supply Chain &amp; Logistics">Supply Chain &amp; Logistics</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="w-full px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-base font-bold mb-3" htmlFor="name">
                  Name*
                </label>
                <input
                  className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-4 leading-tight focus:outline-none focus:bg-white"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Please enter your name"
                  required
                />
              </div>
              <div className="w-full  px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-base font-bold mb-3" htmlFor="phone">
                  LinkedIn Profile
                </label>
                <input
                  className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-4 leading-tight focus:outline-none focus:bg-white"
                  type="url"
                  id="linkedin_url"
                  name="linkedin_url"
                  placeholder="https://www.linkedin.com/in/yourprofile"
                  required
                />
              </div>
              <div className="w-full px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-base font-bold mb-2" htmlFor="email">
                  Email*
                </label>
                <input
                  className="appearance-none block w-full  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Please enter your email"
                  required
                />
              </div>
            </div>
            <div className="w-full px-3">
              <button
                type="submit"
                name="send"
                className="bg-[#0F4769] hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Pitch