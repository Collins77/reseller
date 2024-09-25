// src/pages/Signup.js
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createReseller } from "../../redux/slices/resellerSlice"; // Adjust the import based on your structure
import Navbar from "../../components/Navbar";
import backgroundImage from "../../assets/pexels-pixabay-262353.jpg";
import Footer from "../../components/Footer";
import { toast } from "sonner";

const Signup = () => {
    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.resellers); // Fetch loading from the store
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        companyName: '',
        country: '',
        address: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await dispatch(createReseller(formData)).unwrap(); // Wait for the dispatched promise to resolve
            toast.success('Reseller account created successfully! Await account approval before login.');
        } catch (error) {
            toast.error(error.message || 'Failed to create reseller. Please check the fields and try again.');
        }
    };

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
                <form className="shadow-md w-full p-[20px]" onSubmit={handleSubmit}>
                    <div>
                        <h1 className="font-bold mb-4">Personal Information</h1>
                        <p className="text-gray-500 mb-3">Fill in the form below or contact us. We will help you create your account</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-5">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="firstName">First Name*</label>
                            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Your First Name" className="border outline-none p-2 rounded-sm" required />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="lastName">Last Name*</label>
                            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Your Last Name" className="border outline-none p-2 rounded-sm" required />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email">Email Address*</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email Address" className="border outline-none p-2 rounded-sm" required />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="phoneNumber">Phone Number*</label>
                            <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="+2547...." className="border outline-none p-2 rounded-sm" required />
                        </div>
                    </div>
                    <div>
                        <h1 className="font-bold mb-4">Business Information</h1>
                        <p className="text-gray-500 mb-3">Fill in the form below or contact us. We will help you create your account</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-5">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="companyName">Company Name*</label>
                            <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} placeholder="Company Name" className="border outline-none p-2 rounded-sm" required />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="country">Country*</label>
                            <input type="text" name="country" value={formData.country} onChange={handleChange} placeholder="Country" className="border outline-none p-2 rounded-sm" required />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="address">Address*</label>
                            <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="St. Building" className="border outline-none p-2 rounded-sm" required />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="password">Password*</label>
                            <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="********" className="border outline-none p-2 rounded-sm" required />
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <button type="submit" className="bg-orange-500 text-white px-3 py-1 w-[200px] rounded-md" disabled={loading}>
                            {loading ? 'Signing Up...' : 'Sign Up'}
                        </button>
                        <p>Already have an account? <a href="/login" className="text-blue-500 underline">Login</a></p>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default Signup;
