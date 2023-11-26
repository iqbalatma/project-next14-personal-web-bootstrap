import React from 'react';
import Footer from "@/components/Layouts/Dashboard/Footer";
import Navbar from "@/components/Layouts/Dashboard/Navbar";
import Sidebar from "@/components/Layouts/Dashboard/Sidebar";
import Breadcrumb from "@/components/Breadcumb/Breadcrumb";
import AlertProvider from "@/providers/AlertProvider";

const Layout = ({
                    children
                }: {
    children: React.ReactNode
}) => {
    return (
        <>
            <div id="app">
                <Sidebar></Sidebar>
                <div id="main" className='layout-navbar navbar-fixed'>
                    <Navbar></Navbar>
                    <AlertProvider>
                        <div id="main-content">
                            {children}
                        </div>
                    </AlertProvider>
                    <Footer></Footer>
                </div>
            </div>
        </>
    );
};

export default Layout;