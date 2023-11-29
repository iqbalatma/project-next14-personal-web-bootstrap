"use client"
import React, {useEffect} from 'react';
import useAuth from "@/services/global-state/useAuth";
import useAlert from "@/services/global-state/useAlert";
import Alert from "@/components/Alert";

const Dashboard = () => {
    const user = useAuth(state => state.user);
    const {setAlert} = useAlert()

    return (
        <div>
            <Alert></Alert>
            <h1>{user ? user.firstname : 'Loading...'}</h1>
        </div>
    );
};

export default Dashboard;