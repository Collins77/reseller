// import React from 'react'

import AppNavbar from "@/components/AppNavbar"
import Footer from "@/components/Footer"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { FaEye, FaFileCsv } from "react-icons/fa"
import { GrAppleAppStore } from "react-icons/gr"
import { IoLogoGooglePlaystore } from "react-icons/io5"
import { saveAs } from 'file-saver';
import { useEffect, useState } from "react"
import apiClient from "@/lib/api-client"
import backgroundImage from "../assets/pexels-pixabay-262353.jpg";
import { GET_ALL_BRANDS_ROUTE, GET_ALL_PRODUCTS, GET_ALL_SUPPLIER_ROUTES } from "@/lib/constants"
import { useParams } from "react-router-dom"

const CategoryResults = () => {
    const [products, setProducts] = useState([]);
    const [suppliers, setSuppliers] = useState([]);
    const [brands, setBrands] = useState([]);
    const [brandFilter, setBrandFilter] = useState('');
    const [supplierFilter, setSupplierFilter] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const { slug } = useParams()

    const reverseSlug = (slug) => {
        return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    };
    
    useEffect(() => {
        const fetchProducts = async () => {
            const res = await apiClient.get(GET_ALL_PRODUCTS, {}, { withCredentials: true });
            setProducts(res.data);
        };

        const fetchSuppliers = async () => {
            const res = await apiClient.get(GET_ALL_SUPPLIER_ROUTES, {}, { withCredentials: true });
            setSuppliers(res.data.suppliers);
        };

        const fetchBrands = async () => {
            const res = await apiClient.get(GET_ALL_BRANDS_ROUTE, {}, { withCredentials: true });
            setBrands(res.data);
        };

        fetchProducts();
        fetchSuppliers();
        fetchBrands();
    }, []);

    const getSupplierName = (supplierId) => {
        const supplier = suppliers.find(s => s._id === supplierId);
        return supplier ? supplier.companyName : 'Unknown Supplier';
    };

    const categoryName = reverseSlug(slug); // Reverse the slug to get the original category name

    const filteredProducts = products.filter(product => product.category.toLowerCase() === categoryName.toLowerCase());

    // const filteredProducts = products.filter(product => product.category.toLowerCase() === slug.toLowerCase());


    const filters = {  
        supplier: supplierFilter,    // Assumes supplierFilter is defined
        brand: brandFilter    // Assumes supplierFilter is defined
    };
    
    const filteredProducts2 = filteredProducts.filter(product => {
        // Check if the product matches the filters
        return Object.keys(filters).every(key => {
            const filterValue = filters[key];
            
            // Check if the filter is not set, in which case we want to include the product
            if (!filterValue) return true;
    
            // Apply the appropriate filter based on the key
            switch (key) {
                case 'category':
                    return product.category === filterValue; // Check category name
                case 'supplier':
                    return product.supplier === filterValue;   // Check supplier ID
                default:
                    return true; // Fallback to include the product
            }
        });
    });



    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredProducts2.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredProducts2.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const truncateText = (text, length = 30) => {
        return text.length > length ? `${text.substring(0, length)}...` : text;
    };

    const exportCSV = () => {
        try {
            // Define CSV headers
            const headers = ['SKU', 'Name', 'Price', 'Brand', 'Warranty', 'Supplier Name', 'Status'];

            // Define the rows based on your filtered products
            const rows = filteredProducts2.map(product => {
                // Find the supplier by matching supplierId with suppliers list
                const supplier = suppliers.find(s => s._id === product.supplier);
                const supplierName = supplier ? supplier.companyName : 'Unknown Supplier';

                return [
                    product.sku,
                    product.name,
                    product.price,
                    product.brand,
                    product.warranty,
                    supplierName,  // Use the supplier name found or 'Unknown Supplier'
                    product.status
                ];
            });

            // Create the CSV content
            let csvContent = headers.join(',') + '\n'; // Add headers

            // Add rows
            rows.forEach(rowArray => {
                let row = rowArray.join(',');
                csvContent += row + '\n';
            });

            // Create a Blob from the CSV content and download it
            const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
            saveAs(blob, 'products.csv');
        } catch (err) {
            console.error('Error exporting CSV:', err);
        }
    };

  return (
    <div>
        <AppNavbar />
        <div className="h-[120px]" style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
                <div className="bg-black/70 h-full w-full flex items-center justify-center flex-col gap-4">
                    <h1 className="text-4xl text-orange-500">Brand: {slug}</h1>
                </div>
            </div>

            <div className="mt-5 mb-7 px-[20px]">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/app">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage href="/suppliers">Categories</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>

            <div className="px-[40px] grid grid-cols-2 gap-3 mb-8">
                <div className="flex flex-col gap-2">
                    <label htmlFor="">Filter by brands</label>
                    <select className="border rounded-md p-3" onChange={(e) => setBrandFilter(e.target.value)}>
                        <option value="">All Brands</option>
                        {brands.map(brand => (
                            <option key={brand._id} value={brand.name}>
                                {brand.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="">Filter by supplier</label>
                    <select className="border rounded-md p-3" onChange={(e) => setSupplierFilter(e.target.value)}>
                        <option value="">All Suppliers</option>
                        {suppliers.map(supplier => (
                            <option key={supplier._id} value={supplier._id}>
                                {supplier.companyName}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="px-[40px] py-[30px] bg-slate-50">
                <div>
                    <table className="bg-white px-[20px] w-full">
                        <thead>
                            <div className="px-[20px] py-[10px]">
                                <button
                                    className="bg-blue-600 gap-1 text-white px-2 flex items-center py-1 rounded-sm"
                                    onClick={exportCSV}
                                >
                                    Export <FaFileCsv />
                                </button>
                            </div>
                            <tr className="border-b border-gray-500">
                                <th className="py-2 px-4">SKU</th>
                                <th className="py-2 px-4">NAME</th>
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
                                    <td>
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

            <div className="bg-orange-400 h-[200px] py-[20px]">
                <h1 className="text-center font-bold text-2xl mb-2 text-white">
                    Access our services from your mobile device.
                </h1>
                <p className="text-center text-white mb-5">Mobile App Available</p>
                <div className="flex w-full justify-center items-center gap-3">
                    <a href="/" className="flex gap-1 items-center bg-black px-3 py-1 text-white rounded-md">
                        <IoLogoGooglePlaystore className="text-4xl" />
                        <div>
                            <p>GET IT ON</p>
                            <h1 className="text-2xl font-bold">Google Play</h1>
                        </div>
                    </a>
                    <a href="/" className="flex gap-1 items-center bg-black px-3 py-1 text-white rounded-md">
                        <GrAppleAppStore className="text-4xl" />
                        <div>
                            <p>GET IT ON</p>
                            <h1 className="text-2xl font-bold">APP Store</h1>
                        </div>
                    </a>
                </div>
            </div>

            <Footer />
    </div>
  )
}

export default CategoryResults