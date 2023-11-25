import React from 'react';
import "../../../public/assets/compiled/css/auth.css"

const Layout = ({
                    children
                }: {
    children: React.ReactNode
}) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default Layout;