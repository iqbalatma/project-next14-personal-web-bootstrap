import APIService from "@/api/utils/APIService";
import {ResponseBody} from "@/api/utils/type";

export type PayloadLogin = {
    data: {
        id: string,
        firstname: string,
        lastname: string,
        fullname: string,
        email: string,
        token: {
            access_token: string,
            refresh_token: string,
            type: string
        }
    }
}

class AuthenticateService {
    /**
     *
     * @param email
     * @param password
     */
    public static async login(email: string, password: string): Promise<PayloadLogin> {
        const response = await APIService.post<PayloadLogin>("/auth", {
            email,
            password
        });

        return response.payload;
    }
}

export default AuthenticateService