import axios from "axios";

type APIOptionType = {
    headers?: object
}
const axiosInstance = (isFormData: boolean = false, options?: APIOptionType) => {
    return axios.create({
        headers: {
            "Content-Type": isFormData ? "multipart/form-data" : "application/json",
            ...options?.headers
        }
    })
}

export default axiosInstance;