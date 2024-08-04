import { Inter } from "next/font/google";
import "./globals.css";
import Wrapper from "../../layout/wrapper/Wrapper";
import ClientProviderWrapper from "./components/ClientProviderWrapper";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ClientProviderWrapper>
                    <Wrapper>
                        {children}
                        <ToastContainer />
                    </Wrapper>
                </ClientProviderWrapper>
            </body>
        </html>
    );
}
