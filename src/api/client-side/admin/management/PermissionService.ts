import APIService from "@/api/utils/APIService";
import {ResponseBody} from "@/api/utils/type";
import {Permission} from "@/types/models/Permission";
import {PaginationType} from "@/types/Pagination";

export type PayloadGetAll = {
    data: Permission[]|null,
    pagination?: PaginationType,
    error?: null|string
}

class PermissionService {
    public static async getAll(): Promise<PayloadGetAll> {
        try {
            const response: ResponseBody<PayloadGetAll> = await APIService.get("/admin/management/permissions", true);
            return response.payload
        } catch (error: any) {
            return {
                "data": null,
                "error": 'Something went wrong'
            }
        }
    }
}

export default PermissionService;

