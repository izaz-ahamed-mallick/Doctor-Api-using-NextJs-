import React from "react";
import axiosInstance from "../../axios/helper";
import { endPoints } from "../../endPoints/endPoints";

const getBlog = async (selectBlog) => {
    const response = await axiosInstance.get(`/${selectBlog}`);

    return response.data.data;
};

export default getBlog;
