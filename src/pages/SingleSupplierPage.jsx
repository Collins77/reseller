// import React from 'react'

import AppNavbar from "@/components/AppNavbar"
import backgroundImage from "../assets/pexels-pixabay-262353.jpg";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import logo from "../assets/ResellerSprint icon.png"
import { IoLocation, IoLogoGooglePlaystore } from "react-icons/io5";
import { FaEye, FaFileCsv, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdOutlineAdsClick } from "react-icons/md";
import Footer from "@/components/Footer";
import { GrAppleAppStore } from "react-icons/gr";


const SingleSupplierPage = () => {
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
                    <h1 className="text-4xl text-orange-500">Cotek Technologies</h1>
                </div>
            </div>
            <div className="mt-5 mb-7 px-[20px]">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/app">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/suppliers">Suppliers</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage href="/suppliers">Cotek Technologies</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
            <div className="flex gap-5 px-[30px]">
                <div className="bg-white shadow-lg w-[30%] h-fit p-3">
                    <div className="flex items-center gap-2 border-b pb-2">
                        <div className="border border-blue-600 p-1 w-[70px] h-[70px] rounded-full flex items-center justify-center">
                            <div className="bg-blue-50 w-full h-full rounded-full flex items-center justify-center">
                                <img src={logo} alt="" className="w-[50px] h-[50px] rounded-full" />
                            </div>
                        </div>
                        <div>
                            <p className="text-sm text-gray-400">Since 2023</p>
                            <h1 className="font-semibold ">Cotek Technologies</h1>
                            <p className="text-gray-400">info@cotektechnologies.com</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 py-2 pb-2 border-b border-dashed mb-3">
                        <div className="flex flex-col items-center">
                            <h1 className="text-gray-400">10</h1>
                            <p>Products</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <h1 className="text-gray-400">145</h1>
                            <p>Exchange Rate</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <h1 className="text-gray-400">1</h1>
                            <p>Ads & Events</p>
                        </div>
                    </div>
                    <div className="mb-4">
                        <div className="flex items-center gap-2 mb-2">
                            <IoLocation />
                            <p>172, Boulevard St. Kenya</p>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                            <FaPhone />
                            <p>+254791448827</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        <div className="px-10 py-2 rounded-md flex flex-col items-center bg-blue-300 text-white">
                            <MdEmail className="text-[30px]" />
                            <p>Email</p>
                        </div>
                        <div className="px-10 py-2 rounded-md flex flex-col items-center bg-red-300 text-white">
                            <MdOutlineAdsClick className="text-[30px]" />
                            <p>Ads & Events</p>
                        </div>
                    </div>
                </div>
                <div className="w-[68%] h-fit mb-3">
                    <div className="px-[10px] grid grid-cols-2 gap-3 mb-8">
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
                    </div>
                    <div className="px-[10px] py-[30px] w-full overflow-scroll bg-slate-50 h-[400px]">
                        <div className="w-full  h-[400px]">
                            <div className="px-[20px] h-[50px] py-[10px] w-full ic flex justify-between">
                                <div className="flex items-center gap-2">
                                    <label htmlFor="">Currency</label>
                                    <select name="" id="" className="outline-none rounded-md border">
                                        <option value="">$</option>
                                        <option value="">KES</option>
                                    </select>
                                </div>
                                <button className="bg-blue-600 text-white px-2 flex gap-1 items-center py-1 rounded-sm">
                                    Export
                                    <FaFileCsv />
                                </button>
                            </div>
                            <table className="bg-white w-full h-[300px] overflow-scroll">

                                <tr className="border-b border-gray-500">
                                    <th className="py-2 px-4">SKU</th>
                                    <th className="py-2 mx-auto">NAME</th>
                                    <th className="py-2 px-4">PRICE</th>
                                    <th className="py-2 px-4">BRAND</th>
                                    <th className="py-2 px-4">WARRANTY(MONS)</th>
                                    <th className="py-2 px-4">STATUS</th>
                                    <th className="py-2 px-4">ACTION</th>
                                </tr>
                                <tr className="border-b border-gray-500">
                                    <td className="py-6 px-4 flex items-center">diudhwuehd28</td>
                                    <td className="w-[500px]">
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
                                        Available
                                    </td>
                                    <td className="px-4">
                                        <FaEye />
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-500">
                                    <td className="py-6 px-4 flex items-center">diudhwuehd28</td>
                                    <td className="w-[500px]">
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
                                        Available
                                    </td>
                                    <td className="px-4">
                                        <FaEye />
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-500">
                                    <td className="py-6 px-4 flex items-center">diudhwuehd28</td>
                                    <td className="w-[500px]">
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
                                        Available
                                    </td>
                                    <td className="px-4">
                                        <FaEye />
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-500">
                                    <td className="py-6 px-4 flex items-center">diudhwuehd28</td>
                                    <td className="w-[500px]">
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
                                        Available
                                    </td>
                                    <td className="px-4">
                                        <FaEye />
                                    </td>
                                </tr>

                            </table>
                        </div>
                    </div>
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

export default SingleSupplierPage