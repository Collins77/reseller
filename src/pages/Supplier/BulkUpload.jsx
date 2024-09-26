// import React from 'react'

import SupplierLayout from "@/components/SupplierLayout"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { FaArrowRight } from "react-icons/fa6"

const BulkUpload = () => {
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
                                    <BreadcrumbLink href="/supplier/products">Products</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>Bulk-Upload</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </div>
                <div className="bg-white shadow-md p-4">
                    <div className="pb-4 border-b border-dashed mb-8">
                        <h1 className="text-xl font-bold">Upload Bulk Products</h1>
                    </div>
                    <div className="p-5">
                        <form action="" className="w-full">
                            <h1 className="font-bold mb-3">Upload multiple products</h1>
                            <div className="flex gap-4 w-full mb-5 pb-4 border-b border-dashed">
                                <div className="w-[40%]">

                                    <p className="text-gray-500">Download the template and insert data. Then upload the template once more.</p>
                                </div>
                                <div className="w-[60%]">
                                    <div>
                                        <button className="bg-orange-500 mb-4 text-white px-2 py-1 rounded-md">Download Template</button>
                                        <form action="">
                                            <input type="file" />
                                        </form>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="/supplier/products" className="flex items-center text-orange-500 gap-1">
                                    Go to Products
                                    <FaArrowRight />
                                </a>
                                <div className="flex gap-2 items-center">
                                    <button className="border border-orange-500 px-2 py-1 rounded-md">Reset Form</button>
                                    <button className="border border-orange-500 px-2 py-1 rounded-md bg-orange-500 text-white">Submit File</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </SupplierLayout>
    )
}

export default BulkUpload