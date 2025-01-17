import React from 'react'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dc from '../assets/Team/Dilip.jpg'
import amrita from '../assets/Team/Amrita.jpg'
import vivek from '../assets/Team/Vivek.jpg'
import manish from '../assets/Team/Manish.jpg'
import sunny from '../assets/Team/Sunny.jpg'
import shyam from '../assets/Team/Shyam.jpg'
import saiprakash from '../assets/Team/SaiPrakash.jpg'

const TeamMeet = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 768, // mobile devices
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
        ]
    };

    const data = [
        {
            name: `Dilip Chakraborty`,
            desig:'Group Accounts and Taxation',
            img: dc
        },
        {
            name: `Manish Kumar`,
            desig:'Group General Counsel',
            img: manish
        },
        {
            name: `Amrita Desai`,
            desig:'Group CHRO',
            img: amrita
        },
        {
            name: `Vivek Pawar`,
            desig:'CEO HairDramaCo.',
            img: vivek
        },
        {
            name: `Sunny Savani`,
            desig:'Co-Founder ShareSquare',
            img: sunny
        },
        {
            name: `Shyam Savani`,
            desig:'Co-Founder ShareSquare',
            img: shyam
        },
        {
            name: `Sai Prakash`,
            desig:'CEO Resolute Sports',
            img: saiprakash
        }
    ];

    return (
        <section className='w-full'>
        <div className='max-w-[1300px] m-auto py-16 px-4 lg:grid-cols-1 gap-4 '>
            <h1 className='text-4xl uppercase font-bold text-center'>MEET THE TEAM</h1>
            <div className='mt-20'>
                <Slider {...settings}>
                    {data.map((d, index) => (
                        <div key={index} className='bg-[#F4F5F6] text-black rounded-xl'>
                            <div className='rounded-t-xl flex justify-center items-center'>
                                <img src={d.img} alt='' className='md:h-45 md:w-50 w-full h-full rounded'/>
                            </div>
                            <div className='flex flex-col  gap-4 p-5 justify-center items-center'>
                                <h5 className='text-2xl font-semibold '>{d.name}</h5>
                                 <span className='font-bold'>{d.desig}</span>
                                {/* <p className='text-base'>{d.about}</p> */}
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
        </section>
    );
};

export default TeamMeet;