// import React from 'react'

import SupplierLayout from "@/components/SupplierLayout"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
// import { useAppStore } from "@/redux/store";
import { server } from "@/server";
import axios from "axios";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6"
import { toast } from "sonner";

const createNewAd = async (adData) => {
    const response = await axios.post(`${server}/admins/create-admin`, adData);
    return response.data;
};

const AddAdmin = () => {
    // const { adminInfo } = useAppStore();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [loading, setLoading] = useState(false);
;

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // const supplierId = `${supplierInfo.id}`; // Ensure supplier ID is coming from state/context
            const adData = { ...formData };

            await createNewAd(adData);
            setLoading(false);
            toast.success("Admin created successfully!"); // Toast notification for success

            // Reset form
            setFormData({
                username: '',
                email: '',
                password: '',
            });
        } catch (error) {
            setLoading(false);
            toast.error("Error creating admin: " + error.message); // Toast notification for error
        }
    };

    const handleReset = () => {
        setFormData({
            username: '',
            email: '',
            password: '',
        });
    };
    return (
        <SupplierLayout>
            <div>
                <div>
                    <div className="mt-3 mb-5 px-[20px]">
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/supplier">Home</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>Create-Ad</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </div>
                <div className="bg-white shadow-md p-4">
                    <div className="pb-4 border-b border-dashed mb-8">
                        <h1 className="text-xl font-bold">Create New Admin</h1>
                    </div>
                    <div className="p-5">
                        <form onSubmit={handleSubmit} className="w-full">
                            <h1 className="font-bold mb-3">Information</h1>
                            <div className="flex gap-4 w-full mb-5 pb-4 border-b border-dashed">
                                <div className="w-[40%]">
                                    <p className="text-gray-500">Add admin information and create a new admin</p>
                                </div>
                                <div className="w-[60%]">
                                    <div className="flex flex-col gap-3 mb-4">
                                        <label htmlFor="">Admin Username*</label>
                                        <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Admin username" className="border rounded-sm outline-none p-2" />
                                    </div>
                                    <div className="flex flex-col gap-3 mb-4">
                                        <label htmlFor="">Email Address*</label>
                                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Admin email" className="border rounded-sm outline-none p-2" />                                    </div>
                                    <div className="flex flex-col gap-3 mb-4">
                                        <label htmlFor="">Password*</label>
                                        <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="**************" className="border rounded-sm outline-none p-2" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="/admin/admins" className="flex items-center text-orange-500 gap-1">
                                    Go to Admins
                                    <FaArrowRight />
                                </a>
                                <div className="flex gap-2 items-center">
                                    <div onClick={handleReset} className="border cursor-pointer hover:bg-orange-800 hover:text-white border-orange-500 px-2 py-1 rounded-md">Reset Form</div>
                                    <button type="submit" className="border border-orange-500 px-2 py-1 rounded-md bg-orange-500 text-white">{loading ? "Submitting..." : "Create Admin"}</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </SupplierLayout>
    )
}

export default AddAdmin