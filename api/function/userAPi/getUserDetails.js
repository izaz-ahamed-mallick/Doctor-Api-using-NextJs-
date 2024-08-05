import React from "react";
import axiosInstance from "../../axios/helper";
import { endPoints } from "../../endPoints/endPoints";

const getUserDetails = async (id) => {
    const response = await axiosInstance.get(`${endPoints.userDash}/${id}`);

    return response.data.data;
};

export default getUserDetails;
