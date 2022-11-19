import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import AirportDetails from './AirportDetails';
import AirportService from './AirportService';
import AirportServiceBook from './AirportServiceBook';

const Airport = () => {

    const [serviceBook, setServiceBook] = useState(null)
    const [detailsInfo, setDetailsInfo] = useState(null)

    const {data: services, isLoading} = useQuery(['services'], () => fetch(`https://royal-shuttle-server.onrender.com/airportservice`)
    .then(res => res.json()))

        if(isLoading){
            return <Loading></Loading>
        }

    return (
        <div>
            <h4 className='text-xl text-primary text-center'>Book your ground transportation with Royal Shuttle and start enjoying your vacation from the moment you arrive at the airport. Royal shuttle is your safe and reliable partner when it comes to airport shuttle services in Belize; with representatives on  airport and offices in over 20 other tropical destinations, you can relax and let us take care of the rest.</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services?.map(service => <AirportService key={service._id} service={service} setServiceBook={setServiceBook} setDetailsInfo={setDetailsInfo}></AirportService>)
                }
            </div>
            {
                serviceBook && <AirportServiceBook setServiceBook={setServiceBook} serviceBook={serviceBook}></AirportServiceBook>
            }
            {
                detailsInfo && <AirportDetails detailsInfo={detailsInfo} setServiceBook={setServiceBook}></AirportDetails>
            }
        </div>
    );
};

export default Airport;