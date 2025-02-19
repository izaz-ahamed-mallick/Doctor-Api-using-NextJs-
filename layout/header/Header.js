"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { logOutDetails } from "../../Store/AuthSlice";
import logo from "../../public/Images/logo.png";
import icon from "../../public/Images/icon2.png";
import crossicon from "../../public/Images/crossicon2.png";
import userIcon from "../../public/Images/userIcon.jpeg";

import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const Header = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const dispatch = useDispatch();
    const router = useRouter();
    const [isClient, setIsClient] = useState(false);
    const { name, isAuthenticate, image } = useSelector((state) => state.Auth);

    const toggleMobileMenu = () => {
        setMobileMenuOpen((prev) => !prev);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    const toggleDropdown = () => {
        setDropdownOpen((prev) => !prev);
    };

    const closeDropdown = () => {
        setDropdownOpen(false);
    };

    const handleLogout = () => {
        toast.success("Logout successfully complete");
        setMobileMenuOpen(false);
        dispatch(logOutDetails());
        router.push("/");
        setDropdownOpen(false);
    };

    const navigateToSection = (section) => {
        router.push(`/doctorList?section=${section}`);
        setMobileMenuOpen(false);
        setDropdownOpen(false);
    };
    useEffect(() => {
        setIsClient(true);

        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`max-w-full sticky top-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-blue-900/70 backdrop-blur-md shadow-lg"
                    : "bg-blue-900"
            }`}
        >
            <div className="container  mx-auto flex items-center justify-between p-4 h-[80px]">
                {/* Logo Section */}

                <Link href="/" className="flex items-center space-x-2">
                    <Image
                        priority
                        src={logo}
                        alt="Logo"
                        className="h-16 w-auto"
                    />
                    <h1 className="md:text-3xl text-xl lg:text-3xl font-extrabold text-white transition-transform duration-300 transform hover:scale-105">
                        DoctorConsult
                    </h1>
                </Link>

                {/* Navigation */}
                {isClient && isAuthenticate && (
                    <nav className="hidden xs:hidden lg:flex   md:hidden space-x-6 mx-auto">
                        <div
                            onClick={() => navigateToSection("home")}
                            className="relative group text-sm font-semibold px-4 py-2 text-white cursor-pointer  hover:text-blue-300 transition-colors duration-300 ease-in-out"
                        >
                            <span className="relative z-10">HOME</span>
                            <div className="absolute inset-0 bg-blue-600 opacity-0 rounded-br-2xl rounded-tl-2xl group-hover:opacity-100 transition-opacity duration-300 ease-in-out" />
                            <div className="absolute inset-0 border-b-2 border-blue-300 -bottom-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out" />
                        </div>
                        <div
                            onClick={() => navigateToSection("aboutUs")}
                            className="relative group text-sm font-semibold px-4 py-2 text-white cursor-pointer hover:text-blue-300 transition-colors duration-300 ease-in-out"
                        >
                            <span className="relative z-10">ABOUT US</span>
                            <div className="absolute inset-0 bg-blue-600 opacity-0 rounded-br-2xl rounded-tl-2xl group-hover:opacity-100 transition-opacity duration-300 ease-in-out" />
                            <div className="absolute inset-0 border-b-2 border-blue-300 -bottom-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out" />
                        </div>
                        <div
                            onClick={() => navigateToSection("blogHome")}
                            className="relative group text-sm font-semibold px-4 py-2 text-white cursor-pointer hover:text-blue-300 transition-colors duration-300 ease-in-out"
                        >
                            <span className="relative z-10">BLOG</span>
                            <div className="absolute  inset-0 bg-blue-600 opacity-0 rounded-br-2xl rounded-tl-2xl group-hover:opacity-100 transition-opacity duration-300 ease-in-out" />
                            <div className="absolute inset-0 border-b-2 border-blue-300 -bottom-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out" />
                        </div>
                    </nav>
                )}

                {/* Authentication Links */}
                <div className="relative flex items-center space-x-4 ml-auto">
                    {isClient && isAuthenticate ? (
                        <div className="relative flex  items-center space-x-2 font-semibold">
                            <button
                                onClick={toggleDropdown}
                                className="hidden lg:flex md:hidden items-center space-x-3 bg-gray-900 hover:bg-gray-800 text-white py-2 px-5 rounded-full shadow-lg transition-transform transform hover:scale-105"
                            >
                                {image && (
                                    <Image
                                        width={40}
                                        height={40}
                                        priority
                                        src={userIcon}
                                        alt={name?.toUpperCase()}
                                        className="rounded-full border-2 border-gray-300 shadow-inner"
                                    />
                                )}
                                <span className="font-medium text-md">
                                    {name}
                                </span>
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
                                        d="M15 19l-7-7 7-7"
                                    ></path>
                                </svg>
                            </button>

                            <div
                                className={`hidden md:block fixed top-20 right-0 h-auto w-64 py-2 text-md bg-white rounded-b-lg text-black z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${
                                    isDropdownOpen
                                        ? "translate-x-0 overflow-auto"
                                        : "translate-x-full overflow-hidden"
                                }`}
                                style={{ right: 0 }}
                            >
                                <Link href="/user" legacyBehavior>
                                    <a
                                        onClick={closeDropdown}
                                        className="block w-full hover:shadow-xl px-4 py-2 hover:bg-gray-100 rounded-t-lg transition duration-200"
                                    >
                                        Profile
                                    </a>
                                </Link>

                                <button
                                    onClick={handleLogout}
                                    className="w-full text-left px-4 py-2 hover:shadow-xl hover:bg-gray-100 rounded-b-lg transition duration-200"
                                >
                                    Logout
                                </button>
                            </div>
                        </div>
                    ) : (
                        <>
                            <Link href="/auth/registration" legacyBehavior>
                                <a className="bg-green-700 hover:bg-green-600 text-white py-2 px-4 rounded-full transition duration-200 transform hover:scale-105">
                                    Sign Up
                                </a>
                            </Link>
                        </>
                    )}
                </div>

                {/* Mobile Navigation */}
                {isClient && isAuthenticate && (
                    <div className="flex  lg:hidden md:flex  items-center">
                        <div onClick={toggleMobileMenu}>
                            <button
                                className={` ${
                                    isMobileMenuOpen && "rotate-180"
                                } text-white hover:text-gray-300 transition duration-300 ease-in-out`}
                            >
                                <Image
                                    src={icon}
                                    alt={"Menu"}
                                    width={60}
                                    height={60}
                                />
                            </button>
                        </div>
                        <div
                            className={`fixed top-20 right-0 min-h-full bg-white text-black z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${
                                isMobileMenuOpen
                                    ? "translate-x-0 overflow-auto"
                                    : "translate-x-full overflow-hidden hidden"
                            }`}
                        >
                            <button
                                onClick={closeMobileMenu}
                                className={` ${
                                    !isMobileMenuOpen && "rotate-180"
                                } text-white hover:text-gray-300 transition duration-300 ease-in-out`}
                            >
                                <Image
                                    src={crossicon}
                                    alt={"Close"}
                                    width={60}
                                    height={60}
                                />
                            </button>
                            <div className="flex  flex-col items-start py-2 w-48">
                                <>
                                    <button
                                        onClick={() =>
                                            navigateToSection("home")
                                        }
                                        className="block w-full hover:shadow-xl text-left px-4 py-2 text-lg font-semibold hover:bg-gray-100 rounded-b-lg transition duration-200"
                                    >
                                        Home
                                    </button>

                                    <button
                                        onClick={() =>
                                            navigateToSection("aboutUs")
                                        }
                                        className="block w-full hover:shadow-xl text-left px-4 py-2 text-lg font-semibold hover:bg-gray-100 rounded-b-lg transition duration-200"
                                    >
                                        About Us
                                    </button>

                                    <button
                                        onClick={() =>
                                            navigateToSection("blogHome")
                                        }
                                        className="block w-full hover:shadow-xl text-left px-4 py-2 text-lg font-semibold hover:bg-gray-100 rounded-b-lg transition duration-200"
                                    >
                                        Blog
                                    </button>
                                </>

                                {isClient && isAuthenticate ? (
                                    <>
                                        <Link href="/user" legacyBehavior>
                                            <a
                                                onClick={closeMobileMenu}
                                                className="block w-full hover:shadow-xl px-4 py-2 text-lg font-semibold hover:bg-gray-100 transition duration-200"
                                            >
                                                Profile
                                            </a>
                                        </Link>
                                        <button
                                            onClick={handleLogout}
                                            className="block w-full hover:shadow-xl text-left px-4 py-2 text-lg font-semibold hover:bg-gray-100 rounded-b-lg transition duration-200"
                                        >
                                            Logout
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <Link href="/auth/login" legacyBehavior>
                                            <a className="bg-blue-700 hover:bg-blue-600 text-white py-2 px-4 rounded-full transition duration-200 transform hover:scale-105">
                                                Login
                                            </a>
                                        </Link>
                                        <Link
                                            href="/auth/registration"
                                            legacyBehavior
                                        >
                                            <a className="bg-green-700 hover:bg-green-600 text-white py-2 px-4 rounded-full transition duration-200 transform hover:scale-105">
                                                Sign Up
                                            </a>
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
