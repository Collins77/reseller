import Navbar from "../components/Navbar"
import demo from "../assets/ResellerSprint.gif"
import backgroundImage from "../assets/pexels-pixabay-262353.jpg";
import { GrAppleAppStore } from "react-icons/gr";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";

const AboutPage = () => {
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
        <div>
            <Navbar />
            <div className="h-[120px]" style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
                <div className="bg-black/70 h-full w-full flex items-center justify-center flex-col gap-4">
                    <h1 className="text-4xl text-orange-500">Our Story</h1>
                    <p className="text-2xl text-gray-500 font-bold">Transforming Reselling in East Africa</p>
                </div>
            </div>
            <div className="flex gap-4 items-center px-[40px] mt-10 mb-10">
                <p>At Resellersprint, our journey began with a vision – to reshape the reselling landscape in East Africa. Inspired by the dynamic markets of Kenya, Uganda, and Tanzania, our founders sought to create a platform that would not only connect resellers with suppliers but would become a driving force for growth and success.</p>
                <p>The journey began with a simple yet powerful idea – to redefine how resellers, wholesalers, and manufacturers connect and thrive. Resellersprint emerged as a response to the challenges faced by businesses in obtaining real-time data, accessing a diverse range of products, and expanding their market reach.</p>
            </div>
            <div>
                <img src={demo} alt="" />
            </div>
            <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between mb-16">

                <div className="text-center">
                    <p className="mt-4 text-sm leading-7 text-gray-500 font-regular">
                        GUIDELINES
                    </p>
                    <h3 className="text-3xl sm:text-3xl leading-normal font-extrabold tracking-tight text-gray-900">
                        What drives <span className="text-orange-500">Reseller Sprint?</span>
                    </h3>

                </div>

                <div className="mt-20">
                    <ul className="md:grid md:grid-cols-3 md:col-gap-10 md:row-gap-10">

                        <li className=" bg-gray-100 p-5 pb-10 text-center">
                            <div className="flex flex-col items-center">
                                <div className="flex-shrink-0 relative top-0 -mt-16">
                                    <div
                                        className="flex items-center justify-center h-20 w-20 rounded-full bg-orange-500 text-white border-4 border-white text-xl font-semibold">
                                        1
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <h4 className="text-lg leading-6 font-semibold text-gray-900">Innovation</h4>
                                    <p className="mt-2 text-base leading-6 text-gray-500">
                                        Continuous innovation drives Resellersprint, introducing groundbreaking solutions to redefine reselling.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className=" bg-gray-100 p-5 pb-10 text-center">
                            <div className="flex flex-col items-center">
                                <div className="flex-shrink-0 relative top-0 -mt-16">
                                    <div
                                        className="flex items-center justify-center h-20 w-20 rounded-full bg-orange-500 text-white border-4 border-white text-xl font-semibold">
                                        2
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <h4 className="text-lg leading-6 font-semibold text-gray-900">Collaboration</h4>
                                    <p className="mt-2 text-base leading-6 text-gray-500">
                                        We foster a community where businesses thrive together through active collaboration.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className=" bg-gray-100 p-5 pb-10 text-center">
                            <div className="flex flex-col items-center">
                                <div className="flex-shrink-0 relative top-0 -mt-16">
                                    <div
                                        className="flex items-center justify-center h-20 w-20 rounded-full bg-orange-500 text-white border-4 border-white text-xl font-semibold">
                                        3
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <h4 className="text-lg leading-6 font-semibold text-gray-900">Empowerment</h4>
                                    <p className="mt-2 text-base leading-6 text-gray-500">
                                        Resellersprint is a catalyst for individual and collective empowerment.
                                    </p>
                                </div>
                            </div>
                        </li>

                    </ul>
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

export default AboutPage