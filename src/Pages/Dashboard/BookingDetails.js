import React from 'react';

const BookingDetails = ({details}) => {
    const {serviceName, passangerName, passangerEmail, date, time, price, phone, pickUp, dropoff, person} = details
    return (
        <div>
            <input type="checkbox" id="modal-details" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box bg-white">
                    <label htmlFor="modal-details" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-primary">Reservation From : {passangerName} </h3>
                    <div className='grid grid-cols-1 gap-3 justify-items-start mt-3'>
                        <h3>Service Name: <span className='text-primary'>{serviceName}</span></h3>
                        <h3>Guest Name: <span className='text-primary'>{passangerName}</span></h3>
                        <h3>Guest Email: <span className='text-primary'>{passangerEmail}</span></h3>
                        <h3>Guest Phone Number: <span className='text-primary'>{phone}</span></h3>
                        <h3>Travel Date: <span className='text-primary'>{date}</span></h3>
                        <h3>Travel Time: <span className='text-primary'>{time}</span></h3>
                        <h3>Pick Up Place: <span className='text-primary'>{pickUp}</span></h3>
                        <h3>Drop Off Place: <span className='text-primary'>{dropoff}</span></h3>
                        <h3>Total People: <span className='text-primary'>{person}</span></h3>
                        <h3>Total Price: US $ <span className='text-primary'>{price}</span></h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingDetails;