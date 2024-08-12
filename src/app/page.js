"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

import img1 from "../../public/Images/img1.jpeg";
import img2 from "../../public/Images/img2.jpeg";
import img3 from "../../public/Images/img3.jpeg";
import img4 from "../../public/Images/img4.jpeg";
import img5 from "../../public/Images/img5.jpeg";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const images = [
    { src: img1, text: "Welcome to Our Clinic" },
    { src: img2, text: "Expert Medical Advice" },
    { src: img3, text: "Compassionate Care" },
    { src: img4, text: "Your Health, Our Priority" },
    { src: img5, text: "Schedule Your Appointment" },
];

export default function Home() {
    const [isClient, setIsClient] = useState(false);
    const isAuthenticate = useSelector((state) => state.Auth.isAuthenticate);
    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <div className="w-full h-[700px] relative">
            <Swiper
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination]}
                loop={true}
                className="h-full"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index} className="relative">
                        <div className="relative w-full h-full">
                            <Image
                                src={image.src}
                                alt={`Slide ${index}`}
                                className="rounded-lg  "
                                fill
                                priority
                                style={{ objectFit: "cover" }}
                                placeholder="blur"
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                                <div className="bg-black bg-opacity-50 text-white p-4 rounded-md text-center mb-4">
                                    <h2 className="md:text-4xl sm:text-4xl text-xl font-bold">
                                        {image.text}
                                    </h2>
                                </div>
                                {isAuthenticate && isClient ? (
                                    <Link href="/doctorList">
                                        <button className="bg-blue-500 md:text-md text-md text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 transition-colors duration-300">
                                            View Our Service
                                        </button>
                                    </Link>
                                ) : (
                                    <Link href="/auth/login">
                                        <button className="bg-blue-500 md:text-md text-md text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 transition-colors duration-300">
                                            Login to Take Service
                                        </button>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
