import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import aboutbg from "../assets/cocoabeans.jpg"
import { Link } from 'react-router-dom'
import manLogic from "../assets/c4.jpg"
import quote from "../assets/quote.jpg"
import corporate from "../assets/mainGuy.JPG"

import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';



import Quote from '../components/Quote'

const About = () => {
    return (
        <div>
            <div className="relative ">
                <img src={aboutbg} alt='service' />
                <div className='absolute top-[70%] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
                    <h2 className='text-[24px] md:text-[24px] lg:text-[80px] font-bold tracking-wider text-white'>About Us</h2>
                    <Breadcrumb />
                </div>
            </div>


            <section>
                <div className='flex flex-col md:flex-row pt-[50px] gap-8 pb-6 p-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
                    <div className='flex flex-col flex-1 gap-4'>
                        <p className='text-[18px] text-orange-500 font-medium'>Quality from the Source</p>
                        <span className='font-bold text-[25px] md:text-[35px] w-full md:w-[450px]'>Our Products</span>
                        <p className='text-gray-400'>
                            We are a Global German cocoa produce import & export company, committed to product quality, environment, addition value contribution and crop sustainability. We work tirelessly and meticulously to ensure products retain the best properties from origin to destination, implementing end to end quality control and product assurance of the highest international standards.</p>
                        <p className='text-gray-400 opacity-0'>
                            Brook presents your services with flexible, convenient and comprehensive layouts. You can select your favorite layouts.
                        </p>
                        <div className='opacity-0'>
                            <Link to="/about" className="inline-block font-light px-6 py-3 mt-4 text-white bg-orange-500 rounded hover:bg-orange-600 cursor-pointer">
                                MORE ABOUT US
                            </Link>
                        </div>
                    </div>
                    <div className='flex-1 w-full md:w-auto'>
                        <img src={manLogic} alt='service' className='h-auto md:h-[450px] w-full md:w-[400px]' />
                    </div>
                </div>
            </section>


            <div className="md:relative">
                <img src={quote} alt='quote' className="w-full h-full object-cover" />
                <div className="md:absolute top-[15%] left-0 flex items-center  w-full p-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
                    <Quote />
                </div>
            </div>

            <section className="overflow-hidden text-center py-6 px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
                <h1 className="text-4xl font-bold mb-2">Our Current Awardee</h1>

                <div className="flex flex-col lg:flex-row lg:justify-center mt-8">
                    <div className="relative bg-white rounded-lg shadow-lg w-full sm:w-[350px] h-[450px] group overflow-hidden">
                        <img className="w-full h-full object-cover" src={corporate} alt="Mancherwan Kolin" />
                        <div className="absolute bottom-0 w-full h-[80px] bg-white bg-opacity-50 p-4 transition-all duration-300 ease-in-out group-hover:h-[35%] group-hover:bg-orange-500 group-hover:bg-opacity-100">
                            <h2 className="text-xl font-semibold">Michael N. Olsen</h2>
                            <p className="text-gray-600">Distributor</p>
                            <div className="absolute bottom-0 left-0 right-0 h-[80%] w-full flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                <Link className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-[0.4s]"><FaLinkedinIn /></Link>
                            </div>
                        </div>
                    </div>
                    <p className='text-left lg:w-[500px] h-[450px] p-4'>
                        Born March, 10 1962 in Hamburg, Germany. Nolan M Olsen
                        Studied Business in the prestigious University Of Copenhagen in Denmark. He became an independent contractor in supply Chain management and was very active
                        in Rice Shipments from Vietnam,China  to Australia and parts of Europe . He was successful in this field for 25 years  building a name for himself.
                        Overtime he transitioned into Wheat, Coffee and other commodities before bidding for contracts to supply Cocoa.
                        After forging a strong network for himself he became a very successful businessman and his imports has helped processing companies to rely on pure cocoa for their products ranging from skincare to beverages and more. He has also embarked on charities in Vietnam and Brazil giving back to the needy and underprivileged/less fortunate in society. We are proud to have announced him as our current.</p>
                </div>
            </section>
        </div>
    )
}

export default About