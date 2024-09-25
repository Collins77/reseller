// src/pages/Login.js
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginReseller } from '../../redux/slices/resellerSlice'; // Adjust the path based on your project structure
import { toast } from 'sonner'; // Assuming you're using Sonner for notifications
import graphic from '../../assets/20945983-removebg-preview.png';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation(); // To get the path user tried to access before login
    const { loading, token } = useSelector((state) => state.resellers);    
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const from = location.state?.from?.pathname || '/app';

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await dispatch(loginReseller(formData)).unwrap(); // Dispatch login action and wait for the result
            toast.success('Login successful!');
            navigate(from, { replace: true }); // Redirect to the requested page or homepage
        } catch (error) {
            toast.error(error.message || 'Failed to login. Please check your credentials.');
        }
    };

    // Redirect if already logged in
    useEffect(() => {
        if (token) {
            navigate(from, { replace: true }); // Prevent going back to login if authenticated
        }
    }, [token, navigate, from])

    return (
        <div className='flex items-center justify-center h-[100vh]'>
            <div className='flex bg-white h-fit shadow-lg'>
                <div className='w-[45%] h-full'>
                    <form className='p-10 bg-orange-500 h-full' onSubmit={handleSubmit}>
                        <div className='flex flex-col items-center justify-center text-white mb-5'>
                            <h1 className='text-xl font-semibold'>Welcome Back</h1>
                            <p>Sign in to your account</p>
                        </div>
                        <div className='flex flex-col gap-2 mb-4'>
                            <label htmlFor="email" className='text-white'>Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
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
                                value={formData.password}
                                onChange={handleChange}
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
