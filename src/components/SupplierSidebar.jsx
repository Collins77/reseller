// import React, { useState } from 'react'
import { useState } from "react";
import { MdOutlineDashboard, MdOutlineDiscount } from "react-icons/md";
import { FaCartFlatbed } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import logo from "../assets/ResellerSprint icon.png";
import { SUPPLIER_LOGOUT_ROUTE } from "@/lib/constants";
import apiClient from "@/lib/api-client";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "@/redux/store";

const SupplierSidebar = ({ isOpen }) => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isAdsOpen, setIsAdsOpen] = useState(false);
  const { setSupplierInfo } = useAppStore();
    const navigate = useNavigate();

  const toggleProducts = () => setIsProductsOpen(!isProductsOpen);
  const toggleAds = () => setIsAdsOpen(!isAdsOpen);

  const logOut = async () => {
    try {
        const response = await apiClient.post(SUPPLIER_LOGOUT_ROUTE, {}, { withCredentials: true });
        if (response.status === 200) {
            toast("Logout successful")
            navigate("/supplier-login");
            setSupplierInfo(null);
        }
    } catch (error) {
        console.log(error);
    }
}

  return (
    <aside
      className={`fixed top-0 left-0 h-full p-4 bg-white shadow-md transition-transform duration-300 ${
        isOpen ? 'translate-x-0 w-64' : '-translate-x-0 w-16'
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
          <h1 className={`text-gray-500 ${!isOpen && 'hidden'}`}>Management</h1>

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
                  <a href="/supplier/products" className="block p-2 hover:bg-gray-100 rounded-md">
                    View Products
                  </a>
                </li>
                <li>
                  <a href="/supplier/add-product" className="block p-2 hover:bg-gray-100 rounded-md">
                    Add Product
                  </a>
                </li>
                <li>
                  <a href="/supplier/bulk-upload" className="block p-2 hover:bg-gray-100 rounded-md">
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
                  <a href="/supplier/ads" className="block p-2 hover:bg-gray-100 rounded-md">
                    View Ads
                  </a>
                </li>
                <li>
                  <a href="/supplier/create-ad" className="block p-2 hover:bg-gray-100 rounded-md">
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

        <div className="p-2 absolute bottom-2 w-full">
          <button onClick={logOut} className="flex items-center gap-3 border w-full p-2 rounded-md hover:bg-gray-200">
            <IoIosLogOut size={isOpen ? 20 : 24} />
            {isOpen && "Sign Out"}
          </button>
        </div>
      </nav>
    </aside>
  );
};

export default SupplierSidebar;
