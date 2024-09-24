import { FaFacebook, FaPhone, FaTwitter } from 'react-icons/fa6'
import logo from '../assets/ResellerSprint logo.png'
import { FaInstagram } from 'react-icons/fa'
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";

const Footer = () => {
    return (
        <div className="w-full bg-black  py-[30px]">
            <div className="w-full bg-black px-[40px] grid grid-cols-4 gap-3 pb-4">
                <div className='text-white'>
                    <img src={logo} alt="" className='mb-3' />
                    <p className='mb-5'>A catalogue of wholesalers and suppliers across the globe.</p>
                    <div className='flex gap-3 items-center'>
                        <FaFacebook className='text-2xl' />
                        <FaInstagram className='text-2xl' />
                        <FaTwitter className='text-2xl' />
                    </div>
                </div>
                <div className='text-white'>
                    <h1 className='mb-4 font-bold'>Quick Links</h1>
                    <ul className='text-slate-300'>
                        <li>
                            <a href="/partners" className='hover:text-orange-500'>Partnership</a>
                        </li>
                        <li>
                            <a href="/about" className='hover:text-orange-500'>Our Story</a>
                        </li>
                        <li>
                            <a href="/supplier-login" className='hover:text-orange-500'>Supplier portal</a>
                        </li>
                        <li>
                            <a href="/signup" className='hover:text-orange-500'>Reseller registration</a>
                        </li>
                    </ul>
                </div>
                <div className='text-white'>
                    <h1 className='mb-4 font-bold'>Important Links</h1>
                    <ul className='text-slate-300'>
                        <li>
                            <a href="/home" className='hover:text-orange-500'>Shop</a>
                        </li>
                        <li>
                            <a href="/about" className='hover:text-orange-500'>About Us</a>
                        </li>
                        <li>
                            <a href="/faq" className='hover:text-orange-500'>FAQ</a>
                        </li>

                    </ul>
                </div>
                <div className='text-white'>
                    <h1 className='mb-4 font-bold'>Contact Info</h1>
                    <ul className='text-slate-300'>
                        <li className='flex gap-2 items-center'>
                            <FaPhone />
                            +25413144386
                        </li>
                        <li className='flex gap-2 items-center'>
                            <MdEmail />
                            admin@resellersprint.com
                        </li>
                        <li className='flex gap-2 items-center'>
                            <IoLocation />
                            Ambank House
                        </li>
                    </ul>
                </div>

            </div>
            <div className='bg-white px-[40px] flex justify-between items-center'>
                <div>
                    <p className='text-gray-500 text-sm'>&copy; Reseller Sprint. All rights reserved</p>
                </div>
                <div>
                    <a href="/privacy" className='underline text-orange-500 text-sm'>Terms & conditions</a>
                    <a href="/privacy" className='underline text-orange-500 text-sm'>Privacy Policy</a>
                </div>
                <div className='flex gap-3 items-center'>
                    <FaFacebook className='text-sm' />
                    <FaInstagram className='text-sm' />
                    <FaTwitter className='text-sm' />
                </div>
            </div>
        </div>
    )
}

export default Footer