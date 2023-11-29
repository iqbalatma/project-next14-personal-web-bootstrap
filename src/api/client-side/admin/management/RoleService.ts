import APIService from "@/api/utils/APIService";
import {PaginationType} from "@/types/Pagination";
import {Role} from "@/types/models/Roles";

export type PayloadGetAllRole = {
    data: Role[] | null,
    pagination?: PaginationType,
    error?: null | string
}

class RoleService {
    public static async getAllPaginated() {
        try {
            const response = await APIService.get<PayloadGetAllRole>("/admin/management/roles", true);
            return response.payload;
        } catch (error) {
            return {
                "data": null,
                "error": 'Something went wrong'
            }
        }
    }
}

export default RoleService