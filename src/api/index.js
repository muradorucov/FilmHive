
import axios from "axios"


let movieApiURL = import.meta.env.VITE_MOVIES_API
let saveApiURL = import.meta.env.VITE_SAVE_API



export const movieApi = axios.create({
    baseURL: movieApiURL
})

export const saveApi = axios.create({
    baseURL: saveApiURL
})