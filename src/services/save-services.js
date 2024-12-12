import { saveApi } from "../api";

export const saveList = async (body) => {
    const res = await saveApi.post(`/api/movies/list/`, body)

    if (!res.data) {
        throw new Error("List not save");
    }

    return res.data
}

export const getSingleList = async (id) => {
    const res = await saveApi.get(`/api/movies/list/${id}`)

    if (!res.data) {
        throw new Error("List Not Found");
    }

    return res.data
}