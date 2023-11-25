import React from 'react';
import Footer from "@/components/Layouts/Dashboard/Footer";
import Navbar from "@/components/Layouts/Dashboard/Navbar";
import Sidebar from "@/components/Layouts/Dashboard/Sidebar";
import Breadcrumb from "@/components/Breadcumb/Breadcrumb";

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
                    <div id="main-content">
                        <div className="page-heading">
                            <div className="page-title">
                                <div className="row">
                                    <div className="col-12 col-md-6 order-md-1 order-last">
                                        <h3>HAHAH</h3>
                                        <p className="text-subtitle text-muted">Data Diatas</p>
                                    </div>

                                    <div className="col-12 col-md-6 order-md-2 order-first">
                                        <Breadcrumb></Breadcrumb>
                                    </div>

                                </div>
                            </div>
                            <section className="section">
                                {children}
                            </section>
                        </div>
                    </div>
                    <Footer></Footer>
                </div>
            </div>
        </>
    );
};

export default Layout;