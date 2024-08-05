import React from "react";
import axiosInstance from "../../axios/helper";
import { endPoints } from "../../endPoints/endPoints";

const getComment = async (id) => {
    const response = await axiosInstance.get(
        `${endPoints.blog.singleComment}/${id}`
    );

    return response.data.data;
};

export default getComment;
