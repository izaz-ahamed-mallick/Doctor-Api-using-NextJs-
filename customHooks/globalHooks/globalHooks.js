import { QueryClient, useQueryClient } from "@tanstack/react-query";

export const useGlobalQuery = () => {
    const queryClient = useQueryClient();
    return queryClient;
};
