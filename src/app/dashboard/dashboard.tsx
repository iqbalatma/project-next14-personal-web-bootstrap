"use client"
import React, {useEffect} from 'react';
import useAuth from "@/services/global-hooks/useAuth";

const Dashboard = () => {
    const user = useAuth(state => state.user);

    return (
        <div>
            <h1>{user ? user.firstname : 'Loading...'}</h1>
        </div>
    );
};

export default Dashboard;