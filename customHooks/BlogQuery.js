import { useMutation, useQuery } from "@tanstack/react-query";
import getBlog from "../api/function/blogApi/getBlog";
import getSearchBlog from "../api/function/blogApi/getSearchBlog";
import getSingleBlog from "../api/function/blogApi/getSingleBlog";
import getComment from "../api/function/blogApi/getComment";
import createComment from "../api/function/blogApi/createComment";
import queryClient from "./globalHooks/globalHooks";

export const useAllBlog = (selectBlog) => {
    const { data, isError, isLoading } = useQuery({
        queryKey: ["allBlog", selectBlog],
        queryFn: () => getBlog(selectBlog),
        staleTime: 5 * 60 * 1000,
        cacheTime: 10 * 60 * 1000,
    });
    return { data, isLoading, isError };
};

export const useGetSearchBlog = (searchValue) => {
    const {
        data: searchData,
        isLoading: isLoader,
        isError: error,
    } = useQuery({
        queryKey: ["searchBlog", searchValue],
        queryFn: () => getSearchBlog(searchValue),

        enabled: !!searchValue, // Only fetch if searchValue is not empty
    });
    return { searchData, isLoader, error };
};

export const useGetSingleBlog = (id) => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ["singleBlog", id],
        queryFn: () => getSingleBlog(id),
    });

    return { data, isLoading, isError };
};

export const useSingleComment = (id) => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ["singleComment"],
        queryFn: () => getComment(id),
    });
    return { data, isLoading, isError };
};

export const useCreateComment = () => {
    return useMutation({
        mutationFn: createComment,
        onSuccess: (response) => {
            if (response.status === 200) {
                queryClient.invalidateQueries("singleComment");
            }
        },
    });
};
