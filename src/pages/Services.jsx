// src/pages/About.jsx
import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import servicebg from "../assets/homebg.jpg"
import truck from "../assets/delivery-truck.png"
import ship from "../assets/ship.png"
import airplane from "../assets/airplane.png"




const Services = () => {
    return (
        <div className="">
            <div className="relative ">
                <img src={servicebg} alt='service' />
                <div className='absolute top-[40%] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
                    <h2 className='text-[24px] md:text-[24px] lg:text-[80px] font-bold tracking-wider text-orange-500'>Services</h2>
                    <Breadcrumb />
                </div>
            </div>
            <section>
                <div className='flex flex-col pb-8 lg:pt-6 p-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
                    <div className='flex flex-col items-center justify-center'>
                        <p className='text-center text-[18px] text-orange-500 font-medium'>Our Services</p>
                        <span className='text-[25px] lg:text-[40px] font-bold text-center'>What We Can Do For You</span>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-4 mt-16">
                        <div className="card border border-gray-100 bg-white shadow-md rounded-lg p-6 text-center w-full sm:w-80 h-96">
                            <div className="card-content">
                                <div className="text-orange-500 mb-4">
                                    <img src={truck} alt='truck' className='mx-auto' />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Land Transport</h3>
                                <p class="">
                                    The sea freight service has grown considerably in recent years. We spend time getting to know your processes too.
                                </p>
                            </div>
                        </div>

                        <div className="card border border-gray-100 bg-white shadow-md rounded-lg p-6 text-center w-full sm:w-80 h-96">
                            <div className="card-content">
                                <div className="text-orange-500 mb-4">
                                    <img src={ship} alt='ship' className='mx-auto' />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Sea Transport</h3>
                                <p class="">
                                    The sea freight service has grown considerably in recent years. We spend time getting to know your processes too.
                                </p>
                            </div>
                        </div>

                        <div className="card border border-gray-100 bg-white shadow-md rounded-lg p-6 text-center w-full sm:w-80 h-96">
                            <div className="card-content">
                                <div className="text-orange-500 mb-4">
                                    <img src={airplane} alt='airplane' className='mx-auto' />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Air Transport</h3>
                                <p class="">
                                    The air freight service has grown considerably in recent years. We spend time getting to know your processes too.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Services;
