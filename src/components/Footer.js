import React from 'react';
import { FacebookIcon, LinkedinIcon,InstapaperIcon } from 'react-share';

import blogpost1 from '../components/Image/blog/1.jpg'
import blogpost2 from '../components/Image/blog/2.jpg'

const Footer = () => {
  return (
  <section className='w-full bg-[#0f4769]'>
    <div className="max-w-[1300px] m-auto py-16 px-8 lg:grid-cols-1 gap-4 text-white">
      <div className="lg:flex lg:flex-wrap lg:justify-between">
        <div className="lg:w-1/2 xl:w-[35%] mb-4 lg:mb-0">
          <h6 className="uppercase mb-3 text-xl font-bold">ABOUT US</h6>
          <p className="text-[16px] mb-4">
            Resolute is a forward-thinking investment firm dedicated to strategic diversification
            and sustainable growth across dynamic sectors. We empower ventures that redefine industry 
            standards and drive lasting financial impact.
          </p>
          <p className="text-sm">
            Any Queries: <span>+91 7228956411</span>
          </p>
        </div>
        <div className="lg:w-1/2 xl:w-[20%] mb-4 lg:mb-0">
          <h6 className="uppercase mb-3 text-xl font-bold">Portfolio</h6>
          <ul className="list-none text-[16px] mb-4">
            <li><a href=''>Sanghi Industries Ltd.</a></li>
            <li><a href=''>ShareSquare</a></li>
            <li><a href=''>Hair Drama Co.</a></li>
            <li><a href=''>Delhi Toofans</a></li>
          </ul>
        </div>
        <div className="lg:w-1/2 xl:w-[35%] mb-4 lg:mb-0">
          <h6 className="uppercase mb-3 text-xl font-bold">Recent post</h6>
          <div className="flex flex-wrap mb-4">
            <div className="w-1/4 xl:w-1/6 mb-4 xl:mb-0 pr-2">
              <img src={blogpost1} alt="" className="w-full h-full object-cover rounded " />
            </div>
            <div className="w-3/4 xl:w-5/6 mb-4 xl:mb-0 flex flex-col">
              <a href="https://www.thehindu.com/sport/other-sports/pvl-libero-anand-a-game-changer-with-exceptional-digs/article67988777.ece" target="_blank" className="text-sm mr-1 font-semibold">
              Libero Anand — a game-changer with exceptional digs
              </a>
              <span className="text-sm">Mar 24, 2024</span>
            </div>
          </div>
          <div className="flex flex-wrap mb-4">
            <div className="w-1/4 xl:w-1/6 mb-4 xl:mb-0 pr-2 object-cover">
              <img src={blogpost2} alt=""  className="w-full h-full  rounded"  />
            </div>
            <div className="w-3/4 xl:w-5/6 mb-4 xl:mb-0 flex flex-col">
              <a href="https://sportstar.thehindu.com/volleyball/pvl-2024-delhi-toofans-pro-volleyball-league-calicut-heroes-final-maiden-season/article67971123.ece" target="_blank" className="text-sm mr-1 font-semibold">
              Fresh-faced Delhi Toofans trumps odds to enter title clash
              </a>
              <span className="text-sm">Mar 20, 2024</span>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:flex lg:justify-between lg:items-center mb-4">
        <p className="text-sm font-bold">2024 ResoluteCorp, All rights reserved</p>
        <div className="flex lg:justify-end gap-1">
          <a href="https://www.facebook.com/yourfacebookpage" target="_blank" rel="noreferrer">
            <FacebookIcon size={32} round={true} />
          </a>
          <a href="https://www.linkedin.com/company/yourlinkedinpage" target="_blank" rel="noreferrer">
            <LinkedinIcon size={32} round={true} />
          </a>
          <a href="https://twitter.com/yourtwitterhandle" target="_blank" rel="noreferrer">
            <InstapaperIcon size={32} round={true} />
          </a>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Footer;