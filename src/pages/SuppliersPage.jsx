import AppNavbar from "@/components/AppNavbar"
import backgroundImage from "../assets/pexels-pixabay-262353.jpg";
import logo from "../assets/ResellerSprint icon.png"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { IoLocation, IoLogoGooglePlaystore } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import Footer from "@/components/Footer";
import { GrAppleAppStore } from "react-icons/gr";


const SuppliersPage = () => {
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
                    <h1 className="text-4xl text-orange-500">Suppliers</h1>
                </div>
            </div>
            {/* breadcrumbs */}
            <div className="mt-5 mb-7 px-[20px]">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/app">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage href="/suppliers">Suppliers</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
            <div className="w-[500px] px-[40px] mb-8">
                <div className="relative">
                    <input
                        className="appearance-none border-2 pl-10 border-gray-300 hover:border-gray-400 transition-colors rounded-md w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-purple-600 focus:border-purple-600 focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="Search..."
                    />
                    <div className="absolute right-0 inset-y-0 flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="-ml-1 mr-3 h-5 w-5 text-gray-400 hover:text-gray-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </div>

                    <div className="absolute left-0 inset-y-0 flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 ml-3 text-gray-400 hover:text-gray-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="px-[40px] grid grid-cols-2 gap-3 mb-8">
                <div className="flex flex-col gap-2">
                    <label htmlFor="">Filter by type</label>
                    <select name="" id="" className="border rounded-md p-3">
                        <option value="">Supplier</option>
                        <option value="">Manufacturer</option>
                    </select>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="">Filter by categories</label>
                    <select name="" id="" className="border rounded-md p-3">
                        <option value="">Computers</option>
                        <option value="">Mobile Phones</option>
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-3 px-[40px] mb-5">
                <a href="" className="border p-5 rounded-sm">
                    <div className="flex items-center gap-2">
                        <div className="w-[80px] h-[80px] bg-gray-300 rounded-full flex items-center justify-center">
                            <img src={logo} alt="" className="h-[60px] w-[60px]" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold mb-1">Cotek Technologies</h1>
                            <div className=" flex gap-1 items-center mb-2 text-gray-500">
                                <IoLocation color="orange" />
                                172, Boulevard St. Kenya
                            </div>
                            <div className=" flex gap-1 items-center mb-2 text-gray-500">
                                <FaPhone color="green" />
                                +254791448827
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                        <div className="flex flex-col items-center justify-center border-r">
                            <h1>10</h1>
                            <p>Products</p>
                        </div>
                        <div className="flex flex-col items-center justify-center border-r">
                            <h1>1</h1>
                            <p>Ads</p>
                        </div>
                        <div className="flex flex-col items-center justify-center border-r">
                            <h1>140</h1>
                            <p>Dollar Rate</p>
                        </div>
                        <div className="flex flex-col items-center justify-center border-r">
                            <h1>supplier</h1>
                            <p>Type</p>
                        </div>
                    </div>
                </a>
                <a href="" className="border p-5 rounded-sm">
                    <div className="flex items-center gap-2">
                        <div className="w-[80px] h-[80px] bg-gray-300 rounded-full flex items-center justify-center">
                            <img src={logo} alt="" className="h-[60px] w-[60px]" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold mb-1">Cotek Technologies</h1>
                            <div className=" flex gap-1 items-center mb-2 text-gray-500">
                                <IoLocation color="orange" />
                                172, Boulevard St. Kenya
                            </div>
                            <div className=" flex gap-1 items-center mb-2 text-gray-500">
                                <FaPhone color="green" />
                                +254791448827
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                        <div className="flex flex-col items-center justify-center border-r">
                            <h1>10</h1>
                            <p>Products</p>
                        </div>
                        <div className="flex flex-col items-center justify-center border-r">
                            <h1>1</h1>
                            <p>Ads</p>
                        </div>
                        <div className="flex flex-col items-center justify-center border-r">
                            <h1>140</h1>
                            <p>Dollar Rate</p>
                        </div>
                        <div className="flex flex-col items-center justify-center border-r">
                            <h1>supplier</h1>
                            <p>Type</p>
                        </div>
                    </div>
                </a>
                <a href="" className="border p-5 rounded-sm">
                    <div className="flex items-center gap-2">
                        <div className="w-[80px] h-[80px] bg-gray-300 rounded-full flex items-center justify-center">
                            <img src={logo} alt="" className="h-[60px] w-[60px]" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold mb-1">Cotek Technologies</h1>
                            <div className=" flex gap-1 items-center mb-2 text-gray-500">
                                <IoLocation color="orange" />
                                172, Boulevard St. Kenya
                            </div>
                            <div className=" flex gap-1 items-center mb-2 text-gray-500">
                                <FaPhone color="green" />
                                +254791448827
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                        <div className="flex flex-col items-center justify-center border-r">
                            <h1>10</h1>
                            <p>Products</p>
                        </div>
                        <div className="flex flex-col items-center justify-center border-r">
                            <h1>1</h1>
                            <p>Ads</p>
                        </div>
                        <div className="flex flex-col items-center justify-center border-r">
                            <h1>140</h1>
                            <p>Dollar Rate</p>
                        </div>
                        <div className="flex flex-col items-center justify-center border-r">
                            <h1>supplier</h1>
                            <p>Type</p>
                        </div>
                    </div>
                </a>
                <a href="" className="border p-5 rounded-sm">
                    <div className="flex items-center gap-2">
                        <div className="w-[80px] h-[80px] bg-gray-300 rounded-full flex items-center justify-center">
                            <img src={logo} alt="" className="h-[60px] w-[60px]" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold mb-1">Cotek Technologies</h1>
                            <div className=" flex gap-1 items-center mb-2 text-gray-500">
                                <IoLocation color="orange" />
                                172, Boulevard St. Kenya
                            </div>
                            <div className=" flex gap-1 items-center mb-2 text-gray-500">
                                <FaPhone color="green" />
                                +254791448827
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                        <div className="flex flex-col items-center justify-center border-r">
                            <h1>10</h1>
                            <p>Products</p>
                        </div>
                        <div className="flex flex-col items-center justify-center border-r">
                            <h1>1</h1>
                            <p>Ads</p>
                        </div>
                        <div className="flex flex-col items-center justify-center border-r">
                            <h1>140</h1>
                            <p>Dollar Rate</p>
                        </div>
                        <div className="flex flex-col items-center justify-center border-r">
                            <h1>supplier</h1>
                            <p>Type</p>
                        </div>
                    </div>
                </a>

            </div>
            <div className="bg-orange-400 h-[200px] py-[20px]">
                <h1 className="text-center font-bold text-2xl mb-2 text-white">Access our services from your mobile device.</h1>
                <p className="text-center text-white mb-5">Mobile App Available</p>
                <div className="flex w-full justify-center items-center gap-3">
                    <a href="/" className="flex gap-1 items-center bg-black px-3 py-1 text-white rounded-md">
                        <IoLogoGooglePlaystore className="text-4xl" />
                        <div >
                            <p>GET IT ON</p>
                            <h1 className="text-2xl font-bold">Google play</h1>
                        </div>
                    </a>
                    <a href="/" className="flex gap-1 items-center bg-black px-3 py-1 text-white rounded-md">
                        <GrAppleAppStore className="text-4xl" />
                        <div >
                            <p>GET IT ON</p>
                            <h1 className="text-2xl font-bold">APP Store</h1>
                        </div>
                    </a>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SuppliersPage