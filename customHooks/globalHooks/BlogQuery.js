import { useQuery } from "@tanstack/react-query";
import getBlog from "../../api/function/blogApi/getBlog";
import getSearchBlog from "../../api/function/blogApi/getSearchBlog";

export const useAllBlog = (selectBlog) => {
    const { data, isError, isLoading } = useQuery({
        queryKey: ["allBlog", selectBlog],
        queryFn: () => getBlog(selectBlog),
        staleTime: Infinity,
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
