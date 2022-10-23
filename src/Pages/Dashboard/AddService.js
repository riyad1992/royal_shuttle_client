import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddService = () => {

    const { register, formState: { errors }, handleSubmit , reset } = useForm();

    // const {data,  isLoading} = useQuery('services', () => fetch('http://localhost:5000/service').then(res => res.json()))

    const imageStorageKey = 'ecac5837ae73f48a90147331fb1566ac'

    const onSubmit = async data => {
        const image = data.image[0]
        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
        fetch(url, {
            method:"POST",
            body: formData
        })
        .then(res => res.json())
        .then(result => {
            if(result.success){
                const img = result.data.url
                const service = {
                    name: data.name,
                    details: data.details,
                    time: data.time,
                    price: data.price,
                    img: img
                }

                fetch('http://localhost:5000/newservice', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json',
                        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(service)
                })
                .then(res => res.json())
                .then(inserted => {
                    if(inserted.insertedId){
                        toast.success('Service Added Successfully')
                        reset()
                    }else{
                        toast.error('Failed to add the Service')
                    }
                })
            }
        })
    }

    // if(isLoading){
    //     return <Loading></Loading>
    // }


    return (
        <div>
            <h2>Add a New Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input 
                        type="text" 
                        placeholder="Service Name" 
                        className="input input-bordered bg-white w-full max-w-xs" 
                        {...register("name",  {
                            required: {
                                value: true,
                                message: "Name is Required"
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Details</span>
                    </label>
                    <input 
                        type="text" 
                        placeholder="Details" 
                        className="input input-bordered bg-white w-full max-w-xs" 
                        {...register("details",  {
                            required: {
                                value: true,
                                message: "Details is Required"
                            }
                        })}
                    />
                    <label className="label">
                        {errors.details?.type === 'required' && <span className="label-text-alt text-red-500">{errors.details.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Time</span>
                    </label>
                    <input 
                        type="text" 
                        placeholder="Time" 
                        className="input input-bordered bg-white w-full max-w-xs" 
                        {...register("time",  {
                            required: {
                                value: true,
                                message: "Time is Required"
                            }
                        })}
                    />
                    <label className="label">
                        {errors.time?.type === 'required' && <span className="label-text-alt text-red-500">{errors.time.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input 
                        type="text" 
                        placeholder="Price" 
                        className="input input-bordered bg-white w-full max-w-xs" 
                        {...register("price",  {
                            required: {
                                value: true,
                                message: "Price is Required"
                            }
                        })}
                    />
                    <label className="label">
                        {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input 
                        type="file" 
                        placeholder="Image" 
                        className="input input-bordered bg-white w-full max-w-xs" 
                        {...register("image",  {
                            required: {
                                value: true,
                                message: "Image is Required"
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>

                <input className='btn w-full max-w-xs' type="submit" value="ADD SERVICE" />
            </form>
        </div>
    );
};

export default AddService;