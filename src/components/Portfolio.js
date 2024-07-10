import React from 'react';

import sanghi from '../assets/Portfolio/Sanghi-Cement.jpg'
import ShareSquare from '../assets/Portfolio/Share-Square.jpg'
import HDC from '../assets/Portfolio/HDC.jpg'
import DT from '../assets/Portfolio/Delhi-Toofan.jpg'
import portfolioBg from '../components/Image/Resolute-UI-Portfolio.jpg'

const Portfolio = () => {
  return (
    <section className=" bg-[#F4F5F6]">
      <div className='max-w-[1300px] mx-auto '>
        <div className='bg-[#0E4669] text-white py-16 px-8 pt-6 h-410 md:p-6 lg:p-12'
        style={{
          backgroundImage: `url(${portfolioBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        >
           <h2 className="text-4xl uppercase font-bold mb-5 text-center">Portfolio</h2>
           <h4 className="text-center text-xl mb-5 font-semibold">Investments with Impact</h4>
        </div>
     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 rounded pt-6 ">
        <div className='bg-white rounded'>
          <a href="#" className="block">
            <img src={sanghi} alt="Sanghi-Cement" className="w-full h-full object-cover transition duration-300 ease-in rounded" />
          </a>
          <div className="p-5">
            <h2 className="text-2xl font-bold mb-5">Sanghi Industries Limited</h2>
            <div className="text-[16px] text-justify">
              <p className='mb-3'>Sanghi Industries Limited, a company jointly promoted by the Sanghi Family and the Adani Group, is among India's leading cement companies. It has one of the largest single location cement plants in India. Equipped with multi-fuel technology, this fully integrated plant includes captive facilities viz. a Thermal Power Plant, all weather Port, Sea terminals at Gujarat & Mumbai and own vessels to cater to demand of its markets. The Company possesses one of the largest limestone reserves in the country. Due to the high quality of its mineral reserves and advanced manufacturing technology, it can produce superior grades of Cement while maintaining the lowest production cost. Its commitment to positive transformation has resulted in converting the arid landscape of the nearby area into a green and clean zone. The Company is recognized for its best practices in environment management & corporate citizenship and is committed to building the nation with goodness. </p>
            </div>
            
          </div>
        </div>

        <div className='bg-white rounded'>
          <a href="#" className="block">
            <img src={ShareSquare} alt="Samruddhi" className="w-full h-full object-cover transition duration-300 ease-in-out" />
          </a>
          <div className="p-5">
            <h2 className="text-2xl font-bold mb-5">ShareSquare</h2>
            <div className='text-[16px] text-justify'>
              <p className='mb-3'>ShareSquare is Dubai's premium real estate company, where excellence meets opportunity in the vibrant property market of the UAE. 
                Dedicated to providing top-notch property solutions, ShareSquare caters to both investors and seekers of residential/ commercial spaces. 
                With a deep understanding of Dubai's dynamic real estate landscape, ShareSquare stands out for its commitment to excellence, transparency, 
                and customer satisfaction. </p>
              <p className='mb-3'>ShareSquare offers a comprehensive suite of real estate services designed to meet every need, including Property Sales 
                and Leasing, Investment Advisory, Property Management and Market Research and Analysis.  </p>
              <p className='mb-3'>ShareSquare's commitment goes beyond transactions. They strive to build lasting relationships with clients, founded on trust and integrity. 
                Their transparent approach ensures that clients are always informed and confident in their real estate journey. </p>
              <p className='mb-3'>Discover the ShareSquare difference, where real estate aspirations become reality. Whether clients are investors looking to expand their portfolio 
                or home seekers in search of the perfect space, ShareSquare is there to help every step of the way. Experience the pinnacle of real estate excellence with ShareSquare in Dubai. </p>
            </div>
          </div>
        </div>

        <div className='bg-white rounded'>
          <a href="https://hairdramacompany.com/" target='blank' className="block">
            <img src={HDC} alt="HairDrama" className="w-full h-full object-cover transition duration-300 ease-in-out" />
          </a>
          <div className="p-5">
            <h2 className="text-2xl font-bold mb-5">Hair Drama Co.</h2>
            <div className='text-[16px] text-justify'>
              <p className='mb-3'>Hair Drama Co. is a holistic hair fashion brand specializing in luxurious hair accessories for women and girls. Since its establishment in 2015, 
              it has carved out a unique niche in the previously non-existent hair accessory space in India. With a focus on creating distinct, handmade hair 
              accessories, the brand has quickly become a trendsetter in the industry.</p>
              <p className='mb-3'>Hair Drama Co. is the first-ever Indian hair fashion brand to do licensing partnerships with Disney India, the popular Netflix show Emily in Paris,
              and the global sensation Barbie. With these collaborations Hair Drama Co. have brought beloved characters and iconic styles to life, offering 
              customers exclusive and enchanting hair accessories that resonate with fans of all ages. </p>
              <p className='mb-3'>Beyond aesthetics, Hair Drama Co. is committed to empowering women and girls to express their individuality and confidence through fashion. 
              The brand's diverse range of products caters to various styles and occasions, 
              ensuring that everyone can find something that complements their unique personality and enhances their natural beauty. </p>
              <p className='mb-3'>Hair Drama Co. continues to innovate and expand its offerings while also remaining dedicated to setting new standards in hair fashion, 
              inspiring creativity, and celebrating the art of self-expression. </p>
            </div>
          </div>
        </div>

        <div className='bg-white rounded'>
          <a href="#" className="block">
            <img src={DT} alt="Delhi Toofans" className="w-full h-full object-cover transition duration-300 ease-in-out" />
          </a>
          <div className="p-5">
            <h2 className="text-2xl font-bold mb-5">Delhi Toofans</h2>
            <div className='text-[16px] text-justify'>
              <p className='mb-3'>Meet the Delhi Toofans, India's electrifying volleyball squad that brings a storm to the court! This team is a powerhouse of fierce competition and sheer enthusiasm, setting the stage for thrilling matches that captivate audiences. 
              The Toofans are more than just a volleyball team—they're igniting a movement that aims to elevate the sport's profile across the nation. </p>
              <p className='mb-3'>Every game is a testament to their dedication and passion, as they strive to nurture homegrown talent and inspire a new generation of athletes. The Toofans are committed to creating a vibrant sports culture in India, 
                one that celebrates the spirit of teamwork, perseverance, and excellence. </p>
              <p className='mb-3 '>With each spike, serve, and block, the Toofans are writing a new chapter in Indian volleyball. Their relentless energy and unwavering determination make them a force to be reckoned with on the court. 
              Whether they're facing off against rivals or training hard for the next big match, the Toofans embody the essence of sportsmanship and dedication. </p>
              <p className='mb-3'>Join the adventure with the Delhi Toofans, where every moment is charged with excitement and every match is a story of passion and commitment. Experience the thrill of volleyball like never before! </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Portfolio;