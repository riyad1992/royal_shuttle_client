import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyReview = () => {
    const [user] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit , reset } = useForm();

    const onSubmit = async data => {
        const review = {
            name: user.displayName,
            img: user.photoURL,
            rating: data.rating || 5,
            comment: data.comment
        }

        fetch('http://localhost:5000/reviews', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json',
                        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(review)
                })
                .then(res => res.json())
                .then(inserted => {
                    if(inserted.insertedId){
                        toast.success('Review Added Successfully')
                        reset()
                    }else{
                        toast.error('Failed to add the Review')
                    }
                })
    }


    return (
        <div className='flex justify-center mt-5'>
            <form onSubmit={handleSubmit(onSubmit)}> 
                
            <h2>Add a New Review</h2>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Rating Star</span>
                    </label>
                    <div className="rating">
                        {
                            [...Array(5)].map((star, i) => {
                                const ratingValue = i+1
                                return <input 
                                key={i}
                                placeholder="Service Name"  
                                {...register("rating")} value={ratingValue} type="radio" name="rating" className="mask mask-star-2 bg-orange-400" />
                            })
                        }
                    </div>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Comment</span>
                    </label>
                    <textarea 
                        type="textarea" 
                        placeholder="comment" 
                        className="textarea textarea-success bg-white w-full max-w-xs" 
                        {...register("comment",  {
                            required: {
                                value: true,
                                message: "Comments is Required"
                            }
                        })}
                    />
                    <label className="label">
                        {errors.comment?.type === 'required' && <span className="label-text-alt text-red-500">{errors.comment.message}</span>}
                    </label>
                </div>

                <input className='btn w-full max-w-xs' type="submit" value="ADD Review" />
            </form>
        </div>
    );
};

export default MyReview;

