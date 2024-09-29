// src/pages/Login.js
import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { loginReseller } from '../../redux/slices/resellerSlice'; // Adjust the path based on your project structure
import { toast } from 'sonner'; // Assuming you're using Sonner for notifications
import graphic from '../../assets/20945983-removebg-preview.png';
import {  useNavigate } from 'react-router-dom';
import { useAppStore } from '@/redux/store';
import apiClient from '@/lib/api-client';
import { LOGIN_ROUTE } from '@/lib/constants';

const Login = () => {
    const navigate = useNavigate()
    const {setResellerInfo} = useAppStore()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

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
        if(validateLogin()){
            const response = await apiClient.post(LOGIN_ROUTE, {email, password}, {withCredentials: true});   

            if(response.data.reseller.id) {
                setResellerInfo(response.data.reseller)
                setLoading(false)
                toast("Login Successful")
                navigate("/app");
            } else {
                console.log(response.data.reseller)
                setLoading(false)
            }
        } else {
            setLoading(false)
        }
    }

    return (
        <div className='flex items-center justify-center h-[100vh]'>
            <div className='flex bg-white h-fit shadow-lg'>
                <div className='w-[45%] h-full'>
                    <form className='p-10 bg-orange-500 h-full' onSubmit={handleLogin}>
                        <div className='flex flex-col items-center justify-center text-white mb-5'>
                            <h1 className='text-xl font-semibold'>Welcome Back</h1>
                            <p>Sign in to your account</p>
                        </div>
                        <div className='flex flex-col gap-2 mb-4'>
                            <label htmlFor="email" className='text-white'>Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your account email address"
                                className='p-2 rounded-md outline-none'
                                required
                            />
                        </div>
                        <div className='flex flex-col gap-2 mb-4'>
                            <label htmlFor="password" className='text-white'>Password</label>
                            <input
                                type="password"
                                name="password"
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                className='p-2 rounded-md outline-none'
                                required
                            />
                        </div>
                        
                        <div className='flex items-center justify-between mb-3'>
                            <label htmlFor="remember" className='text-white'>
                                <input type="checkbox" name="remember" />
                                &nbsp;
                                Remember me?
                            </label>
                            <a href="/forgot-password" className="text-white underline">Forgot your password?</a>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-black text-white py-1 rounded-md"
                            disabled={loading} // Disable button while loading
                        >
                            {loading ? 'Logging in...' : 'LOGIN'}
                        </button>
                        <div className='flex justify-between items-center mt-4'>
                            <p className='text-white'>Dont have an account? <a href="/signup" className='underline text-blue-500'> Register</a></p>
                            <a href="/" className='text-blue-500 underline'>Home</a>
                        </div>
                    </form>
                </div>
                <div className='w-[55%] flex flex-col items-center justify-center gap-4'>
                    <h1 className='text-center text-orange-500'>Reseller Login</h1>
                    <img src={graphic} alt="" className='w-[80%]' />
                    <div>
                        <p className='text-center'>Reseller Sprint</p>
                        <p className="italic">Business is business</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
