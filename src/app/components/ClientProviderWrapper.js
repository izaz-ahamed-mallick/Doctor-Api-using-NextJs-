"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CookiesProvider } from "react-cookie";
import { Provider } from "react-redux";
import AppStore from "../../../Store/AppStore";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const ClientProviderWrapper = ({ children }) => {
    const queryClient = new QueryClient();
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
