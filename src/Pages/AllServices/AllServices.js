import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Service from '../Service/Service';
import ServiceBooked from '../Services/ServiceBooked';
import ServiceDetails from '../Services/ServiceDetails';
import Loading from '../Shared/Loading';

const AllServices = () => {

    const [serviceBook, setServiceBook] = useState(null)
    const [info, setInfo] = useState(null)

    const {data: services, isLoading} = useQuery(['services'], () => fetch(`https://royal-shuttle-server.onrender.com/newservice`)
    .then(res => res.json()))

        if(isLoading){
            return <Loading></Loading>
        }

    return (
        <div className=''>
            <h4 className='text-xl text-primary text-center'>All Services</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services?.map(service => <Service key={service._id} service={service} setInfo={setInfo} setServiceBook={setServiceBook}></Service>)
                }
            </div>
            {
                serviceBook && <ServiceBooked setServiceBook={setServiceBook} serviceBook={serviceBook}></ServiceBooked>
            }
            {
                info && <ServiceDetails info={info} setServiceBook={setServiceBook} setInfo={setInfo}></ServiceDetails>
            }
        </div>
    );
};

export default AllServices;