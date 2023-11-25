class ClientSideCookie {
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
}

export default ClientSideCookie