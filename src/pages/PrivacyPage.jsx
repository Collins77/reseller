// import React from 'react'

import Navbar from "../components/Navbar"
import backgroundImage from "../assets/pexels-pixabay-262353.jpg";
import Footer from "../components/Footer";

const PrivacyPage = () => {
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
                    <h1 className="text-4xl text-orange-500">Privacy Policy</h1>
                </div>
            </div>
            <div className="px-[40px] py-[30px]">
                <div className="mb-[30px]">
                    <h1 className="mb-6 text-4xl text-orange-500">INTRODUCTION</h1>
                    <p>We take your privacy very seriously and this Privacy statement explains how and why we collect, and process your information. This Privacy Policy should be read together with the terms and conditions of our products and services and our Cookies Policy. In the event of any conflicts with regards to data privacy, this Policy will prevail to the extent of the conflict. When you visit our premises, website, social media pages, use our mobile applications, are in the employment of our organization, trade or carry out business in one way or another with the organization, we collect certain personal information and therefore this Privacy Policy describes how we securely collect, and process your personal data. Kyosk has in place technical and organisational measures to prevent accidental loss, unauthorized use, access or disclosure of your personal data and information. Your personal data and information will only be processed in accordance with the law and with this privacy policy.</p>
                </div>
                <div className="mb-[30px]">
                    <h1 className="mb-6 text-4xl text-orange-500">DEFINITIONS & INTERPRETATION</h1>
                    <p>‘Personal Data’ means any information relating to an identified or identifiable natural person. Personal Data includes biographical data (biodata) such as name, sex, marital status, date and place of birth, country of origin, country of asylum, individual registration number, occupation, religion and ethnicity, biometric data such as a photograph, fingerprint, facial or iris image, as well as any expression of opinion about the individual, such as assessments of their status and/or specific needs; ‘You’ means the person who uses or purchases our products and uses our services or accesses our website or applications; any partners, suppliers, dealers of the Company, any employee of Kyosk or its affiliates, subsidiaries or related parties, any visitor to any of our premises or property and any person whose interaction with us necessitates the collecting of Personal Data; All references to ‘our’, ‘us’, ‘we’ or ‘company’ in this Policy are deemed to refer to Kyosk Digital Services Limited, its subsidiaries, affiliates, assigns and/or associates. The word “includes” means that what follows is not necessarily exhaustive and therefore the examples given are not the only things/situations included in the meaning or explanation of that text.</p>
                </div>
                <div className="mb-[30px]">
                    <h1 className="mb-6 text-4xl text-orange-500">WHAT PERSONAL INFORMATION WE COLLECT</h1>
                    <p>When you visit our premises, website, social media pages, purchase or use our products and services, or use our mobile applications we automatically collect your personal data in order to improve and provide efficient services to you. We may collect, use, store and transfer different kinds of personal data for marketing and personal data optimization purposes. The data we collect includes: Your contact details including telephone, email, postal and residential addresses National identity registration details Registration information including your login details and other authentication information Demographic information including your age, sex, date of birth, occupation, citizenship Marketing preferences Payment information including credit card numbers, bank details, mobile number details. This is called Order Information. Certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device, Additionally, as you browse our website, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, your downloads, and information about how you interact with the Site, personal data contained in user-generated content such as blogs and social media accounts. We refer to this automatically collected information as Device Information. We collect Device Information using the following technologies: Cookies are data files that are placed on your device or computer, if you agree, and often include an anonymous unique identifier. Cookies help us to provide you with an enhanced browsing experience. Log files track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.</p>
                </div>
                <div className="mb-[30px]">
                    <h1 className="mb-6 text-4xl text-orange-500">LEGAL BASIS FOR PROCESSING YOUR PERSONAL DATA</h1>
                    <p>We take your privacy very seriously and this Privacy statement explains how and why we collect, and process your information. This Privacy Policy should be read together with the terms and conditions of our products and services and our Cookies Policy. In the event of any conflicts with regards to data privacy, this Policy will prevail to the extent of the conflict. When you visit our premises, website, social media pages, use our mobile applications, are in the employment of our organization, trade or carry out business in one way or another with the organization, we collect certain personal information and therefore this Privacy Policy describes how we securely collect, and process your personal data. Kyosk has in place technical and organisational measures to prevent accidental loss, unauthorized use, access or disclosure of your personal data and information. Your personal data and information will only be processed in accordance with the law and with this privacy policy.</p>
                </div>
                <div className="mb-[30px]">
                    <h1 className="mb-6 text-4xl text-orange-500">HOW DO WE USE YOUR PERSONAL INFORMATION</h1>
                    <p>We take your privacy very seriously and this Privacy statement explains how and why we collect, and process your information. This Privacy Policy should be read together with the terms and conditions of our products and services and our Cookies Policy. In the event of any conflicts with regards to data privacy, this Policy will prevail to the extent of the conflict. When you visit our premises, website, social media pages, use our mobile applications, are in the employment of our organization, trade or carry out business in one way or another with the organization, we collect certain personal information and therefore this Privacy Policy describes how we securely collect, and process your personal data. Kyosk has in place technical and organisational measures to prevent accidental loss, unauthorized use, access or disclosure of your personal data and information. Your personal data and information will only be processed in accordance with the law and with this privacy policy.</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default PrivacyPage