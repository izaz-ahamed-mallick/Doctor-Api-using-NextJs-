"use client";
import Link from "next/link";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";
import logo from "../../public/Images/logo.png";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
                {/* Logo and About Section */}
                <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
                    <Image src={logo} alt="Logo" className="h-16 w-auto" />
                    <h1 className="text-3xl font-bold mt-2">DoctorConsult</h1>
                    <p className="text-gray-400 text-sm text-center md:text-left mt-2">
                        Your trusted partner for expert medical consultations.
                    </p>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col md:flex-row md:space-x-6 mb-6 md:mb-0">
                    <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
                        <h2 className="text-lg font-semibold mb-4">
                            Quick Links
                        </h2>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/"
                                    className="text-gray-300 hover:text-white"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about"
                                    className="text-gray-300 hover:text-white"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services"
                                    className="text-gray-300 hover:text-white"
                                >
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="text-gray-300 hover:text-white"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Additional Links or Information */}
                    <div className="flex flex-col items-center md:items-start">
                        <h2 className="text-lg font-semibold mb-4">
                            Resources
                        </h2>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/privacy"
                                    className="text-gray-300 hover:text-white"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/terms"
                                    className="text-gray-300 hover:text-white"
                                >
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Social Media Links */}
                <div className="flex space-x-4 mb-6 md:mb-0">
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white text-xl"
                    >
                        <FaFacebookF />
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white text-xl"
                    >
                        <FaTwitter />
                    </a>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white text-xl"
                    >
                        <FaInstagram />
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white text-xl"
                    >
                        <FaLinkedinIn />
                    </a>
                </div>
            </div>

            <div className="bg-gray-800 py-2 mt-4">
                <div className="container mx-auto text-center text-gray-400 text-sm">
                    &copy; {new Date().getFullYear()} DoctorConsult. All rights
                    reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
