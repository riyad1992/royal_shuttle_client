import React from 'react';
import shuttle from "../../Image/shuttle.jpg"
import van from "../../Image/van1.jpg"
import van1 from "../../Image/van2.jpg"
// import van2 from "../../Image/van3.jpg"
// import van3 from "../../Image/van4.jpg"
// import PrimaryButton from '../../Shared/PrimaryButton';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import {Autoplay, EffectCreative } from "swiper";
import { Link } from 'react-router-dom';
import PrimaryButton from '../../Shared/PrimaryButton';
AOS.init();

const Baner = () => {
    return (
        <>
            <Swiper
                grabCursor={true}
                effect={"creative"}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                creativeEffect={{
                prev: {
                    origin: "left center",
                    shadow: true,
                    translate: ["-5%", 0, -200],
                    rotate: [0, 100, 0],
                    delay: 2000,
                },
                next: {
                    shadow: true,
                    origin: "right center",
                    translate: ["5%", 0, -200],
                    rotate: [0, -100, 0],
                    delay: 3000,
                },
                }}
                modules={[Autoplay,EffectCreative]}
                className="mySwiper6"
            >
                <SwiperSlide>
                    <div className="card mb-28 image-full">
                        <figure><img src={shuttle} alt="Shoes" /></figure>
                        <div className="flex flex-col items-center justify-center">
                            <h1 className="text-3xl p-5 font-bold text-red-500" data-aos="fade-up" data-aos-duration="3000">Welcome to Royal Shuttle Tours & Transfers</h1>
                            <p className="p-6 text-red-800" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">With the aim to provide you with the best possible service, we're introducing new ride service options to better suit your transportation needs and your pocketbook!</p>
                            {/* <div className='card-actions'>
                                <PrimaryButton className="card-actions" data-aos="fade-up" data-aos-anchor-placement="center-bottom">Get Started</PrimaryButton>
                            </div> */}
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="card mb-28 bg-white shadow-xl image-full">
                        <figure><img src={van} alt="Shoes" /></figure>
                        <div className="flex flex-col items-center justify-center ">
                            <h1 className="text-3xl p-5 font-bold" data-aos="zoom-out-up">New! Improved service offerings to meet your needs!</h1>
                            <p className="p-6">Try an exciting range of outdoor adventures and experience the beauty of Belize. Experience amazing waterfalls, glide through exotic rain forest, relax on our beautiful white sand beaches, try out our local cuisine or have a night out on the town.  Whatever your desire, we'll take you there!</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="card mb-28 bg-white shadow-xl image-full">
                        <figure><img src={van1} alt="Shoes" /></figure>
                        <div className="flex flex-col items-center justify-center ">
                            <h1 className="text-3xl p-5 font-bold" data-aos="zoom-out-up">We! provides you with quick and easy options to get to and from the airport!</h1>
                            <p className="p-6">Private Transportation that will get you there comfortable and relaxed.  Different size vehicle to suit the number of people in your group with plenty of room for luggage. Professional, punctual, helpful English & Spanish speaking drivers to help you reach your destination!</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>

        // <div className="hero min-h-screen">
        //     <div className="hero-content flex-col lg:flex-row-reverse">
        //         <div>
        //             <img src={shuttle} className="max-w-lg rounded-lg shadow-2xl w-4/5" alt=''/>
        //         </div>
        //         <div>
        //             <h1 className="text-3xl font-bold">New! Improved service offerings to meet your needs!</h1>
        //             <p className="py-6">With the aim to provide you with the best possible service, we're introducing new ride service options to better suit your transportation needs and your pocketbook!</p>
        //             <PrimaryButton>Get Started</PrimaryButton>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Baner;