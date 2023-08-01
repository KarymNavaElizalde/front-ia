
import axios from "axios"

export const urlBase = axios.create({
    baseURL: 'http://localhost:3050/'
})

