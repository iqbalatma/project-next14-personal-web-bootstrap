import React from 'react';

import {Metadata} from "next";
import Dashboard from "@/app/(dashboard)/dashboard/dashboard";
import Index from "@/components/Alert";

export const metadata: Metadata = {
    title: 'Dashboard',
    description: 'Dashboard',
}
const Page = () => {
    return (
        <>
            <h1>Welcome to the Next.js App</h1>
            <Dashboard></Dashboard>
        </>
    );
};



export default Page;