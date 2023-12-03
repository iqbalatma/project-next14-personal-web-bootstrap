"use client"
import React, {useEffect} from 'react';
import {usePathname, useRouter} from "next/navigation";
import {public_route} from "@/config/route";
import useAuth from "@/services/global-state/useAuth";

const AuthProvider = ({children}: { children: React.ReactNode }) => {
    const {check, isLogin} = useAuth()
    const router = useRouter();
    const pathName = usePathname()
    useEffect(() => {
        if (!public_route.includes(pathName)) {
            check()
            if (!isLogin) {
                console.log(isLogin);
                router.push("/auth")
            }
        }
    }, []);
    return (
        <>
            {children}
        </>
    );
};

export default AuthProvider;