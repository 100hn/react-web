import React from 'react'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dcimag from '../assets/Team/client-1.jpg'
import dc from '../assets/Team/Dilip.jpg'
import amrita from '../assets/Team/Amrita.jpg'
import vivek from '../assets/Team/Vivek.jpg'
import manish from '../assets/Team/Manish.jpg'

const TeamMeet = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
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
            img: dc,
            about: `by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.`
        },
        {
            name: `Manish Kumar`,
            desig:'Group General Counsel',
            img: manish,
            about: `by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.`
        },
        {
            name: `Amrita Desai`,
            desig:'Group CHRO',
            img: amrita,
            about: `by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.`
        },
        {
            name: `Vivek Pawar`,
            desig:'CEO HairDramaCo.',
            img: vivek,
            about: `by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.`
        },
        {
            name: `Sai Prakash`,
            desig:'CEO Resolute Sports',
            img: dcimag,
            about: `by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.`
        },
        {
            name: `Sunny Savani`,
            desig:'Co-Founder ShareSquare',
            img: dcimag,
            about: `by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.`
        },
        {
            name: `Shyam Savani`,
            desig:'Co-Founder ShareSquare',
            img: dcimag,
            about: `by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.`
        }
    ];

    return (
        <section className='w-full'>
        <div className='max-w-[1300px] m-auto py-16 px-4 lg:grid-cols-1 gap-4 '>
            <h1 className='text-4xl uppercase font-bold text-center'>MEET THE TEAM</h1>
            <div className='mt-20'>
                <Slider {...settings}>
                    {data.map((d) => (
                        <div className='bg-[#F4F5F6] text-black rounded-xl'>
                            <div className='rounded-t-xl bg-[#0E4669] flex justify-center items-center'>
                                <img src={d.img} alt='' className='h-45 w-50 rounded'/>
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