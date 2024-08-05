"use client";
import Image from "next/image";
import React from "react";
import { useGetUserDetails } from "../../../customHooks/UserDetails";
import { Cookies } from "react-cookie";
import Loader from "../components/Loader";
import { imgPath } from "../../../api/axios/helper";
import { AiOutlineCheckCircle, AiOutlineClockCircle } from "react-icons/ai";

const UserDashboard = () => {
    const cookie = new Cookies();
    const name = cookie.get("name");
    const email = cookie.get("email");
    const phone = cookie.get("phone");

    const { data, isLoading, isError } = useGetUserDetails(
        cookie.get("userId")
    );

    if (isLoading)
        return (
            <>
                <Loader />
            </>
        );

    return (
        <div className="bg-gray-100 min-h-screen p-6">
            <div className="bg-white shadow-2xl rounded-3xl p-8 max-w-4xl mx-auto text-gray-800">
                <h1 className="text-4xl font-extrabold mb-8">User Dashboard</h1>

                <div className="mb-12">
                    <h2 className="text-3xl font-bold mb-6">User Details</h2>
                    <div className="space-y-3">
                        <p className="text-xl">
                            <strong>Name:</strong> {name}
                        </p>
                        <p className="text-xl">
                            <strong>Email:</strong> {email}
                        </p>
                        <p className="text-xl">
                            <strong>Phone:</strong> {phone}
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className="text-3xl font-bold mb-6">Appointments</h2>
                    <div className="space-y-6">
                        {data.map((appointment, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 p-6 rounded-2xl shadow-lg relative"
                            >
                                <div className="flex items-center space-x-6 mb-6">
                                    <div className="relative w-16 h-16 rounded-full overflow-hidden">
                                        <Image
                                            src={
                                                imgPath +
                                                appointment?.doctor_id?.image
                                            }
                                            alt={appointment?.doctor_id?.name}
                                            fill
                                            priority
                                            sizes="auto"
                                            style={{ objectFit: "cover" }}
                                            className="rounded-full"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold">
                                            {appointment?.doctor_id?.name}
                                        </h3>
                                        <p className="text-gray-500">
                                            {
                                                appointment?.department_id
                                                    ?.departmentName
                                            }
                                        </p>
                                    </div>
                                </div>
                                <div className="absolute top-4 right-4">
                                    {appointment.isPending ? (
                                        <AiOutlineClockCircle
                                            className="text-yellow-500"
                                            size={30}
                                        />
                                    ) : (
                                        <AiOutlineCheckCircle
                                            className="text-green-500"
                                            size={30}
                                        />
                                    )}
                                </div>
                                <p className="mb-3">
                                    <strong>Appointment Date:</strong>{" "}
                                    {new Date(
                                        appointment.updatedAt
                                    ).toLocaleDateString()}
                                </p>
                                <p className="mb-3">
                                    <strong>Phone:</strong> {appointment.phone}
                                </p>
                                <p className="mb-3">
                                    <strong>Message:</strong>{" "}
                                    {appointment.message}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;
