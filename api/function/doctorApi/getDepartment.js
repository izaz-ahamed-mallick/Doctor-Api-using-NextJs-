import axiosInstance from "../../axios/helper";
import { endPoints } from "../../endPoints/endPoints";

const getDepartment = async () => {
    const response = await axiosInstance.get(endPoints.doctor.department);

    return response.data.data;
};

export default getDepartment;
