import React from "react";
// Create a separate CSS file for additional styles

const LoadingButton = ({ isLoading, children, bgCol, hoverCol, ...props }) => {
    return (
        <button
            {...props}
            className={`relative  text-white py-2 px-4 rounded-lg  ${bgCol} hover:${hoverCol} transition duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed`}
            disabled={isLoading}
        >
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="loader"></div>
                </div>
            )}
            <span className={`${isLoading ? "opacity-0" : "opacity-100"}`}>
                {children}
            </span>
        </button>
    );
};

export default LoadingButton;
