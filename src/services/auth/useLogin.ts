import {useState} from "react";
import HTTP_RESPONSE_TYPE from "@/enums/HTTP_RESPONSE_TYPE";
import {useRouter} from "next/navigation";
import helper from "@/services/helper";
import AuthenticateService from "@/api/client-side/auth/AuthenticateService";
import useAuthCookie from "@/services/auth/useAuthCookie";
import {RESPONSE_CODE} from "@/enums/RESPONSE_CODE";
import useAlert from "@/services/global-state/useAlert";
import {z} from "zod";
import ValidationErrorMessages from "@/config/ValidationErrorMessages";
import useAuth from "@/services/global-state/useAuth";

type LoginInputErrors = {
    email?: string[] | null,
    password?: string[] | null,
}
const useLogin = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [inputErrors, setInputErrors] = useState<LoginInputErrors>({
        email: [],
        password: []
    })
    // const {setLoginCookie} = useAuthCookie()
    const {setAlert} = useAlert.getState()
    const {setLoginCookie} = useAuth.getState()
    const router = useRouter()


    const initialState = () => {
        setInputErrors({
            email: null,
            password: null
        })
    }

    const handleSubmit = async (): Promise<void> => {
        initialState()
        setLoginCookie()

        // try {
        //     const loginSchema = z.object({
        //         email: z.string().trim().min(1, {
        //             message: ValidationErrorMessages.required("Email")
        //         }).email(),
        //         password: z.string().trim().min(1, {
        //             message: ValidationErrorMessages.required("Password")
        //         })
        //     });
        //
        //     const result = loginSchema.safeParse({
        //         email, password
        //     });
        //
        //     if (!result.success) {
        //         const parsedMessageError = ValidationErrorMessages.getParsedErrorMessage(result.error.errors)
        //         setInputErrors({
        //             email: parsedMessageError.email ?? [],
        //             password: parsedMessageError.password ?? [],
        //         })
        //     } else {
        //         // const response = await AuthenticateService.login(result.data.email, result.data.password)
        //         // setLoginCookie(response)
        //         // router.push("/dashboard")
        //     }
        // } catch (exceptionError: any) {
        //     console.log(exceptionError);
        //     const {errorCode, errorType} = helper.parseFetchException(exceptionError);
        //     if (errorType === HTTP_RESPONSE_TYPE.CLIENT_ERROR) {
        //         if (errorCode === RESPONSE_CODE.ERR_UNAUTHENTICATED) {
        //             setAlert("Invalid user credentials")
        //             setInputErrors({
        //                 password: ["Password is invalid"],
        //                 email: ["Email is invalid"],
        //             })
        //
        //             return;
        //         }
        //
        //         setAlert("Something went wrong")
        //         return;
        //     }
        //
        //     setAlert("Something went wrong")
        //     return;
        // }
    }

    return {
        handleSubmit,
        setEmail,
        setPassword,
        inputErrors
    }
}

export default useLogin;