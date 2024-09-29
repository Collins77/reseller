// import React from 'react'
import apiClient from '@/lib/api-client'
import graphic from '../../../assets/20945983-removebg-preview.png'
import { SUPPLIER_LOGIN_ROUTE } from '@/lib/constants'
import { toast } from 'sonner'
import { useAppStore } from '@/redux/store'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const SuppLogin = () => {

    const navigate = useNavigate()
    const {setSupplierInfo} = useAppStore()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(null)

    const validateLogin = () => {
        if(!email.length) {
            toast.error("Email is required.");
            return false;
        }
        if(!password.length) {
            toast.error("Password is required.");
            return false;
        }
        return true;
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            if(validateLogin()){
                const response = await apiClient.post(SUPPLIER_LOGIN_ROUTE, {email, password}, {withCredentials: true});   
    
                if(response.data.supplier.id) {
                    setSupplierInfo(response.data.supplier)
                    setLoading(false)
                    toast.success("Login Successful")
                    navigate("/supplier");
                } else {
                    setLoading(false)
                }
            } else {
                setLoading(false)
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                toast.error(error.response.data.message); // Display the specific error message
            } else {
                toast.error("An unexpected error occurred"); // Fallback message
            }
            setLoading(false)
        }
    }

    return (
        <div className='flex items-center justify-center h-[100vh]'>
            <div className='flex bg-white h-fit shadow-lg'>
                <div className='w-[55%] flex flex-col items-center justify-center gap-4'>
                    <h1 className='text-center text-orange-500'>Supplier Login</h1>
                    <img src={graphic} alt="" className='w-[80%] ' />
                    <div>
                        <p className='text-center'>Reseller Sprint</p>
                        <p className="italic">Business is business</p>
                    </div>
                </div>
                <div className='w-[45%] h-full'>
                    <form onSubmit={handleLogin} className='p-10 bg-orange-500 h-full'>
                        <div className='flex flex-col items-center justify-center text-white mb-5'>
                            <h1 className='text-xl font-semibold'>Welcome Back</h1>
                            <p>Sign in to your account</p>
                        </div>
                        <div className='flex flex-col gap-2 mb-4'>
                            <label htmlFor="" className='text-white'>Email Address</label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your account email address" className='p-2 rounded-md outline-none' />
                        </div>
                        <div className='flex flex-col gap-2 mb-4'>
                            <label htmlFor="" className='text-white'>Password</label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className='p-2 rounded-md outline-none' />
                        </div>

                        <div className='flex items-center justify-between mb-3'>
                            <label htmlFor="" className='text-white'>
                                <input type="checkbox" />
                                &nbsp;
                                Remember me?
                            </label>
                            <a href="/supplier-forgot-password" className="text-white underline">Forgot your password?</a>
                        </div>
                        <button type="submit" className="w-full bg-black text-white py-1 rounded-md" disabled={loading}>{loading ? 'Logging in...' : 'LOGIN'}</button>
                        <div className='flex justify-between items-center'>
                            <p className='text-white'>Dont have an account? <a href="/supplier-signup" className='underline text-blue-500'> Register</a></p>
                            <a href="/" className='text-blue-500 underline'>Home</a>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default SuppLogin