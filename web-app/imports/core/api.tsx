import axios from "axios"
import { apiConstants } from "./constants"

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

function getCookie(name: string): string | undefined {
    const value = `; ${document.cookie}`
    const parts = value.split(`; ${name}=`)
    const pop = parts.pop() ?? ""
    
    if (parts.length === 2) return pop.split(';').shift() 
}

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem(apiConstants.ACCESS_TOKEN)
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }

        const csrfToken = getCookie("csrftoken")
        if (csrfToken) {
            config.headers["X-CSRFToken"] = csrfToken
        }

        return config
    },
    (error) => {
        return Promise.reject(error)
    }
) 

export default api