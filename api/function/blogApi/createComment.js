import React from "react";
import axiosInstance from "../../axios/helper";
import { endPoints } from "../../endPoints/endPoints";

const createComment = async (payload) => {
    const response = await axiosInstance.post(
        endPoints.blog.createComment,
        payload,
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    );

    return response.data;
};

export default createComment;
