// import React from 'react'

import AppNavbar from "@/components/AppNavbar"
import backgroundImage from "@/assets/pexels-pixabay-262353.jpg";

const EditPassword = () => {
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
                    <h1 className="text-4xl text-orange-500">Change Password</h1>
                </div>
            </div>
            <div className="w-full h-[80vh] bg-white flex items-center justify-center">
                <form action="" className="w-[400px]">
                    <div className="flex flex-col gap-2 mb-3">
                        <label htmlFor="">Old Password*</label>
                        <input type="text" name="" placeholder="Your First Name" className="border outline-none p-2 rounded-sm" />
                    </div>
                    <div className="flex flex-col gap-2 mb-3">
                        <label htmlFor="">New Password*</label>
                        <input type="text" name="" placeholder="Your First Name" className="border outline-none p-2 rounded-sm" />
                    </div>
                    <div className="flex flex-col gap-2 mb-3">
                        <label htmlFor="">Confirm New Password*</label>
                        <input type="text" name="" placeholder="Your First Name" className="border outline-none p-2 rounded-sm" />
                    </div>
                    <div className="flex flex-col items-start gap-2">
                        <button className="bg-orange-700 text-white px-3 py-1 w-[200px] rounded-md">Update Password</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditPassword