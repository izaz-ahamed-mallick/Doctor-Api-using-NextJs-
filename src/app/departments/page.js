"use client";
import Image from "next/image";
import departmentImage from "../../../public/Images/department1.jpeg";
import { useGetAllDepartment } from "../../../customHooks/DoctorQuery";
import { imgPath, sanitizeImagePath } from "../../../api/axios/helper";
import { useState } from "react";
import Link from "next/link";
import HeroSection from "../components/HeroSection";

import Loader from "../components/Loader";

const DepartmentsPage = () => {
    const [expandedDept, setExpandedDept] = useState(null);
    const { data, isError, isLoading } = useGetAllDepartment();

    if (isLoading)
        return (
            <div className="text-center p-8">
                <Loader />
            </div>
        );
    if (isError)
        return <div className="text-center p-8">Error loading departments</div>;

    const handleLearnMore = (deptName) => {
        setExpandedDept((prev) => (prev === deptName ? null : deptName));
    };

    return (
        <div className="bg-gray-100 min-h-[1400px]">
            {/* Hero Section */}

            <HeroSection
                title={`Our Departments`}
                subtitle="Discover our specialized departments dedicated to
                        providing exceptional care."
                imageSrc={departmentImage} // Update the path accordingly
                height="h-80"
                textColor="text-white"
            />

            {/* Department Cards */}
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.map((dept) => (
                        <div
                            key={dept.departmentName}
                            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 relative border border-gray-200"
                        >
                            <div className="relative h-48">
                                {dept.image ? (
                                    <Image
                                        src={
                                            imgPath +
                                            sanitizeImagePath(dept.image)
                                        }
                                        alt={dept.departmentName}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 
                           (max-width: 1200px) 50vw, 
                           33vw"
                                        style={{ objectFit: "cover" }}
                                        className="absolute inset-0"
                                    />
                                ) : (
                                    <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                                        <span className="text-gray-500">
                                            No Image Available
                                        </span>
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 hover:bg-opacity-50"></div>
                            </div>
                            <div
                                className={`p-6 transition-all duration-300 ease-in-out ${
                                    expandedDept === dept.departmentName
                                        ? "max-h-[400px] opacity-100"
                                        : "max-h-60 opacity-75"
                                }`}
                                style={{ overflow: "hidden" }}
                            >
                                <h2 className="text-2xl font-semibold mb-2">
                                    {dept.departmentName}
                                </h2>
                                <p className="text-gray-700 mb-4">
                                    {expandedDept === dept.departmentName
                                        ? dept.description
                                        : `${dept.description.slice(
                                              0,
                                              100
                                          )}...`}
                                </p>
                                <div className="flex justify-between">
                                    <button
                                        onClick={() =>
                                            handleLearnMore(dept.departmentName)
                                        }
                                        className="bg-blue-600 text-white xl:px-4 xl:text-lg sm:px-2 px-2 py-2 md:px-1 md:py-2 md:text-sm   rounded-lg hover:bg-blue-700 transition duration-300"
                                    >
                                        {expandedDept === dept.departmentName
                                            ? "Show Less"
                                            : "Learn More"}
                                    </button>
                                    <Link
                                        href={`/doctor/${dept.departmentName}/${dept._id}`}
                                        className="bg-green-600 text-white xl:px-4 xl:text-lg sm:px-2 px-2 py-2 md:px-1 md:py-2 md:text-sm   rounded-lg hover:bg-green-700 transition duration-300"
                                    >
                                        Check Our Doctor
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DepartmentsPage;
