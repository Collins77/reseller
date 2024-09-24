// import React from 'react'

import Navbar from "../../components/Navbar"
import backgroundImage from "../../assets/pexels-pixabay-262353.jpg";
import Footer from "../../components/Footer";

const Signup = () => {
    return (
        <div>
            <Navbar />
            <div className="h-[120px]" style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
                <div className="bg-black/70 h-full w-full flex items-center justify-center flex-col gap-4">
                    <h1 className="text-4xl text-orange-500">Reseller Signup</h1>
                </div>
            </div>
            <div className="px-[80px] w-full mt-10">
                <form className="shadow-md w-full p-[20px]">
                    <div>
                        <h1 className="font-bold mb-4">Personal Information</h1>
                        <p className="text-gray-500 mb-3">Fill in the form below or contact us. We will help you create your account</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-5">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="">First Name*</label>
                            <input type="text" name="" placeholder="Your First Name" className="border outline-none p-2 rounded-sm" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="">Last Name*</label>
                            <input type="text" name="" placeholder="Your First Name" className="border outline-none p-2 rounded-sm" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="">Email Address*</label>
                            <input type="text" name="" placeholder="Your Email Address" className="border outline-none p-2 rounded-sm" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="">Phone Number*</label>
                            <input type="text" name="" placeholder="+2547...." className="border outline-none p-2 rounded-sm" />
                        </div>    
                    </div>
                    <div>
                        <h1 className="font-bold mb-4">Business Information</h1>
                        <p className="text-gray-500 mb-3">Fill in the form below or contact us. We will help you create your account</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-5">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="">Company Name*</label>
                            <input type="text" name="" placeholder="Company Name" className="border outline-none p-2 rounded-sm" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="">Country*</label>
                            <input type="text" name="" placeholder="Country" className="border outline-none p-2 rounded-sm" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="">Address*</label>
                            <input type="text" name="" placeholder="St. Building" className="border outline-none p-2 rounded-sm" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="">Password*</label>
                            <input type="text" name="" placeholder="********" className="border outline-none p-2 rounded-sm" />
                        </div>    
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <button className="bg-orange-500 text-white px-3 py-1 w-[200px] rounded-md">Sign Up</button>
                        <p>Already have an account? <a href="/login" className="text-blue-500 underline">Login</a></p>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default Signup