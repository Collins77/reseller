// import React from 'react'

import SupplierLayout from "@/components/SupplierLayout"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { FaArrowRight } from "react-icons/fa6"

const AddAd = () => {
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
                        <form action="" className="w-full">
                            <h1 className="font-bold mb-3">Information</h1>
                            <div className="flex gap-4 w-full mb-5 pb-4 border-b border-dashed">
                                <div className="w-[40%]">

                                    <p className="text-gray-500">Add ad information and create a new ad from here</p>
                                </div>
                                <div className="w-[60%]">
                                    <div className="flex flex-col gap-3 mb-4">
                                        <label htmlFor="">Ad Title*</label>
                                        <input type="text" placeholder="Ad title" className="border rounded-sm outline-none p-2" />
                                    </div>
                                    <div className="flex flex-col gap-3 mb-4">
                                        <label htmlFor="">Description*</label>
                                        <textarea name="" id="" rows={10} className="border rounded-sm outline-none p-2"></textarea>
                                    </div>
                                    <div className="flex flex-col gap-3 mb-4">
                                        <label htmlFor="">Product Name*</label>
                                        <input type="text" placeholder="Product Name" className="border rounded-sm outline-none p-2" />
                                    </div>
                                    <div className="flex flex-col gap-3 mb-4">
                                        <label htmlFor="">Initial Price(USD)*</label>
                                        <input type="number" placeholder="Price in dollars" className="border rounded-sm outline-none p-2" />
                                    </div>
                                    <div className="flex flex-col gap-3 mb-4">
                                        <label htmlFor="">New Price(USD)*</label>
                                        <input type="number" placeholder="Price in dollars" className="border rounded-sm outline-none p-2" />
                                    </div>
                                    <div className="flex flex-col gap-3 mb-4">
                                        <label htmlFor="">Start Date*</label>
                                        <input type="date" placeholder="Product Name" className="border rounded-sm outline-none p-2" />
                                    </div>
                                    <div className="flex flex-col gap-3 mb-4">
                                        <label htmlFor="">End Date*</label>
                                        <input type="date" placeholder="Product Name" className="border rounded-sm outline-none p-2" />
                                    </div>
                                    
                                    <div className="flex flex-col gap-3 mb-4">
                                        <label htmlFor="">
                                            <input type="checkbox" />
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
                                    <button className="border border-orange-500 px-2 py-1 rounded-md">Reset Form</button>
                                    <button className="border border-orange-500 px-2 py-1 rounded-md bg-orange-500 text-white">Create Ad</button>
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