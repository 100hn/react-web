import React from 'react'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Insights = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
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
            name: `Hair Drama Co. x Disney Cruella got featured in Elle Magazine! `,
            about: `Elle Magazine had a feature reminiscing the 90s and how it has come back in style 
		       everywhere – where they featured one of the Collection from Hair Drama Co. X Disney Collaboration!`,
            author: `Elle Magazine`,
            date: `Oct, 2021`
        },
        {
            name: `Libero Anand — a game-changer with exceptional digs`,
            about: `The Delhi Toofans player, who feels the role has not been really acknowledged, 
			says things are slowly changing with the advent of the PVL; the 21-year-old.. <a href="https://www.thehindu.com/sport/other-sports/pvl-libero-anand-a-game-changer-with-exceptional-digs/article67988777.ece" target="_blank">Read More</a>`,
            author: `The Hindu`,
            date: `Mar 24, 2024`
        },
        {
            name: `Hair Drama Co. got featured in Cosmopolitan Magazine!`,
            about: `Cosmopolitan India had a feature showcasing Best Hair Accessory Brands – 
		     where they featured Hair Drama Co. as one of the brands to be on everyone’s Radar! `,
            author: `Cosmopolitan Magazine!`,
            date: `Feb 13, 2020`
        },
        {
            name: `Delhi Toofans end Kolkata Thunderbolts campaign....`,
            about: `Delhi Toofans on Sunday picked up a dominant 15-9, 16-14, 17-15 win over the Kolkata Thunderbolts 
		    in the third season of the RuPay Prime Volleyball League at the Jawaharlal Nehru Indoor Stadium, 
		    Chennai..<a href="https://timesofindia.indiatimes.com/sports/more-sports/others/prime-volleyball-league-delhi-toofans-end-kolkata-thunderbolts-campaign-with-dominant-win/articleshow/108184196.cms" target="_blank">Read More</a> `,
            author: `The Times Of India`,
            date: `Mar 03, 2024`
        },
        {
            name: `Prime Volleyball League: Delhi Toofans stun Bengaluru Torpedoes....`,
            about: `The new franchise on the block, the Delhi Toofans stunned the Bengaluru Torpedoes in the third season of 
		      RuPay Prime Volleyball League on Sunday, picking up a 15-10, 15-13, 21-20...
              <a href="https://timesofindia.indiatimes.com/sports/more-sports/others/prime-volleyball-league-delhi-toofans-stun-bengaluru-torpedoes-get-dominant-win-to-get-off-the-mark/articleshow/107800814.cms" target="_blank">Read More</a>`,
            author: `The Times Of India`,
            date: `Feb 18, 2024`
        },
        {
            name: `Prime Volleyball League: Delhi Toofans eliminate Defenders..`,
            about: `Chennai: Delhi Toofans reached the final of the Prime Volleyball League after a dramatic five-set win 
		  (15-9, 10-15, 10-15, 15-12, 17-15) over Ahmedabad Defenders in the Eliminator at the Jawaharlal Nehru... 
		  <a href="https://www.onmanorama.com/sports/other-sports/2024/03/19/prime-volleyball-league-delhi-toofans-vs-ahmedabad-defenders.html" target="_blank">Read More</a>`,
            author: `Onmanorama`,
            date: `Mar 19, 2024`
        },
        {
            name: `Newcomers Delhi Toofans eyes title against table-toppers Calicut Heroes`,
            about: `Delhi Toofans, led by the ever-reliable Saqlain Tariq, defied expectations 
		   by storming past the reigning champions Ahmedabad Defenders in the eliminator..
		    <a href="https://sportstar.thehindu.com/volleyball/pro-volleyball-league-pvl-2024-final-delhi-toofans-vs-calicut-heroes-preview-news-squad-updates/article67972313.ece" target="_blank">Read More</a>`,
            author: `SportStar`,
            date: `Mar 20, 2024`
        },
        {
            name: `Fresh-faced Delhi Toofans trumps odds to enter title clash`,
            about: `Led by the seasoned Indian international Saqlain Tariq, who is also making his PVL debut, 
			the team defied all odds by entering the final...
		    <a href="https://sportstar.thehindu.com/volleyball/pvl-2024-delhi-toofans-pro-volleyball-league-calicut-heroes-final-maiden-season/article67971123.ece" target="_blank">Read More</a>`,
            author: `SportStar`,
            date: `Mar 20, 2024`
        }
    ];

    return (
        <section className='bg-[#F4F5F6]'>
        <div className='max-w-[1300px] m-auto py-16 px-4 lg:grid-cols-1 gap-4' >
            <h1 className='text-4xl uppercase font-bold text-center text-[#0E4669]'>Insights</h1>
            <div className='mt-20'>
                <Slider {...settings}>
                    {data.map((d) => (
                        <div className='bg-[#0E4669] h-full text-white rounded-xl'>

                            <div className='flex flex-col justify-center text-left gap-4 p-4 '>
                                <h5 className='text-xl font-semibold '>{d.name}</h5>
                                <p className='text-sm' dangerouslySetInnerHTML={{ __html: d.about }} />
                                <div className='flex justify-between'>
                                    <a href='' className=''>{`By: ${d.author}`}</a>
                                    <span>{d.date}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
        </section>
    );
};

export default Insights