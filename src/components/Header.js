import React, { useState } from 'react';
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import logo from '../assets/Portfolio/logo.png'
import { Link } from 'react-router-dom';
import Owner from './Owner';

const Header = () => {
  const Manu = [
    { name: "HOME", link: "/" },
    { name: "PORTFOLIO", link: "/portfolio" },
    { name: "CAREERS", link: "/career" },
    { name: "ABOUT", link: "/about" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className="relative shadow-md w-full top-0 left-0">
      <div className="md:flex max-w-[1300px] mx-auto items-center justify-between bg-white md:px-10 px-7">
        {/* logo section */}
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          <Link to={'/'}><img src={logo} alt="" className='w-[180px] h-full'/></Link>
        </div>
        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        {/* link items */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          {Manu.map((link) => (
            <li key={link.name} className="md:ml-8 md:my-0 my-7 font-semibold">
              <Link to={link.link} className="text-gray-800 hover:text-blue-400 duration-500">
                {link.name}
              </Link>
            </li>
          ))}
          <button className="btn bg-[#0E4669] text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static uppercase">
            <Link to={'/Pitch'}> Pitch Us</Link>
          </button>
        </ul>
        {/* button */}
      </div>
    </div>
  );
};

export default Header;