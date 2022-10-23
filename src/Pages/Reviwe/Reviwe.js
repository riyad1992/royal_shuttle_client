import React from 'react';
// import profileImg from '../Image/profile1.jpg'

const Reviwe = ({review, refetch}) => {


    return (
        <div>
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
        </div>
    );
};

export default Reviwe;