import React from 'react'

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const CoreValues = () => {
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
            value: `Remain Result Oriented`,
        },
        {
            value: `Evolve with Curiosity`,
        },
        {
            value: `Strive for Excellence`,
        },
        {
            value: `Own your Commitment`,
        },
        {
            value: `Leverage Growth Mindset`,
        },
        {
            value: `Uphold Integrity`,
        },
        {
            value: `Thrive with Collaboration`,
        },
        {
            value: `Embrace Empathy`,
        }
    ];

    return (
        <section className='w-full bg-[#F4F5F6]'>
        <div className='max-w-[1300px] m-auto py-10 px-4 lg:grid-cols-1 gap-4 '>
            <h1 className='text-4xl uppercase font-bold text-center'>Core Values</h1>
            <div className='m-10'>
                <Slider {...settings}>
                    {data.map((d) => (
                        <div className='bg-[#0A235C] h-full text-white  rounded-xl'>

                            <div className='flex flex-col justify-center text-center gap-5 py-6 '>
                                <h5 className='md:text-xl text-x font-semibold '>{d.value}</h5>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
        </section>
    );
};

export default CoreValues