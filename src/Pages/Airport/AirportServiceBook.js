import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AirportServiceBook = ({serviceBook, setServiceBook, refetch}) => {

    const {_id, name, price, addPrice} = serviceBook
    const [user] = useAuthState(auth);
    // const [passangerName, setPassangerName] = useState()
    // const [passangerEmail, setPassangerEmail] = useState()
    const [pickUp, setPickUp] = useState()
    const [dropoff, setDropoff] = useState()
    const [date, setDate] = useState()
    const [time, setTime] = useState()
    const [totalPrice, setTotalPrice] = useState(price)



    const handleBooking = event => {
        event.preventDefault()
        const person = event.target.person.value || 1
        const phone = event.target.phone.value
        
        const bookingData = {
            bookingId: _id,
            serviceName: name,
            date,
            time,
            phone,
            pickUp,
            dropoff,
            passangerName: user?.displayName,
            passangerEmail: user?.email,
            person,
            price: totalPrice,
        }

        fetch('http://localhost:5000/reservations', {
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
            <input type="checkbox" id="airport-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box bg-white">
                    <label htmlFor="airport-modal" onClick={() => setServiceBook(null)} className="btn btn-sm btn-circle absolute right-2 top-2">X</label>
                    <h3 className="font-bold text-lg text-primary">Booking for : {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-3'>
                        <div className="w-full max-w-xs">
                            <label className="label"><span className="label-text">Name</span></label>
                            <input name='name' type="text" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs text-white" />
                        </div>

                        <div className="w-full max-w-xs">
                            <label className="label"><span className="label-text">Email</span></label>
                            <input name='email' type="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs text-white" />
                        </div>

                        <div className="w-full max-w-xs">
                            <label className="label"><span className="label-text">Phone Number</span></label>
                            <input name='phone' type="text" placeholder='Your Phone Number' className="input input-bordered w-full max-w-xs text-white" />
                        </div>

                        <div className="w-full max-w-xs">
                            <label className="label"><span className="label-text">How Many People ?</span></label>
                            <input name='person' type="number" min='1' max="15" onChange={e => {
                                const prices = e.target.value * addPrice
                                const tPrice = parseInt(price - addPrice) + parseInt(prices)
                                return setTotalPrice(tPrice)
                            }} placeholder='Number of person' className="input input-bordered w-full max-w-xs text-white" />
                        </div>

                        <div className="w-full max-w-xs">
                            <label className="label"><span className="label-text">Pick Up Place</span></label>
                            <input name='pickupPlace' required type="text" placeholder={`Between -( ${name})`} onChange={e => setPickUp(e.target.value)} className="input input-bordered w-full max-w-xs text-white" />
                        </div>

                        <div className="w-full max-w-xs">
                            <label className="label"><span className="label-text">Drop of Place</span></label>
                            <input name='dropoffPlace' required type="text" placeholder={`Between -( ${name})`} onChange={e => setDropoff(e.target.value)} className="input input-bordered w-full max-w-xs text-white" />
                        </div>

                        <div className="w-full max-w-xs">
                            <label className="label"><span className="label-text">Travel Date</span></label>
                            <input name='date' required type="date" onChange={e => setDate(e.target.value)} className="input input-bordered w-full max-w-xs text-white" />
                        </div>

                        <div className="w-full max-w-xs">
                            <label className="label"><span className="label-text">Pick Up Time</span></label>
                            <input name='time' required type="time" onChange={e => setTime(e.target.value)} className="input input-bordered w-full max-w-xs text-white" min="00:00" max="23:59" />
                        </div>

                        <div className="w-full max-w-xs">
                            <label className="label"><span className="label-text">Total Amount</span></label>
                            <input name='price' type="text" disabled value={`Total Price : $ ${parseFloat(totalPrice).toFixed(2)} USD`} className="input input-bordered w-full max-w-xs text-white" />
                        </div>
                        
                        <input type="submit" value="Confirm" className="btn btn-primary w-full max-w-xs" />
                    </form>
                </div>
                
            </div>
        </div>
    );
};

export default AirportServiceBook;