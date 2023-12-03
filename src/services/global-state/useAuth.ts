import {create} from "zustand";
import {User} from "@/types/models/User";
import ClientSideCookie from "@/libraries/cookie";

type UserStore = {
    user: User | null,
    isLogin: boolean,
    token: {
        access_token: string | null,
        refresh_token: string | null
    },
    setLogin: (user: any) => void,
    setLoginCookie: () => void,
    setLoginStatus: (isLogin: boolean) => void,
}

const useAuth = create<UserStore>((set) => ({
    user: null,
    token: {
        access_token: null,
        refresh_token: null
    },
    isLogin: false,
    setLoginCookie: () => {
        ClientSideCookie.set("Iqbal", "atma", {isSecure:true})
    },
    setLogin: (user: any) => set(
        (state: any) => ({
            ...state,
            user: {...user},
            isLogin: true
        })
    ),
    setLoginStatus: (isLogin: boolean) => set((state: any) => ({
        ...state,
        isLogin
    }))
}));

export default useAuth