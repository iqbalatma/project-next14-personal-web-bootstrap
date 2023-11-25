"use client"
import {useEffect, useState} from "react";
import PermissionService from "@/api/client-side/admin/management/PermissionService";
import {Permission} from "@/types/models/Permission";

const Page = () => {
    const [permissions, setPermissions] = useState<any>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    useEffect(() => {
        setIsLoading(true)
        const fetchData = async () => {
            return await PermissionService.getAll();
        }

        fetchData().then((response) => {
            setPermissions(response.data)
            setIsLoading(false)
        })
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

                                    <table className="table table-lg">
                                        <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Guard Name</th>
                                        </tr>
                                        </thead>
                                        <tbody>

                                        {!isLoading && permissions.map((item: Permission, index: number) => (
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