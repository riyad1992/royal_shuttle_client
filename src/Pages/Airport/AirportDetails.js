import React from 'react';

const AirportDetails = ({detailsInfo, setServiceBook}) => {
    const {name, img, details, price} = detailsInfo
    return (
        <div>
            <input type="checkbox" id="airport-details-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box bg-white">
                    <label htmlFor="airport-details-modal" onClick={() => setServiceBook(null)} className="btn btn-sm btn-circle absolute right-2 top-2">X</label>
                    <h3 className="font-bold text-lg text-primary">Booking for : {name}</h3>
                    <div className="card lg:max-w-lg shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={img} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{name}</h2>
                            <p>{details}</p>
                            <div className="card-actions flex justify-between">
                                <button className="btn btn-outline btn-accent">$US:- {price}</button>
                                <label 
                                    htmlFor="airport-details-modal"
                                    onClick={() => setServiceBook(null)}
                                    className="btn btn-primary text-white uppercase">Book your seat
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default AirportDetails;