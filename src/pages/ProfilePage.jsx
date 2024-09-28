// import React, { useState } from 'react'

import AppNavbar from "@/components/AppNavbar"
import backgroundImage from "../assets/pexels-pixabay-262353.jpg";
import { IoLocation } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import logo from "../assets/ResellerSprint icon.png"
import { useAppStore } from "@/redux/store";
import apiClient from "@/lib/api-client";
import { LOGOUT_ROUTE, UPDATE_PROFILE_ROUTE } from "@/lib/constants";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ProfilePage = () => {
    const { resellerInfo, setResellerInfo } = useAppStore()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    // Local state for form data
    const [formData, setFormData] = useState({
        firstName: resellerInfo.firstName || '',
        lastName: resellerInfo.lastName || '',
        email: resellerInfo.email || '',
        phoneNumber: resellerInfo.phoneNumber || '',
        companyName: resellerInfo.companyName || '',
        country: resellerInfo.country || '',
        address: resellerInfo.address || ''
    });

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const logOut = async () => {
        try {
            const response = await apiClient.post(LOGOUT_ROUTE, {}, { withCredentials: true });
            if (response.status === 200) {
                toast("Logout successful")
                navigate("/login");
                setResellerInfo(null);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const saveChanges = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await apiClient.put(UPDATE_PROFILE_ROUTE, formData, { withCredentials: true });
            if (response.status === 200 && response.data) {
                setResellerInfo({ ...response.data });
                setLoading(false)
                // console.log(response.data);
                toast("Profile updated successfully");
                
                setTimeout(() => {
                    window.location.reload()
                }, 2000); 
            }
        } catch (error) {
            console.log({ error });
            setLoading(false)
        }
    }

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
                            <h1 className="font-semibold ">{resellerInfo.companyName}</h1>
                            <p className="text-gray-400">{resellerInfo.email}</p>
                        </div>
                    </div>
                    <div className="mb-4">
                        <div className="flex items-center gap-2 mb-2">
                            <IoLocation />
                            <p>{resellerInfo.address}</p>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                            <FaPhone />
                            <p>{resellerInfo.phoneNumber}</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                        <a href="" className="w-[50%] bg-orange-300 flex items-center justify-center py-1 text-white rounded-md">Change Password</a>
                        <button onClick={logOut} className="w-[50%] bg-red-300 flex items-center justify-center py-1 text-white rounded-md">Logout</button>
                    </div>
                </div>
                <div className="w-[70%]">
                    <form className="shadow-md w-full p-[20px]" onSubmit={saveChanges}>
                        <div>
                            <h1 className="font-bold mb-4">Personal Information</h1>
                            <p className="text-gray-500 mb-3">Fill in the form below or contact us. We will help you create your account</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mb-5">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="firstName">First Name*</label>
                                <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} placeholder="Your First Name" className="border outline-none p-2 rounded-sm" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="lastName">Last Name*</label>
                                <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} placeholder="Your Last Name" className="border outline-none p-2 rounded-sm" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email">Email Address*</label>
                                <input type="text" name="email" value={formData.email} onChange={handleInputChange} placeholder="Your Email Address" className="border outline-none p-2 rounded-sm" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="phoneNumber">Phone Number*</label>
                                <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} placeholder="+2547...." className="border outline-none p-2 rounded-sm" />
                            </div>
                        </div>
                        <div>
                            <h1 className="font-bold mb-4">Business Information</h1>
                            <p className="text-gray-500 mb-3">Fill in the form below or contact us. We will help you create your account</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mb-5">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="companyName">Company Name*</label>
                                <input type="text" name="companyName" value={formData.companyName} onChange={handleInputChange} placeholder="Company Name" className="border outline-none p-2 rounded-sm" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="country">Country*</label>
                                <input type="text" name="country" value={formData.country} onChange={handleInputChange} placeholder="Country" className="border outline-none p-2 rounded-sm" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="address">Address*</label>
                                <input type="text" name="address" value={formData.address} onChange={handleInputChange} placeholder="St. Building" className="border outline-none p-2 rounded-sm" />
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <button type="submit" className="bg-orange-500 text-white px-3 py-1 w-[200px] rounded-md">
                                {loading ? "Updating..." : "Submit Updates"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;
