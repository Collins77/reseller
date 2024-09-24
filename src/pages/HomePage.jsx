import { FaArrowRight } from "react-icons/fa6"
import Banner from "../components/Banner"
import Navbar from "../components/Navbar"
import backgroundImage from "../assets/pexels-pixabay-262353.jpg";
import demo from "../assets/ResellerSprint.gif";
import { useEffect, useState } from "react";
import { GrAppleAppStore } from "react-icons/gr";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import Footer from "../components/Footer";


const HomePage = () => {
  const [starsCount, setStarsCount] = useState(0);
  const [downloadsCount, setDownloadsCount] = useState(0);
  const [sponsorsCount, setSponsorsCount] = useState(0);

  // Targets and their final counts
  const targets = [
    { setState: setStarsCount, count: 10000, suffix: "+" },
    { setState: setDownloadsCount, count: 50, suffix: "+" },
    { setState: setSponsorsCount, count: 10, suffix: "+" },
  ];

  // Animation effect to count up
  useEffect(() => {
    // Function to animate count-up effect
    function animateCountUp(target, finalCount, setState, suffix) {
      let currentCount = 0;
      const increment = Math.ceil(finalCount / (finalCount / 100));

      const interval = setInterval(() => {
        currentCount += increment;
        if (currentCount >= finalCount) {
          clearInterval(interval);
          setState(finalCount + suffix);
        } else {
          setState(currentCount + suffix);
        }
      }, 10);
    }

    // Animate count-up for each target
    targets.forEach((target) => {
      animateCountUp(target, target.count, target.setState, target.suffix);
    });
  }, []);

  return (
    <div className="">
      <Banner />
      <Navbar />
      <div className="hero h-[84vh] w-full" style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
      }}>
        <div className="flex flex-col items-center bg-black/50 justify-center gap-3 px-[80px] h-full w-full">
          <h1 className="text-5xl text-center font-bold text-white">Access Genuine Wholesale Suppliers In Nairobi - Kenya & Beyond</h1>
          <p className="text-gray-400 text-lg">At Resellersprint, our journey began with a vision – to reshape the reselling landscape in East Africa.</p>
          <a href="/signup" className="bg-white hover:bg-orange-500 hover:text-white text-orange-500 p-2 rounded-md flex items-center justify-center gap-1">
            Get Started
            <FaArrowRight />
          </a>
        </div>
      </div>
      <div className="px-[40px] mt-10">
        <div className="flex flex-col gap-3 w-full items-center justify-center">
          <h2 className="text-orange-500 text-2xl font-bold">About Us</h2>
          <h1 className="text-gray-600 text-4xl font-bold">Who are we?</h1>
        </div>
        <div className="flex items-center justify-between gap-2">
          <div className="flex flex-col gap-4">
            <h1 className="text-orange-500 font-bold text-center text-xl">Connecting Dreams, Transforming Realities</h1>
            <p>Resellersprint has evolved into a thriving community, connecting dreams and transforming possibilities into realities. Local businesses extend their reach, and international manufacturers tap into East Africas reselling ecosystem.</p>
            <p>Our commitment to innovation, collaboration, and empowerment remains unwavering. Join us at Resellersprint and be part of our story – where connectivity transforms the future of reselling in East Africa.</p>
          </div>
          <div>
            <img src={demo} alt="" />
          </div>
        </div>
      </div>
      <div className="mt-[50px] px-[40px]">
        <div className="flex flex-col gap-3 w-full items-center justify-center mb-[50px]">
          <h2 className="text-orange-500 text-2xl font-bold">Our Clients</h2>
          <h1 className="text-gray-600 text-4xl font-bold">Interested in joining?</h1>
        </div>
        <div className="flex gap-4 justify-between items-center">
          <div className="flex gap-2 items-center justify-center p-6 border border-gray-100 rounded-md">
            <img src={backgroundImage} alt="" className="w-[100px] h-[100px] rounded-full" />
            <div className="flex flex-col gap-2">
              <h1 className="text-orange-500 border-b border-gray-100 text-xl pb-1 w-fit">Resellers/Shop Owners</h1>
              <p>Provide access to quality products at competitive prices and have them delivered directly to them within 24 hours</p>
              <a href="/signup" className="border border-orange-500 text-orange-500 px-2 py-1 rounded-md hover:bg-orange-500 hover:text-white w-fit flex items-center justify-center gap-1">
                Create Account
                <FaArrowRight />
              </a>
            </div>
          </div>
          <div className="flex gap-2 items-center justify-center p-6 border border-gray-100 rounded-md">
            <img src={backgroundImage} alt="" className="w-[100px] h-[100px] rounded-full" />
            <div className="flex flex-col gap-2">
              <h1 className="text-orange-500 border-b border-gray-100 text-xl pb-1 w-fit">Wholesalers/Suppliers</h1>
              <p>Unleashing the full potential of the traditional small kiosks and their owners. Suppliers have a closer relationship with the clients.</p>
              <a href="/supplier-signup" className="border border-orange-500 text-orange-500 px-2 py-1 rounded-md hover:bg-orange-500 hover:text-white w-fit flex items-center justify-center gap-1">
                Create Account
                <FaArrowRight />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="mt-[50px] px-[40px]">
          <div className="flex flex-col gap-3 w-full items-center justify-center mb-[50px]">
            <h2 className="text-orange-500 text-2xl font-bold">Partner with us</h2>
            <h1 className="text-gray-600 text-4xl font-bold">Why Partner with us?</h1>
          </div>
          <div>

          </div>
        </div> */}
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
      <div className="h-fit bg-white">
        <div className="pt-12 bg-white sm:pt-20">
          <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold leading-9 text-gray-900 sm:text-4xl sm:leading-10">
                Trusted by businesses
              </h2>
              <p className="mt-3 text-xl leading-7 text-gray-600 sm:mt-4">
                Success is our story
              </p>
            </div>
          </div>
          <div className="pb-12 mt-10 bg-white sm:pb-16">
            <div className="relative">
              <div className="absolute inset-0 h-1/2 bg-white"></div>
              <div className="relative max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                  <dl className="bg-gray-800 rounded-lg shadow-lg md:grid md:grid-cols-3 sm:block">
                  <div className="flex flex-col p-6 text-center border-b border-gray-100  sm:border-0 sm:border-r">
                      <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500 dark:text-gray-400">
                        Resellers
                      </dt>
                      <dd className="order-1 text-5xl font-extrabold leading-none text-orange-500">
                        {starsCount}
                      </dd>
                    </div>
                    <div className="flex flex-col p-6 text-center border-t border-b border-gray-100 sm:border-0 sm:border-l sm:border-r">
                      <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500 dark:text-gray-400">
                        Manufacturers/Wholesalers
                      </dt>
                      <dd className="order-1 text-5xl font-extrabold leading-none text-orange-500">
                        {downloadsCount}
                      </dd>
                    </div>
                    <div className="flex flex-col p-6 text-center border-t border-gray-100 sm:border-0 sm:border-l">
                      <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500 dark:text-gray-400">
                        Marketing Agencies
                      </dt>
                      <dd className="order-1 text-5xl font-extrabold leading-none text-orange-500">
                        {sponsorsCount}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
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

export default HomePage