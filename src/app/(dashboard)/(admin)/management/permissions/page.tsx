"use client"
import {useEffect, useState} from "react";
import PermissionService from "@/api/client-side/admin/management/PermissionService";
import {Permission} from "@/types/models/Permission";
import useAuth from "@/services/auth/useAuth";

const Page = () => {
    const [permissions, setPermissions] = useState<Permission[] | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string|null>(null)
    const {user} = useAuth.getState()
    const fetchData = async () => {
        setIsLoading(true)
        const response = await PermissionService.getAll();
        setPermissions(response.data);
        if (response.error){
            setError(response.error)
        }
        setIsLoading(false)
    }

    useEffect(() => {
        fetchData()
        // fetch('/api/admin/management/permissions')
    }, [])

    return (
        <section className="section">
            <div className="row" id="basic-table">
                <div className="col-12 col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">Permission Access For Any Action</h4>
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
    );
};


export default Page;