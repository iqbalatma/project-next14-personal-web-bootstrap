"use client"
import React, {useEffect} from 'react';
import useAuth from "@/services/global-state/useAuth";
import useAlert from "@/services/global-state/useAlert";
import Alert from "@/components/Alert";
import {useRouter} from "next/navigation";

const Dashboard = () => {
    const user = useAuth(state => state.user);
    const {setAlert} = useAlert()
    const {logout} = useAuth()
    const router = useRouter();

    return (
        <div>
            <Alert></Alert>
<button onClick={()=>{
    logout()
    router.push("/auth")
    console.log("logout")
}}>Logout</button>
            <h1>{user ? user.firstname : 'Loading...'}</h1>
        </div>
    );
};

export default Dashboard;