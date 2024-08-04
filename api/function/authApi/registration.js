import axiosInstance from "../../axios/helper";
import { endPoints } from "../../endPoints/endPoints";

const registration = async (payload) => {
    const response = await axiosInstance.post(
        endPoints.auth.registration,
        payload
    );
    return response;
};

export default registration;
