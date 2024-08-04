// pages/login.js

"use client";
import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../../../../customHooks/AuthQuery";
import LoadingButton from "../../../../Utils/LoadingButton";

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { mutate, isPending } = useLoginMutation();

    const onSubmit = (data) => {
        // Handle the form submission logic here

        mutate(data);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-green-500">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
                    Login to DoctorConsult
                </h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-semibold mb-2"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Invalid email address",
                                },
                            })}
                            type="email"
                            id="email"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Enter your email"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.email.message}
                            </p>
                        )}
                    </div>
                    <div className="mb-6">
                        <label
                            className="block text-gray-700 text-sm font-semibold mb-2"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <input
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message:
                                        "Password must be at least 6 characters",
                                },
                            })}
                            type="password"
                            id="password"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Enter your password"
                        />
                        {errors.password && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.password.message}
                            </p>
                        )}
                    </div>
                    <div className="flex items-center justify-between">
                        {/* <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
                        ></button> */}
                        <LoadingButton
                            type="submit"
                            isLoading={isPending}
                            bgCol={"bg-blue-600"}
                            hoverCol={"bg-blue-700"}
                        >
                            Login
                        </LoadingButton>
                        <Link
                            href="/auth/registration"
                            className="inline-block align-baseline font-bold text-sm text-blue-600 hover:text-blue-800 transition duration-300"
                        >
                            Sign Up
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
