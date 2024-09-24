// import React from 'react'

import { useState } from "react";
import logo from '../assets/ResellerSprint logo.png'
import { FaTimes } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa6';
import { MdMarkUnreadChatAlt } from "react-icons/md";

const AppNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown menu

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div className="w-full sticky z-40 top-0 bg-white h-[70px] flex justify-between border-b-2 items-center px-[40px] py-[20px]">
            <div className="flex gap-4 items-center">
                <img src={logo} alt="logo" className='w-[100px] h-full' />
                <div>
                    <select className="border rounded-lg p-2 bg-white">
                        <option value="">Categories</option>
                        <option value="category1">Category 1</option>
                        <option value="category2">Category 2</option>
                        <option value="category3">Category 3</option>
                        <option value="category4">Category 4</option>
                    </select>
                </div>
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
                        <a href="/app">Home</a>
                        <span className='block absolute bottom-[-2px] left-0 w-full h-[2px] bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300'></span>
                    </li>
                    <li className='group relative'>
                        <a href="/app/suppliers">Suppliers</a>
                        <span className='block absolute bottom-[-2px] left-0 w-full h-[2px] bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300'></span>
                    </li>
                    <li className='group relative'>
                        <a href="/app/products">Products</a>
                        <span className='block absolute bottom-[-2px] left-0 w-full h-[2px] bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300'></span>
                    </li>

                    {/* <div className='flex gap-3 ml-2 items-center'>
                        <a href="login" className='hover:text-orange-500'>Sign In</a>
                        <a href="signup" className='bg-orange-500 px-2 py-1 rounded-xl text-white'>Create an Account</a>
                    </div> */}
                </ul>
            </div>
            <div className="flex gap-4 items-center">
                {/* <a href="signup" className='bg-orange-500 px-2 py-1 rounded-xl text-white'>Access Forum</a> */}
                <a href="/forum">
                    <MdMarkUnreadChatAlt className="text-orange-500 text-2xl" />
                </a>
                <div className="relative">
                    <div 
                        className="bg-gray-400 h-[40px] w-[40px] rounded-full flex items-center justify-center cursor-pointer" 
                        onClick={toggleDropdown}
                    >
                        <h1 className="text-white">CM</h1>
                    </div>

                    {/* Dropdown menu */}
                    {dropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                            <ul className="py-2">
                                <li>
                                    <a href="/account" className="block px-4 py-2 hover:bg-gray-100">
                                        Account
                                    </a>
                                </li>
                                <li>
                                    <a href="/logout" className="block px-4 py-2 hover:bg-gray-100">
                                        Logout
                                    </a>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default AppNavbar