// import React from 'react'

import Navbar from "../components/Navbar"
import backgroundImage from "../assets/pexels-pixabay-262353.jpg";
import Footer from "../components/Footer";

const FaqPage = () => {
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
                    <h1 className="text-4xl text-orange-500">Frequently Asked Questions</h1>
                </div>
            </div>
            <div className="relative w-full bg-white px-6 mb-10 pt-10 pb-8 mt-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10">
                <div className="mx-auto px-5">
                    <div className="flex flex-col items-center">
                        <h2 className="mt-5 text-center text-3xl font-bold tracking-tight md:text-5xl">FAQ</h2>
                        <p className="mt-3 text-lg text-neutral-500 md:text-xl">Frequently asked questions</p>
                    </div>
                    <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
                        <div className="py-5">
                            <details className="group">
                                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                    <span> How does the billing work?</span>
                                    <span className="transition group-open:rotate-180">
                                        <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </summary>
                                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                                    Springerdata offers a variety of billing options, including monthly and annual subscription plans, as well as pay-as-you-go pricing for certain services. Payment is typically made through a credit card or other secure online payment method.
                                </p>
                            </details>
                        </div>
                        <div className="py-5">
                            <details className="group">
                                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                    <span> Can I get a refund for my subscription?</span>
                                    <span className="transition group-open:rotate-180">
                                        <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </summary>
                                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                                    We offer a 30-day money-back guarantee for most of its subscription plans. If you are not satisfied with your subscription within the first 30 days, you can request a full refund.
                                </p>
                            </details>
                        </div>
                        <div className="py-5">
                            <details className="group">
                                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                    <span> How do I cancel my subscription?</span>
                                    <span className="transition group-open:rotate-180">
                                        <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </summary>
                                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                                    To cancel your subscription, you can log in to your account and navigate to the subscription management page. From there, you can cancel your subscription and stop future billing.
                                </p>
                            </details>
                        </div>
                        <div className="py-5">
                            <details className="group">
                                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                    <span> Is there a free trial?</span>
                                    <span className="transition group-open:rotate-180">
                                        <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </summary>
                                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                                    We offer a free trial of our software for a limited time. During the trial period, you will have access to a limited set of features and functionality, but you will not be charged.
                                </p>
                            </details>
                        </div>
                        <div className="py-5">
                            <details className="group">
                                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                    <span> How do I contact support?</span>
                                    <span className="transition group-open:rotate-180">
                                        <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </summary>
                                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                                    If you need help with our platform or have any other questions, you can contact the companys support team by submitting a support request through the website or by emailing support@ourwebsite.com.
                                </p>
                            </details>
                        </div>
                        <div className="py-5">
                            <details className="group">
                                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                    <span> Do you offer any discounts or promotions?</span>
                                    <span className="transition group-open:rotate-180">
                                        <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </summary>
                                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                                    We may offer discounts or promotions from time to time. To stay up-to-date on the latest deals and special offers, you can sign up for the companys newsletter or follow it on social media.
                                </p>
                            </details>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default FaqPage