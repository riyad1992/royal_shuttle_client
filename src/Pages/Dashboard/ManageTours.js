import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ToursServiceRow from './ToursServiceRow';
import UpdateTours from './UpdateTours';

const ManageTours = () => {

    const [updateService, setUpdateService] = useState(null)

    const {data : tours, isLoading, refetch} = useQuery('tours', () => fetch('https://royal-shuttle-server.onrender.com/tours')
    .then(res => res.json()))
    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div>
            <h1>Manage Service: {tours.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full text-white">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tours.map((tour, index) => <ToursServiceRow tour={tour} key={tour._id} index={index} refetch={refetch} updateService={updateService} setUpdateService={setUpdateService}></ToursServiceRow>)
                        }
                    </tbody>
                </table>
            </div>
            {
                updateService && <UpdateTours updateService={updateService} setUpdateService={setUpdateService} refetch={refetch}></UpdateTours>
            }
        </div>
    );
};

export default ManageTours;