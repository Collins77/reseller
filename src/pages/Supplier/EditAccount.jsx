// import React from 'react'

import SupplierLayout from "@/components/SupplierLayout"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import apiClient from "@/lib/api-client";
import { SUPPLIER_UPDATE_PROFILE_ROUTE } from "@/lib/constants";
// import MultipleSelector from "@/components/ui/multipleselect"
import { useAppStore } from "@/redux/store";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa"
// import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const EditAccount = () => {
    const { supplierInfo, setSupplierInfo } = useAppStore()
    // const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    // Local state for form data
    const [formData, setFormData] = useState({
        firstName: supplierInfo.firstName || '',
        lastName: supplierInfo.lastName || '',
        email: supplierInfo.email || '',
        phoneNumber: supplierInfo.phoneNumber || '',
        companyName: supplierInfo.companyName || '',
        country: supplierInfo.country || '',
        address: supplierInfo.address || '',
        companyEmail: supplierInfo.companyEmail || '',
        companyType: supplierInfo.companyType || '',
        dollarExchangeRate: supplierInfo.dollarExchangeRate || '',
    });

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const saveChanges = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await apiClient.put(SUPPLIER_UPDATE_PROFILE_ROUTE, formData, { withCredentials: true });
            if (response.status === 200 && response.data) {
                setSupplierInfo({ ...response.data });
                setLoading(false)
                // console.log(response.data);
                toast.success("Profile updated successfully");
                
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
                                    <BreadcrumbLink href="/supplier/account">Account</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>Edit-Profile</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </div>
                <div className="bg-white shadow-md p-4">
                    <div className="pb-4 border-b border-dashed mb-8">
                        <h1 className="text-xl font-bold">Edit Account Details</h1>
                    </div>
                    <div className="p-5">
                        <form onSubmit={saveChanges} className="w-full">
                            <h1 className="font-bold mb-3">Information</h1>
                            <div className="flex gap-4 w-full mb-5 pb-4 border-b border-dashed">
                                <div className="w-[40%]">

                                    <p className="text-gray-500">Edit Personal information</p>
                                </div>
                                <div className="w-[60%]">
                                    <div className="flex flex-col gap-3 mb-4">
                                        <label htmlFor="">First Name</label>
                                        <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} className="border rounded-sm outline-none p-2" />
                                    </div>
                                    <div className="flex flex-col gap-3 mb-4">
                                        <label htmlFor="">Last Name</label>
                                        <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} className="border rounded-sm outline-none p-2" />
                                    </div>
                                    <div className="flex flex-col gap-3 mb-4">
                                        <label htmlFor="">Email Address</label>
                                        <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="border rounded-sm outline-none p-2" />
                                    </div>
                                    <div className="flex flex-col gap-3 mb-4">
                                        <label htmlFor="">Phone Number</label>
                                        <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} className="border rounded-sm outline-none p-2" />
                                    </div>
                                </div>
                            </div>
                            <h1 className="font-bold mb-3">Company Information</h1>
                            <div className="flex gap-4 w-full mb-5 pb-4 border-b border-dashed">
                                <div className="w-[40%]">
                                    <p className="text-gray-500">Edit your company details</p>

                                </div>
                                <div className="w-[60%]">
                                    <div className="flex flex-col gap-3 mb-4">
                                        <label htmlFor="">Company Name</label>
                                        <input type="text" name="companyName" value={formData.companyName} onChange={handleInputChange} className="border rounded-sm outline-none p-2" />
                                    </div>
                                    <div className="flex flex-col gap-3 mb-4">
                                        <label htmlFor="">Company Email</label>
                                        <input type="email" name="companyEmail" value={formData.companyEmail} onChange={handleInputChange} className="border rounded-sm outline-none p-2" />
                                    </div>
                                    <div className="flex flex-col gap-3 mb-4">
                                        <label htmlFor="">Company Address</label>
                                        <input type="text" name="address" value={formData.address} onChange={handleInputChange} className="border rounded-sm outline-none p-2" />
                                    </div>
                                    <div className="flex flex-col gap-3 mb-4">
                                        <label htmlFor="">Company Type</label>
                                        <select name="companyType" value={formData.companyType} onChange={handleInputChange} className="border rounded-sm outline-none p-2">
                                            <option value="supplier">Supplier</option>
                                            <option value="manufacturer">Manufacturer</option> 
                                        </select>
                                    </div>
                                    
                                    <div className="flex flex-col gap-3 mb-4">
                                        <label htmlFor="">Dollar Exchange Rate</label>
                                        <input type="number" name="dollarExchangeRate" value={formData.dollarExchangeRate} onChange={handleInputChange} className="border rounded-sm outline-none p-2" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="/supplier/account" className="flex items-center text-orange-500 gap-1">
                                    Go to Account
                                    <FaArrowRight />
                                </a>
                                <div className="flex gap-2 items-center">
                                    {/* <button className="border border-orange-500 px-2 py-1 rounded-md">Erase Changes</button> */}
                                    <button type="submit" className="border border-orange-500 px-2 py-1 rounded-md bg-orange-500 text-white">{loading ? "Updating..." : "Submit Changes"}</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </SupplierLayout>
    )
}

export default EditAccount