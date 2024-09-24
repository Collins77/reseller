// import React from 'react'

import AppNavbar from "@/components/AppNavbar"
import backgroundImage from "../assets/pexels-pixabay-262353.jpg";
import { IoLocation } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import logo from "../assets/ResellerSprint icon.png"

const ProfilePage = () => {
    return (
        <div>
            <AppNavbar />
            <div className="h-[120px]" style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
                <div className="bg-black/70 h-full w-full flex items-center justify-center flex-col gap-4">
                    <h1 className="text-4xl text-orange-500">Account Settings</h1>
                </div>
            </div>
            <div className="px-[40px] py-[40px] flex gap-5">
                <div className="bg-white shadow-lg w-[30%] h-fit p-3">
                    <div className="flex items-center gap-2 border-b pb-2 mb-5">
                        <div className="border border-blue-600 p-1 w-[70px] h-[70px] rounded-full flex items-center justify-center">
                            <div className="bg-blue-50 w-full h-full rounded-full flex items-center justify-center">
                                <img src={logo} alt="" className="w-[50px] h-[50px] rounded-full" />
                            </div>
                        </div>
                        <div>
                            <p className="text-sm text-gray-400">Since 2023</p>
                            <h1 className="font-semibold ">Cotek Technologies</h1>
                            <p className="text-gray-400">info@cotektechnologies.com</p>
                        </div>
                    </div>
                    <div className="mb-4">
                        <div className="flex items-center gap-2 mb-2">
                            <IoLocation />
                            <p>172, Boulevard St. Kenya</p>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                            <FaPhone />
                            <p>+254791448827</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                        <a href="" className="w-[50%] bg-orange-300 flex items-center justify-center py-1 text-white rounded-md">Change Password</a>
                        <button className="w-[50%] bg-red-300 flex items-center justify-center py-1 text-white rounded-md">Logout</button>
                    </div>
                </div>
                <div className="w-[70%]">
                    <form className="shadow-md w-full p-[20px]">
                        <div>
                            <h1 className="font-bold mb-4">Personal Information</h1>
                            <p className="text-gray-500 mb-3">Fill in the form below or contact us. We will help you create your account</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mb-5">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="">First Name*</label>
                                <input type="text" name="" placeholder="Your First Name" className="border outline-none p-2 rounded-sm" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="">Last Name*</label>
                                <input type="text" name="" placeholder="Your First Name" className="border outline-none p-2 rounded-sm" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="">Email Address*</label>
                                <input type="text" name="" placeholder="Your Email Address" className="border outline-none p-2 rounded-sm" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="">Phone Number*</label>
                                <input type="text" name="" placeholder="+2547...." className="border outline-none p-2 rounded-sm" />
                            </div>
                        </div>
                        <div>
                            <h1 className="font-bold mb-4">Business Information</h1>
                            <p className="text-gray-500 mb-3">Fill in the form below or contact us. We will help you create your account</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mb-5">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="">Company Name*</label>
                                <input type="text" name="" placeholder="Company Name" className="border outline-none p-2 rounded-sm" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="">Country*</label>
                                <input type="text" name="" placeholder="Country" className="border outline-none p-2 rounded-sm" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="">Address*</label>
                                <input type="text" name="" placeholder="St. Building" className="border outline-none p-2 rounded-sm" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="">Password*</label>
                                <input type="text" name="" placeholder="********" className="border outline-none p-2 rounded-sm" />
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <button className="bg-orange-500 text-white px-3 py-1 w-[200px] rounded-md">Update Details</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage