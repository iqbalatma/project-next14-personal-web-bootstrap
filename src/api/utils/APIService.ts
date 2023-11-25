import axiosInstance from "@/api/utils/axiosInstance";
import {ResponseBody} from "@/api/utils/type";

class APIService {
    /**
     * @return string
     */
    public static getBaseUrl(): string {
        return process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:8080/api/v1/auth";
    }

    /**
     *
     * @param endpoint
     * @param body
     */
    public static async post<PayloadType>(endpoint: string, body: object): Promise<ResponseBody<PayloadType>> {
        const response = await axiosInstance(true).post(this.getBaseUrl() + endpoint, body);

        return response.data;
    }
}

export default APIService;