// import React from 'react'

import SupplierLayout from "@/components/SupplierLayout"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { FaDollarSign } from "react-icons/fa6"
import { AiOutlineProduct } from "react-icons/ai";
import { MdOutlineDiscount } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { useAppStore } from "@/redux/store";
import apiClient from "@/lib/api-client";
import { GET_ALL_ADS_BY_SUPPLIER_ROUTE, GET_ALL_PRODUCTS_BY_SUPPLIER_ROUTE, GET_SUPPLIER_DETAILS } from "@/lib/constants";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const { supplierInfo } = useAppStore()
  const [productsBySupplier, setProductsBySupplier] = useState({});
  const [adsBySupplier, setAdsBySupplier] = useState({});
  const [supplier, setSupplier] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSupplierDetails = async () => {
      try {
        const response = await apiClient.get(`${GET_SUPPLIER_DETAILS}/${supplierInfo.id}`);
        setSupplier(response.data.supplier);
         // Set the supplier details in state
        await Promise.all([
          fetchSupplierProducts(response.data.supplier._id),
          fetchSupplierAds(response.data.supplier._id),
        ]);
        setLoading(false); // Set loading to false
      } catch (err) {
        console.error(err);
        setError('Failed to fetch supplier details'); // Handle error
        setLoading(false); // Set loading to false
      }
    };

    fetchSupplierDetails(); // Call the function to fetch data
  }, [supplierInfo.id]);

  const fetchSupplierProducts = async (supplierId) => {
    try {
      const res = await apiClient.get(`${GET_ALL_PRODUCTS_BY_SUPPLIER_ROUTE}/${supplierId}`);
      const data = res.data.products;
      setProducts(data)
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

  const recentProducts = products.slice(0, 5);

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
              <h1 className="text-xl font-bold">Welcome Back, {supplierInfo.firstName}</h1>
              <p className="text-sm text-gray-500">Your current status and analytics are here</p>
            </div>
            <div className="px-2 py-1 border border-orange-500 rounded-md">
              <p>{new Date().toLocaleDateString()}</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mb-5">
            <div className="bg-white border shadow-md p-2">
              <div>
                <h1 className="text-orange-500 font-bold">Dollar Exchange Rate</h1>
              </div>
              <div className="flex justify-between">
                <h1 className="text-xl font-bold">KES {supplierInfo.dollarExchangeRate}</h1>
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
                <h1 className="text-xl font-bold">{productsBySupplier[supplierInfo.id]?.length || 0}</h1>
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
                <h1 className="text-xl font-bold">{adsBySupplier[supplierInfo.id]?.length || 0}</h1>
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
                </tr>
                {recentProducts.map(product => (
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
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </SupplierLayout>
  )
}

export default Dashboard