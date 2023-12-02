"use client"
import React, {useEffect} from 'react';
import {Role} from "@/types/models/Roles";
import {PayloadGetAllRolePaginated} from "@/api/server-side/admin/management/RoleService";
import useAlert from "@/services/global-state/useAlert";
import {useRouter, useSearchParams} from "next/navigation";
import Link from "next/link";

const Table = ({data}: { data: PayloadGetAllRolePaginated }) => {
    const roles = data.data;
    const pagination = data.pagination;
    const error = data.error;
    const {setAlert} = useAlert()
    const router = useRouter();
    const searchParams = useSearchParams();
    const page: string = searchParams.get("page") ?? "1";


    useEffect(() => {
        if (error) {
            setAlert(error)
        }
    }, []);

    return (
        <>
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

            {!error && <nav aria-label="Page navigation">
                <ul className="pagination justify-content-end">
                    <li className="page-item disabled">
                        <a className="page-link">Previous</a>
                    </li>

                    {pagination?.links.map((item, index) => {
                        if (index !== 0 && (pagination?.links.length - 1 !== index)) {
                            return <li className="page-item" key={index}>
                                <Link className={`page-link ${item.active ? "active" : ""}`}
                                      href={`/management/roles?page=${item.label}`}>{item.label}</Link>
                            </li>
                        }
                    })}

                    <li className="page-item">
                        <button className="page-link" onClick={() => {
                            router.push(`/management/roles?page=${Number(1) + 1}`)
                        }}>Next
                        </button>
                    </li>
                </ul>
            </nav>}

        </>
    );
};

export default Table;