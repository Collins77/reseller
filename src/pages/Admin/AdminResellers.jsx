// import React from 'react'

import AdminLayout from "@/components/AdminLayout"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import apiClient from "@/lib/api-client";
import { GET_ALL_RESELLER_ROUTES } from "@/lib/constants";
// import { useAppStore } from "@/redux/store";
import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";

const AdminResellers = () => {
    // const {supplierInfo} = useAppStore();

    const [resellers, setResellers] = useState([]);

    useEffect(() => {
        const fetchSupplierProducts = async () => {
            try {
              const res = await apiClient.get(`${GET_ALL_RESELLER_ROUTES}`);
              const data = res.data;
              setResellers(data)
            } catch (error) {
              console.error("Error fetching products", error);
            }
          };

          fetchSupplierProducts()
    },[])

    const [searchQuery, setSearchQuery] = useState("");
    const itemsPerPage = 4; // Number of products to display per page
    const [currentPage, setCurrentPage] = useState(1);

    // Filter products based on search query
    const filteredResellers = resellers.filter((reseller) =>
        reseller.firstName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Calculate the total number of pages
    const totalPages = Math.ceil(filteredResellers.length / itemsPerPage);

    // Get the current items to display based on the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentResellers = filteredResellers.slice(startIndex, startIndex + itemsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };
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
                                    <BreadcrumbPage>Resellers</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </div>
                <div className="bg-white shadow-md p-4">
                <div className="flex justify-between items-center mb-7">
                        <h1 className="text-xl font-bold">All Resellers</h1>
                        <div>
                            {/* Search Input */}
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="border border-gray-300 rounded-md px-4 py-2"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <div>
                            <a href="/admin/add-reseller" className="bg-orange-500 px-2 py-1 text-white rounded-md hover:bg-orange-800">Enroll Reseller</a>
                        </div>
                    </div>
                    <div>
                    <table className="bg-white w-full overflow-scroll">
                            <thead>
                                <tr className="border-b border-gray-500">
                                    <th className="py-2 mx-auto">NAME</th>
                                    <th className="py-2 px-4">EMAIL</th>
                                    <th className="py-2 px-4">STATUS</th>
                                    <th className="py-2 px-4">ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentResellers.map((reseller, index) => (
                                    <tr key={index} className="border-b border-gray-500">
                                        <td className="w-[500px]">
                                            <h1 className="font-semibold">{reseller.firstName} {" "} {reseller.lastName}</h1>
                                            <p className="text-gray-400">{reseller.email}</p>
                                        </td>
                                        <td className="px-4">${reseller.email}</td>
                                        <td className="px-4">{reseller.status}</td>
                                        <td className="px-4">

                                            <FaEye />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="flex justify-between mt-4">
                        <button onClick={handlePreviousPage} disabled={currentPage === 1} className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-300">
                            Previous
                        </button>
                        <span className="self-center">Page {currentPage} of {totalPages}</span>
                        <button onClick={handleNextPage} disabled={currentPage === totalPages} className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-300">
                            Next
                        </button>
                    </div>
                </div>
            </div>
    </AdminLayout>
  )
}

export default AdminResellers