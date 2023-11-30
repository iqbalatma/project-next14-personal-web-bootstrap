import ServerSideAPIService from "@/api/utils/ServerSideAPIService";
import {Role} from "@/types/models/Roles";
import {PaginationType} from "@/types/Pagination";

export type PayloadGetAllRolePaginated = {
    data: Role[] | null,
    pagination?: PaginationType,
    error?: null | string
}

class RoleService extends ServerSideAPIService {
    public static async getAllPaginated(): Promise<PayloadGetAllRolePaginated> {
        try {
            const response = await this.get<PayloadGetAllRolePaginated>("/admin/management/rolesx", true);
            return response.payload
        } catch (error) {
            return {
                data: null,
                error: "Something went wrong"
            }
        }
    }
}

export default RoleService