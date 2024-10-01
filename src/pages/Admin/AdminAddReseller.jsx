// import React from 'react'

import AdminLayout from "@/components/AdminLayout"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { server } from "@/server";
import axios from "axios";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa"
import { toast } from "sonner";

const AdminAddReseller = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        companyName: '',
        email: '',
        address: '',
        country: '',
        phoneNumber: '',
        password: '',
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Send the form data to the backend
            const response = await axios.post(`${server}/resellers/admin-create-reseller`, formData);

            if (response.data.success) {
                // Show success notification
                toast.success("Reseller created successfully")
            } else {
                // Show error notification
                toast.error("Something went wrong.")
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                toast.error(error.response.data.message);
            } else {
                toast.error(error.message || "An error occurred.");
            }
        } finally {
            setLoading(false);
        }
    };

    const handleReset = () => {
        setFormData({
            firstName: '',
            lastName: '',
            companyName: '',
            email: '',
            address: '',
            country: '',
            phoneNumber: '',
            password: '',
        });
    };

    return (
        <AdminLayout>
            <div>
                <div>
                    <div className="mt-3 mb-5 px-[20px]">
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/admin">Home</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>Create-Reseller</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </div>
                <div className="bg-white shadow-md p-4">
                    <div className="pb-4 border-b border-dashed mb-8">
                        <h1 className="text-xl font-bold">Create New Reseller</h1>
                    </div>
                    <div className="p-5">
                        <form onSubmit={handleSubmit} className="w-full">
                            <h1 className="font-bold mb-3">Information</h1>
                            <div className="flex gap-4 w-full mb-5 pb-4 border-b border-dashed">
                                <div className="w-[40%]">

                                    <p className="text-gray-500">Add reseller information and create a new reseller</p>
                                </div>
                                <div className="w-[60%]">
                                    <div className="flex flex-col gap-3 mb-4">
                                        <label htmlFor="">First Name*</label>
                                        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" className="border rounded-sm outline-none p-2" />
                                    </div>
                                    <div className="flex flex-col gap-3 mb-4">
                                        <label htmlFor="">Last Name*</label>
                                        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" className="border rounded-sm outline-none p-2" />
                                    </div>
                                    <div className="flex flex-col gap-3 mb-4">
                                        <label htmlFor="">Email*</label>
                                        <input type="text" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="border rounded-sm outline-none p-2" />
                                    </div>
                                    <div className="flex flex-col gap-3 mb-4">
                                        <label htmlFor="">Phone Number*</label>
                                        <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="+2547..." className="border rounded-sm outline-none p-2" />
                                    </div>
                                </div>
                            </div>
                            <h1 className="font-bold mb-3">Company Information</h1>
                            <div className="flex gap-4 w-full mb-5 pb-4 border-b border-dashed">
                                <div className="w-[40%]">
                                    <p className="text-gray-500">Add reseller company information</p>

                                </div>
                                <div className="w-[60%]">
                                    <div className="flex flex-col gap-3 mb-4">
                                        <label htmlFor="">Company Name*</label>
                                        <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} placeholder="Company Name" className="border rounded-sm outline-none p-2" />
                                    </div>
                                    <div className="flex flex-col gap-3 mb-4">
                                        <label htmlFor="">Address*</label>
                                        <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" className="border rounded-sm outline-none p-2" />
                                    </div>
                                    <div className="flex flex-col gap-3 mb-4">
                                        <label htmlFor="">Country*</label>
                                        <input type="text" name="country" value={formData.country} onChange={handleChange} placeholder="Country" className="border rounded-sm outline-none p-2" />
                                    </div>
                                    <div className="flex flex-col gap-3 mb-4">
                                        <label htmlFor="">Password*</label>
                                        <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="********" className="border rounded-sm outline-none p-2" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="/admin/resellers" className="flex items-center text-orange-500 gap-1">
                                    Go to Resellers
                                    <FaArrowRight />
                                </a>
                                <div className="flex gap-2 items-center">
                                    <div onClick={handleReset} className="border cursor-pointer hover:bg-orange-800 hover:text-white border-orange-500 px-2 py-1 rounded-md">Reset Form</div>
                                    <button
                                        type="submit"
                                        className="border flex gap-1 items-center border-orange-500 px-2 py-1 rounded-md bg-orange-500 text-white"
                                        disabled={loading}
                                    >
                                        {loading ? "Submitting..." : "Submit"}
                                        <FaArrowRight />
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}

export default AdminAddReseller