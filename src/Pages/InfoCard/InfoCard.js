import React from 'react';

const InfoCard = ({img, cardTitle, bgClass}) => {
    return (
        <div data-aos="fade-up" data-aos-duration="3000" className={`card lg:card-side bg-base-100 pt-5 shadow-xl ${bgClass}`}>
            <figure>
                <img src={img} alt="Album" className='w-2/4'/>
            </figure>
            <div className="card-body">
                <h2 className="card-title text-primary">{cardTitle}</h2>
                <p className='text-primary'>Click the button to listen on Spotiwhy app.</p>
            </div>
        </div>
    );
};

export default InfoCard;