import React from 'react';
import Footer from '../Shared/Footer/Footer';
import NavBar from '../Shared/NavBar/NavBar';
import { useForm } from "react-hook-form";

const Purchase = () => {

    // react hook form
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data: any) => console.log(data);

    console.log(watch("example"));

    return (
        <>
            <NavBar />
            <div className='container mx-auto h-screen mt-10'>
                <h2 className='flex items-center justify-center text-5xl font-bold'>Confirm your booking for Weeding Photography</h2>
                <div className='flex justify-between flex-wrap mt-20'>
                    <div className='flex flex-col items-center justify-center max-w-[50%]  p-3'>

                        <img className='w-6/12 rounded-lg' src="https://image.freepik.com/free-photo/groom-putting-ring-bride-s-finger_1157-338.jpg" alt="" />

                        <h4 className='text-2xl my-5'>Price: $566</h4>
                        <h4 className='text-justify	'>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ab repellat quam minus nemo voluptates quos ad magnam dolores aspernatur consectetur quae nisi quibusdam voluptate velit iure impedit, doloremque magni delectus, perspiciatis excepturi nobis. Consequuntur possimus alias ut maxime magnam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, ipsam!</h4>

                    </div>

                    {/* react hook form starts*/}

                    <div className='flex flex-col items-center justify-center min-w-[50%]'>
                        <h2 className='text-3xl font-bold mb-5'>Billing Information</h2>

                        <form onSubmit={handleSubmit(onSubmit)} className='w-full flex flex-col items-center justify-center'>

                            <input
                                defaultValue="akbarkha@gmail.com"
                                {...register("email", { required: true })}
                                className='border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 w-3/5'
                                type='email'
                                placeholder='Your Email'
                            /> <br />

                            <input
                                defaultValue="Akbar Kha"
                                {...register("name", { required: true })}
                                className='border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 w-3/5'
                                type='text'
                                placeholder='Your Name'
                            /> <br />

                            <input
                                placeholder='Your Phone'
                                {...register("phone", { required: true })}
                                className='border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 w-3/5'
                                type='number'
                            /> <br />

                            <input
                                placeholder='Shipping Address'
                                {...register("address", { required: true })}
                                className='border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 w-3/5'
                                type='text'
                            /> <br />

                            {errors.exampleRequired && <span>This field is required</span>}

                            <input type="submit" className="py-2 px-4  bg-gray-800 hover:bg-gray-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-3/5 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg " />
                        </form>

                        {/* react hook form ends*/}

                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Purchase;