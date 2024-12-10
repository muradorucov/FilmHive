import { movieApi } from "../api"
let key = import.meta.env.VITE_API_KEY

export const getMoviesSearch = async (text = "spider") => {
    const res = await movieApi.get(`/?s=${text}&apikey=${key}`)

    if (!res.data) {
        throw new Error("Movies Not Found");
    }

    return res.data
}


export const getSingleMovie = async (id) => {
    const res = await movieApi.get(`/?i=${id}&apikey=${key}`)

    if (!res.data) {
        throw new Error("Movies Not Found");
    }

    return res.data
}