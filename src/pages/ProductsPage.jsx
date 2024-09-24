// import React from 'react'

import AppNavbar from "@/components/AppNavbar"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import backgroundImage from "../assets/pexels-pixabay-262353.jpg";
import { FaEye } from "react-icons/fa6";
import { FaFileCsv } from "react-icons/fa"
import { GrAppleAppStore } from "react-icons/gr";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import Footer from "@/components/Footer";

const ProductsPage = () => {
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
                    <h1 className="text-4xl text-orange-500">Products</h1>
                </div>
            </div>
            {/* breadcrumbs */}
            <div className="mt-5 mb-7 px-[20px]">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/app">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage href="/suppliers">Suppliers</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
            <div className="px-[40px] grid grid-cols-3 gap-3 mb-8">
                <div className="flex flex-col gap-2">
                    <label htmlFor="">Filter by category</label>
                    <select name="" id="" className="border rounded-md p-3">
                        <option value="">Supplier</option>
                        <option value="">Manufacturer</option>
                    </select>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="">Filter by brand</label>
                    <select name="" id="" className="border rounded-md p-3">
                        <option value="">Computers</option>
                        <option value="">Mobile Phones</option>
                    </select>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="">Filter by supplier</label>
                    <select name="" id="" className="border rounded-md p-3">
                        <option value="">Computers</option>
                        <option value="">Mobile Phones</option>
                    </select>
                </div>
            </div>
            <div className="px-[40px] py-[30px] bg-slate-50">
                <div>
                    <table className="bg-white px-[20px] w-full">
                        <div className="px-[20px] py-[10px]">
                            <button className="bg-blue-600 gap-1 text-white px-2 flex items-center py-1 rounded-sm">
                                Export
                                <FaFileCsv />
                            </button>
                        </div>
                        <tr className="border-b border-gray-500">
                            <th className="py-2 px-4">SKU</th>
                            <th className="py-2 px-4">NAME</th>
                            <th className="py-2 px-4">PRICE</th>
                            <th className="py-2 px-4">BRAND</th>
                            <th className="py-2 px-4">WARRANTY(MONS)</th>
                            <th className="py-2 px-4">SUPPLIER</th>
                            <th className="py-2 px-4">STATUS</th>
                            <th className="py-2 px-4">ACTION</th>
                        </tr>
                        <tr className="border-b border-gray-500">
                            <td className="py-6 px-4 flex items-center">diudhwuehd28</td>
                            <td>
                                <h1 className="font-semibold">Samsung A71 4GB 128GB</h1>
                                <p className="text-gray-400">Mobile Phones</p>
                            </td>
                            <td className="px-4">
                                $76
                            </td>
                            <td className="px-4">
                                Samsung
                            </td>
                            <td className="px-4 text-center">
                                18
                            </td>
                            <td className="px-4">
                                Cotek Technologies
                            </td>
                            <td className="px-4">
                                Available
                            </td>
                            <td className="px-4">
                                <FaEye />
                            </td>
                        </tr>
                        <tr className="border-b border-gray-500">
                            <td className="py-6 px-4 flex items-center">diudhwuehd28</td>
                            <td>
                                <h1 className="font-semibold">Samsung A71 4GB 128GB</h1>
                                <p className="text-gray-400">Mobile Phones</p>
                            </td>
                            <td className="px-4">
                                $76
                            </td>
                            <td className="px-4">
                                Samsung
                            </td>
                            <td className="px-4 text-center">
                                18
                            </td>
                            <td className="px-4">
                                Cotek Technologies
                            </td>
                            <td className="px-4">
                                Available
                            </td>
                            <td className="px-4">
                                <FaEye />
                            </td>
                        </tr>
                        <tr className="border-b border-gray-500">
                            <td className="py-6 px-4 flex items-center">diudhwuehd28</td>
                            <td>
                                <h1 className="font-semibold">Samsung A71 4GB 128GB</h1>
                                <p className="text-gray-400">Mobile Phones</p>
                            </td>
                            <td className="px-4">
                                $76
                            </td>
                            <td className="px-4">
                                Samsung
                            </td>
                            <td className="px-4 text-center">
                                18
                            </td>
                            <td className="px-4">
                                Cotek Technologies
                            </td>
                            <td className="px-4">
                                Available
                            </td>
                            <td className="px-4">
                                <FaEye />
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className="bg-orange-400 h-[200px] py-[20px]">
                <h1 className="text-center font-bold text-2xl mb-2 text-white">Access our services from your mobile device.</h1>
                <p className="text-center text-white mb-5">Mobile App Available</p>
                <div className="flex w-full justify-center items-center gap-3">
                    <a href="/" className="flex gap-1 items-center bg-black px-3 py-1 text-white rounded-md">
                        <IoLogoGooglePlaystore className="text-4xl" />
                        <div >
                            <p>GET IT ON</p>
                            <h1 className="text-2xl font-bold">Google play</h1>
                        </div>
                    </a>
                    <a href="/" className="flex gap-1 items-center bg-black px-3 py-1 text-white rounded-md">
                        <GrAppleAppStore className="text-4xl" />
                        <div >
                            <p>GET IT ON</p>
                            <h1 className="text-2xl font-bold">APP Store</h1>
                        </div>
                    </a>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ProductsPage