import {httpRequest} from "../utility/axios/httpRequest";

export const getPostCategories = async (page = 1, limit=1, sort = 'DESC') => {
    return await httpRequest(false).get(`/post-category?sort=${sort}&limit=${limit}&page=${page}`)
}

export const getPostCategoryById = async (id) => {
    return await httpRequest(false).get(`/post-category/${id}`)
}

export const createCategories = async () => {
    return await httpRequest(true).post(`/post-category`)
}

export const updatePostCategoryById = async (id) => {
    return await httpRequest(true).put(`/post-category/${id}`)
}

export const removePostCategoryById = async (id) => {
    return await httpRequest(true).put(`/post-category/${id}`)
}