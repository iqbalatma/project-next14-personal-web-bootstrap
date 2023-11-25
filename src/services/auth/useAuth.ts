import {create} from "zustand";
import {User} from "@/types/models/User";

type userStore = {
    user: User | null,
    isLogin: boolean,
    token: {
        access_token: string | null,
        refresh_token: string | null
    },
    setLogin: (user: any) => void,
    setLoginStatus: (isLogin: boolean) => void,
}

const useAuth = create<userStore>((set) => ({
    user: null,
    token: {
        access_token: null,
        refresh_token: null
    },
    isLogin: false,
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