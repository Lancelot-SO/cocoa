import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import aboutbg from "../assets/homebg.jpg"
import { Link } from 'react-router-dom'
import manLogic from "../assets/manLogistic.jpg"
import quote from "../assets/quote.jpg"
import corporate from "../assets/mainGuy.jpg"

import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';



import Quote from '../components/Quote'

const About = () => {
    return (
        <div>
            <div className="relative ">
                <img src={aboutbg} alt='service' />
                <div className='absolute top-[40%] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
                    <h2 className='text-[24px] md:text-[24px] lg:text-[80px] font-bold tracking-wider text-orange-500'>About Us</h2>
                    <Breadcrumb />
                </div>
            </div>


            <section>
                <div className='flex flex-col md:flex-row pt-[50px] gap-8 pb-6 p-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
                    <div className='flex flex-col flex-1 gap-4'>
                        <p className='text-[18px] text-orange-500 font-medium'>Our Services</p>
                        <span className='font-bold text-[25px] md:text-[35px] w-full md:w-[450px]'>Safe Logistic & Transport Solutions That Saves Our Valuable Time!</span>
                        <p className='text-gray-400'>
                            Brook presents your services with flexible, convenient and comprehensive layouts. You can select your favorite layouts & elements for particular use with unlimited customization possibilities. Pixel-perfect replication of the designers is intended.
                        </p>
                        <p className='text-gray-400'>
                            Brook presents your services with flexible, convenient and comprehensive layouts. You can select your favorite layouts.
                        </p>
                        <div className=''>
                            <Link to="/about" className="inline-block font-light px-6 py-3 mt-4 text-white bg-orange-500 rounded hover:bg-orange-600 cursor-pointer">
                                MORE ABOUT US
                            </Link>
                        </div>
                    </div>
                    <div className='flex-1 w-full md:w-auto'>
                        <img src={manLogic} alt='service' className='h-auto md:h-[500px] w-full md:w-[400px]' />
                    </div>
                </div>
            </section>


            <div className="md:relative">
                <img src={quote} alt='quote' className="w-full h-full object-cover" />
                <div className="md:absolute top-[15%] left-0 flex items-center  w-full p-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
                    <Quote />
                </div>
            </div>

            <section className="text-center py-6 px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
                <p className="text-orange-500 text-lg">Our Team Members</p>
                <h1 className="text-4xl font-bold mb-2">Meet Our Team</h1>

                <div className="flex justify-center mt-8">
                    <div className="relative bg-white rounded-lg shadow-lg mx-4 w-full sm:w-[350px] h-[350px] group overflow-hidden">
                        <img className="w-full h-full object-cover" src={corporate} alt="Mancherwan Kolin" />
                        <div className="absolute bottom-0 w-full h-[80px] bg-white bg-opacity-50 p-4 transition-all duration-300 ease-in-out group-hover:h-[35%] group-hover:bg-orange-500 group-hover:bg-opacity-100">
                            <h2 className="text-xl font-semibold">Mancherwan Kolin</h2>
                            <p className="text-gray-600">Health Agent</p>
                            <div className="absolute bottom-0 left-0 right-0 h-[80%] w-full flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                <Link className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100"><FaFacebook /></Link>
                                <Link className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-200"><FaInstagram /></Link>
                                <Link className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-300"><FaTwitter /></Link>
                                <Link className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-[0.4s]"><FaLinkedinIn /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About