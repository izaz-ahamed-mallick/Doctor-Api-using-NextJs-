import axiosInstance from "../../axios/helper";
import { endPoints } from "../../endPoints/endPoints";

const contactApi = async (payload) => {
    const response = await axiosInstance.post("/createcontact", payload, {
        headers: {
            "Content-Type": "application/json",
        },
    });

    return response;
};

export default contactApi;
