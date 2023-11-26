import axiosInstance, {APIOption} from "@/api/utils/AxiosInstance";
import {ResponseBody} from "@/api/utils/type";
import axios from "axios";
import {RESPONSE_CODE} from "@/enums/RESPONSE_CODE";
import cookie from "@/libraries/cookie";
import {cookies} from "next/headers";

class APIService {
    /**
     * @return string
     */
    public static getBaseUrl(): string {
        return process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:8080/api/v1";
    }

    /**
     *
     * @param endpoint
     * @param body
     * @param option
     */
    public static async post<PayloadType>(endpoint: string, body: object | null, option?: APIOption): Promise<ResponseBody<PayloadType>> {
        const response = await axiosInstance(true, option).post(this.getBaseUrl() + endpoint, body);
        return response.data;
    }

    /**
     *
     * @param endpoint
     * @param withAuth
     * @param options
     */
    public static async get<PayloadType>(endpoint: string, withAuth: boolean, options: APIOption = {}): Promise<ResponseBody<PayloadType>> {
        try {
            if (withAuth) {
                options = this.getAuth(options)
            }

            const response = await axiosInstance(false, options).get(this.getBaseUrl() + endpoint);
            return response.data;
        } catch (error: any) {
            this.fetchingErrorHandler(error)
            throw error;
        }
    }

    private static fetchingErrorHandler(error: any) {
        if (axios.isAxiosError(error)) {
            if (error.response?.data.rc === RESPONSE_CODE.ERR_UNAUTHENTICATED) {
                console.log(cookie.get("access_token"));
                console.log("HARUSNYA LOGOUT")
            }
        }
    }

    private static getAuth(options: APIOption) {
        return {
            headers: {
                ...options?.headers,
                Authorization: "Bearer " + cookie.get("access_token")
            },
            ...options,
        }
    }
}

export default APIService;