"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { logOutDetails } from "../../Store/AuthSlice";
import logo from "../../public/Images/logo.png";
import { imgPath } from "../../api/axios/helper";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const Header = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const dispatch = useDispatch();
    const router = useRouter();

    // State for client-side rendering
    const [isClient, setIsClient] = useState(false);

    // Get authentication state from Redux store
    const { name, isAuthenticate, image } = useSelector((state) => state.Auth);

    // Toggle dropdown visibility
    const toggleDropdown = () => {
        setDropdownOpen((prev) => !prev);
    };

    // Close dropdown
    const closeDropdown = () => {
        setDropdownOpen(false);
    };

    // Handle user logout
    const handleLogout = () => {
        toast.success("Logout successfully complete");
        setDropdownOpen(false);
        dispatch(logOutDetails());
        router.push("/auth/login");
    };

    // Use useEffect to handle client-side specific updates
    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <header className="bg-blue-900 text-white shadow-md">
            <div className="container mx-auto flex items-center justify-between p-4 h-[80px]">
                {/* Logo Section */}
                <Link href="/" className="flex items-center space-x-2">
                    <Image src={logo} alt="Logo" className="h-16 w-auto" />
                    <h1 className="text-3xl font-extrabold">DoctorConsult</h1>
                </Link>

                {/* Authentication Links */}
                <div className="relative flex items-center space-x-4">
                    {isClient && isAuthenticate ? (
                        <div className="relative flex items-center space-x-2">
                            <button
                                onClick={toggleDropdown}
                                className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-full transition duration-200"
                            >
                                {image && (
                                    <Image
                                        width={40}
                                        height={40}
                                        src={`${imgPath}${image}`}
                                        alt={name.toUpperCase()}
                                        className="rounded-full"
                                    />
                                )}
                                <span>{name}</span>
                                <svg
                                    className={`w-5 h-5 transition-transform duration-200 ${
                                        isDropdownOpen ? "rotate-180" : ""
                                    }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    ></path>
                                </svg>
                            </button>
                            {isDropdownOpen && (
                                <div className="absolute right-0 top-14 mt-2 w-48 bg-white text-black rounded-lg shadow-lg z-50 ring-1 ring-gray-300">
                                    <Link href="/profile" legacyBehavior>
                                        <a
                                            onClick={closeDropdown}
                                            className="block px-4 py-2 hover:bg-gray-100 rounded-t-lg transition duration-200"
                                        >
                                            Profile
                                        </a>
                                    </Link>
                                    <button
                                        onClick={handleLogout}
                                        className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-b-lg transition duration-200"
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <>
                            <Link href="/login" legacyBehavior>
                                <a className="bg-blue-700 hover:bg-blue-600 text-white py-2 px-4 rounded-full transition duration-200">
                                    Login
                                </a>
                            </Link>
                            <Link href="/signup" legacyBehavior>
                                <a className="bg-green-700 hover:bg-green-600 text-white py-2 px-4 rounded-full transition duration-200">
                                    Sign Up
                                </a>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
