// import React from 'react'

import apiClient from "@/lib/api-client";
import { SUPPLIER_LOGOUT_ROUTE } from "@/lib/constants";
import { useAppStore } from "@/redux/store";
import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaRegUser } from "react-icons/fa";
import { FaCartFlatbed } from "react-icons/fa6";
import { IoIosLogOut } from "react-icons/io";
import { MdOutlineDashboard, MdOutlineDiscount } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import logo from "../assets/ResellerSprint icon.png";
import { ScrollArea } from "./ui/scroll-area";
import { RiAdminFill } from "react-icons/ri";
import { CiShop } from "react-icons/ci";
import { BiSolidFactory } from "react-icons/bi";

const AdminSidebar = ({ isOpen }) => {
    const [isProductsOpen, setIsProductsOpen] = useState(false);
    const [isSuppliersOpen, setIsSuppliersOpen] = useState(false);
    const [isResellersOpen, setIsResellersOpen] = useState(false);
    const [isAdminsOpen, setIsAdminsOpen] = useState(false);
    const [isAdsOpen, setIsAdsOpen] = useState(false);
    const { setSupplierInfo } = useAppStore();
    const navigate = useNavigate();

    const toggleProducts = () => setIsProductsOpen(!isProductsOpen);
    const toggleSuppliers = () => setIsSuppliersOpen(!isSuppliersOpen);
    const toggleResellers = () => setIsResellersOpen(!isResellersOpen);
    const toggleAdmins = () => setIsAdminsOpen(!isAdminsOpen);
    const toggleAds = () => setIsAdsOpen(!isAdsOpen);

    const logOut = async () => {
        try {
            const response = await apiClient.post(SUPPLIER_LOGOUT_ROUTE, {}, { withCredentials: true });
            if (response.status === 200) {
                toast.success("Logout successful")
                navigate("/admin/login");
                setSupplierInfo(null);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <ScrollArea className="">
            <aside
                className={`fixed top-0 left-0 overflow-y-scroll h-full p-4 bg-white shadow-md transition-transform duration-300 ${isOpen ? 'translate-x-0 w-64' : '-translate-x-0 w-16'
                    } z-50`}
            >
                <nav className="relative h-full w-full">
                    <a href="/supplier" className={`flex w-full items-center justify-center gap-1 mb-8 ${!isOpen && 'justify-start'}`}>
                        <img src={logo} alt="logo" className={`transition-all duration-300 ${isOpen ? 'w-[40px] h-[40px]' : 'w-8 h-8'}`} />
                        {isOpen && <h1 className="font-bold text-lg">ResellerSprint</h1>}
                    </a>

                    <ul className="p-2 flex flex-col w-full justify-center">
                        <li className="mb-3">
                            <a href="/supplier" className="flex gap-3 items-center w-full p-2 rounded-md hover:bg-gray-100">
                                <MdOutlineDashboard size={isOpen ? 20 : 24} />
                                {isOpen && "Dashboard"}
                            </a>
                        </li>
                        <h1 className={`text-gray-500 ${!isOpen && 'hidden'}`}>Admin Management</h1>

                        {/* Products Dropdown */}
                        <li>
                            <button
                                onClick={toggleAdmins}
                                className="flex justify-between items-center gap-3 w-full p-2 rounded-md hover:bg-gray-100"
                            >
                                <div className="flex items-center gap-3">
                                    <RiAdminFill size={isOpen ? 20 : 24} />
                                    {isOpen && "Admins"}
                                </div>
                                {isOpen && (isAdminsOpen ? <FaChevronUp className="text-gray-500 text-sm" /> : <FaChevronDown className="text-gray-500 text-sm" />)}
                            </button>
                            {isAdminsOpen && isOpen && (
                                <ul className="pl-8 mt-2">
                                    <li>
                                        <a href="/admin/admins" className="block p-2 hover:bg-gray-100 rounded-md">
                                            View Admins
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/admin/add-admin" className="block p-2 hover:bg-gray-100 rounded-md">
                                            Add Admin
                                        </a>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <h1 className={`text-gray-500 ${!isOpen && 'hidden'}`}>Users Management</h1>

                        {/* Products Dropdown */}
                        <li>
                            <button
                                onClick={toggleResellers}
                                className="flex justify-between items-center gap-3 w-full p-2 rounded-md hover:bg-gray-100"
                            >
                                <div className="flex items-center gap-3">
                                    <CiShop size={isOpen ? 20 : 24} />
                                    {isOpen && "Resellers"}
                                </div>
                                {isOpen && (isResellersOpen ? <FaChevronUp className="text-gray-500 text-sm" /> : <FaChevronDown className="text-gray-500 text-sm" />)}
                            </button>
                            {isResellersOpen && isOpen && (
                                <ul className="pl-8 mt-2">
                                    <li>
                                        <a href="/admin/resellers" className="block p-2 hover:bg-gray-100 rounded-md">
                                            View Resellers
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/admin/create-reseller" className="block p-2 hover:bg-gray-100 rounded-md">
                                            Add Reseller
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/admin/pending-resellers" className="block p-2 hover:bg-gray-100 rounded-md">
                                            Pending Resellers
                                        </a>
                                    </li>

                                </ul>
                            )}
                        </li>

                        {/* Ads Dropdown */}
                        <li className="mb-3">
                            <button
                                onClick={toggleSuppliers}
                                className="flex justify-between items-center gap-3 w-full p-2 rounded-md hover:bg-gray-100"
                            >
                                <div className="flex items-center gap-3">
                                    <BiSolidFactory size={isOpen ? 20 : 24} />
                                    {isOpen && "Suppliers"}
                                </div>
                                {isOpen && (isSuppliersOpen ? <FaChevronUp className="text-gray-500 text-sm" /> : <FaChevronDown className="text-gray-500 text-sm" />)}
                            </button>
                            {isSuppliersOpen && isOpen && (
                                <ul className="pl-8 mt-2">
                                    <li>
                                        <a href="/admin/suppliers" className="block p-2 hover:bg-gray-100 rounded-md">
                                            View Suppliers
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/admin/create-supplier" className="block p-2 hover:bg-gray-100 rounded-md">
                                            Create Supplier
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/admin/pending-suppliers" className="block p-2 hover:bg-gray-100 rounded-md">
                                            Pending Suppliers
                                        </a>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <h1 className={`text-gray-500 ${!isOpen && 'hidden'}`}>Product Management</h1>

                        {/* Products Dropdown */}
                        <li>
                            <button
                                onClick={toggleProducts}
                                className="flex justify-between items-center gap-3 w-full p-2 rounded-md hover:bg-gray-100"
                            >
                                <div className="flex items-center gap-3">
                                    <FaCartFlatbed size={isOpen ? 20 : 24} />
                                    {isOpen && "Products"}
                                </div>
                                {isOpen && (isProductsOpen ? <FaChevronUp className="text-gray-500 text-sm" /> : <FaChevronDown className="text-gray-500 text-sm" />)}
                            </button>
                            {isProductsOpen && isOpen && (
                                <ul className="pl-8 mt-2">
                                    <li>
                                        <a href="/admin/products" className="block p-2 hover:bg-gray-100 rounded-md">
                                            View Products
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/admin/add-product" className="block p-2 hover:bg-gray-100 rounded-md">
                                            Add Product
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/admin/bulk-upload" className="block p-2 hover:bg-gray-100 rounded-md">
                                            Bulk Upload
                                        </a>
                                    </li>
                                </ul>
                            )}
                        </li>

                        {/* Ads Dropdown */}
                        <li className="mb-3">
                            <button
                                onClick={toggleAds}
                                className="flex justify-between items-center gap-3 w-full p-2 rounded-md hover:bg-gray-100"
                            >
                                <div className="flex items-center gap-3">
                                    <MdOutlineDiscount size={isOpen ? 20 : 24} />
                                    {isOpen && "Ads"}
                                </div>
                                {isOpen && (isAdsOpen ? <FaChevronUp className="text-gray-500 text-sm" /> : <FaChevronDown className="text-gray-500 text-sm" />)}
                            </button>
                            {isAdsOpen && isOpen && (
                                <ul className="pl-8 mt-2">
                                    <li>
                                        <a href="/admin/ads" className="block p-2 hover:bg-gray-100 rounded-md">
                                            View Ads
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/admin/create-ad" className="block p-2 hover:bg-gray-100 rounded-md">
                                            Create Ad
                                        </a>
                                    </li>
                                </ul>
                            )}
                        </li>

                        <h1 className={`text-gray-500 ${!isOpen && 'hidden'}`}>Settings</h1>
                        <li>
                            <a href="/supplier/account" className="flex gap-3 items-center w-full p-2 rounded-md hover:bg-gray-100">
                                <FaRegUser size={isOpen ? 20 : 24} />
                                {isOpen && "Account"}
                            </a>
                        </li>
                    </ul>

                    <div className="p-2 absolute bottom-2 w-full bg-white">
                        <button onClick={logOut} className="flex items-center gap-3 border w-full p-2 rounded-md hover:bg-gray-200">
                            <IoIosLogOut size={isOpen ? 20 : 24} />
                            {isOpen && "Sign Out"}
                        </button>
                    </div>
                </nav>
            </aside>
        </ScrollArea>
    );
}

export default AdminSidebar