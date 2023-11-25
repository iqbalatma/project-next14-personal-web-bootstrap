import {TokenType} from "@/types/TokenType";

import {useRouter} from "next/navigation";
import {useCookies} from "react-cookie";
import useAuth from "@/services/auth/useAuth";
import JWTService from "@/services/JWTService";
import {PayloadLogin} from "@/api/client-side/auth/AuthenticateService";

const useAuthCookie = () => {
    const [cookie, setCookie, removeCookie] = useCookies(["access_token", "refresh_token"])
    const router = useRouter()

    /**
     * use to check is user login or not
     */
    const check = (): boolean => {
        const {isLogin} = useAuth.getState()
        if (!isLogin) {
            const accessToken = getToken("access_token");
            if (accessToken && accessToken !== "") {
                const user = JWTService.getUser(accessToken);
                console.log(user)
                const {setLogin} = useAuth.getState()
                setLogin(user)
                return true;
            } else {
                logout()
                return false;
            }
        }
        return true;
    }

    const setLoginCookie = (response: PayloadLogin) => {
        const {setLogin} = useAuth.getState()
        const parsedAccessToken = JWTService.getParsedJWT(response.data.token.access_token);
        const parsedRefreshToken = JWTService.getParsedJWT(response.data.token.refresh_token);

        if (parsedAccessToken) {
            setCookie("access_token", response.data.token.access_token, {
                path: "/",
                sameSite: "lax",
                expires: new Date(parsedAccessToken.exp * 1000)
            })
        }
        if (parsedRefreshToken) {
            setCookie("refresh_token", response.data.token.refresh_token, {
                path: "/",
                sameSite: 'lax',
                expires: new Date(parsedRefreshToken.exp * 1000)
            })
        }

        if (parsedRefreshToken && parsedAccessToken) {
            setLogin(response.data)
        }
    }

    const logout = () => {
        const {setLoginStatus} = useAuth.getState()
        setLoginStatus(false)
        removeCookie("access_token")
        removeCookie("refresh_token")
        router.push("/auth");
    }

    /**
     *
     * @param type
     */
    const getToken = (type: TokenType): string | null => {
        const {token: {access_token, refresh_token}} = useAuth.getState();

        if (type === "access_token") {
            return access_token ?? cookie.access_token ?? null;
        } else {
            return refresh_token ?? cookie.refresh_token ?? null;
        }
    }


    return {
        cookie,
        setLoginCookie,
        check,
        logout,
        getToken
    }
}

export default useAuthCookie;