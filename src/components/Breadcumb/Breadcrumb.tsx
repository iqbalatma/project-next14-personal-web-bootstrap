import React from 'react';
import BreadcrumbItem from "@/components/Breadcumb/BreadcrumbItem";

const Breadcrumb = () => {
    return (
        <nav aria-label="breadcrumb" className="breadcrumb-header float-start float-lg-end">
            <ol className="breadcrumb">
                <BreadcrumbItem></BreadcrumbItem>
                <BreadcrumbItem></BreadcrumbItem>
            </ol>
        </nav>
    );
};

export default Breadcrumb;