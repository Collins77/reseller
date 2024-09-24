import Navbar from "../components/Navbar"
import backgroundImage from "../assets/pexels-pixabay-262353.jpg";
import { GrAppleAppStore } from "react-icons/gr";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import Footer from "../components/Footer";
import { FaArrowRight } from "react-icons/fa6";


const PartnersPage = () => {
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
                    <h1 className="text-4xl text-orange-500">Partnerships</h1>
                </div>
            </div>
            <div className="mt-16">
                <div className="flex flex-col gap-3 mb-10 w-full items-center justify-center">
                    <h2 className="text-orange-500 text-2xl font-bold">How to Partner with us?</h2>
                    <h1 className="text-gray-600 text-4xl font-bold">For Resellers and Suppliers in East Africa</h1>
                </div>
                <section className="relative overflow-hidden bg-gray-50">
                    <div className="mt-2 md:mt-0 py-12 pb-6 sm:py-16 lg:pb-24 overflow-hidden">
                        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative">
                            <div className="relative mt-12 lg:mt-20">
                                <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
                                    <svg className="w-full" xmlns="http://www.w3.org/2000/svg" width="875" height="48" viewBox="0 0 875 48"
                                        fill="none">
                                        <path
                                            d="M2 29C20.2154 33.6961 38.9915 35.1324 57.6111 37.5555C80.2065 40.496 102.791 43.3231 125.556 44.5555C163.184 46.5927 201.26 45 238.944 45C312.75 45 385.368 30.7371 458.278 20.6666C495.231 15.5627 532.399 11.6429 569.278 6.11109C589.515 3.07551 609.767 2.09927 630.222 1.99998C655.606 1.87676 681.208 1.11809 706.556 2.44442C739.552 4.17096 772.539 6.75565 805.222 11.5C828 14.8064 850.34 20.2233 873 24"
                                            stroke="#D4D4D8" strokeWidth="3" strokeLinecap="round" strokeDasharray="1 12" />
                                    </svg>
                                </div>
                                <div
                                    className="relative grid grid-cols-1 text-center gap-y-8 sm:gap-y-10 md:gap-y-12 md:grid-cols-3 gap-x-12">
                                    <div>
                                        <div
                                            className="flex items-center justify-center w-16 h-16 mx-auto bg-white  border-2 border-gray-200 rounded-full shadow">
                                            <span className="text-xl font-semibold text-gray-700 ">1</span>
                                        </div>
                                        <h3
                                            className="mt-4 sm:mt-6 text-xl font-semibold leading-tight text-gray-900 md:mt-10">
                                            Sign-Up and Explore
                                        </h3>
                                        <p className="mt-3 sm:mt-4 text-base text-gray-600 ">
                                            Visit our user-friendly website or download our mobile application. Sign up to explore the vast array of features and products available at your fingertips.

                                        </p>
                                        <a href="signup" className="flex text-start items-center gap-1 underline text-orange-500">
                                            Sign Up
                                            <FaArrowRight />
                                        </a>
                                    </div>
                                    <div>
                                        <div
                                            className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                                            <span className="text-xl font-semibold text-gray-700">2</span>
                                        </div>
                                        <h3
                                            className="mt-4 sm:mt-6 text-xl font-semibold leading-tight text-gray-900 md:mt-10">
                                            Connect with Suppliers
                                        </h3>
                                        <p className="mt-3 sm:mt-4 text-base text-gray-600">
                                            Leverage Resellersprint to connect with a network of reputable suppliers and wholesalers. Discover a diverse range of products, access real-time market pricing, and streamline your business operations.
                                        </p>
                                    </div>
                                    <div>
                                        <div
                                            className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                                            <span className="text-xl font-semibold text-gray-700">3</span>
                                        </div>
                                        <h3
                                            className="mt-4 sm:mt-6 text-xl font-semibold leading-tight text-gray-900 md:mt-10">
                                            Enhance Your Reach
                                        </h3>
                                        <p className="mt-3 sm:mt-4 text-base text-gray-600">
                                            Extend your business network by collaborating with local and international partners. Resellersprint opens doors to upcountry resellers, online resellers, and system integrators across Kenya, Uganda, and Tanzania.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="bg-gray-800 mt-16 py-10">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-7xl sm:text-center mb-14">
                        <p className="mt-2 text-3xl font-bold tracking-tight text-orange-500 sm:text-4xl">For Manufacturers overseas</p>
                        <p className="mt-2 text-lg sm:text-center leading-8 text-gray-300">We welcome partnerships with global players in Silicon Valley, Beijing, Bengaluru, Tokyo, London, Singapore, and Berlin.</p>
                    </div>
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
                        <div>
                            <div className="flex items-center text-sm font-semibold leading-6 text-blue-400">
                                <svg viewBox="0 0 4 4" className="mr-4 h-1 w-1 flex-none" aria-hidden="true">
                                    <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
                                </svg>
                                Step 1
                                <div className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-500/80 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0" aria-hidden="true"></div>
                            </div>
                            <p className="mt-6 text-lg font-semibold leading-8 tracking-wide text-white">Express Your Interest:</p>
                            <p className="mt-1 text-base leading-7 text-gray-300 dark:text-gray-400">Reach out to Resellersprint expressing your interest in tapping into the East African market. Contact us at [partnerships@resellersprint.com] with a brief introduction to your company and your vision for collaboration.</p>
                        </div>
                        <div>
                            <div className="flex items-center text-sm font-semibold leading-6 text-blue-400">
                                <svg viewBox="0 0 4 4" className="mr-4 h-1 w-1 flex-none" aria-hidden="true">
                                    <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
                                </svg>
                                Step 2
                                <div className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-500/80 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0" aria-hidden="true"></div>
                            </div>
                            <p className="mt-6 text-lg font-semibold leading-8 tracking-wide text-white">Collaborative Discussion:</p>
                            <p className="mt-1 text-base leading-7 text-gray-300 dark:text-gray-400">Our team will initiate a collaborative discussion to understand your goals and how Resellersprint can amplify your presence in East Africa. We believe in forging partnerships that are mutually beneficial and aligned with your business objectives.</p>
                        </div>
                        <div>
                            <div className="flex items-center text-sm font-semibold leading-6 text-blue-400">
                                <svg viewBox="0 0 4 4" className="mr-4 h-1 w-1 flex-none" aria-hidden="true">
                                    <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
                                </svg>
                                Step 3
                                <div className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-500/80 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0" aria-hidden="true"></div>
                            </div>
                            <p className="mt-6 text-lg font-semibold leading-8 tracking-wide text-white">Strategic Planning:</p>
                            <p className="mt-1 text-base leading-7 text-gray-300 dark:text-gray-400">Work together with Resellersprint to devise a strategic plan tailored to your market objectives. Benefit from our market expertise to navigate the unique demands and trends in the East African tech landscape.</p>
                        </div>
                        <div>
                            <div className="flex items-center text-sm font-semibold leading-6 text-blue-400">
                                <svg viewBox="0 0 4 4" className="mr-4 h-1 w-1 flex-none" aria-hidden="true">
                                    <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
                                </svg>
                                Step 4
                                <div className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-500/80 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0" aria-hidden="true"></div>
                            </div>
                            <p className="mt-6 text-lg font-semibold leading-8 tracking-wide text-white">Seamless Integration:</p>
                            <p className="mt-1 text-base leading-7 text-gray-300 dark:text-gray-400">Once the partnership is established, seamlessly integrate your products into our platform. Resellersprint ensures a smooth onboarding process, allowing you to focus on what you do best - manufacturing innovative products.</p>
                        </div>
                    </div>
                </div>
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

export default PartnersPage