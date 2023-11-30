"use client"
import React, {useEffect, useState} from "react";
import PageTitle from "@/components/PageTitle";
import RoleService from "@/api/client-side/admin/management/RoleService";
import useAlert from "@/services/global-state/useAlert";
import {Role} from "@/types/models/Roles";
import Pagination from "@/components/Pagination";


const Page = () => {
    const {setAlert} = useAlert()
    const [roles, setRoles] = useState<Role[] | null>(null);
    const fetchRole = async () => {
        const response = await RoleService.getAllPaginated();
        setRoles(response.data)
        if (response?.error) {
            setAlert(response?.error)
        }
    }


    useEffect(() => {
        fetchRole()
    }, [])

    return (
        <div className="page-heading">
            <PageTitle title="Roles" subTitle="Data related to role for user"></PageTitle>
            <section className="section">
                <section className="section">
                    <div className="row" id="basic-table">
                        <div className="col-12 col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Data All Roles</h4>
                                </div>
                                <div className="card-content">
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table table-lg">
                                                <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Name</th>
                                                    <th>Guard Name</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {roles && roles.map((item: Role, index: number) => (
                                                    <tr key={index}>
                                                        <td>{item.id}</td>
                                                        <td>{item.name}</td>
                                                        <td>{item.guard_name}</td>
                                                    </tr>
                                                ))}
                                                </tbody>
                                            </table>
                                            <nav aria-label="Page navigation example">
                                                <ul className="pagination justify-content-end">
                                                    <li className="page-item disabled">
                                                        <a className="page-link">Previous</a>
                                                    </li>
                                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                    <li className="page-item">
                                                        <a className="page-link" href="#">Next</a>
                                                    </li>
                                                </ul>
                                            </nav>
                                            {/*<Pagination></Pagination>*/}
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