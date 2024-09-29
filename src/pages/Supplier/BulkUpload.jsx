// import React from 'react'

import SupplierLayout from "@/components/SupplierLayout"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { useAppStore } from "@/redux/store";
import { server } from "@/server";
import axios from "axios";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6"
import { toast } from "sonner";
// import Papa from "papaparse";

const BulkUpload = () => {
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const {supplierInfo} = useAppStore()

    // Function to download CSV template
    const downloadTemplate = async () => {
        try {
            const response = await axios({
                url: `${server}/products/download-template`, // Your backend route for template download
                method: 'GET',
                responseType: 'blob', // important for downloading files
            });

            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'product_template.csv'); // Filename for download
            document.body.appendChild(link);
            link.click();
        } catch (error) {
            console.error('Error downloading the template', error);
        }
    };

    // const handleFileChange = (e) => {
    //     setFile(e.target.files[0]);
    // };
    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
        console.log("Selected file:", selectedFile);
    };

    // Function to handle form submission
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     if (!file) {
    //         toast.error("Please upload a file.");
    //         return;
    //     }

    //     setLoading(true);

    //     // Create formData and append supplierId
    //     Papa.parse(file, {
    //         header: true,
    //         complete: async (results) => {
    //             const products = results.data; // Get the parsed data

    //             try {
    //                 const response = await axios.post(`${server}/products/upload-bulk`, {
    //                     supplierId: supplierInfo.id, // Send supplierId in the request body
    //                     products: products, // Pass the parsed products array
    //                 }, {
    //                     headers: {
    //                         'Content-Type': 'application/json',
    //                     },
    //                 });

    //                 if (response.data.success) {
    //                     toast.success(response.data.message);
    //                 } else {
    //                     toast.error(response.data.message);
    //                 }
    //             } catch (error) {
    //                 toast.error(error.message);
    //             } finally {
    //                 setLoading(false);
    //             }
    //         },
    //         error: (error) => {
    //             toast.error('Error parsing CSV file. Please check the format.');
    //             setLoading(false);
    //             console.error('Error parsing CSV:', error);
    //         }
    //     });
    // };
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        if (!file) {
            toast.error("Please upload a file."); // Check if file is selected
            return;
        }

        setLoading(true);

        // Create FormData object to send file and supplierId
        const formData = new FormData();
        formData.append('file', file); // Append the file
        formData.append('supplierId', supplierInfo.id); // Append the supplierId

        try {
            // Send FormData to the backend
            const response = await axios.post(`${server}/products/upload-bulk`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data', // Important for file uploads
                },
            });

            if (response.data.success) {
                toast.success(response.data.message);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
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
                                    <BreadcrumbLink href="/supplier/products">Products</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>Bulk-Upload</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </div>
                <div className="bg-white shadow-md p-4">
                    <div className="pb-4 border-b border-dashed mb-8">
                        <h1 className="text-xl font-bold">Upload Bulk Products</h1>
                    </div>
                    <div className="p-5">
                        <form onSubmit={handleSubmit} className="w-full">
                            <h1 className="font-bold mb-3">Upload multiple products</h1>
                            <div className="flex gap-4 w-full mb-5 pb-4 border-b border-dashed">
                                <div className="w-[40%]">

                                    <p className="text-gray-500">Download the template and insert data. Then upload the template once more.</p>
                                </div>
                                <div className="w-[60%]">
                                    <div className="flex flex-col gap-3">
                                        <button onClick={downloadTemplate} className="bg-orange-500 mb-4 w-[200px] text-white px-2 py-1 rounded-md">Download Template</button>
                                        
                                        <input type="file" onChange={handleFileChange}/>
                                       
                                    </div>

                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="/supplier/products" className="flex items-center text-orange-500 gap-1">
                                    Go to Products
                                    <FaArrowRight />
                                </a>
                                <div className="flex gap-2 items-center">
                                    <button className="border border-orange-500 px-2 py-1 rounded-md bg-orange-500 text-white">{loading ? "Uploading" : "Submit File"}</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </SupplierLayout>
    )
}

export default BulkUpload