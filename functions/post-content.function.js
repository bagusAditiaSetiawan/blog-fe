import {httpRequest} from "../utility/axios/httpRequest";

export const getPostContents = async (page = 1, limit=1, sort = 'DESC') => {
    return await httpRequest(false).get(`/post-content?sort=${sort}&limit=${limit}&page=${page}`)
}

export const getPostContentById = async (id) => {
    return await httpRequest(false).get(`/post-content/${id}`)
}

export const createPostContent = async () => {
    return await httpRequest(true).post(`/post-content`)
}

export const updatePostContent = async (id) => {
    return await httpRequest(true).put(`/post-content/${id}`)
}

export const removePostContent = async (id) => {
    return await httpRequest(true).put(`/post-content/${id}`)
}