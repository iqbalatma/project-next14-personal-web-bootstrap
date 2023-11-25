import React from 'react';
import useLogin from "@/services/local-hooks/auth/useLogin";

const Alert = ({
                   alertText,
                   onClose
               }: { alertText: string, onClose: () => void }) => {
    return (
        <div className="alert alert-danger alert-dismissible show fade">
            {alertText}
            <button type="button" className="btn-close" onClick={() => {
                onClose()
            }} aria-label="Close"></button>
        </div>
    );
};

export default Alert;