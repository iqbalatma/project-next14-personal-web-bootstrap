import React, {useEffect} from 'react';
import useAlert from "@/services/global-state/useAlert";

const Alert = () => {
    const {closeAlert, isShowAlert, textAlert} = useAlert()
    const onClose = () => {
        closeAlert()
    }
    return (
        <>
            {
                isShowAlert && <div className="alert alert-danger alert-dismissible show fade">
                    {textAlert}
                    <button type="button" className="btn-close" onClick={() => {
                        onClose()
                    }} aria-label="Close"></button>
                </div>
            }
        </>
    );
};

export default Alert;