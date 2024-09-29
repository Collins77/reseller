// import React from 'react'

import AppNavbar from "@/components/AppNavbar"
import backgroundImage from "../assets/pexels-pixabay-262353.jpg";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import logo from "../assets/ResellerSprint icon.png"
import { IoLocation, IoLogoGooglePlaystore } from "react-icons/io5";
import { FaEye, FaFileCsv, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdOutlineAdsClick } from "react-icons/md";
import Footer from "@/components/Footer";
import { GrAppleAppStore } from "react-icons/gr";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import apiClient from "@/lib/api-client";
import { GET_ALL_ADS_BY_SUPPLIER_ROUTE, GET_ALL_BRANDS_ROUTE, GET_ALL_CATEGORIES_ROUTE, GET_ALL_PRODUCTS_BY_SUPPLIER_ROUTE, GET_SUPPLIER_DETAILS } from "@/lib/constants";


const SingleSupplierPage = () => {
    const { id } = useParams();
    const [supplier, setSupplier] = useState(null); // State to hold supplier data
    const [loading, setLoading] = useState(true); // State to handle loading state
    const [error, setError] = useState(null); // State to handle errors
    const [productsBySupplier, setProductsBySupplier] = useState({});
    const [adsBySupplier, setAdsBySupplier] = useState({});
    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([]);
    const [categoryFilter, setCategoryFilter] = useState('');
    const [brandFilter, setBrandFilter] = useState('');
    const [currency, setCurrency] = useState('$');

    const handleCurrencyChange = (e) => {
        setCurrency(e.target.value);
    };

    const convertPrice = (price) => {
        if (currency === '$') {
            return price; // Return price in dollars
        } else if (currency === 'KES') {
            return (price * supplier.dollarExchangeRate).toFixed(2); // Convert to KES
        }
        return price; // Fallback
    };

    useEffect(() => {
        const fetchSupplierDetails = async () => {
            try {
                const response = await apiClient.get(`${GET_SUPPLIER_DETAILS}/${id}`);
                setSupplier(response.data.supplier); // Set the supplier details in state
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

        const fetchCategories = async () => {
            const res = await apiClient.get(GET_ALL_CATEGORIES_ROUTE, {}, { withCredentials: true });
            setCategories(res.data);
        };

        const fetchBrands = async () => {
            const res = await apiClient.get(GET_ALL_BRANDS_ROUTE, {}, { withCredentials: true });
            setBrands(res.data);
        };

        fetchBrands();
        fetchCategories();
        fetchSupplierDetails(); // Call the function to fetch data
    }, [id]);

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

    const filters = {
        category: categoryFilter, // Assumes categoryFilter is defined
        brand: brandFilter,        // Assumes brandFilter is defined
    };

    const filteredProducts = productsBySupplier[id]?.filter(product => {
        // Check if the product matches the filters
        return Object.keys(filters).every(key => {
            const filterValue = filters[key];

            // Check if the filter is not set, in which case we want to include the product
            if (!filterValue) return true;

            // Apply the appropriate filter based on the key
            switch (key) {
                case 'category':
                    return product.category === filterValue; // Check category name
                case 'brand':
                    return product.brand === filterValue;     // Check brand name
                default:
                    return true; // Fallback to include the product
            }
        });
    });

    if (loading) return <div className="spinner">Loading...</div>; // Show loading spinner
    if (error) return <div className="error-message">{error}</div>;

    const truncateText = (text, length = 30) => {
        return text.length > length ? `${text.substring(0, length)}...` : text;
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
                    <h1 className="text-4xl text-orange-500">Cotek Technologies</h1>
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
                            <BreadcrumbLink href="/suppliers">Suppliers</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage href="/suppliers">Cotek Technologies</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
            <div className="flex gap-5 px-[30px]">
                <div className="bg-white shadow-lg w-[30%] h-fit p-3">
                    <div className="flex items-center gap-2 border-b pb-2">
                        <div className="border border-blue-600 p-1 w-[70px] h-[70px] rounded-full flex items-center justify-center">
                            <div className="bg-blue-50 w-full h-full rounded-full flex items-center justify-center">
                                <img src={logo} alt="" className="w-[50px] h-[50px] rounded-full" />
                            </div>
                        </div>
                        <div>
                            <p className="text-sm text-gray-400">Since 2023</p>
                            <h1 className="font-semibold ">{supplier.companyName}</h1>
                            <p className="text-gray-400">{supplier.companyEmail}</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 py-2 pb-2 border-b border-dashed mb-3">
                        <div className="flex flex-col items-center">
                            <h1 className="text-gray-400">{productsBySupplier[supplier._id]?.length || 0}</h1>
                            <p>Products</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <h1 className="text-gray-400">{supplier.dollarExchangeRate}</h1>
                            <p>Exchange Rate</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <h1 className="text-gray-400">{adsBySupplier[supplier._id]?.length || 0}</h1>
                            <p>Ads & Events</p>
                        </div>
                    </div>
                    <div className="mb-4">
                        <div className="flex items-center gap-2 mb-2">
                            <IoLocation />
                            <p>{supplier.address}</p>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                            <FaPhone />
                            <p>{supplier.phoneNumber}</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        <div className="px-10 py-2 rounded-md flex flex-col items-center bg-blue-300 text-white">
                            <MdEmail className="text-[30px]" />
                            <p>Email</p>
                        </div>
                        <div className="px-10 py-2 rounded-md flex flex-col items-center bg-red-300 text-white">
                            <MdOutlineAdsClick className="text-[30px]" />
                            <p>Ads & Events</p>
                        </div>
                    </div>
                </div>
                <div className="w-[68%] h-fit mb-3">
                    <div className="px-[10px] grid grid-cols-2 gap-3 mb-8">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="">Filter by category</label>
                            <select className="border rounded-md p-3" onChange={(e) => setCategoryFilter(e.target.value)}>
                                <option value="">All Categories</option>
                                {categories.map(category => (
                                    <option key={category._id} value={category.name}>
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="">Filter by brand</label>
                            <select className="border rounded-md p-3" onChange={(e) => setBrandFilter(e.target.value)}>
                                <option value="">All Brands</option>
                                {brands.map(brand => (
                                    <option key={brand._id} value={brand.name}>
                                        {brand.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="px-[10px] py-[30px] w-full overflow-scroll bg-slate-50 h-[400px]">
                        <div className="w-full  h-[400px]">
                            <div className="px-[20px] h-[50px] py-[10px] w-full ic flex justify-between">
                                <div className="flex items-center gap-2">
                                    <label htmlFor="">Currency</label>
                                    <select name="" id="" className="outline-none rounded-md border" onChange={handleCurrencyChange}>
                                        <option value="$">$</option>
                                        <option value="KES">KES</option>
                                    </select>
                                </div>
                                <button className="bg-blue-600 text-white px-2 flex gap-1 items-center py-1 rounded-sm">
                                    Export
                                    <FaFileCsv />
                                </button>
                            </div>
                            <table className="bg-white w-full h-[300px] overflow-scroll">
                                <thead>
                                    <tr>
                                        <th className="py-2 px-4">SKU</th>
                                        <th className="py-2 mx-auto">Name</th>
                                        <th className="py-2 px-4">Price</th>
                                        <th className="py-2 px-4">Brand</th>
                                        <th className="py-2 px-4">Warranty (Months)</th>
                                        <th className="py-2 px-4">Status</th>
                                        <th className="py-2 px-4">View</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredProducts.length > 0 ? (
                                        filteredProducts.map(product => (
                                            <tr key={product._id} className="border-b border-gray-500">
                                                <td className="py-6 px-4">{product.sku}</td>
                                                <td>
                                                    <h1 className="font-semibold">{truncateText(product.name)}</h1>
                                                    <p className="text-gray-400">{product.category}</p>
                                                </td>
                                                <td className="px-4">{convertPrice(product.price)} {currency}</td>
                                                <td className="px-4">{product.brand}</td>
                                                <td className="px-4 text-center">{product.warranty}</td>
                                                <td className="px-4">{product.status}</td>
                                                <td className="px-4">
                                                    <FaEye />
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="7" className="text-center py-4">No products found</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-orange-400 h-[200px] py-[20px]">
                <h1 className="text-center font-bold text-2xl mb-2 text-white">Access our services from your mobile device.</h1>
                <p className="text-center text-white mb-5">Mobile App Available</p>
                <div className="flex w-full justify-center items-center gap-3">
                    <a href="/" className="flex gap-1 items-center bg-black px-3 py-1 text-white rounded-md">
                        <IoLogoGooglePlaystore className="text-4xl" />
                        <div >
                            <p>GET IT ON</p>
                            <h1 className="text-2xl font-bold">Google play</h1>
                        </div>
                    </a>
                    <a href="/" className="flex gap-1 items-center bg-black px-3 py-1 text-white rounded-md">
                        <GrAppleAppStore className="text-4xl" />
                        <div >
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

export default SingleSupplierPage