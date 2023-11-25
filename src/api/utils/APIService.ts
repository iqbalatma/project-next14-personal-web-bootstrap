import axiosInstance, {APIOption} from "@/api/utils/AxiosInstance";
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

    /**
     *
     * @param endpoint
     * @param options
     */
    public static async get<PayloadType>(endpoint: string, options: APIOption = {}): Promise<ResponseBody<PayloadType>> {
        const response = await axiosInstance(false, options).get(this.getBaseUrl() + endpoint);

        return response.data;
    }
}

export default APIService;