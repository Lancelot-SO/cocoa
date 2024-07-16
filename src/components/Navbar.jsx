import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaTimes, FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa6';
import { Link, NavLink } from 'react-router-dom';
import logo from "../assets/corologo.png";
import { RiMenu4Fill } from 'react-icons/ri';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [showMobileDropdown, setShowMobileDropdown] = useState(false);

    const countries = ["Brazil", "Ivory Coast", "Indonesia", "Ecuador", "Peru", "Colombia", "Dominican Republic", "Mexico"];

    const toggleNav = () => {
        setNav(!nav);
        if (nav) setShowMobileDropdown(false); // Close the mobile dropdown when closing the mobile nav
    };

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const toggleMobileDropdown = () => {
        setShowMobileDropdown(!showMobileDropdown);
    };

    return (
        <div className='overflow-hidden'>
            <nav className="w-full flex flex-col bg-[#1b4137] z-50 fixed top-0 left-0">
                <div className="hidden md:flex items-center justify-between p-2 border-b border-slate-100 md:px-8 lg:px-16 xl:px-32 2xl:px-64 h-16">
                    <div className='flex gap-4 items-center justify-center'>
                        <span className="hidden sm:flex items-center text-white">Phone: + (1) 512 428 846 0</span>
                        <span className="ml-4 hidden sm:flex text-white">Email: info@wohlstandgrand.com</span>
                    </div>
                    <div className='hidden md:flex gap-4 opacity-0'>
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
                            Products
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                isActive ? 'text-orange-500 underline' : ''
                            }
                        >
                            Contact
                        </NavLink>
                        <div className='relative'>
                            <p className='cursor-pointer' onClick={toggleDropdown}>
                                Silos
                            </p>
                            {showDropdown && (
                                <div className='absolute left-0 mt-1 bg-white  lg:w-[200px] p-3 text-black rounded shadow-lg z-50'>
                                    <p className=' border-b-2 pb-1'>Lists of global Silos</p>

                                    {countries.map((country, index) => (
                                        <div
                                            key={index}
                                            className='block px-4 py-2 hover:bg-orange-100 cursor-pointer'
                                            onClick={() => setShowDropdown(false)}
                                        >
                                            {country}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    <div onClick={toggleNav} className='md:hidden z-10 text-white'>
                        {nav ? <FaTimes size={30} /> : <RiMenu4Fill size={30} />}
                    </div>
                </div>

                {nav && (
                    <div className='md:hidden top-16 left-0 w-screen h-screen bg-[#1b4137] text-white flex flex-col items-center justify-center gap-10 pt-10 overflow-y-auto transition-all duration-300 ease-cubic-bezier'>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? 'text-orange-500 underline' : ''
                            }
                            onClick={toggleNav}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive ? 'text-orange-500 underline' : ''
                            }
                            onClick={toggleNav}
                        >
                            About
                        </NavLink>
                        <NavLink
                            to="/services"
                            className={({ isActive }) =>
                                isActive ? 'text-orange-500 underline' : ''
                            }
                            onClick={toggleNav}
                        >
                            Services
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                isActive ? 'text-orange-500 underline' : ''
                            }
                            onClick={toggleNav}
                        >
                            Contact
                        </NavLink>
                        <div className='relative'>
                            <p className='cursor-pointer' onClick={toggleMobileDropdown}>
                                Silos
                            </p>
                            {showMobileDropdown && (
                                <div className='absolute left-0 mt-1 bg-white text-black rounded shadow-lg z-50'>
                                    <p>Lists of global Silos</p>
                                    {countries.map((country, index) => (
                                        <Link
                                            key={index}
                                            className='block px-4 py-2 hover:bg-gray-200'
                                            onClick={toggleNav}
                                        >
                                            {country}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
}

export default Navbar;
