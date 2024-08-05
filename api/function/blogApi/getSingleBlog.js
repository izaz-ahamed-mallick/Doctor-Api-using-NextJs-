import React from "react";
import axiosInstance from "../../axios/helper";
import { endPoints } from "../../endPoints/endPoints";

const getSingleBlog = async (id) => {
    const response = await axiosInstance.get(
        `${endPoints.blog.singleBlog}/${id}`
    );

    return response.data.data;
};

export default getSingleBlog;
