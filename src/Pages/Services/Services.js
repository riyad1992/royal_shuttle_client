import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Service from '../Service/Service';
import Loading from '../Shared/Loading';
import ServiceBooked from './ServiceBooked';
import ServiceDetails from './ServiceDetails';

const Services = () => {

    const [serviceBook, setServiceBook] = useState(null)
    const [info, setInfo] = useState(null)

    const {data: services, isLoading} = useQuery(['services'], () => fetch(`http://localhost:5000/newservice`)
    .then(res => res.json()))

        if(isLoading){
            return <Loading></Loading>
        }

    return (
        <div className=''>
            <h4 className='text-xl text-primary text-center'>All Services</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services?.slice(0,3).map(service => <Service key={service._id} service={service} setInfo={setInfo} setServiceBook={setServiceBook}></Service>)
                }
            </div>
            {
                serviceBook && <ServiceBooked setServiceBook={setServiceBook} serviceBook={serviceBook}></ServiceBooked>
            }
            {
                info && <ServiceDetails info={info} setServiceBook={setServiceBook} setInfo={setInfo}></ServiceDetails>
            }
            <h4 className='text-xl text-primary text-center cursor-pointer my-5'><Link to={'/services'}>More Services ..</Link></h4>
        </div>
    );
};

export default Services;






// import React from 'react';
// import van1 from '../Image/van1.jpg'
// import van2 from '../Image/van2.jpg'
// import van3 from '../Image/van3.jpg'
// import Service from '../Service/Service';

// const Services = () => {

//     const services = [
//         {
//             _id : 1,
//             name : "Shuttle Service",
//             description: '',
//             img: van1
//         },
//         {
//             _id : 2,
//             name : "Airport Shuttle",
//             description: '',
//             img: van2
//         },
//         {
//             _id : 3,
//             name : "Tour Service",
//             description: '',
//             img: van3
//         },
//     ]

//     return (
//         <div className='my-28'>
//             <div className='text-center'>
//                 <h3 className='font-bold text-primary text-xl uppercase'>our Services</h3>
//                 <h2 className='text-4xl'>Services we provide</h2>
//             </div>
//             <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
//                 {
//                     services.map(service => <Service key= {service._id} service={service}></Service>)
//                 }
//             </div>
//         </div>
//     );
// };

// export default Services;


// import { format } from 'date-fns';
// import React, { useState } from 'react';
// import { useQuery } from 'react-query';
// import Booked from '../Booking/Booked/Booked';
// import BookingModal from '../Booking/BookingModal/BookingModal';
// import Loading from '../Shared/Loading';

// const Services = ({date}) => {

//     const [booking, setBooking] = useState(null)

//     const formatedDate = format(date, "PP")

//     const {data: services, isLoading, refetch} = useQuery(['available', formatedDate], () => fetch(`http://localhost:5000/available?date=${formatedDate}`)
//     .then(res => res.json()))

//         if(isLoading){
//             return <Loading></Loading>
//         }

//     return (
//         <div>
//             <h4 className='text-xl text-primary text-center'>Availabale Booking on:  {format(date, 'PP')}</h4>
//             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
//                 {
//                     services?.map(booked => <Booked key={booked._id} booked={booked} setBooking={setBooking}></Booked>)
//                 }
//             </div>
//             {booking && <BookingModal date={date} booking={booking} setBooking={setBooking} refetch={refetch}></BookingModal>}
//         </div>
//     );
// };

// export default Services;