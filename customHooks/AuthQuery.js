import { useMutation } from "@tanstack/react-query";
import login from "../api/function/login";
import { Cookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { loginDetails } from "../Store/AuthSlice";
import registration from "../api/function/registration";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

let cookies = new Cookies();

export const useLoginMutation = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    return useMutation({
        mutationFn: login,
        onSuccess: (response) => {
            const { status, token, message } = response.data;
            const { image, name, _id } = response.data.data;
            if (status === 200) {
                toast.success(message);
                dispatch(loginDetails({ image, name, _id, token }));
                router.push("/doctorList");
            }
        },
        onError: (error) => {
            const { message } = error.response.data;
            toast.error(message);
        },
    });
};

export const useRegistrationMutation = () => {
    const router = useRouter();
    return useMutation({
        mutationFn: registration,
        onSuccess: (response) => {
            const { message } = response.data;

            if (response.status === 200) {
                toast.success(message);
                router.push("auth/login");
            }
        },
        onError: (error) => {
            const { message } = error.response.data;
            toast.error(message);
        },
    });
};
