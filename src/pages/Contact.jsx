import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import contactbg from "../assets/homebg.jpg"
import location from "../assets/home.png"
import email from "../assets/mail.png"
import phone from "../assets/iphone.png"



const Contact = () => {
    return (
        <div>
            <div className="relative ">
                <img src={contactbg} alt='service' />
                <div className='absolute top-[40%] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
                    <h2 className='text-[24px] md:text-[24px] lg:text-[80px] font-bold tracking-wider text-orange-500'>Contact Us</h2>
                    <Breadcrumb />
                </div>
            </div>
            <section>
                <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
                    <div class="hidden my-10 w-full h-[580px] overflow-hidden">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.412449693084!2d-0.18150002525418493!3d5.65332329432803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9c7eaac8b6d5%3A0x63e1fd54f881e500!2sLegon%20City%20Mall!5e0!3m2!1sen!2sgh!4v1713517621908!5m2!1sen!2sgh"
                            title="Google Maps Location"
                            height="360"
                            style={{ border: '0' }}
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                            className='w-full h-full'
                        >
                        </iframe>
                    </div>

                    <div class="flex items-center justify-center">
                        <div class="w-full my-10 p-6 bg-white shadow-md rounded-lg">
                            <div class="flex flex-col md:flex-row md:space-x-6 lg:gap-20">
                                <div class="flex-1 mb-6 md:mb-0">
                                    <h2 class="text-2xl font-semibold mb-6">Get in Touch</h2>
                                    <form class="">
                                        <div class="mb-4">
                                            <textarea class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600" rows="4" placeholder="Enter Message"></textarea>
                                        </div>
                                        <div class="flex space-x-4 mb-4">
                                            <input type="text" class="w-1/2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600" placeholder="Enter your name" />
                                            <input type="email" class="w-1/2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600" placeholder="Email" />
                                        </div>
                                        <div class="mb-4">
                                            <input type="text" class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600" placeholder="Enter Subject" />
                                        </div>
                                        <div>
                                            <button type="submit" class="bg-orange-500 text-white py-2 px-6 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500">SEND</button>
                                        </div>
                                    </form>
                                </div>
                                <div class="flex-1 space-y-10 text-center">
                                    <div class="flex items-center space-x-4 justify-center">
                                        <img src={location} alt='location' />
                                        <div>
                                            <p class="font-medium text-gray-700">Mannheim - Germany.</p>
                                            <p>Am Salzkai 5, 68158</p>
                                        </div>
                                    </div>
                                    <div class="flex items-center space-x-4 justify-center">
                                        <img src={phone} alt='location' />
                                        <div>
                                            <p class="font-medium text-gray-700">+ (1) 512 428 846 0</p>
                                            <p>Mon - Sat 8.00 - 18.00</p>
                                        </div>
                                    </div>
                                    <div class="flex items-center space-x-4 justify-center">
                                        <img src={email} alt='location' />
                                        <div>
                                            <p class="font-medium text-gray-700">info@wohlstandgrand.com</p>
                                            <p>Send us your query anytime!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact