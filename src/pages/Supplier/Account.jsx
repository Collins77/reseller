// import React from 'react'

import SupplierLayout from "@/components/SupplierLayout"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import logo from "../../assets/ResellerSprint icon.png"
import { MdEmail } from "react-icons/md"
import { IoLocation } from "react-icons/io5"
import { FaPhone, FaCartFlatbed } from "react-icons/fa6"
import { FaDollarSign, FaRegEdit } from "react-icons/fa"
import { useAppStore } from "@/redux/store"
import apiClient from "@/lib/api-client"
import { GET_ALL_ADS_BY_SUPPLIER_ROUTE, GET_ALL_PRODUCTS_BY_SUPPLIER_ROUTE, GET_SUPPLIER_DETAILS } from "@/lib/constants"
import { useEffect, useState } from "react"

const Account = () => {
    const { supplierInfo } = useAppStore()
    const [productsBySupplier, setProductsBySupplier] = useState({});
    const [adsBySupplier, setAdsBySupplier] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSupplierDetails = async () => {
          try {
            const response = await apiClient.get(`${GET_SUPPLIER_DETAILS}/${supplierInfo.id}`);
            // setSupplier(response.data.supplier);
             // Set the supplier details in state
            await Promise.all([
              fetchSupplierProducts(response.data.supplier._id),
              fetchSupplierAds(response.data.supplier._id),
            ]);
            setLoading(false); // Set loading to false
          } catch (err) {
            console.error(err)
            setLoading(false); // Set loading to false
          }
        };
    
        fetchSupplierDetails(); // Call the function to fetch data
      }, [supplierInfo.id]);
    
      const fetchSupplierProducts = async (supplierId) => {
        try {
          const res = await apiClient.get(`${GET_ALL_PRODUCTS_BY_SUPPLIER_ROUTE}/${supplierId}`);
          const data = res.data.products;
          setProductsBySupplier((prev) => ({
            ...prev,
            [supplierId]: data, // Map supplier ID to their products
          }));
        } catch (error) {
          console.error("Error fetching products", error);
        }
      };
    
      const fetchSupplierAds = async (supplierId) => {
        try {
          const res = await apiClient.get(`${GET_ALL_ADS_BY_SUPPLIER_ROUTE}/${supplierId}`);
          const data = res.data.ads;
          setAdsBySupplier((prev) => ({
            ...prev,
            [supplierId]: data, // Map supplier ID to their ads
          }));
        } catch (error) {
          console.error("Error fetching ads", error);
        }
      };


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
                        <h1 className="font-bold text-lg">{supplierInfo.companyName}</h1>
                    </div>
                    <div className="grid grid-cols-3 mb-4">
                        <div className="flex items-center gap-2 border-r p-2">
                            <MdEmail />
                            <p>{supplierInfo.companyEmail}</p>
                        </div>
                        <div className="flex items-center gap-2 border-r p-2">
                            <IoLocation />
                            <p>{supplierInfo.address}</p>
                        </div>
                        <div className="flex items-center gap-2 border-r p-2">
                            <FaPhone />
                            <p>{supplierInfo.phoneNumber}</p>
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
                                        <p>{supplierInfo.firstName}</p>
                                    </div>
                                    <div className="flex items-center mb-2 justify-between">
                                        <p className="font-bold">Last Name:</p>
                                        <p>{supplierInfo.lastName}</p>
                                    </div>
                                    <div className="flex items-center mb-2 justify-between">
                                        <p className="font-bold">Email Address:</p>
                                        <p>{supplierInfo.email}</p>
                                    </div>
                                    <div className="flex justify-between gap-4">
                                        <a href="/supplier/account/edit" className="bg-green-500 text-white gap-1 flex items-center justify-center rounded-md px-3 py-1 w-[50%]">
                                            <FaRegEdit />
                                            Edit Information
                                        </a>
                                        <a href="/supplier/account/edit/password" className="bg-red-500 text-white gap-1 flex items-center justify-center rounded-md px-3 py-1 w-[50%]">
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
                                    <h1 className="font-bold text-lg">{productsBySupplier[supplierInfo.id]?.length || 0}</h1>
                                    <p>Total <a href="/supplier/products" className="text-blue-500 underline">Products</a></p>
                                </div>
                                <div className="w-[50px] h-[50px] bg-gray-100 rounded-full border border-blue-600 flex items-center justify-center">
                                    <FaCartFlatbed />
                                </div>
                            </div>
                            <div className="flex items-center justify-between p-2 bg-white shadow-md border rounded-md w-[48%]">
                                <div className="flex flex-col gap-2">
                                    <h1 className="font-bold text-lg">{adsBySupplier[supplierInfo.id]?.length || 0}</h1>
                                    <p>Total <a href="/supplier/ads" className="text-blue-500 underline">Ads</a></p>
                                </div>
                                <div className="w-[50px] h-[50px] bg-gray-100 rounded-full border border-orange-600 flex items-center justify-center">
                                    <FaCartFlatbed />
                                </div>
                            </div>
                            <div className="flex items-center justify-between p-2 bg-white shadow-md border rounded-md w-[48%]">
                                <div className="flex flex-col gap-2">
                                    <h1 className="font-bold text-lg">{supplierInfo.dollarExchangeRate}</h1>
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