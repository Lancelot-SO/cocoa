import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaTimes, FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa6';
import { Link, NavLink } from 'react-router-dom';
import logo from "../assets/corologo.png"
import { RiMenu4Fill } from 'react-icons/ri';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    return (
        <div className='overflow-hidden'>
            <nav className="w-full flex flex-col bg-[#1b4137]">
                <div className="hidden md:flex items-center justify-between p-2 border-b border-slate-100 md:px-8 lg:px-16 xl:px-32 2xl:px-64 h-16">
                    <div className='flex gap-4 items-center justify-center'>
                        <span className="hidden sm:flex items-center text-white">Phone: +99 (0) 101 0000 888</span>
                        <span className="ml-4 hidden sm:flex text-white">Email: info@company.com</span>
                    </div>
                    <div className='hidden md:flex gap-4'>
                        <Link to="https://www.facebook.com" className='hover:text-orange-500 text-white' target="_blank" rel='noopener noreferrer'><FaFacebook /></Link>
                        <Link to="https://www.Instagram.com" className='hover:text-orange-500 text-white' target="_blank" rel='noopener noreferrer'><FaInstagram /></Link>
                        <Link to="https://www.Twitter.com" className='hover:text-orange-500 text-white' target="_blank" rel='noopener noreferrer'><FaTwitter /></Link>
                        <Link to="https://www.LinkedIn.com" className='hover:text-orange-500 text-white' target="_blank" rel='noopener noreferrer'><FaLinkedinIn /></Link>
                    </div>
                </div>
                <div className='flex items-center justify-between p-4 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
                    <a href='/'><img src={logo} alt='logo' className='w-48 h-10' /></a>
                    <div className='hidden md:flex gap-6 text-white'>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? 'text-orange-500 underline' : ''
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive ? 'text-orange-500 underline' : ''
                            }
                        >
                            About
                        </NavLink>
                        <NavLink
                            to="/services"
                            className={({ isActive }) =>
                                isActive ? 'text-orange-500 underline' : ''
                            }
                        >
                            Services
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                isActive ? 'text-orange-500 underline' : ''
                            }
                        >
                            Contact
                        </NavLink>
                    </div>

                    <div onClick={() => setNav(!nav)} className='md:hidden z-10 text-white'>
                        {nav ? <FaTimes size={30} /> : <RiMenu4Fill size={30} />}
                    </div>
                </div>

                {nav && (
                    <div className='md:hidden top-36 left-0 w-screen h-screen bg-[#1b4137] text-white flex flex-col items-center justify-center gap-10 pt-10 overflow-y-auto transition-all duration-300 ease-cubic-bezier'>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? 'text-orange-500 underline' : ''
                            }
                            onClick={() => setNav(false)}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive ? 'text-orange-500 underline' : ''
                            }
                            onClick={() => setNav(false)}
                        >
                            About
                        </NavLink>
                        <NavLink
                            to="/services"
                            className={({ isActive }) =>
                                isActive ? 'text-orange-500 underline' : ''
                            }
                            onClick={() => setNav(false)}
                        >
                            Services
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                isActive ? 'text-orange-500 underline' : ''
                            }
                            onClick={() => setNav(false)}
                        >
                            Contact
                        </NavLink>
                    </div>
                )}
            </nav>
        </div>
    );
}

export default Navbar;
