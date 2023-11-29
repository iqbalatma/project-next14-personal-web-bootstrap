"use client"
import React from 'react';
import InvalidInputFeedback from "@/components/InvalidInputFeedback";
import Link from "next/link";
import useLogin from "@/services/auth/useLogin";
import Alert from "@/components/Alert";

const Auth = () => {
    const {handleSubmit, setEmail, setPassword, inputErrors} = useLogin()
    return (
        <>
            <div id="auth-left">
                <div className="auth-logo">
                    <a href=""></a>
                </div>
                <h1 className="auth-title">Log in.</h1>
                <p className="auth-subtitle mb-5">Log in with your data that you entered during
                    registration.</p>
                <Alert></Alert>

                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group position-relative has-icon-left mb-4">
                        <input type="email"
                               className={`form-control form-control-xl ${inputErrors.email ? "is-invalid" : ""}`}
                               placeholder="Email"
                               onChange={(e) => {
                                   setEmail(e.target.value)
                               }}/>
                        {inputErrors.email &&
                            <InvalidInputFeedback invalidText={inputErrors.email}></InvalidInputFeedback>}
                        <div className="form-control-icon">
                            <i className="bi bi-envelope"></i>
                        </div>
                    </div>
                    <div className="form-group position-relative has-icon-left mb-4">
                        <input type="password"
                               className={`form-control form-control-xl ${inputErrors.password ? "is-invalid" : ""}`}
                               placeholder="Password" onChange={(e) => {
                            setPassword(e.target.value)
                        }}/>
                        {inputErrors.password &&
                            <InvalidInputFeedback
                                invalidText={inputErrors.password}></InvalidInputFeedback>}
                        <div className="form-control-icon">
                            <i className="bi bi-shield-lock"></i>
                        </div>
                    </div>
                    <div className="form-check form-check-lg d-flex align-items-end">
                        <input className="form-check-input me-2" type="checkbox" value=""
                               id="flexCheckDefault"/>
                        <label className="form-check-label text-gray-600" htmlFor="flexCheckDefault">
                            Keep me logged in
                        </label>
                    </div>
                    <button className="btn btn-primary btn-block btn-lg shadow-lg mt-5"
                            onClick={handleSubmit}>Log in
                    </button>
                </form>
                <div className="text-center mt-5 text-lg fs-4">
                    <p className="text-gray-600">Don have an account? <a href="" className="font-bold">Sign
                        up</a>.</p>
                    <p><Link className={"font-bold"} href={"/auth/forgot-password"}>Forgot password ?</Link>.
                    </p>
                </div>
            </div>
        </>
    );
};

export default Auth;