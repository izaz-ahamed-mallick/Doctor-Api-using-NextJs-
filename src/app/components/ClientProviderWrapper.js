"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CookiesProvider } from "react-cookie";
import { Provider } from "react-redux";
import AppStore from "../../../Store/AppStore";
import queryClient from "../../../customHooks/globalHooks/globalHooks";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ClientProviderWrapper = ({ children }) => {
    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={AppStore}>
                <CookiesProvider>{children}</CookiesProvider>
            </Provider>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
};

export default ClientProviderWrapper;
