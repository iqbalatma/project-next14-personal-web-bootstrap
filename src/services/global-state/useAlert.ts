import {create} from "zustand";
import {User} from "@/types/models/User";

type AlertStore = {
    isShowAlert: boolean,
    textAlert: string,
    setAlert: (textAlert: string) => void,
    closeAlert: () => void,
}

const useAlert = create<AlertStore>((set) => ({
    isShowAlert: false,
    textAlert: "",
    setAlert: (textAlert: string) => set(
        (state: any) => ({
            ...state,
            textAlert,
            isShowAlert: true
        })
    ),
    closeAlert: () => set(
        (state: any) => ({
            ...state,
            textAlert: "",
            isShowAlert : false
        })
    ),
}));

export default useAlert