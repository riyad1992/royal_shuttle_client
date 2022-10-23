import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ServiceRow from './ServiceRow';
import UpdateService from './UpdateService';

const ManageService = () => {

    const [updateService, setUpdateService] = useState(null)

    const {data : newService, isLoading, refetch} = useQuery('newService', () => fetch('http://localhost:5000/newservice')
    .then(res => res.json()))
    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div>
            <h1>Manage Service: {newService.length}</h1>
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
                            newService.map((service, index) => <ServiceRow service={service} key={service._id} index={index} refetch={refetch} updateService={updateService} setUpdateService={setUpdateService}></ServiceRow>)
                        }
                    </tbody>
                </table>
            </div>
            {
                updateService && <UpdateService updateService={updateService} setUpdateService={setUpdateService}></UpdateService>
            }
        </div>
    );
};

export default ManageService;