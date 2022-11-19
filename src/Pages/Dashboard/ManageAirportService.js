import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import AirportServiceRow from './AirportServiceRow';
import UpdateAirportService from './UpdateAirportService';

const ManageAirportService = () => {

    const [updateService, setUpdateService] = useState(null)

    const {data : airportService, isLoading, refetch} = useQuery('airportservice', () => fetch('https://royal-shuttle-server.onrender.com/airportservice')
    .then(res => res.json()))
    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div>
            <h1>Manage Service: {airportService.length}</h1>
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
                            airportService.map((service, index) => <AirportServiceRow service={service} key={service._id} index={index} refetch={refetch} updateService={updateService} setUpdateService={setUpdateService}></AirportServiceRow>)
                        }
                    </tbody>
                </table>
            </div>
            {
                updateService && <UpdateAirportService updateService={updateService} setUpdateService={setUpdateService} refetch={refetch}></UpdateAirportService>
            }
        </div>
    );
};

export default ManageAirportService;