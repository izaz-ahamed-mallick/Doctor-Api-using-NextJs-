import axiosInstance from "../../axios/helper";
import { endPoints } from "../../endPoints/endPoints";

const login = async (payload) => {
    const data = await axiosInstance.post(endPoints.auth.login, payload);
    return data;
};

export default login;
