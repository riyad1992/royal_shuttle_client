import React from 'react';
import clock from "../Image/icon/opening.png"
import location from "../Image/icon/location (2).png"
import call from "../Image/icon/callme.png"
import { Link } from 'react-router-dom';

const Info = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-28">
            <div data-aos="fade-up" data-aos-duration="3000" className={`card lg:card-side pt-5 shadow-xl bg-gradient-to-r from-cyan-500 to-blue-500`}>
                <figure>
                    <img src={call} alt="Album" className='w-2/4'/>
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-primary">Contact Us</h2>
                    <p className='text-primary'>+501-6248751 (24/7) +5016526565 (24/7)</p>
                </div>
            </div>

            <div data-aos="fade-up" data-aos-duration="3000" className={`card lg:card-side pt-5 shadow-xl bg-gradient-to-r from-cyan-500 to-blue-500`}>
                <figure>
                    <img src={location} alt="Album" className='w-2/4'/>
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-primary">Our Location</h2>
                    <a href="https://www.google.com/maps/place/San+Pedro+Belize+Express+Water+Taxi/@17.4941166,-88.1869072,17z/data=!3m1!4b1!4m5!3m4!1s0x8f5c5814da938fcd:0xac10fe075a1f15aa!8m2!3d17.4941166!4d-88.1847185" className='underline'><p className='text-primary'>SPBE Water Taxi Terminal</p></a>
                </div>
            </div>

            <div data-aos="fade-up" data-aos-duration="3000" className={`card lg:card-side pt-5 shadow-xl bg-gradient-to-r from-cyan-500 to-blue-500`}>
                <figure>
                    <img src={clock} alt="Album" className='w-2/4'/>
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-primary">Opening Hours</h2>
                    <p className='text-primary'>Everyday 7:00 Am to 6:00 Pm</p>
                </div>
            </div>
        </div>
    );
};

export default Info;