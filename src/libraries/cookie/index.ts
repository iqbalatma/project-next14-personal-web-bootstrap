import COOKIE_SAME_SITE from "@/enums/COOKIE_SAME_SITE";

type CookieOption = {
    sameSite?: COOKIE_SAME_SITE,
    isSecure?: boolean,
    path?: string | null,
    domain?: string | null
    maxAge?: number|null,
    expires?: Date|string|null,
}

class ClientSideCookie {
    private static getDefaultCookieOption = (): CookieOption => {
        return {
            isSecure: false,
            sameSite: COOKIE_SAME_SITE.LAX,
            path: null,
            domain: null,
            maxAge: null,
            expires: null,
        }
    }

    public static get<T = any>(key: string): T {
        const cookieDataFromBrowser = document.cookie
            .split("; ")
            .find((item) => item.startsWith(`${key}=`))
            ?.split("=")[1] ?? null;


        let cookieItem = null;
        if (cookieDataFromBrowser) {
            try {
                cookieItem = JSON.parse(cookieDataFromBrowser);
            } catch (error: any) {
                cookieItem = cookieDataFromBrowser
            }
        }

        return cookieItem;
    }

    public static set(key: string, value: any, options: CookieOption = {}): void {
        const {isSecure, path, domain, maxAge, expires, sameSite} = {...this.getDefaultCookieOption(), ...options}

        let cookieString: string = `${key}=${value};`;
        if (isSecure) {
            cookieString += "Secure;"
        }
        if (path) {
            cookieString += `${path};`
        }
        if (domain) {
            cookieString += `${domain};`
        }
        if (maxAge) {
            cookieString += `${maxAge};`
        }
        if (expires) {
            cookieString += `${expires};`
        }
        if (sameSite) {
            cookieString += `SameSite=${sameSite};`
        }


        console.log(cookieString)
        document.cookie = cookieString
    }
}

export default ClientSideCookie;
