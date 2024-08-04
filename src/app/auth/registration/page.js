"use client";
import React, { useState } from "react";
import Link from "next/link";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useRegistrationMutation } from "../../../../customHooks/AuthQuery";
import LoadingButton from "../../../../Utils/LoadingButton";

const Signup = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        setImage(URL.createObjectURL(e.target.files[0]));
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible(!confirmPasswordVisible);
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm();
    const { mutate, isPending } = useRegistrationMutation();

    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("phone", data.phone);
        formData.append("password", data.password);
        formData.append("forget", data.confirmPassword);
        formData.append("image", data.image[0]);

        mutate(formData);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-green-500">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
                    Register for DoctorConsult
                </h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-semibold mb-2"
                            htmlFor="name"
                        >
                            Name
                        </label>
                        <input
                            {...register("name", {
                                required: "Name is required",
                            })}
                            type="text"
                            id="name"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Enter your name"
                        />
                        {errors.name && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.name.message}
                            </p>
                        )}
                    </div>
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
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-semibold mb-2"
                            htmlFor="phone"
                        >
                            Phone
                        </label>
                        <input
                            {...register("phone", {
                                required: "Phone number is required",
                                pattern: {
                                    value: /^[7-9]{1}[0-9]{9}$/,
                                    message: "Invalid phone number",
                                },
                            })}
                            type="tel"
                            id="phone"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Enter your phone number"
                        />
                        {errors.phone && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.phone.message}
                            </p>
                        )}
                    </div>
                    <div className="mb-4 ">
                        <label
                            className="block text-gray-700 text-sm font-semibold mb-2"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <div className="relative">
                            <input
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 6,
                                        message:
                                            "Password must be at least 6 characters",
                                    },
                                })}
                                type={passwordVisible ? "text" : "password"}
                                id="password"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Enter your password"
                            />
                            <div
                                className="absolute top-2 right-0 pr-3 flex items-center  cursor-pointer"
                                onClick={togglePasswordVisibility}
                            >
                                {passwordVisible ? (
                                    <EyeIcon className="h-5 w-5 text-gray-500" />
                                ) : (
                                    <EyeSlashIcon className="h-5 w-5 text-gray-500" />
                                )}
                            </div>
                        </div>
                        {errors.password && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.password.message}
                            </p>
                        )}
                    </div>
                    <div className="mb-4 relative">
                        <label
                            className="block text-gray-700 text-sm font-semibold mb-2"
                            htmlFor="confirm-password"
                        >
                            Confirm Password
                        </label>
                        <div className="relative">
                            <input
                                {...register("confirmPassword", {
                                    required: "Confirm password is required",
                                    validate: (value) =>
                                        value === watch("password") ||
                                        "Passwords do not match",
                                })}
                                type={
                                    confirmPasswordVisible ? "text" : "password"
                                }
                                id="confirm-password"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Confirm your password"
                            />
                            <div
                                className="absolute inset-y-0 top-2 right-0 pr-3 flex items-center cursor-pointer"
                                onClick={toggleConfirmPasswordVisibility}
                            >
                                {confirmPasswordVisible ? (
                                    <EyeIcon className="h-5 w-5 text-gray-500" />
                                ) : (
                                    <EyeSlashIcon className="h-5 w-5 text-gray-500" />
                                )}
                            </div>
                        </div>
                        {errors.confirmPassword && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.confirmPassword.message}
                            </p>
                        )}
                    </div>
                    <div className="mb-6">
                        <label
                            className="block text-gray-700 text-sm font-semibold mb-2"
                            htmlFor="image"
                        >
                            Profile Image
                        </label>
                        <input
                            {...register("image")}
                            type="file"
                            id="image"
                            accept="image/*"
                            className="block w-full text-sm text-gray-500
                                file:mr-4 file:py-2 file:px-4
                                file:rounded-full file:border-0
                                file:text-sm file:font-semibold
                                file:bg-blue-50 file:text-blue-700
                                hover:file:bg-blue-100"
                            onChange={handleImageChange}
                        />
                        {image && (
                            <Image
                                src={image}
                                alt="Profile"
                                width={128} // Adjust width as needed
                                height={128} // Adjust height as needed
                                className="mt-4 rounded-full w-32 h-32 object-cover mx-auto"
                            />
                        )}
                    </div>
                    <div className="flex items-center justify-between">
                        {/* <button
                            type="submit"
                            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
                        >
                            Sign Up
                        </button> */}
                        <LoadingButton
                            type="submit"
                            isLoading={isPending}
                            bgCol={"bg-green-600"}
                            hoverCol={"bg-green-700"}
                        >
                            Sign Up
                        </LoadingButton>
                        <Link href="/auth/login" legacyBehavior>
                            <a className="inline-block align-baseline font-bold text-sm text-blue-600 hover:text-blue-800 transition duration-300">
                                Already have an account? Login
                            </a>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
