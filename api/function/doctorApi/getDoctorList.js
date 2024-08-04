import React from "react";
import axiosInstance from "../../axios/helper";
import { endPoints } from "../../endPoints/endPoints";

const getDoctorList = async (id) => {
    const response = await axiosInstance.get(
        `${endPoints.doctor.deptWiseDoctor}/${id}`
    );

    return response.data.data;
};

export default getDoctorList;
