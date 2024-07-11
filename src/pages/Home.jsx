import React from 'react';
import "./Home.css"

import homeBg from "../assets/homebg.jpg"
import support from "../assets/support.png"
import clock from "../assets/clock.png"
import location from "../assets/location.png"
import truck from "../assets/delivery-truck.png"
import ship from "../assets/ship.png"
import airplane from "../assets/airplane.png"
import manLogic from "../assets/manLogistic.jpg"
import quote from "../assets/quote.jpg"
import corporate from "../assets/mainGuy.JPG"

import Quote from '../components/Quote'
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="relative">
            <img src={homeBg} alt='bg' className="w-full h-full object-cover" />
            <div className="absolute top-0 lg:top-[10%] left-0 w-full flex flex-col p-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
                <h1 className="text-white lg:text-[50px] lg:leading-[55px] mb-4 font-bold md:text-[25px] md:leading-[30px]">Safe & Reliable <b className='text-[#1b4137]'>Logistics</b><br /> solutions!</h1>
                <div className="flex flex-col md:flex-row items-center lg:w-[450px] w-[250px] border border-gray-300 rounded overflow-hidden bg-white shadow-lg">
                    <input
                        type="text"
                        placeholder="Your Tracking ID"
                        className="md:py-2 py-1 px-4 lg:w-72 focus:outline-none w-full md:w-auto"
                    />
                    <button className="bg-orange-500 lg:w-[150px] text-white px-4 md:py-2 py-1 font-semibold w-full md:w-auto">TRACK & TRACE</button>
                </div>
                <span className="text-white mt-4 italic text-sm">FOR ORDER STATUS INQUIRY</span>
            </div>
            <div className=''>
                <div className='flex flex-col md:flex-row items-center justify-between bg-orange-50 p-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 gap-4 md:gap-0'>
                    <div className='flex items-center md:gap-2 gap-12'>
                        <img src={support} alt='support' className='md:w-10 md:h-10 w-6 h-6' />
                        <div className='flex flex-col'>
                            <span className='font-light'>Call Us Anytime</span>
                            <span className='font-bold lg:text-lg'>+(233) 234 567 789</span>
                        </div>
                    </div>
                    <div className='flex items-center md:gap-2 gap-12'>
                        <img src={clock} alt='clock' className='md:w-10 md:h-10 w-6 h-6' />
                        <div className='flex flex-col'>
                            <span className='font-light'>Sunday CLOSED</span>
                            <span className='font-bold lg:text-lg'>Mon - Sat 8.00 - 18.00</span>
                        </div>
                    </div>
                    <div className='flex items-center md:gap-2 gap-12'>
                        <img src={location} alt='location' className='md:w-10 md:h-10 w-6 h-6' />
                        <div className='flex flex-col'>
                            <span className='font-light'>2nd, Floor</span>
                            <span className='font-bold lg:text-lg'>Legon City Mall - Accra</span>
                        </div>
                    </div>
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

            <section>
                <div className='flex flex-col md:flex-row pt-[100px] gap-8 pb-6 p-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
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
                <h1 className="text-4xl font-bold mb-2">Our Entrusted Distributor</h1>
                <div className="flex justify-center mt-8">
                    <div className="relative bg-white rounded-lg shadow-lg mx-4 w-full sm:w-[350px] h-[450px] group overflow-hidden">
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
                    <p className='text-left w-[500px] h-[350px]'>
                        Born March, 10 1962 in Hamburg, Germany. Nolan M Olsen
                        Studied Business in the prestigious University Of Copenhagen in Denmark. He became an independent contractor in supply Chain management and was very active in Rice Shipments from Vietnam,China  to Australia and parts of Europe . He was successful in this field for 25 years  building a name for himself. Overtime he transitioned into Wheat, Coffee and other commodities before bidding for contracts to supply Cocoa. After forging a strong network for himself he became a very  bla bla businessman and his imports has helped processing companies to rely on pure cocoa for their products ranging from skincare to beverages and bla bla bla. We are proud to have announced him as our current. He has also embarked on charities in Vietnam and Brazil giving back to the needy and underprivileged/less fortunate in society.</p>
                </div>
            </section>
        </div>
    );
}

export default Home;
