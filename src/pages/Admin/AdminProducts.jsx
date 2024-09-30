// import React from 'react'

import AdminLayout from "@/components/AdminLayout"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import apiClient from "@/lib/api-client";
import { GET_ALL_PRODUCTS, GET_ALL_SUPPLIER_ROUTES } from "@/lib/constants";
// import { useAppStore } from "@/redux/store";
import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";

const AdminProducts = () => {
    const [products, setProducts] = useState([]);
    const [suppliers, setSuppliers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await apiClient.get(GET_ALL_PRODUCTS, {}, { withCredentials: true });
            setProducts(res.data);
        };

        const fetchSuppliers = async () => {
            const res = await apiClient.get(GET_ALL_SUPPLIER_ROUTES, {}, { withCredentials: true });
            setSuppliers(res.data.suppliers);
        };
        fetchProducts();
        fetchSuppliers();
    }, []);

    const getSupplierName = (supplierId) => {
        const supplier = suppliers.find(s => s._id === supplierId);
        return supplier ? supplier.companyName : 'Unknown Supplier';
    };

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );


    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const truncateText = (text, length = 30) => {
        return text.length > length ? `${text.substring(0, length)}...` : text;
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
                                    <BreadcrumbPage>Products</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </div>
                <div className="bg-white shadow-md p-4">
                    <div className="flex justify-between items-center mb-7">
                        <h1 className="text-xl font-bold">All Products</h1>
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
                            <a href="/admin/add-product" className="bg-orange-500 px-2 py-1 text-white rounded-md hover:bg-orange-800">Add Product</a>
                        </div>
                    </div>
                    <div className="px-[40px] py-[30px] bg-slate-50">
                        <div>
                            <table className="bg-white px-[20px] w-full">
                                <thead>
                                    <tr className="border-b border-gray-500">
                                        <th className="py-2 px-4">SKU</th>
                                        <th className="py-2 mx-4">NAME</th>
                                        <th className="py-2 px-4">PRICE</th>
                                        <th className="py-2 px-4">BRAND</th>
                                        <th className="py-2 px-4">WARRANTY(MONS)</th>
                                        <th className="py-2 px-4">SUPPLIER</th>
                                        <th className="py-2 px-4">STATUS</th>
                                        <th className="py-2 px-4">ACTION</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentItems.map(product => (
                                        <tr key={product._id} className="border-b border-gray-500">
                                            <td className="py-6 px-4">{product.sku}</td>
                                            <td className="py-2 px-4 mx-4">
                                                <h1 className="font-semibold">{truncateText(product.name)}</h1>
                                                <p className="text-gray-400">{product.category}</p>
                                            </td>
                                            <td className="px-4">${product.price}</td>
                                            <td className="px-4">{product.brand}</td>
                                            <td className="px-4 text-center">{product.warranty}</td>
                                            <td className="px-4">
                                                <a className="text-blue-500 underline" href={`/app/suppliers/view/${product.supplier}`}>
                                                    {getSupplierName(product.supplier)}
                                                </a>
                                            </td>
                                            <td className="px-4">{product.status}</td>
                                            <td className="px-4">
                                                <FaEye />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            {/* Pagination */}
                            <div className="flex justify-center mt-4">
                                {Array.from({ length: totalPages }, (_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handlePageChange(index + 1)}
                                        className={`px-4 py-2 mx-1 ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                                    >
                                        {index + 1}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* <div className="flex justify-between mt-4">
                        <button onClick={handlePreviousPage} disabled={currentPage === 1} className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-300">
                            Previous
                        </button>
                        <span className="self-center">Page {currentPage} of {totalPages}</span>
                        <button onClick={handleNextPage} disabled={currentPage === totalPages} className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-300">
                            Next
                        </button>
                    </div> */}
                </div>
            </div>
        </AdminLayout>
    )
}

export default AdminProducts