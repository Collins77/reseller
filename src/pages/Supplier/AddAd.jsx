// import React from 'react'

import SupplierLayout from "@/components/SupplierLayout"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { useAppStore } from "@/redux/store";
import { server } from "@/server";
import axios from "axios";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6"
import { toast } from "sonner";

const createNewAd = async (adData) => {
    const response = await axios.post(`${server}/ads/create-ad`, adData);
    return response.data;
};

const AddAd = () => {
    const { supplierInfo } = useAppStore();
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        startDate: '',
        endDate: '',
        price: '',
        brand: '',
        isActive: true,
        initialPrice: '',
        newPrice: '',
        productName: '',
    });


    const [loading, setLoading] = useState(false);

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
            const supplierId = `${supplierInfo.id}`; // Ensure supplier ID is coming from state/context
            const adData = { ...formData, supplierId };

            await createNewAd(adData);
            setLoading(false);
            toast.success("Ad created successfully!"); // Toast notification for success

            // Reset form
            setFormData({
                title: '',
                description: '',
                startDate: '',
                endDate: '',
                price: '',
                brand: '',
                isActive: true,
                initialPrice: '',
                newPrice: '',
                productName: '',
            });
        } catch (error) {
            setLoading(false);
            toast.error("Error creating product: " + error.message); // Toast notification for error
        }
    };

    const handleReset = () => {
        setFormData({
            title: '',
            description: '',
            startDate: '',
            endDate: '',
            price: '',
            brand: '',
            isActive: true,
            initialPrice: '',
            newPrice: '',
            productName: '',
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
                        <h1 className="text-xl font-bold">Create New Ad</h1>
                    </div>
                    <div className="p-5">
                        <form onSubmit={handleSubmit} className="w-full">
                            <h1 className="font-bold mb-3">Information</h1>
                            <div className="flex gap-4 w-full mb-5 pb-4 border-b border-dashed">
                                <div className="w-[40%]">

                                    <p className="text-gray-500">Add ad information and create a new ad from here</p>
                                </div>
                                <div className="w-[60%]">
                                    <div className="flex flex-col gap-3 mb-4">
                                        <label htmlFor="">Ad Title*</label>
                                        <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Ad title" className="border rounded-sm outline-none p-2" />
                                    </div>
                                    <div className="flex flex-col gap-3 mb-4">
                                        <label htmlFor="">Description*</label>
                                        <textarea name="description" value={formData.description} onChange={handleChange} id="" rows={10} className="border rounded-sm outline-none p-2"></textarea>
                                    </div>
                                    <div className="flex flex-col gap-3 mb-4">
                                        <label htmlFor="">Product Name*</label>
                                        <input type="text" name="productName" value={formData.productName} onChange={handleChange} placeholder="Product Name" className="border rounded-sm outline-none p-2" />
                                    </div>
                                    <div className="flex flex-col gap-3 mb-4">
                                        <label htmlFor="">Initial Price(USD)*</label>
                                        <input type="number" name="initialPrice" value={formData.initialPrice} onChange={handleChange} placeholder="Price in dollars" className="border rounded-sm outline-none p-2" />
                                    </div>
                                    <div className="flex flex-col gap-3 mb-4">
                                        <label htmlFor="">New Price(USD)*</label>
                                        <input type="number" name="newPrice" value={formData.newPrice} onChange={handleChange} placeholder="Price in dollars" className="border rounded-sm outline-none p-2" />
                                    </div>
                                    <div className="flex flex-col gap-3 mb-4">
                                        <label htmlFor="">Start Date*</label>
                                        <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} placeholder="" className="border rounded-sm outline-none p-2" />
                                    </div>
                                    <div className="flex flex-col gap-3 mb-4">
                                        <label htmlFor="">End Date*</label>
                                        <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} placeholder="" className="border rounded-sm outline-none p-2" />
                                    </div>

                                    <div className="flex flex-col gap-3 mb-4">
                                        <label htmlFor="">
                                            <input type="checkbox" name="isActive" checked={formData.isActive} onChange={handleChange} />
                                            &nbsp;
                                            isActive?
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="/supplier/ads" className="flex items-center text-orange-500 gap-1">
                                    Go to Ads
                                    <FaArrowRight />
                                </a>
                                <div className="flex gap-2 items-center">
                                    <div onClick={handleReset} className="border cursor-pointer hover:bg-orange-800 hover:text-white border-orange-500 px-2 py-1 rounded-md">Reset Form</div>
                                    <button type="submit" className="border border-orange-500 px-2 py-1 rounded-md bg-orange-500 text-white">{loading ? "Submitting..." : "Create Ad"}</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </SupplierLayout>
    )
}

export default AddAd