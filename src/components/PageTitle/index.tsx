import React from 'react';
import Alert from "@/components/Alert";
import Breadcrumb from "@/components/Breadcumb/Breadcrumb";

type PropsType = {
    title: string,
    subTitle: string
}
const PageTitle = ({title, subTitle}: PropsType) => {
    return (
        <>
            <Alert></Alert>
            <div className="page-title">
                <div className="row">
                    <div className="col-12 col-md-6 order-md-1 order-last">
                        <h3>{title}</h3>
                        <p className="text-subtitle text-muted">{subTitle}</p>
                    </div>

                    <div className="col-12 col-md-6 order-md-2 order-first">
                        <Breadcrumb></Breadcrumb>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PageTitle;