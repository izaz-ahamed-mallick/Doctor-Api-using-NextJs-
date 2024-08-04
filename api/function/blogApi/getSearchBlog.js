import React from "react";
import axiosInstance from "../../axios/helper";
import { endPoints } from "../../endPoints/endPoints";

const getSearchBlog = async (searchQuery) => {
    const response = await axiosInstance.get(
        `${endPoints.blog.searchBlog}/${searchQuery}`
    );
    console.log(response.data.data);

    return response.data.data;
};

export default getSearchBlog;
