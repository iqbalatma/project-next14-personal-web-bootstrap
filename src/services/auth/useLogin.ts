import {useEffect, useState} from "react";
import HTTP_RESPONSE_TYPE from "@/enums/HTTP_RESPONSE_TYPE";
import ERROR_CODE from "@/enums/ERROR_CODE";
import {useRouter} from "next/navigation";
import helper from "@/services/helper";
import AuthenticateService from "@/api/auth/AuthenticateService";
import useAuthCookie from "@/services/auth/useAuthCookie";

type LoginInputErrors = {
    email?: string | null,
    password?: string | null,
}
const useLogin = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [alertError, setAlertError] = useState<string | null>(null)
    const [inputErrors, setInputErrors] = useState<LoginInputErrors>({
        email: null,
        password: null
    })
    const {setLoginCookie} = useAuthCookie()
    let isErrors: boolean = false;
    const router = useRouter()

    const handleCloseAlert = (): void => {
        setAlertError(null)
    }

    const initialState = () => {
        setInputErrors({
            email: null,
            password: null
        })
        setAlertError(null)
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
                if (errorCode === ERROR_CODE.ERR_UNAUTHENTICATED) {
                    setAlertError("Invalid user credentials")
                    setInputErrors({
                        password: "Password is invalid",
                        email: "Email is invalid",
                    })
                }
            }

            if (errorType === HTTP_RESPONSE_TYPE.SERVER_ERROR) {
                setAlertError("Something went wrong")
            }
        }
    }

    return {
        handleSubmit,
        handleCloseAlert,
        setEmail,
        setPassword,
        alertError,
        inputErrors
    }
}

export default useLogin;