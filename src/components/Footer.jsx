import React from 'react';
import logo from "../assets/corologo.png"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#1b4137] text-white py-6 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
            <div className="flex flex-col md:flex-row items-center justify-between border-b border-gray-700 pb-8 mb-8">
                <h2 className="text-xl md:text-2xl lg:text-4xl lg:w-[600px] font-bold mb-4">We Understand The Importance Approaching Each Work!</h2>
                <a href="tel:+12126839756" className="text-orange-500 text-xl md:text-2xl lg:text-3xl">+1 212-683-9756</a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-lg mb-4">COMPANY</h3>
                    <ul>
                        <li className="mb-2"><a href="/about" className="hover:text-orange-500">About Us</a></li>
                        <li className="mb-2"><a href="/company" className="hover:text-orange-500">Company</a></li>
                        <li className="mb-2"><a href="/blog" className="hover:text-orange-500">Press & Blog</a></li>
                        <li className="mb-2"><a href="/privacy" className="hover:text-orange-500">Privacy Policy</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg mb-4">OPEN HOUR</h3>
                    <ul>
                        <li className="mb-2">Monday 11am-7pm</li>
                        <li className="mb-2">Tuesday-Friday 11am-8pm</li>
                        <li className="mb-2">Saturday 10am-6pm</li>
                        <li className="mb-2">Sunday 11am-6pm</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg mb-4">RESOURCES</h3>
                    <ul>
                        <li className="mb-2"><a href="/home-insurance" className="hover:text-orange-500">Home Insurance</a></li>
                        <li className="mb-2"><a href="/travel-insurance" className="hover:text-orange-500">Travel Insurance</a></li>
                        <li className="mb-2"><a href="/car-insurance" className="hover:text-orange-500">Car Insurance</a></li>
                        <li className="mb-2"><a href="/business-insurance" className="hover:text-orange-500">Business Insurance</a></li>
                        <li className="mb-2"><a href="/health-insurance" className="hover:text-orange-500">Health Insurance</a></li>
                    </ul>
                </div>
                <div>
                    <a href='/'><img src={logo} alt='logo' /></a>
                    <p className="mb-4">The trade war currently ensuing between the US and several nations around the globe, most fiercely with.</p>
                    <div className="flex space-x-4">
                        <a href="https://facebook.com" className="text-white hover:text-orange-500"><FaFacebook /></a>
                        <a href="https://twitter.com" className="text-white hover:text-orange-500"><FaTwitter /></a>
                        <a href="https://website.com" className="text-white hover:text-orange-500"><FaInstagram /></a>
                        <a href="https://instagram.com" className="text-white hover:text-orange-500"><FaLinkedin /></a>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-700 pt-4 mt-8 text-sm">
                <p>&copy; 2024 All rights reserved | Developed by <b className='font-semibold text-orange-500'>LanceTech</b></p>
            </div>
        </footer>
    );
}

export default Footer;
