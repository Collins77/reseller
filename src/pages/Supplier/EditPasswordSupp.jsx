import SupplierLayout from '@/components/SupplierLayout'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { useAppStore } from '@/redux/store';
import { server } from '@/server';
import axios from 'axios';
import { useState } from 'react';
// import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { toast } from 'sonner';

const EditPasswordSupp = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const {supplierInfo} = useAppStore();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation
        if (!oldPassword || !newPassword || !confirmPassword) {
            toast.error('Please fill in all fields.');
            return;
        }

        if (newPassword !== confirmPassword) {
            toast.error('New passwords do not match.');
            return;
        }

        try {
            // Replace with your API endpoint
            await axios.put(`${server}/suppliers/change-password/${supplierInfo.id}`, {oldPassword, newPassword, confirmPassword}, {withCredentials: true});

            // if (!response.ok) {
            //     const { message } = await response.json();
            //     throw new Error(message);
            // }

            toast.success('Password changed successfully.');
            // Reset form fields
            setOldPassword('');
            setNewPassword('');
            setConfirmPassword('');
        } catch (error) {
            toast.error(error.message || 'Failed to change password.');
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
                                    <BreadcrumbLink href="/supplier/account">Account</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>Edit-Password</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </div>
                <div className="bg-white shadow-md p-4">
                    <div className="pb-4 border-b border-dashed mb-8">
                        <h1 className="text-xl font-bold">Edit Password</h1>
                    </div>
                    <div className="p-5">
                        <form onSubmit={handleSubmit} className="w-full">
                            <h1 className="font-bold mb-3">Information</h1>
                            <div className="flex gap-4 w-full mb-5 pb-4 border-b border-dashed">
                                <div className="w-[40%]">

                                    <p className="text-gray-500">Enter old and new credentials</p>
                                </div>
                                <div className="w-[60%]">
                                    <div className="flex flex-col gap-3 mb-4">
                                        <label htmlFor="">Current Password</label>
                                        <input type="password" name='oldPassword' value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} className="border rounded-sm outline-none p-2" />
                                    </div>
                                    <div className="flex flex-col gap-3 mb-4">
                                        <label htmlFor="">New Password</label>
                                        <input type="password" name='newPassword' value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className="border rounded-sm outline-none p-2" />
                                    </div>
                                    <div className="flex flex-col gap-3 mb-4">
                                        <label htmlFor="">Confirm New Password</label>
                                        <input type="password" name='confirmPassword' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="border rounded-sm outline-none p-2" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="/supplier/account" className="flex items-center text-orange-500 gap-1">
                                    Go to Account
                                    <FaArrowRight />
                                </a>
                                <div className="flex gap-2 items-center">
                                    <button className="border border-orange-500 px-2 py-1 rounded-md">Erase Changes</button>
                                    <button type='submit' className="border border-orange-500 px-2 py-1 rounded-md bg-orange-500 text-white">Submit Changes</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </SupplierLayout>
    )
}

export default EditPasswordSupp