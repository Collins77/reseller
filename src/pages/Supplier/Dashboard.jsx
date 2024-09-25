// import React from 'react'

import SupplierLayout from "@/components/SupplierLayout"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { FaDollarSign } from "react-icons/fa6"
import { AiOutlineProduct } from "react-icons/ai";
import { MdOutlineDiscount } from "react-icons/md";
import { FaEye } from "react-icons/fa";

const Dashboard = () => {
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
                  <BreadcrumbPage>Dashboard</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
        <div className="bg-white shadow-md p-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-xl font-bold">Welcome Back, Collins</h1>
              <p className="text-sm text-gray-500">Your current status and analytics are here</p>
            </div>
            <div className="px-2 py-1 border border-orange-500 rounded-md">
              <p>Wed, Sep 25 2024</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mb-5">
            <div className="bg-white border shadow-md p-2">
              <div>
                <h1 className="text-orange-500 font-bold">Dollar Exchange Rate</h1>
              </div>
              <div className="flex justify-between">
                <h1 className="text-xl font-bold">KES 145</h1>
                <FaDollarSign className="text-xl text-green-300" />
              </div>
              <div>
                <button className="underline text-gray-500 text-sm">Quick Edit</button>
              </div>
            </div>
            <div className="bg-white border shadow-md p-2">
              <div>
                <h1 className="text-orange-500 font-bold">Total Products</h1>
              </div>
              <div className="flex justify-between">
                <h1 className="text-xl font-bold">10</h1>
                <AiOutlineProduct className="text-xl text-red-300" />
              </div>
              <div>
                <a href="/suppliers/products" className="underline text-gray-500 text-sm">Products Page</a>
              </div>
            </div>
            <div className="bg-white border shadow-md p-2">
              <div>
                <h1 className="text-orange-500 font-bold">Ads & Events</h1>
              </div>
              <div className="flex justify-between">
                <h1 className="text-xl font-bold">1</h1>
                <MdOutlineDiscount className="text-xl text-blue-300" />
              </div>
              <div>
                <a href="/suppliers/ads" className="underline text-gray-500 text-sm">Ads Page</a>
              </div>
            </div>
          </div>
          <div>
            <div className="flex w-full justify-between items-center">
              <h1 className="text-lg font-bold">Recent Products</h1>
              <a href="/supplier/products" className="text-gray-500 underline text-sm">All Products</a>
            </div>
            <div>
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
    </SupplierLayout>
  )
}

export default Dashboard