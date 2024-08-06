"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import { useDoctorDetails } from "../../../../customHooks/DoctorQuery";
import { imgPath, sanitizeImagePath } from "../../../../api/axios/helper";
import HeroSection from "@/app/components/HeroSection";
import { useRouter } from "next/navigation";
import img from "../../../../public/Images/details2.jpeg";
import Loader from "@/app/components/Loader";

const DoctorDetailsPage = ({ params }) => {
    const { drId } = params;
    const { data, isError, isLoading } = useDoctorDetails(drId);
    const router = useRouter(); // Initialize the router

    if (isLoading)
        return (
            <>
                <Loader />
            </>
        );
    if (isError)
        return (
            <div className="text-center p-8">Error loading doctor details</div>
        );

    const { data: doctor } = data;

    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Hero Section */}
            <HeroSection
                title={`${doctor.name}`}
                subtitle={doctor.department_id.departmentName}
                imageSrc={img} // Update the path accordingly
                height="h-80"
                textColor="text-white"
            />

            {/* Back Button */}
            <div className="container mx-auto px-4 py-4">
                <button
                    onClick={() => router.back()} // Navigate back to the previous page
                    className="bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-300"
                >
                    Back
                </button>
            </div>

            {/* Doctor Details */}
            <div className="container mx-auto px-4 py-8">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
                    <div className="p-6">
                        <div className="flex items-center space-x-6">
                            <div className="flex-shrink-0 w-32 h-32 relative">
                                <Image
                                    src={
                                        imgPath +
                                            sanitizeImagePath(doctor.image) ||
                                        "/default-doctor-image.jpg"
                                    }
                                    alt={doctor.name}
                                    fill
                                    priority
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    style={{
                                        objectFit: "cover",
                                        width: "100%",
                                        height: "100%",
                                    }}
                                    className="rounded-full"
                                />
                            </div>
                            <div>
                                <h2 className="text-2xl font-semibold mb-2">
                                    {doctor.name}
                                </h2>
                                <p className="text-gray-600 mb-4">
                                    {doctor.description}
                                </p>
                                <p className="text-gray-600 mb-2">
                                    <strong>Department:</strong>{" "}
                                    {doctor.department_id.departmentName}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorDetailsPage;
