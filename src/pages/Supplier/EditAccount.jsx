// import React from 'react'

import SupplierLayout from "@/components/SupplierLayout"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import MultipleSelector from "@/components/ui/multipleselect"
import { FaArrowRight } from "react-icons/fa"

const OPTIONS = [
    { label: 'nextjs', value: 'nextjs' },
    { label: 'React', value: 'react' },
    { label: 'Remix', value: 'remix' },
    { label: 'Vite', value: 'vite' },
    { label: 'Nuxt', value: 'nuxt' },
    { label: 'Vue', value: 'vue' },
    { label: 'Svelte', value: 'svelte' },
    { label: 'Angular', value: 'angular' },
    { label: 'Ember', value: 'ember', disable: true },
    { label: 'Gatsby', value: 'gatsby', disable: true },
    { label: 'Astro', value: 'astro' },
];

const EditAccount = () => {
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
                        <form action="" className="w-full">
                            <h1 className="font-bold mb-3">Information</h1>
                            <div className="flex gap-4 w-full mb-5 pb-4 border-b border-dashed">
                                <div className="w-[40%]">

                                    <p className="text-gray-500">Edit Personal information</p>
                                </div>
                                <div className="w-[60%]">
                                    <div className="flex flex-col gap-3 mb-4">
                                        <label htmlFor="">First Name</label>
                                        <input type="text" className="border rounded-sm outline-none p-2" />
                                    </div>
                                    <div className="flex flex-col gap-3 mb-4">
                                        <label htmlFor="">Last Name</label>
                                        <input type="text" className="border rounded-sm outline-none p-2" />
                                    </div>
                                    <div className="flex flex-col gap-3 mb-4">
                                        <label htmlFor="">Email Address</label>
                                        <input type="text" className="border rounded-sm outline-none p-2" />
                                    </div>
                                    <div className="flex flex-col gap-3 mb-4">
                                        <label htmlFor="">Phone Number</label>
                                        <input type="text" className="border rounded-sm outline-none p-2" />
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
                                        <input type="text" className="border rounded-sm outline-none p-2" />
                                    </div>
                                    <div className="flex flex-col gap-3 mb-4">
                                        <label htmlFor="">Company Email</label>
                                        <input type="text" className="border rounded-sm outline-none p-2" />
                                    </div>
                                    <div className="flex flex-col gap-3 mb-4">
                                        <label htmlFor="">Company Address</label>
                                        <input type="text" className="border rounded-sm outline-none p-2" />
                                    </div>
                                    <div className="flex flex-col gap-3 mb-4">
                                        <label htmlFor="">Company Type</label>
                                        <select name="" id="" className="border rounded-sm outline-none p-2">
                                            <option value="">Supplier</option>
                                            <option value="">Supplier</option> 
                                        </select>
                                    </div>
                                    <div className="flex flex-col gap-3 mb-4">
                                        <label htmlFor="">Categories</label>
                                        <MultipleSelector
                                            defaultOptions={OPTIONS}
                                            placeholder="Select categories"
                                            emptyIndicator={
                                                <p className="text-center text-md leading-10 outline-none">
                                                    no results found.
                                                </p>
                                            }
                                        />
                                    </div>
                                    <div className="flex flex-col gap-3 mb-4">
                                        <label htmlFor="">Dollar Exchange Rate</label>
                                        <input type="number" className="border rounded-sm outline-none p-2" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="/supplier/account" className="flex items-center text-orange-500 gap-1">
                                    Go to Account
                                    <FaArrowRight />
                                </a>
                                <div className="flex gap-2 items-center">
                                    <button className="border border-orange-500 px-2 py-1 rounded-md">Erase Changes</button>
                                    <button className="border border-orange-500 px-2 py-1 rounded-md bg-orange-500 text-white">Submit Changes</button>
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