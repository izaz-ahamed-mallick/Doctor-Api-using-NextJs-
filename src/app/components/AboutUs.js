// pages/about.js

import Image from "next/image";
import Link from "next/link";
import React from "react";
import aboutImg from "../../../public/Images/aboutUs2.jpeg";

const AboutUs = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            <div className="relative h-96 w-full">
                <Image
                    fill
                    style={{ objectFit: "cover" }}
                    src={aboutImg}
                    alt="About Us Background"
                    className="absolute inset-0 object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative flex items-center justify-center h-full text-center text-white p-6">
                    <div>
                        <h1 className="text-5xl font-bold mb-4">About Us</h1>
                        <p className="text-lg mb-6">
                            Discover who we are and our commitment to your
                            health.
                        </p>
                        <Link href="/contact" legacyBehavior>
                            <a className="bg-yellow-500 hover:bg-yellow-400 text-white py-2 px-6 rounded-md text-lg font-semibold">
                                Contact Us
                            </a>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main Content Section */}
            <div className="flex flex-col items-center py-12 px-6">
                <section className="bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full text-gray-800">
                    <div className="mb-8">
                        <h2 className="text-3xl font-semibold mb-4">
                            Our Mission
                        </h2>
                        <p className="text-lg mb-4">
                            At DoctorConsult, we are dedicated to providing the
                            highest quality of healthcare with a personal touch.
                            Our team of experienced professionals is committed
                            to offering comprehensive medical solutions tailored
                            to your individual needs.
                        </p>
                    </div>
                    <div className="mb-8">
                        <h2 className="text-3xl font-semibold mb-4">
                            Meet Our Team
                        </h2>
                        <p className="text-lg mb-4">
                            Our team consists of highly qualified doctors,
                            nurses, and support staff, all working together to
                            ensure you receive the best care possible. We take
                            pride in our expertise and compassion, striving to
                            make your experience comfortable and effective.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-3xl font-semibold mb-4">
                            Why Choose Us?
                        </h2>
                        <p className="text-lg mb-4">
                            With state-of-the-art facilities and a
                            patient-centered approach, DoctorConsult stands out
                            for its commitment to excellence. We are dedicated
                            to continuous improvement and innovation in
                            healthcare to ensure the best outcomes for our
                            patients.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AboutUs;
