import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const AllReview = () => {
    const {data: reviews, isLoading, refetch} = useQuery('reviews',() => fetch('http://localhost:5000/reviews').then(res => res.json()))

    if(isLoading){
        return <Loading></Loading>
    }

    const handelDelete = id => {
        const procced = window.confirm('Are You Sure you want Delete Review')
        if(procced){
            fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'DELETE',
            headers: {'authorization': `Bearer ${localStorage.getItem('accessToken')}`}
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount){
                    toast(`Review is Deleted`)
                    refetch()
                }
            })
        }
        
    }


    return (
        <div className="overflow-x-auto">
                <table className="table w-full text-white">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Rating</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews.map((r, index) => <tr key={index}>
                                <th>{index+1}</th>
                                <td>{r.name}</td>
                                <td>{r.rating}</td>
                                <td><button onClick={() => handelDelete(r._id)} className="btn btn-xs btn-error" >Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
    );
};

export default AllReview;