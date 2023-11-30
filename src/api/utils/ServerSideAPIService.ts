import BaseAPIService from "@/api/utils/BaseAPIService";
import axiosInstance, {APIOption} from "@/api/utils/AxiosInstance";
import {cookies, headers} from "next/headers";
import {ResponseBody} from "@/api/utils/type";

class ServerSideAPIService extends BaseAPIService {
    /**
     * @param endpoint
     * @param withAuth
     * @param options
     */
    public static async get<PayloadType>(endpoint: string, withAuth: boolean = false, options: APIOption = this.getDefaultOption()):Promise<ResponseBody<PayloadType>> {
        try {
            if (withAuth) {
                options = {
                    headers: {
                        Authorization: this.getAuth(),
                        ...options?.headers
                    }
                }
            }

            const response = await axiosInstance(false, options).get(this.getBaseUrl() + endpoint);
            return response.data;
        } catch (error: any) {
            throw error;
        }
    }

    private static getAuth(): string {
        const dataCookie = cookies();
        return `Bearer ${dataCookie.get("access_token")?.value ?? ""}`;
    }

    private static getUserAgent(): string {
        const dataHeader = headers()
        return dataHeader.get("User-Agent") ?? "";
    }

    private static getDefaultOption(): APIOption {
        return {
            headers: {
                "User-Agent" : this.getUserAgent()
            }
        }
    }
}

export default ServerSideAPIService;