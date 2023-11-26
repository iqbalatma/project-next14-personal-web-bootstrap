import React from 'react';

const AlertProvider = ({children}: { children: React.ReactNode }) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default AlertProvider;