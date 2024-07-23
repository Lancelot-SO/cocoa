import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import contactbg from "../assets/homebg.jpg";
import location from "../assets/home.png";
import email from "../assets/mail.png";
import phone from "../assets/iphone.png";
import map from "../assets/worldmap.png";
import "./Contact.css";

const Contact = ({ selectedCountry }) => {
    return (
        <div>
            <div className="relative">
                <img src={contactbg} alt='service' />
                <div className='absolute top-[40%] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
                    <h2 className='text-[24px] md:text-[24px] lg:text-[80px] font-bold tracking-wider text-orange-500'>Contact Us</h2>
                    <Breadcrumb />
                </div>
            </div>
            <section>
                <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
                    <div className="hidden my-10 w-full h-[580px] overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.412449693084!2d-0.18150002525418493!3d5.65332329432803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9a6ad8b5fcb9%3A0xa45d4594e4c25c32!2sWohlstand%20Trade%20%26%20Investment%20Company!5e0!3m2!1sen!2sgh!4v1686408425666!5m2!1sen!2sgh"
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title='Google Maps'
                            className='w-full'
                        ></iframe>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 my-20 gap-8'>
                        <div className='w-full'>
                            <h2 className='text-2xl lg:text-[40px] font-semibold my-2 tracking-wider text-[#666]'>Contact Info</h2>
                            <p className='text-[#666]'>
                                With an impressive track record of growth and impact, Wohlstand has become a
                                trusted partner for businesses across Africa and beyond. We look forward to continuing
                                our journey of excellence and making a difference in the lives of those we serve.
                            </p>
                            <ul className='my-8'>
                                <li className='flex items-center my-3 gap-3'>
                                    <img src={location} alt='location' />
                                    <p className='text-[#666]'>Am Salzkai 5, 68158, Mannheim - Germany</p>
                                </li>
                                <li className='flex items-center my-3 gap-3'>
                                    <img src={email} alt='email' />
                                    <p className='text-[#666]'>info@wohlstandgrand.com</p>
                                </li>
                                <li className='flex items-center my-3 gap-3'>
                                    <img src={phone} alt='phone' />
                                    <p className='text-[#666]'>+ (1) 512 428 846 0</p>
                                </li>
                            </ul>
                        </div>
                        <div className='w-full'>
                            <h2 className='text-2xl lg:text-[40px] font-semibold my-2 tracking-wider text-[#666]'>Enquiry Form</h2>
                            <form action="https://formspree.io/f/mdknaeav"
                                method="POST">
                                <input type='text' name='name' placeholder='Full Name' className='my-4 w-full py-2 px-4 bg-[#F2F2F2] outline-none' />
                                <input type='text' name='email' placeholder='Email Address' className='my-4 w-full py-2 px-4 bg-[#F2F2F2] outline-none' />
                                <textarea rows="4" name='message' placeholder='Message' className='w-full p-4 bg-[#F2F2F2] outline-none my-4'></textarea>
                                <button type='submit' className='text-white text-center py-4 w-full bg-[#1b4137]'>Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <img src={map} alt='world-map' className='w-full md:h-[700px]' />
                    <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
                        <div className={`pin brazil ${selectedCountry === "Brazil" ? 'selected' : ''}`}><span>Brazil</span></div>
                        <div className={`pin ivory ${selectedCountry === "Ivory Coast" ? 'selected' : ''}`}><span>Ivory Coast</span></div>
                        <div className={`pin indonesia ${selectedCountry === "Indonesia" ? 'selected' : ''}`}><span>Indonesia</span></div>
                        <div className={`pin ecuador ${selectedCountry === "Ecuador" ? 'selected' : ''}`}><span>Ecuador</span></div>
                        <div className={`pin peru ${selectedCountry === "Peru" ? 'selected' : ''}`}><span>Peru</span></div>
                        <div className={`pin colombia ${selectedCountry === "Colombia" ? 'selected' : ''}`}><span>Colombia</span></div>
                        <div className={`pin dominican ${selectedCountry === "Dominican Republic" ? 'selected' : ''}`}><span>Dominican Republic</span></div>
                        <div className={`pin mexico ${selectedCountry === "Mexico" ? 'selected' : ''}`}><span>Mexico</span></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
