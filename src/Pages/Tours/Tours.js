import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ToursService from './ToursService'
import ToursBooked from './ToursBooked'
import ToursDetails from './ToursDetails'

const Tours = () => {

    const [serviceBook, setServiceBook] = useState(null)
    const [detailsInfo, setDetailsInfo] = useState(null)

    const {data: tours, isLoading} = useQuery(['tours'], () => fetch(`https://royal-shuttle-server.onrender.com/tours`)
    .then(res => res.json()))

        if(isLoading){
            return <Loading></Loading>
        }

    return (
        <div>
            <h4 className='text-xl text-primary text-center'>Our Day Tours</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    tours?.map(tour => <ToursService key={tour._id} tour={tour} setServiceBook={setServiceBook} setDetailsInfo={setDetailsInfo}></ToursService>)
                }
            </div>
            {
                serviceBook && <ToursBooked setServiceBook={setServiceBook} serviceBook={serviceBook}></ToursBooked>
            }
            {
                detailsInfo && <ToursDetails detailsInfo={detailsInfo} setServiceBook={setServiceBook}></ToursDetails>
            }
        </div>
    );
};

export default Tours;