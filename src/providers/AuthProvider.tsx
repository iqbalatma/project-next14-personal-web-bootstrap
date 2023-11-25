"use client"
import React, {useEffect} from 'react';
import useAuthCookie from "@/services/auth/useAuthCookie";

const AuthProvider = ({children}: { children: React.ReactNode }) => {
    const {check} = useAuthCookie()
    // useEffect(() => {
    //     check()
    // }, []);
    return (
        <>
            {children}
        </>
    );
};

export default AuthProvider;