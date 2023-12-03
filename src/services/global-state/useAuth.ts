import {create} from "zustand";
import {User} from "@/types/models/User";
import ClientSideCookie from "@/libraries/cookie";
import JWTService from "@/services/JWTService";
import {PayloadLogin} from "@/api/client-side/auth/AuthenticateService";
import COOKIE_SAME_SITE from "@/enums/COOKIE_SAME_SITE";

type UserStore = {
    user: User | null,
    isLogin: boolean,
    token: {
        access_token: string | null,
        refresh_token: string | null
    },
    logout: () => void,
    check: () => void,
    setLogin: (response: PayloadLogin) => void,
    setLoginStatus: (isLogin: boolean) => void,
}

const useAuth = create<UserStore>((set) => ({
    user: null,
    token: {
        access_token: null,
        refresh_token: null
    },
    isLogin: false,
    check: () => {
        set((state) => {
            const isLogin = state.isLogin;
            if (!isLogin){
                const accessToken = ClientSideCookie.get("access_token");
                if (accessToken && accessToken !== "" && JWTService.getUser(accessToken)){
                    const user = JWTService.getUser(accessToken)
                    state.isLogin = true;
                    state.user = user;
                }else{
                    state.isLogin = false;
                    state.user = null;
                    state.token.access_token = null;
                }
            }

            return state;
        });
    },
    setLogin: (response: PayloadLogin) => {
        set((state: any) => ({
            ...state,
            user: {...response.data},
            isLogin: true
        }))

        const parsedAccessToken = JWTService.getParsedJWT(response.data.token.access_token);
        const parsedRefreshToken = JWTService.getParsedJWT(response.data.token.refresh_token);

        if (parsedAccessToken) {
            ClientSideCookie.set("access_token", response.data.token.access_token, {
                isSecure: true,
                path: "/",
                sameSite: COOKIE_SAME_SITE.LAX,
                expires: new Date(parsedAccessToken.exp * 1000)
            })
        }
        if (parsedRefreshToken) {
            ClientSideCookie.set("refresh_token", response.data.token.refresh_token, {
                isSecure: true,
                path: "/",
                sameSite: COOKIE_SAME_SITE.LAX,
                expires: new Date(parsedRefreshToken.exp * 1000)
            })
        }
    },
    logout: () => {
        set((state: any) => ({
            ...state,
            user: null,
            isLogin: false,
            token: {
                access_token: null,
                refresh_token: null
            },
        }))
        ClientSideCookie.remove("access_token")
    },
    setLoginStatus: (isLogin: boolean) => set((state: any) => ({
        ...state,
        isLogin
    }))
}));

export default useAuth