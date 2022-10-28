import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddTour = () => {

    const { register, formState: { errors }, handleSubmit , reset } = useForm();

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
                    price: data.price,
                    addPrice: data.addPrice,
                    img: img
                }

                fetch('http://localhost:5000/tours', {
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
                        toast.success('Tour Added Successfully')
                        reset()
                    }else{
                        toast.error('Failed to add the Tour')
                    }
                })
            }
        })
    }

    return (
        <div>
            <h2>Add a New Tours</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input 
                        type="text" 
                        placeholder="Tour Name" 
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
                        <span className="label-text">Additional Price</span>
                    </label>
                    <input 
                        type="text" 
                        placeholder="addPrice" 
                        className="input input-bordered bg-white w-full max-w-xs" 
                        {...register("addPrice",  {
                            required: {
                                value: true,
                                message: "add-Price is Required"
                            }
                        })}
                    />
                    <label className="label">
                        {errors.addPrice?.type === 'required' && <span className="label-text-alt text-red-500">{errors.addPrice.message}</span>}
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

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Details</span>
                    </label>
                    <textarea 
                        type="text" 
                        placeholder="Details"
                        rows={5} 
                        className="textarea  input-bordered bg-white w-full max-w-xs" 
                        {...register("details",  {
                            required: {
                                value: true,
                                message: "Details is Required"
                            }
                        })}
                    ></textarea>
                    <label className="label">
                        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                    </label>
                </div>

                <input className='btn w-full max-w-xs' type="submit" value="ADD SERVICE" />
            </form>
        </div>
    );
};

export default AddTour;