"use client"
import React, {useEffect, useState} from "react";
import PermissionService from "@/api/client-side/admin/management/PermissionService";
import {Permission} from "@/types/models/Permission";
import Breadcrumb from "@/components/Breadcumb/Breadcrumb";
import Alert from "@/components/Alert/Alert";
import useAlert from "@/services/global-state/useAlert";


const Page = () => {
    const [permissions, setPermissions] = useState<Permission[] | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)
    const {setAlert} = useAlert()
    const fetchData = async () => {
        setIsLoading(true)
        const response = await PermissionService.getAll();
        setPermissions(response.data);
        if (response?.error) {
            setError(response?.error)
        }
        setIsLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <div className="page-heading">
            <Alert></Alert>
            <div className="page-title">
                <div className="row">
                    <div className="col-12 col-md-6 order-md-1 order-last">
                        <h3>Permissions</h3>
                        <p className="text-subtitle text-muted">Data related to permission to all access</p>
                    </div>

                    <div className="col-12 col-md-6 order-md-2 order-first">
                        <Breadcrumb></Breadcrumb>
                    </div>
                </div>
            </div>


            <section className="section">
                <section className="section">
                    <div className="row" id="basic-table">
                        <div className="col-12 col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Data All Permissions</h4>
                                </div>
                                <div className="card-content">
                                    <div className="card-body">
                                        <div className="table-responsive">

                                            {isLoading && <h1>Loading . . . </h1>}

                                            {error && <h1>INI ERROR</h1>}
                                            <table className="table table-lg">
                                                <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Name</th>
                                                    <th>Guard Name</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {!isLoading && permissions && permissions.map((item: Permission, index: number) => (
                                                    <tr key={index}>
                                                        <td>{item.id}</td>
                                                        <td>{item.name}</td>
                                                        <td>{item.guard_name}</td>
                                                    </tr>
                                                ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    );
};

export default Page;