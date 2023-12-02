import ServerSideAPIService from "@/api/utils/ServerSideAPIService";
import {Role} from "@/types/models/Roles";
import {PaginationType} from "@/types/Pagination";

export type PayloadGetAllRolePaginated = {
    data: Role[] | null,
    pagination?: PaginationType,
    error?: null | string
}

class RoleService extends ServerSideAPIService {
    public static async getAllPaginated(page: string|string[]|null): Promise<PayloadGetAllRolePaginated> {
        try {
            const perpage = page ? "page="+page:"";
            console.log(perpage)
            const response = await this.get<PayloadGetAllRolePaginated>("/admin/management/roles?"+perpage, true);
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