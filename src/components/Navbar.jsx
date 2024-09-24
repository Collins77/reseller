// import React from 'react'
import { useState } from 'react';
import logo from '../assets/ResellerSprint logo.png'
import { FaTimes } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa6';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    return (
        <div className="w-full sticky z-40 top-0 bg-white h-[70px] flex justify-between border-b-2 items-center px-[40px] py-[20px]">
            <div>
                <img src={logo} alt="logo" className='w-[100px] h-full' />
            </div>

            {/* Hamburger menu for small screens */}
            <div className="md:hidden" onClick={toggleMenu}>
                {isOpen ? (
                    <FaTimes className="text-2xl cursor-pointer" />
                ) : (
                    <FaBars className="text-2xl cursor-pointer" />
                )}
            </div>
            <div className={` md:flex md:items-center md:justify-between ${isOpen ? 'block' : 'hidden'} md:block`}>
                <ul className='flex items-center gap-4'>
                    <li className='group relative'>
                        <a href="/">Home</a>
                        <span className='block absolute bottom-[-2px] left-0 w-full h-[2px] bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300'></span>
                    </li>
                    <li className='group relative'>
                        <a href="/about">About Us</a>
                        <span className='block absolute bottom-[-2px] left-0 w-full h-[2px] bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300'></span>
                    </li>
                    <li className='group relative'>
                        <a href="/partners">Partners</a>
                        <span className='block absolute bottom-[-2px] left-0 w-full h-[2px] bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300'></span>
                    </li>
                    <li className='group relative'>
                        <a href="/privacy">Privacy Policy</a>
                        <span className='block absolute bottom-[-2px] left-0 w-full h-[2px] bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300'></span>
                    </li>
                    <li className='group relative'>
                        <a href="/faq">FAQ</a>
                        <span className='block absolute bottom-[-2px] left-0 w-full h-[2px] bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300'></span>
                    </li>
                    <div className='flex gap-3 ml-2 items-center'>
                        <a href="login" className='hover:text-orange-500'>Sign In</a>
                        <a href="signup" className='bg-orange-500 px-2 py-1 rounded-xl text-white'>Create an Account</a>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
