// import React from 'react';
// import { useQuery } from 'react-query';
// import quote from '../Image/quote.png'
// import Reviwe from '../Reviwe/Reviwe';
// import Loading from '../Shared/Loading';





// const Reviwes = () => {

//     const {data: reviews, isLoading, refetch} = useQuery('reviews',() => fetch('http://localhost:5000/reviews').then(res => res.json()))

//     if(isLoading){
//         return <Loading></Loading>
//     }

//     return (
//         <section className='my-28'>  
//             <div className='flex justify-between'>
//                 <div>
//                     <h4 className='text-xl text-primary font-bold'>Reviwes</h4>
//                     <h1 className='text-3xl'>What our Guest Says</h1>
//                 </div>
//                 <div>
//                     <img src={quote} className='w-24 lg:w-48' alt=""/>
//                 </div>
//             </div>
            
//             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
//                 {
//                     reviews.map(review => <Reviwe key={review._id} review={review} refetch={refetch}></Reviwe>)
//                 }
//             </div>
//         </section>
//     );
// };

// export default Reviwes;



import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import {Autoplay, EffectCoverflow, Pagination } from "swiper";
import { useQuery } from "react-query";
import quote from '../Image/quote.png'
import Loading from "../Shared/Loading";


const Reviwes = () => {

    const {data: reviews, isLoading} = useQuery('reviews',() => fetch('http://localhost:5000/reviews').then(res => res.json()))

    if(isLoading){
        return <Loading></Loading>
    }

    

    return (
        <section className='my-28'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-xl text-primary font-bold'>Reviwes</h4>
                    <h1 className='text-3xl'>What our Guest Says</h1>
                </div>
                <div>
                    <img src={quote} className='w-24 lg:w-48' alt=""/>
                </div>
            </div>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
                }}
                pagination={true}
                modules={[Autoplay,EffectCoverflow, Pagination]}
                className="mySwiper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            >
                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className="card lg:max-w-lg shadow-xl">
                            <div className="card-body">
                                <p>With late model and full size vans, Royal shuttle makes sure our transportation is safe and reliable</p>
                                <div className="flex items-center">
                                    <div className="avatar">
                                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                                            <img src={review.img} alt='' />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className='text-xl'>{review?.name}</h4>
                                        {/* <Rating 
                                            emptySymbol="fa-light fa-star"
                                            fullSymbol="fa-solid fa-star"
                                            initialRating={review.rating}
                                            readonly
                                            /> */}
                                        {/* <p><Rating 
                                            emptySymbol="far fa-star icon-star"
                                            fullSymbol="fas fa-star icon-star"
                                            initialRating={review.rating}
                                            readonly/></p> */}
                                        <p>{review.rating}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Reviwes;
