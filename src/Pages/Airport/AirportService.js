import React from 'react';

const AirportService = ({service, setServiceBook, setDetailsInfo}) => {
    return (
        <div className="card lg:max-w-lg shadow-xl">
            <figure className="px-10 pt-10">
                <img src={service.img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{service.name}</h2>
                <p>{service.details.slice(0,130)}<label className='text-primary cursor-pointer' htmlFor="airport-details-modal" onClick={() => setDetailsInfo(service)}>. More Details ..</label></p>
                <div className="card-actions flex justify-between">
                    <button className="btn btn-outline btn-accent">$US:- {service.price}</button>
                    <label 
                        htmlFor="airport-modal"
                        onClick={() => setServiceBook(service)}
                        className="btn btn-primary text-white uppercase">Book your seat
                    </label>
                </div>
            </div>
        </div>
    );
};

export default AirportService;