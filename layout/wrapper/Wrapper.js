"use client"; // This directive ensures client-side execution

import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Wrapper = ({ children }) => {
    return (
        <>
            <div className="min-h-screen w-full flex flex-col">
                <Header />
                <main className="h-full w-full flex-grow">{children}</main>
                <Footer />
            </div>
        </>
    );
};

export default Wrapper;
