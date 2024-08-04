/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "doctor-service.onrender.com",
                port: "",
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;
