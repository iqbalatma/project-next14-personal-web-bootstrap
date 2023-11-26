import {useState} from "react";
import HTTP_RESPONSE_TYPE from "@/enums/HTTP_RESPONSE_TYPE";
import {useRouter} from "next/navigation";
import helper from "@/services/helper";
import AuthenticateService from "@/api/client-side/auth/AuthenticateService";
import useAuthCookie from "@/services/auth/useAuthCookie";
import {RESPONSE_CODE} from "@/enums/RESPONSE_CODE";
import useAlert from "@/services/global-state/useAlert";

type LoginInputErrors = {
    email?: string | null,
    password?: string | null,
}
const useLogin = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [inputErrors, setInputErrors] = useState<LoginInputErrors>({
        email: null,
        password: null
    })
    const {setLoginCookie} = useAuthCookie()
    const {setAlert} = useAlert.getState()
    let isErrors: boolean = false;
    const router = useRouter()


    const initialState = () => {
        setInputErrors({
            email: null,
            password: null
        })
    }

    const handleSubmit = async (): Promise<void> => {
        initialState()
        try {
            if (password === "") {
                setInputErrors((prevErrors) => ({
                    ...prevErrors,
                    password: "Password is required",
                }))
                isErrors = true
            }
            if (email === "") {
                setInputErrors((prevErrors) => ({
                    ...prevErrors,
                    email: "Email is required",
                }))
                isErrors = true
            }

            if (isErrors) {
                return;
            }


            const response = await AuthenticateService.login(email, password)
            setLoginCookie(response)
            router.push("/dashboard")
        } catch (exceptionError: any) {
            const {errorCode, errorType} = helper.parseFetchException(exceptionError);
            if (errorType === HTTP_RESPONSE_TYPE.CLIENT_ERROR) {
                if (errorCode === RESPONSE_CODE.ERR_UNAUTHENTICATED) {
                    setAlert("Invalid user credentials")
                    setInputErrors({
                        password: "Password is invalid",
                        email: "Email is invalid",
                    })
                }
            }

            if (errorType === HTTP_RESPONSE_TYPE.SERVER_ERROR) {
                setAlert("Something went wrong")
            }
        }
    }

    return {
        handleSubmit,
        setEmail,
        setPassword,
        inputErrors
    }
}

export default useLogin;