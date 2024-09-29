// import React from 'react'

import SupplierLayout from "@/components/SupplierLayout"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { useAppStore } from "@/redux/store";
import { server } from "@/server";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6"
import { toast } from "sonner";

const createNewProduct = async (productData) => {
    const response = await axios.post(`${server}/products/create-product`, productData);
    return response.data;
};

const AddProduct = () => {
    const { supplierInfo } = useAppStore();
    const [formData, setFormData] = useState({
        name: '',
        sku: '',
        category: '',
        price: '',
        brand: '',
        description: '',
        warranty: '',
        isFeatured: false,
    });


    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([]);

    // Fetch categories and brands from the server
    const fetchCategoriesAndBrands = async () => {
        try {
            const [categoriesRes, brandsRes] = await Promise.all([
                axios.get(`${server}/categories`),
                axios.get(`${server}/brands`),
            ]);
            setCategories(categoriesRes.data);
            setBrands(brandsRes.data);
        } catch (error) {
            console.error("Error fetching categories and brands:", error);
        }
    };

    useEffect(() => {
        fetchCategoriesAndBrands();
    }, []);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess("");

        try {
            const supplierId = `${supplierInfo.id}`; // Ensure supplier ID is coming from state/context
            const productData = { ...formData, supplierId };

            await createNewProduct(productData);

            setSuccess("Product created successfully");
            setLoading(false);
            toast.success("Product created successfully!"); // Toast notification for success

            // Reset form
            setFormData({
                name: "",
                sku: "",
                category: "",
                price: "",
                brand: "",
                description: "",
                warranty: "",
                isFeatured: false,
                status: "",
            });
        } catch (error) {
            setLoading(false);
            setError("Error creating product: " + error.message);
            toast.error("Error creating product: " + error.message); // Toast notification for error
        }
    };

    const handleReset = () => {
        setFormData({
            name: "",
            sku: "",
            category: "",
            price: "",
            brand: "",
            description: "",
            warranty: "",
            isFeatured: false,
            status: "",
        });
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
                                    <BreadcrumbPage>Create-Product</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </div>
                <div className="bg-white shadow-md p-4">
                    <div className="pb-4 border-b border-dashed mb-8">
                        <h1 className="text-xl font-bold">Create New Product</h1>
                    </div>
                    <div className="p-5">
                        <form onSubmit={handleSubmit} className="w-full">
                            <h1 className="font-bold mb-3">Information</h1>
                            <div className="flex gap-4 w-full mb-5 pb-4 border-b border-dashed">
                                <div className="w-[40%]">

                                    <p className="text-gray-500">Add product information and create a new product from here</p>
                                </div>
                                <div className="w-[60%]">
                                    <div className="flex flex-col gap-3 mb-4">
                                        <label htmlFor="">Product Name*</label>
                                        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Product Name" className="border rounded-sm outline-none p-2" />
                                    </div>
                                    <div className="flex flex-col gap-3 mb-4">
                                        <label htmlFor="">Price(USD)*</label>
                                        <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Price in dollars" className="border rounded-sm outline-none p-2" />
                                    </div>
                                    <div className="flex flex-col gap-3 mb-4">
                                        <label htmlFor="">Serial Number(SKU)*</label>
                                        <input type="text" name="sku" value={formData.sku} onChange={handleChange} placeholder="Product Name" className="border rounded-sm outline-none p-2" />
                                    </div>
                                    <div className="flex flex-col gap-3 mb-4">
                                        <label htmlFor="">Description*</label>
                                        <textarea id="" name="description" value={formData.description} onChange={handleChange} rows={10} className="border rounded-sm outline-none p-2"></textarea>
                                    </div>
                                    <div className="flex flex-col gap-3 mb-4">
                                        <label htmlFor="">
                                            <input type="checkbox" name="isFeatured" checked={formData.isFeatured} onChange={handleChange} />
                                            &nbsp;
                                            isFeatured?
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <h1 className="font-bold mb-3">Groups and Categories</h1>
                            <div className="flex gap-4 w-full mb-5 pb-4 border-b border-dashed">
                                <div className="w-[40%]">
                                    <p className="text-gray-500">Add product information and create a new product from here</p>

                                </div>
                                <div className="w-[60%]">
                                    <div className="flex flex-col gap-3 mb-4">
                                        <label htmlFor="">Category*</label>
                                        <select name="category" value={formData.category} onChange={handleChange} className="border rounded-sm outline-none p-2">
                                            <option value="">Select Category</option>
                                            {categories.map((category) => (
                                                <option key={category._id} value={category.name}>
                                                    {category.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="flex flex-col gap-3 mb-4">
                                        <label htmlFor="brand">Brand*</label>
                                        <select
                                            name="brand"
                                            value={formData.brand}
                                            onChange={handleChange}
                                            className="border rounded-sm outline-none p-2"
                                        >
                                            <option value="">Select Brand</option>
                                            {brands.map((brand) => (
                                                <option key={brand._id} value={brand.name}>
                                                    {brand.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="flex flex-col gap-3 mb-4">
                                        <label htmlFor="">Availability*</label>
                                        <select name="status" value={formData.status} onChange={handleChange} id="" className="border rounded-sm outline-none p-2">
                                            <option value="">Availability</option>
                                            <option value="available">Available</option>
                                            <option value="limited">Limited</option>
                                            <option value="unavailable">Unavailable</option>
                                        </select>
                                    </div>
                                    <div className="flex flex-col gap-3 mb-4">
                                        <label htmlFor="">Warranty(Months)*</label>
                                        <input type="number" name="warranty" value={formData.warranty} onChange={handleChange} placeholder="Warranty in Months" className="border rounded-sm outline-none p-2" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="/supplier/products" className="flex items-center text-orange-500 gap-1">
                                    Go to Products
                                    <FaArrowRight />
                                </a>
                                <div className="flex gap-2 items-center">
                                    <div onClick={handleReset} className="border cursor-pointer hover:bg-orange-800 hover:text-white border-orange-500 px-2 py-1 rounded-md">Reset Form</div>
                                    <button
                                        type="submit"
                                        className="border flex gap-1 items-center border-orange-500 px-2 py-1 rounded-md bg-orange-500 text-white"
                                        disabled={loading}
                                    >
                                        {loading ? "Submitting..." : "Submit"}
                                        <FaArrowRight />
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </SupplierLayout>
    )
}

export default AddProduct