import APIService from "@/api/utils/APIService";
import cookie from "@/libraries/cookie";
import {ResponseBody} from "@/api/utils/type";
import {Permission} from "@/types/models/Permission";
import {PaginationType} from "@/types/Pagination";
import axios from "axios";
import {FetchingError} from "@/types/FetchingError";

export type PayloadGetAll = {
    data: Permission[],
    pagination: PaginationType
}

class PermissionService {
    public static async getAll(): Promise<PayloadGetAll | FetchingError> {
        try {
            const response: ResponseBody<PayloadGetAll> = await APIService.get("/admin/management/permissions", {
                headers: {
                    Authorization: `Bearer ${cookie.get("access_token")}`
                }
            });

            return response.payload
        } catch (error: any) {
            return {
                "data": [],
                "error": 'Something went wrong'
            }
        }
    }
}

export default PermissionService;

