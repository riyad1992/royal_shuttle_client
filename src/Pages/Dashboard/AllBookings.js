// import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
// import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
// import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import BookingDetails from './BookingDetails';

const AllBookings = () => {

    const [details, setDetails] = useState(null)

    // const [reservation, setReservation] = useState([])
    // const [user] = useAuthState(auth)

    // const navigate = useNavigate()

    // useEffect(() => {
    //     if(user){
    //         fetch(`https://royal-shuttle-server.onrender.com/bookings`, {
    //             method: 'GET',
    //             headers: {
    //                 'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    //             }
    //         })
    //         .then(res => {
    //             if(res.status === 401 || res.status === 403){
    //                 navigate('/')
    //                 signOut(auth);
    //                 localStorage.removeItem('accessToken')
    //             }
    //             return res.json()
    //         })
    //         .then(data => setReservation(data))
    //     }
    // }, [user, navigate])

    const {data: reservation, isLoading, refetch} = useQuery('reservation',() => fetch('https://royal-shuttle-server.onrender.com/bookings', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if(isLoading){
        return <Loading></Loading>
    }

    const handelDelete = id => {
        const procced = window.confirm('Are You Sure you want Delete reservation')
        if(procced){
            fetch(`https://royal-shuttle-server.onrender.com/bookings/${id}`, {
            method: 'DELETE',
            headers: {'authorization': `Bearer ${localStorage.getItem('accessToken')}`}
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount){
                    toast(`Reservation from: ${reservation.passangerName} is Deleted`)
                    refetch()
                }
            })
        }
        
    }

    return (
        <div>
            <h1>All Bookings: {reservation.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full text-white">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Details</th>
                            <th>Action</th>
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
                                <td><button onClick={() => handelDelete(r._id)} className="btn btn-xs btn-error" >Delete</button></td>
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

export default AllBookings;