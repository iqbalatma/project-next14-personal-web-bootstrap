import APIService from "@/api/utils/APIService";
import {cookies} from "next/headers";
import {ResponseBody} from "@/api/utils/type";

export type PayloadGetAll = {
    data: {
        id: string,
    }
}

class PermissionService {
    public static async getAll(): Promise<PayloadGetAll> {
        const response: ResponseBody<PayloadGetAll> = await APIService.get("/management/permissions", {
            headers: {
                Authorization: cookies().get("access_token")?.value ?? null
            }
        })

        return response.payload;
    }
}

export default PermissionService;