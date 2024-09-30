// import React from 'react'

import AdminLayout from "@/components/AdminLayout"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { AiOutlineProduct } from "react-icons/ai"
import { FaDollarSign } from "react-icons/fa"
import { MdOutlineDiscount } from "react-icons/md"

const AdminDashboard = () => {
  return (
    <AdminLayout>
      <div>
        <div>
          <div className="mt-3 mb-5 px-[20px]">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/admin">Home</BreadcrumbLink>
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
              <h1 className="text-xl font-bold">Welcome Back, Admin</h1>
              <p className="text-sm text-gray-500">Your current status and analytics are here</p>
            </div>
            <div className="px-2 py-1 border border-orange-500 rounded-md">
              <p>{new Date().toLocaleDateString()}</p>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-3 mb-5">
            <div className="bg-white border shadow-md p-2">
              <div>
                <h1 className="text-orange-500 font-bold">Total Resellers</h1>
              </div>
              <div className="flex justify-between">
                <h1 className="text-xl font-bold">24</h1>
                <FaDollarSign className="text-xl text-green-300" />
              </div>
              <div>
                <a href="/admin/resellers" className="underline text-gray-500 text-sm">Resellers</a>
              </div>
            </div>
            <div className="bg-white border shadow-md p-2">
              <div>
                <h1 className="text-orange-500 font-bold">Total Suppliers</h1>
              </div>
              <div className="flex justify-between">
                <h1 className="text-xl font-bold">24</h1>
                <FaDollarSign className="text-xl text-green-300" />
              </div>
              <div>
                <a href="/admin/suppliers" className="underline text-gray-500 text-sm">Suppliers</a>
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
                <a href="/admin/products" className="underline text-gray-500 text-sm">Products Page</a>
              </div>
            </div>
            <div className="bg-white border shadow-md p-2">
              <div>
                <h1 className="text-orange-500 font-bold">Ads & Events</h1>
              </div>
              <div className="flex justify-between">
                <h1 className="text-xl font-bold">12</h1>
                <MdOutlineDiscount className="text-xl text-blue-300" />
              </div>
              <div>
                <a href="/admin/ads" className="underline text-gray-500 text-sm">Ads Page</a>
              </div>
            </div>
          </div>
          <div>
            <div className="flex w-full justify-between items-center">
              <h1 className="text-lg font-bold">Unapproved Suppliers</h1>
              <a href="/admin/suppliers" className="text-gray-500 underline text-sm">All Suppliers</a>
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
                </tr>
                {/* {recentProducts.map(product => (
                  <tr key={product._id} className="border-b border-gray-500">
                    <td className="py-6 px-4 flex items-center">{product.sku}</td>
                    <td className="w-[500px]">
                      <h1 className="font-semibold">{product.name}</h1>
                      <p className="text-gray-400">{product.category}</p>
                    </td>
                    <td className="px-4">
                      ${product.price}
                    </td>
                    <td className="px-4">
                      {product.brand}
                    </td>
                    <td className="px-4 text-center">
                      {product.warranty}
                    </td>
                    <td className="px-4">
                      {product.status}
                    </td>
                  </tr>
                ))} */}
              </table>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}

export default AdminDashboard