import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const ServiceBooked = ({serviceBook, setServiceBook, refetch}) => {

    const {_id, name, price, time} = serviceBook
    const [user] = useAuthState(auth);
    const [date, setDate] = useState()
    const [totalPrice, setTotalPrice] = useState(price)

    // let totalPrice = 0

    const handleBooking = event => {
        event.preventDefault()
        const person = event.target.person.value || 1
        const time = event.target.time.value
        const phone = event.target.phone.value
        // let totalPrice = person * price
        const bookingData = {
            bookingId: _id,
            serviceName: name,
            date: date,
            passangerName: user.displayName,
            passangerEmail: user.email,
            person,
            phone,
            time,
            price: totalPrice,
        }

        fetch('https://royal-shuttle-server.onrender.com/reservations', {
            method: 'POST',
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify(bookingData)
        })
        .then(res => res.json())
        .then(data => {
            if(data.success){
                toast(`booking is Success at ` )
            }else{
                toast.error(`you already have a booking at ` )
            }
            setServiceBook(null)
        })
    }

    return (
        <div>
            <input type="checkbox" id="book-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box bg-white">
                    <label htmlFor="book-modal" onClick={() => setServiceBook(null)} className="btn btn-sm btn-circle absolute right-2 top-2">X</label>
                    <h3 className="font-bold text-lg text-primary">Booking for : {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-3'>
                        <div className='w-full max-w-xs'>
                            <label className="label"><span className="label-text">Name</span></label>
                            <input name='name' type="text" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs text-white" />
                        </div>

                        <div className='w-full max-w-xs'>
                            <label className="label"><span className="label-text">Email</span></label>
                            <input name='email' type="text" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs text-white" />
                        </div>

                        <div className='w-full max-w-xs'>
                            <label className="label"><span className="label-text">How Many People ?</span></label>
                            <input name='person' type="number" min='1' max="15" onChange={e => setTotalPrice(e.target.value * price)} placeholder='Number of person' className="input input-bordered w-full max-w-xs text-white" />
                        </div>

                        <div className='w-full max-w-xs'>
                            <label className="label"><span className="label-text">Phone</span></label>
                            <input name='phone' placeholder='Your Phone Number' required type="text" className="input input-bordered w-full max-w-xs text-white" />
                        </div>

                        <div className='w-full max-w-xs'>
                            <label className="label"><span className="label-text">Travel Date</span></label>
                            <input name='date' required type="date" onChange={e => setDate(e.target.value)} className="input input-bordered w-full max-w-xs text-white" />
                        </div>

                        <div className='w-full max-w-xs'>
                            <label className="label"><span className="label-text">Time</span></label>
                            <input name='time' disabled type="text" value={time || ''} className="input input-bordered w-full max-w-xs text-white" />
                        </div>

                        <div className='w-full max-w-xs'>
                            <label className="label"><span className="label-text">Total Price</span></label>
                            <input name='price' type="text" disabled value={`Total Price : $ ${parseFloat(totalPrice).toFixed(2)} USD`} className="input input-bordered w-full max-w-xs text-white" />
                        </div>
                        
                        <input type="submit" value="Submit" className="btn btn-primary w-full max-w-xs" />
                    </form>
                </div>
                
            </div>
        </div>
    );
};

export default ServiceBooked;