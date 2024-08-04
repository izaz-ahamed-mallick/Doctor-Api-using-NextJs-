import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import getDepartment from "../api/function/doctorApi/getDepartment";
import getDoctorList from "../api/function/doctorApi/getDoctorList";
import getAppoinment from "../api/function/doctorApi/getAppoinment";
import { toast } from "react-toastify";
import getDoctorDetails from "../api/function/doctorApi/getDoctorDetails";
import contactApi from "../api/function/contactApiFn/contactApi";

export const useGetAllDepartment = () => {
    const { data, isError, isLoading } = useQuery({
        queryKey: ["department"],
        queryFn: getDepartment,
        staleTime: Infinity,
    });
    return { data, isError, isLoading };
};

export const useDepartmentDoctor = (id) => {
    const { data, isError, isLoading } = useQuery({
        queryKey: [id, "depmartmentDoctor"],
        queryFn: async () => await getDoctorList(id),
        staleTime: 5 * 60 * 1000,
        cacheTime: 10 * 60 * 1000,
    });
    return { data, isError, isLoading };
};

export const useCreateAppoinment = () => {
    return useMutation({
        mutationFn: getAppoinment,
        onSuccess: (response) => {
            const { message } = response.data;
            if (response.status === 200) {
                toast.success(message);
            }
        },
        onError: (error) => {
            const { message } = error.response.data;
            toast.error(message);
        },
    });
};

export const useDoctorDetails = (id) => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ["doctorDetails", id],
        queryFn: () => getDoctorDetails(id),
        staleTime: 5 * 60 * 1000,
        cacheTime: 10 * 60 * 1000,
    });
    return { data, isLoading, isError };
};

export const useContactUs = () => {
    return useMutation({
        mutationFn: contactApi,
        onSuccess: (response) => {
            console.log(response);
            const { message } = response.data;
            if (response.status === 200) {
                toast.success(message);
            }
        },
        onError: (error) => {
            console.log(error);
            const { message } = error.response.data;
            toast.error(message);
        },
    });
};
