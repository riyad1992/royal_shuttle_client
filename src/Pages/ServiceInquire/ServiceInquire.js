import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const ServiceInquire = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_64dykai', 'template_shkpznk', form.current, 'HwcfADj8QlHFcTjL6')
        // emailjs.sendForm(process.env.SERVICE_ID, process.env.TEMPLATE_ID, form.current, process.env.PUBLIC_ID)
        .then((result) => {
            toast(`Thank you for Your Interested Please Check your Eamil`)
        }, (error) => {
            toast.error(error.text);
        });
        e.target.reset()
    };

    return (
        <div>
            <h3 className='text-xl my-5'>In Belize, you can pick one of our 3 possible transportation options: Shared Shuttle, Private Transfer or Deluxe Private Transfer. Pre-booking with Royal Shuttle service guarantees you quick departure and short waiting times. We serve almost all hotels in the Belize</h3>
            <form ref={form} onSubmit={sendEmail} className='grid grid-cols-1 gap-3 justify-items-center mt-3'>
                <div className="w-full max-w-xs">
                    <label>Name</label>
                    <input type="text" name="user_name" className="input input-bordered w-full max-w-xs bg-white"/>
                </div>

                <div className="w-full max-w-xs">
                    <label>Email</label>
                    <input type="email" name="user_email" className="input input-bordered w-full max-w-xs bg-white"/>
                </div>

                <div className="w-full max-w-xs">
                    <label>Pick Up</label>
                    <input type="text" name="user_pickUp" className="input input-bordered w-full max-w-xs bg-white"/>
                </div>

                <div className="w-full max-w-xs">
                    <label>Drop off</label>
                    <input type="text" name="user_dropOff" className="input input-bordered w-full max-w-xs bg-white"/>
                </div>

                <div className="w-full max-w-xs">
                    <label>Date</label>
                    <input type="date" name="date" className="input input-bordered w-full max-w-xs bg-white"/>
                </div>

                <div className="w-full max-w-xs">
                    <label>Time</label>
                    <input type="time" name="time" min="00:00" max="23:59" className="input input-bordered w-full max-w-xs bg-white"/>
                </div>

                <div className="w-full max-w-xs">
                    <label>Total People</label>
                    <input type="number" name="pax" min='1' max="15" className="input input-bordered w-full max-w-xs bg-white"/>
                </div>

                <div className="w-full max-w-xs">
                    <label>Message</label>
                    <textarea name="message" rows={5} className="textarea input-bordered w-full max-w-xs bg-white"/>
                </div>

                <input type="submit" value="Send" className="btn btn-primary w-full max-w-xs"/>
            </form>
        </div>
    );
};

export default ServiceInquire;