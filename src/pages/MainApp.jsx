// import React from 'react'

import AppNavbar from "@/components/AppNavbar"
import backgroundImage from "../assets/pexels-pixabay-262353.jpg";
import { FaArrowRight, FaPhone } from "react-icons/fa6";
import { IoLocation, IoLogoGooglePlaystore } from "react-icons/io5";
import logo from "../assets/ResellerSprint icon.png"
import Footer from "@/components/Footer";
import { GrAppleAppStore } from "react-icons/gr";
import { useEffect, useState } from "react";
import { server } from "@/server";
import axios from "axios";

const MainApp = () => {
    const [suppliers, setSuppliers] = useState([]);
    const [brands, setBrands] = useState([]);

    const createSlug = (name) => {
        return name.toLowerCase().replace(/ /g, '-');  // Convert to lowercase and replace spaces with hyphens
    };

    // Fetch suppliers
    useEffect(() => {
        const fetchSuppliers = async () => {
            try {
                const response = await fetch(`${server}/suppliers/get-suppliers`);
                // console.log(response.json())
                const data = await response.json();
                console.log(data);
                setSuppliers(data.suppliers); // Assuming the API returns an array of suppliers
            } catch (error) {
                console.error('Error fetching suppliers:', error);
            }
        };

        // Fetch brands

        const fetchBrands = async () => {
            try {
                const response = await axios.get(`${server}/brands`); // Update this URL to the correct endpoint
                const data = await response.data;
                // console.log(response);
                setBrands(data); // Assuming the API returns an array of brands
            } catch (error) {
                console.error('Error fetching brands:', error);
            }
        };

        fetchBrands();
        fetchSuppliers();
    }, []);
    return (
        <div>
            <AppNavbar />
            <div className="hero h-[84vh] w-full" style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover',
            }}>
                <div className="flex flex-col items-center bg-black/50 justify-center gap-3 px-[80px] h-full w-full">
                    <h1 className="text-5xl text-center font-bold text-white">Access Genuine Wholesale Suppliers In Nairobi - Kenya & Beyond</h1>
                    <form action="/search" className="w-full px-4">
                        <div className="relative w-full max-w-xl mx-auto bg-white rounded-md">
                            <input placeholder="Search Here" className="rounded-md w-full h-16 bg-transparent py-1 pl-5 pr-32 outline-none border-2 border-gray-100 shadow-md hover:outline-none focus:ring-orange-200 focus:border-orange-200" type="text" name="query" id="query" />
                            <button type="submit" className="absolute inline-flex items-center h-10 px-4 py-2 text-sm text-white transition duration-150 ease-in-out rounded-md outline-none right-3 top-3 bg-orange-600 sm:px-6 sm:text-base sm:font-medium hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                                <svg className="-ml-0.5 sm:-ml-1 mr-2 w-4 h-4 sm:h-5 sm:w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                                Search
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="px-[20px] mt-10 mb-10">
                <h1 className="text-2xl text-orange-500">Featured Brands</h1>
                <p className="mb-4 text-gray-500">Check out some of the featured brands</p>
                <div className="grid grid-cols-4 gap-4 px-[40px]">
                    {brands.slice(0, 4).map((brand) => (  // Dynamically render brands
                        <a href={`/app/brands/view/${createSlug(brand.name)}`} key={brand._id} className="w-full flex items-center justify-center p-5 border shadow-sm rounded-md cursor-pointer hover:bg-orange-500 hover:text-white">
                            <h1>{brand.name}</h1>  {/* Display brand name */}
                        </a>
                    ))}

                </div>
            </div>
            <div className="px-[20px] mb-10">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl text-orange-500">Featured Manufactured/Suppliers</h1>
                        <p className="mb-4 text-gray-500">Check out some of the featured suppliers</p>
                    </div>
                    <div>
                        <a href="/app/suppliers" className="text-orange-500 flex items-center gap-1 underline">
                            All Suppliers
                            <FaArrowRight />
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-3">x
                    {suppliers.slice(0, 4).map((supplier) => (
                        <a key={supplier._id} href={`/app/suppliers/view/${supplier._id}`} className="border p-5 rounded-sm">
                            <div className="flex items-center gap-2">
                                <div className="w-[80px] h-[80px] bg-gray-300 rounded-full flex items-center justify-center">
                                    <img src={logo} alt={supplier.name} className="h-[60px] w-[60px]" />
                                </div>
                                <div>
                                    <h1 className="text-2xl font-bold mb-1">{supplier.companyName}</h1>
                                    <div className="flex gap-1 items-center mb-2 text-gray-500">
                                        <IoLocation color="orange" />
                                        {supplier.address}
                                    </div>
                                    <div className="flex gap-1 items-center mb-2 text-gray-500">
                                        <FaPhone color="green" />
                                        {supplier.phoneNumber}
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-4 gap-2">
                                <div className="flex flex-col items-center justify-center border-r">
                                    {/* <h1>{supplier.productsCount}</h1> */}
                                    <p>Products</p>
                                </div>
                                <div className="flex flex-col items-center justify-center border-r">
                                    {/* <h1>{supplier.adsCount}</h1> */}
                                    <p>Ads</p>
                                </div>
                                <div className="flex flex-col items-center justify-center border-r">
                                    <h1>{supplier.dollarExchangeRate}</h1>
                                    <p>Dollar Rate</p>
                                </div>
                                <div className="flex flex-col items-center justify-center border-r">
                                    <h1>{supplier.type}</h1>
                                    <p>Type</p>
                                </div>
                            </div>
                        </a>
                    ))}
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

export default MainApp