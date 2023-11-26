import axios from "axios";

export type Header = {
    Authorization: string | null
}

export type APIOption = {
    headers?: Header,
    "User-Agent"?: string | null
}
const axiosInstance = (isFormData: boolean = false, options?: APIOption) => {
    return axios.create({
        headers: {
            "Content-Type": isFormData ? "multipart/form-data" : "application/json",
            "Accept": "application/json",
            ...options?.headers
        }
    })
}

export default axiosInstance;