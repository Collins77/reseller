// import React from 'react'

import SupplierLayout from "@/components/SupplierLayout"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import logo from "../../assets/ResellerSprint icon.png"
import { MdEmail } from "react-icons/md"
import { IoLocation } from "react-icons/io5"
import { FaPhone, FaCartFlatbed } from "react-icons/fa6"
import { FaDollarSign, FaRegEdit } from "react-icons/fa"

const Account = () => {
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
                                    <BreadcrumbPage>Account</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </div>
                <div className="bg-white shadow-md p-4">
                    <div className="h-[100px] bg-orange-500 relative mb-8">
                        <div className="w-[60px] h-[60px] p-1 bg-white rounded-full border border-blue-600 absolute left-5 -bottom-7">
                            <div className="bg-slate-100 w-full h-full rounded-full">
                                <img src={logo} alt="" className="w-full h-full rounded-full" />
                            </div>
                        </div>
                    </div>
                    <div className="mb-5">
                        <h1 className="font-bold text-lg">Cotek Technologies Inc</h1>
                    </div>
                    <div className="grid grid-cols-3 mb-4">
                        <div className="flex items-center gap-2 border-r p-2">
                            <MdEmail />
                            <p>mutuamuema330@gmail.com</p>
                        </div>
                        <div className="flex items-center gap-2 border-r p-2">
                            <IoLocation />
                            <p>172, Boulevard St, Kenya</p>
                        </div>
                        <div className="flex items-center gap-2 border-r p-2">
                            <FaPhone />
                            <p>+254791448827</p>
                        </div>
                    </div>
                    <div className="flex justify-between gap-4">
                        <div className="w-[40%] bg-gray-50/40 shadow-lg p-2">
                            <div className="mb-3 pb-2 border-b border-dashed">
                                <div className="flex items-center mb-2 justify-between">
                                    <p>Registered Since:</p>
                                    <p>24th, January 2024</p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <p>Status:</p>
                                    <p>Active</p>
                                </div>
                            </div>
                            <div>
                                <h1 className="font-bold">Personal Information</h1>
                                <div>
                                    <div className="flex items-center mb-2 justify-between">
                                        <p className="font-bold">First Name:</p>
                                        <p>Collins</p>
                                    </div>
                                    <div className="flex items-center mb-2 justify-between">
                                        <p className="font-bold">Last Name:</p>
                                        <p>Muema</p>
                                    </div>
                                    <div className="flex items-center mb-2 justify-between">
                                        <p className="font-bold">Email Address:</p>
                                        <p>mutuamuema330@gmail.com</p>
                                    </div>
                                    <div className="flex justify-between gap-4">
                                        <a href="/supplier/account/edit" className="bg-green-500 text-white gap-1 flex items-center justify-center rounded-md px-3 py-1 w-[50%]">
                                            <FaRegEdit />
                                            Edit Information
                                        </a>
                                        <a href="/supplier/account/edit" className="bg-red-500 text-white gap-1 flex items-center justify-center rounded-md px-3 py-1 w-[50%]">
                                            <FaRegEdit />
                                            Change Password
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[60%] bg-gray-50/40 shadow-lg p-2 flex flex-wrap gap-4">
                            <div className="flex items-center justify-between p-2 bg-white shadow-md border rounded-md w-[48%]">
                                <div className="flex flex-col gap-2">
                                    <h1 className="font-bold text-lg">10</h1>
                                    <p>Total <a href="/supplier/products" className="text-blue-500 underline">Products</a></p>
                                </div>
                                <div className="w-[50px] h-[50px] bg-gray-100 rounded-full border border-blue-600 flex items-center justify-center">
                                    <FaCartFlatbed />
                                </div>
                            </div>
                            <div className="flex items-center justify-between p-2 bg-white shadow-md border rounded-md w-[48%]">
                                <div className="flex flex-col gap-2">
                                    <h1 className="font-bold text-lg">10</h1>
                                    <p>Total <a href="/supplier/ads" className="text-blue-500 underline">Ads</a></p>
                                </div>
                                <div className="w-[50px] h-[50px] bg-gray-100 rounded-full border border-orange-600 flex items-center justify-center">
                                    <FaCartFlatbed />
                                </div>
                            </div>
                            <div className="flex items-center justify-between p-2 bg-white shadow-md border rounded-md w-[48%]">
                                <div className="flex flex-col gap-2">
                                    <h1 className="font-bold text-lg">145</h1>
                                    <p>Current Dollar Exchange Rate</p>
                                </div>
                                <div className="w-[50px] h-[50px] bg-gray-100 rounded-full border border-green-600 flex items-center justify-center">
                                    <FaDollarSign />
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </SupplierLayout>
    )
}

export default Account