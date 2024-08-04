import React from "react";
import axiosInstance from "../../axios/helper";
import { endPoints } from "../../endPoints/endPoints";

const getDoctorDetails = async (id) => {
    const response = await axiosInstance.get(
        `${endPoints.doctor.doctorDetails}/${id}`
    );
    return response.data;
};

export default getDoctorDetails;
