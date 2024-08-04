import Image from "next/image";
import Link from "next/link";
import React from "react";
import bgImg from "../../../public/Images/DoctorPage.jpeg";
import AboutUs from "../components/AboutUs";
import BlogHome from "../components/BlogHome";

const page = () => {
    return (
        <div>
            <div className="relative w-full h-screen overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src={bgImg}
                        alt="Doctor Consultation"
                        fill
                        style={{ objectFit: "cover" }}
                        className="absolute inset-0"
                    />
                </div>

                {/* Overlay Content */}
                <div className="relative flex flex-col items-center justify-center h-full text-center text-white bg-black bg-opacity-40 p-6 md:p-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                        Welcome to Doctor Consult
                    </h1>
                    <p className="text-lg md:text-2xl mb-8">
                        Your trusted partner in health and wellness.
                    </p>
                    <Link
                        href="/departments"
                        className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg shadow-lg text-lg md:text-xl transition duration-300 ease-in-out"
                    >
                        Explore Our Departments
                    </Link>
                </div>
            </div>
            <AboutUs />
            <BlogHome />
        </div>
    );
};

export default page;
