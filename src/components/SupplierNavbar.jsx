// import React from 'react'
import apiClient from "@/lib/api-client";
import { SUPPLIER_LOGOUT_ROUTE } from "@/lib/constants";
import { useAppStore } from "@/redux/store";
import { useEffect, useState } from "react";
import { MdMarkUnreadChatAlt } from "react-icons/md";
import { RiMenu3Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const SupplierNavbar = ({isOpen, toggleSidebar}) => {
    // const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const { supplierInfo, setSupplierInfo } = useAppStore();
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const logOut = async () => {
        try {
            const response = await apiClient.post(SUPPLIER_LOGOUT_ROUTE, {}, { withCredentials: true });
            if (response.status === 200) {
                toast("Logout successful")
                setDropdownOpen(false);
                navigate("/supplier-login");
                setSupplierInfo(null);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if(supplierInfo) {
          setFirstName(supplierInfo.firstName);
          setLastName(supplierInfo.lastName);
        }
      }, [supplierInfo]);

  return (
    <header className="bg-white shadow-md px-4 py-2 sticky top-0 flex items-center justify-between">
      <div className="flex gap-2">
        <button className="" onClick={toggleSidebar}>
            {isOpen ? <RxCross2 />  : <RiMenu3Line />}
        </button>
        <h1 className="text-xl font-bold text-orange-500">Supplier Dashboard</h1>
      </div>
      <div className="flex gap-4 items-center">
                {/* <a href="signup" className='bg-orange-500 px-2 py-1 rounded-xl text-white'>Access Forum</a> */}
                <a href="/forum">
                    <MdMarkUnreadChatAlt className="text-orange-500 text-2xl" />
                </a>
                <div className="relative">
                    <div 
                        className="bg-gray-400 h-[40px] w-[40px] rounded-full flex items-center justify-center cursor-pointer" 
                        onClick={toggleDropdown}
                    >
                        <h1 className="text-white uppercase">
                            {/* {reseller ? `${reseller.firstName.charAt(0)}${reseller.lastName.charAt(0)}` : "NN"} */}
                            <h1 className="text-white uppercase">
                            {firstName?.charAt(0) && lastName?.charAt(0)
                                ? `${firstName.charAt(0)}${lastName.charAt(0)}`
                                : "NN"}
                        </h1>
                        </h1>
                    </div>

                    {/* Dropdown menu */}
                    {dropdownOpen && (
                        <div className="absolute z-10 right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                            <ul className="py-2">
                                <li>
                                    <a href="/supplier/account" className="block px-4 py-2 hover:bg-gray-100">
                                        Account
                                    </a>
                                </li>
                                <li>
                                    <button onClick={logOut} className="block px-4 py-2 hover:bg-gray-100">
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
    </header>
  )
}

export default SupplierNavbar