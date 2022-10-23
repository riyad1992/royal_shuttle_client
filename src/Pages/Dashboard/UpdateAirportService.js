import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const UpdateAirportService = ({updateService, setUpdateService, refetch}) => {

    const {_id} = updateService
    const [service, setService] = useState({})
    const initialInfo = { name: service.name, price: service.price, details: service.details, addPrice: service.addPrice}
    const [serviceInfo, setServiceInfo] = useState(initialInfo);

    useEffect(() => {
        fetch(`http://localhost:5000/airportservice/${_id}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => setService(data))
    }, [_id])

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...serviceInfo };
        newInfo[field] = value;
        setServiceInfo(newInfo);
    }

    const handleUpdateService = event => {
        event.preventDefault()
        const updateDoc = {
            ...serviceInfo,
        }

        fetch(`http://localhost:5000/airportservice/${_id}`, {
            method: 'PUT',
            headers:{
                "content-type": "application/json",
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(updateDoc)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount> 0){
                setServiceInfo('')
            }
            toast(`Airport Service updated ` )

            refetch()
            setUpdateService(null)
        })

        // setBooking(null)
    }

    return (
        <div>
            <input type="checkbox" id="modal-1" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="modal-1" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-primary">Update for : {service.name}</h3>
                    <form onSubmit={handleUpdateService } className='grid grid-cols-1 gap-3 justify-items-center mt-3'>
                        <input name='name' onBlur={handleOnBlur} placeholder={service.name} type="text" className="input input-bordered w-full max-w-xs" />

                        <textarea name='details' onBlur={handleOnBlur} placeholder={service?.details} type="text" className="input input-bordered w-full max-w-xs" />

                        <input name='price' onBlur={handleOnBlur} placeholder={service.price} type="text" className="input input-bordered w-full max-w-xs" />

                        <input name='addPrice' onBlur={handleOnBlur} placeholder={service.addPrice} type="text" className="input input-bordered w-full max-w-xs" />

                        <input type="submit" value="Submit" className="btn btn-primary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateAirportService;