import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import BookingDetails from './BookingDetails';

const MyBookings = () => {
    const [details, setDetails] = useState(null)
    const [reservation, setReservation] = useState([])
    const [user] = useAuthState(auth)

    const navigate = useNavigate()

    useEffect(() => {
        if(user){
            fetch(`http://localhost:5000/reservations?passangerEmail=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res => {
                if(res.status === 401 || res.status === 403){
                    navigate('/')
                    signOut(auth);
                    localStorage.removeItem('accessToken')
                }
                return res.json()
            })
            .then(data => setReservation(data))
        }
    }, [user, navigate])


    return (
        <div>
            <h1>My Bookings: {reservation.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full text-white">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reservation.map((r, index) => <tr key={index}>
                                <th>{index+1}</th>
                                <td>{r.passangerName}</td>
                                <td>{r.serviceName}</td>
                                <td>{r.date}</td>
                                <td><label htmlFor="modal-details" onClick={() => setDetails(r)} className="btn btn-xs btn-error" >Details</label></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                details && <BookingDetails details={details}></BookingDetails>
            }
        </div>
    );
};

export default MyBookings;