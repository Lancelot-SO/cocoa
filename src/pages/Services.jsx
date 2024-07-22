// src/pages/About.jsx
import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import servicebg from "../assets/prodImage.jpg"
import truck from "../assets/delivery-truck.png"
import ship from "../assets/checklist.png"
import airplane from "../assets/airplane.png"




const Services = () => {
    return (
        <div className="">
            <div className="relative ">
                <img src={servicebg} alt='service' className='w-full h-[800px] object-cover' />
                <div className='absolute top-[40%] lg:top-[60%] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
                    <h2 className='text-[24px] md:text-[24px] lg:text-[80px] font-bold tracking-wider text-white'>Services</h2>
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
                                <h3 className="text-xl font-bold mb-2">Storage And WareHousing</h3>
                                <p class="">
                                    Our cocoa produce is stored in silos and warehouses for future onwards distribution.
                                </p>
                            </div>
                        </div>

                        <div className="card border border-gray-100 bg-white shadow-md rounded-lg p-6 text-center w-full sm:w-80 h-96">
                            <div className="card-content">
                                <div className="text-orange-500 mb-4">
                                    <img src={ship} alt='ship' className='mx-auto' />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Testing Of Raw Cocoa</h3>
                                <p class="">
                                    Quality, Control and Asurance purposes to ensure optimal grade cocoa beans.
                                </p>
                            </div>
                        </div>

                        <div className="card border border-gray-100 bg-white shadow-md rounded-lg p-6 text-center w-full sm:w-80 h-96">
                            <div className="card-content">
                                <div className="text-orange-500 mb-4">
                                    <img src={airplane} alt='airplane' className='mx-auto' />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Import & Export</h3>
                                <p class="">
                                    Our Freight services have grown considerably in recent years. Our partnership with our distributors ensure worldwide delivery.
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
