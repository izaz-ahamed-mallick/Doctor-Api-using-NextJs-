import { useQuery } from "@tanstack/react-query";
import getUserDetails from "../api/function/userAPi/getUserDetails";

export const useGetUserDetails = (id) => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ["userDetails", id],
        queryFn: () => getUserDetails(id),
    });
    return { data, isLoading, isError };
};
