import React from 'react';

const ToursService = ({tour, setServiceBook, setDetailsInfo}) => {

    const {img, name, details, price} = tour
    
    
    return (
        <div className="card lg:max-w-lg shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{details.slice(0,130)}<label className='text-primary cursor-pointer' htmlFor="airport-details-modal" onClick={() => setDetailsInfo(tour)}>. More Details ..</label></p>
                <div className="card-actions flex justify-between">
                    <button className="btn btn-outline btn-accent">$US:- {price}</button>
                    <label 
                        htmlFor="airport-modal"
                        onClick={() => setServiceBook(tour)}
                        className="btn btn-primary text-white uppercase">Book your seat
                    </label>
                </div>
            </div>
        </div>
    );
};

export default ToursService;