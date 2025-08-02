'use client';
import Image from "next/image";
import Link from "next/link";
import Toast from "./Toast/Snackbar";
import emailjs from "@emailjs/browser"
import { useRef, useState } from "react";

const Footer = () => {
    const formRef = useRef();
    const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            'service_fxhm458',
            'template_k1zf6ll',
            formRef.current,
            'xGGiT_8LYxsZzpBz4'
        ).then(
            () => {
                setToast({ show: true, message: 'Email sent successfully!', type: 'success' });
                formRef.current.reset();
            },
            () => {
                setToast({ show: true, message: 'Failed to send email.', type: 'error' });
            }
        );
    };

    const closeToast = () => setToast(prev => ({ ...prev, show: false }));
    return (
        <footer className="relative bg-[#0f1e0f] text-white">
            <div className="absolute inset-0 bg-[url(/images/fotterImage.png)] bg-cover bg-right-bottom opacity-10" aria-hidden="true" />
            <div className="relative z-10 container mx-auto px-4 lg:w-[90%] xl:w-full">

                {/* Info Section */}
                <div className="border-b py-10" style={{ borderBottom: `2px solid #008000` }}>
                    <div className="flex flex-wrap">
                        {/* Location */}
                        <div className="w-full md:w-1/3 mb-6 flex items-start">
                            <i className="fas fa-map-marker-alt text-[#008000] text-2xl mt-2" />
                            <div className="pl-4">
                                <h4 className="text-lg font-semibold mb-1">Find us</h4>
                                <span className="text-sm text-gray-400">
                                    25th Unit, 3rd Floor, Sushma Infinium Zirakpur, Punjab 140603
                                </span>
                            </div>
                        </div>
                        {/* Call */}
                        <div className="w-full md:w-1/3 mb-6 flex items-start">
                            <i className="fas fa-phone text-[#008000] text-2xl mt-2" />
                            <div className="pl-4">
                                <h4 className="text-lg font-semibold mb-1">Call us</h4>
                                <span className="text-sm text-gray-400">+91 98187-37641</span>
                            </div>
                        </div>
                        {/* Mail */}
                        <div className="w-full md:w-1/3 mb-6 flex items-start">
                            <i className="far fa-envelope-open text-[#008000] text-2xl mt-2" />
                            <div className="pl-4">
                                <h4 className="text-lg font-semibold mb-1">Mail us</h4>
                                <span className="text-sm text-gray-400">info.jobhubworld@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="py-10 flex flex-wrap">

                    {/* Logo & Info */}
                    <div className="w-full lg:w-1/3 mb-8">
                        <Link href="/" className="inline-block mb-6">
                            <Image src="/images/jobhubFooterLogo.png" alt="logo" width={200} height={60} />
                        </Link>
                        <p className="text-sm text-gray-400 leading-7 mb-4">
                            Find Your Career With JOBHUB <br />
                            <span className="text-xs">
                                Comprehensive job portal for job seekers and employers. For Candidate{' '}
                                <Link href="https://www.jobhub.world/candidatedashboard" className="text-blue-300" target="_blank">Apply Jobs</Link>, For Employer{' '}
                                <Link href="https://www.jobhub.world/employerlogin" className="text-blue-200" target="_blank">Create Jobs</Link>
                            </span>
                        </p>
                        <span className="text-lg font-bold block mb-3">Follow us</span>
                        <div className="flex gap-4">
                            <Link href="https://www.facebook.com/people/JobHubworld/61575148695953/" target="_blank" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#008000] hover:bg-[#006600] transition-colors">
                                <i className="fab fa-facebook-f text-white" />
                            </Link>
                            <Link href="https://www.linkedin.com/in/jobhub-world-5559a7361/" target="_blank" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#008000] hover:bg-[#006600] transition-colors">
                                <i className="fab fa-linkedin-in text-white" />
                            </Link>
                            <Link href="https://www.instagram.com/jobhub_world?igsh=a2hsb3dmdDV1azYw" target="_blank" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#008000] hover:bg-[#006600] transition-colors">
                                <i className="fab fa-instagram text-white" />
                            </Link>
                        </div>
                    </div>

                    {/* Useful Links */}
                    <div className="w-full lg:w-1/3 md:w-1/2 mb-8">
                        <h3 className="text-lg font-semibold mb-6 relative before:content-[''] before:absolute before:bottom-[-15px] before:left-0 before:w-12 before:h-[2px] before:bg-[#008000]">
                            Useful Links
                        </h3>
                        <ul className="flex flex-wrap">
                            {[
                                ['/', 'Home'], ['/about-us', 'About us'], ['/contact-us', 'Contact us'],
                                ['/#popularSection', 'Find a job'],
                                // ['/verification', 'Hire Now'],
                                // ['/Privacypolicy', 'Privacy Policy'], ['/Termsandconditions', 'T&C'],
                                ['/interview-prepration', 'Interview Prepration'],
                                // ['/events', 'Events'],
                                ['/jobs', 'Jobs']
                            ].map(([href, label], i) => (
                                <li key={i} className="w-1/2 mb-3">
                                    <Link
                                        href={href}
                                        className="text-gray-400 hover:text-[#008000] text-sm capitalize transition-colors"
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Subscribe */}
                    <div className="w-full lg:w-1/3 md:w-1/2 mb-8">
                        <h3 className="text-lg font-semibold mb-6 relative before:content-[''] before:absolute before:bottom-[-15px] before:left-0 before:w-12 before:h-[2px] before:bg-[#008000]">
                            Subscribe
                        </h3>
                        <p className="text-sm text-gray-400 mb-6">Do{`n't`} miss to subscribe to our new feeds, kindly fill the form below.</p>
                        <form ref={formRef} onSubmit={sendEmail} className="relative">
                            <input
                                type="email"
                                name="user_email"
                                placeholder="Email Address"
                                className="w-full py-3 px-6 bg-[#1e2e1e] border border-[#1e2e1e] text-white text-sm focus:border-[#008000] transition-colors"
                                required
                            />
                            <input type="hidden" name="time" value={new Date().toLocaleString()} />
                            <button
                                type="submit"
                                className="absolute top-0 right-0 bg-[#008000] p-[11px] hover:bg-[#006600] transition-colors"
                            >
                                <i className="fab fa-telegram-plane text-white text-xl -rotate-6"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-[#1a2a1a] py-6">
                <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center">
                    <p className="text-sm text-gray-400 mb-2 lg:mb-0 text-center lg:text-left">
                        Copyright © {new Date().getFullYear()}, All Right Reserved{' '}
                        <Link href="/" className="text-[#008000] hover:text-[#006600]">Jobhub.world</Link>
                    </p>
                    <ul className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
                        {[
                            ['/', 'Home'],
                            ['/Privacypolicy', 'Privacy Policy'],
                            ['/Termsandconditions', 'T&C'],
                            ['/contact', 'Contact']
                        ].map(([href, label]) => (
                            <li key={href}>
                                <Link href={href} className="hover:text-[#008000] transition-colors">
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Toast */}
            <Toast show={toast.show} message={toast.message} type={toast.type} onClose={closeToast} />
        </footer>
    )
}

export default Footer