// import React from 'react'

import AdminLayout from "@/components/AdminLayout"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import apiClient from "@/lib/api-client"
import { GET_ALL_ADS, GET_ALL_PRODUCTS, GET_ALL_RESELLER_ROUTES, GET_ALL_SUPPLIER_ROUTES } from "@/lib/constants"
import { useAppStore } from "@/redux/store"
import { useEffect, useState } from "react"
import { AiOutlineProduct } from "react-icons/ai"
import { FaDollarSign } from "react-icons/fa"
import { MdOutlineDiscount } from "react-icons/md"

const AdminDashboard = () => {
  const { adminInfo } = useAppStore();
  const [products, setProducts] = useState([]);
  const [ads, setAds] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [resellers, setResellers] = useState([]);
  const [unapprovedSuppliers, setUnapprovedSuppliers] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await apiClient.get(GET_ALL_PRODUCTS, {}, { withCredentials: true });
      setProducts(res.data);
    };

    const fetchSuppliers = async () => {
      const res = await apiClient.get(GET_ALL_SUPPLIER_ROUTES, {}, { withCredentials: true });
      setSuppliers(res.data.suppliers);

      const unapproved = res.data.suppliers.filter(supplier => supplier.status === 'Not Approved');
      setUnapprovedSuppliers(unapproved);
    };
    const fetchAds = async () => {
      const res = await apiClient.get(GET_ALL_ADS, {}, { withCredentials: true });
      setAds(res.data);
    };
    const fetchResellers = async () => {
      try {
        const res = await apiClient.get(`${GET_ALL_RESELLER_ROUTES}`);
        const data = res.data;
        setResellers(data)
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };
    fetchProducts();
    fetchSuppliers();
    fetchAds();
    fetchResellers()
  }, []);

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
              <h1 className="text-xl font-bold">Welcome Back, {adminInfo.username}</h1>
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
                <h1 className="text-xl font-bold">{resellers?.length || 0}</h1>
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
                <h1 className="text-xl font-bold">{suppliers?.length || 0}</h1>
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
                <h1 className="text-xl font-bold">{products?.length || 0}</h1>
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
                <h1 className="text-xl font-bold">{ads?.length || 0}</h1>
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
                <thead>
                  <tr className="border-b border-gray-500">
                    <th className="py-2 px-4">Company Name</th>
                    <th className="py-2 mx-auto">Country</th>
                    <th className="py-2 px-4">Contact</th>
                    <th className="py-2 px-4">Email</th>
                    <th className="py-2 px-4">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {unapprovedSuppliers.map((supplier) => (
                    <tr key={supplier._id} className="border-b border-gray-500">
                      <td className="py-2 px-4">{supplier.companyName}</td>
                      <td className="py-2 px-4">{supplier.country}</td>
                      <td className="py-2 px-4">{supplier.contact}</td>
                      <td className="py-2 px-4">{supplier.companyEmail}</td>
                      <td className="py-2 px-4">{supplier.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}

export default AdminDashboard