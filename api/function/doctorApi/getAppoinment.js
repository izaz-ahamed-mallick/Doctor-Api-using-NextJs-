import React from "react";
import axiosInstance from "../../axios/helper";
import { endPoints } from "../../endPoints/endPoints";

const getAppoinment = async (payload) => {
    const response = await axiosInstance.post(
        endPoints.doctor.appoinment,
        payload,
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    );

    return response;
};

export default getAppoinment;
