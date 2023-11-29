"use client"
import React, {useEffect} from 'react';
import useAuthCookie from "@/services/auth/useAuthCookie";
import {usePathname} from "next/navigation";
import {public_route} from "@/config/route";

const AuthProvider = ({children}: { children: React.ReactNode }) => {
    const {check} = useAuthCookie()
    const pathName = usePathname()
    useEffect(() => {
        if (!public_route.includes(pathName)){
            check()
        }
    }, []);
    return (
        <>
            {children}
        </>
    );
};

export default AuthProvider;