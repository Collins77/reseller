// import React from 'react'
import graphic from '../../../assets/20945983-removebg-preview.png'


const SuppLogin = () => {
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
                    <form className='p-10 bg-orange-500 h-full'>
                        <div className='flex flex-col items-center justify-center text-white mb-5'>
                            <h1 className='text-xl font-semibold'>Welcome Back</h1>
                            <p>Sign in to your account</p>
                        </div>
                        <div className='flex flex-col gap-2 mb-4'>
                            <label htmlFor="" className='text-white'>Email Address</label>
                            <input type="email" placeholder="Enter your account email address" className='p-2 rounded-md outline-none' />
                        </div>
                        <div className='flex flex-col gap-2 mb-4'>
                            <label htmlFor="" className='text-white'>Password</label>
                            <input type="password" placeholder="Password" className='p-2 rounded-md outline-none' />
                        </div>

                        <div className='flex items-center justify-between mb-3'>
                            <label htmlFor="" className='text-white'>
                                <input type="checkbox" />
                                &nbsp;
                                Remember me?
                            </label>
                            <a href="/supplier-forgot-password" className="text-white underline">Forgot your password?</a>
                        </div>
                        <button className="w-full bg-black text-white py-1 rounded-md">LOGIN</button>
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