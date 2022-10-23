import React from 'react';
import phone from '../Image/phone.png'
import bgVan from '../Image/van4.jpg'
import PrimaryButton from '../Shared/PrimaryButton';

const MakeReservation = () => {
    return (
        <section className='flex  justify-center items-center' style={{background: `url(${bgVan})`}}>
            <div className='flex-1 hidden lg:block'>
                <img src={phone} className="mt-[-75px]" alt=''/>
            </div>
            <div className='flex-1 px-5'>
                <h3 className='text-xl text-primary'>Reservation</h3>
                <h2 className='text-2xl text-white py-5'>Make a Reservation</h2>
                <p className='text-white pb-5'>All rides are by RESERVATION ONLY. Be sure to contact us as soon as possible by calling us at +5016526565 or by using our online booking form to schedule your ride. If you use our online booking form a member of our team will contact you to confirm details of your transportation.</p>
                <PrimaryButton>Reservation</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeReservation;