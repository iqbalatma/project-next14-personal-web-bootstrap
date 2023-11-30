"use client"
import React, {useEffect} from 'react';
import {Role} from "@/types/models/Roles";
import {PayloadGetAllRolePaginated} from "@/api/server-side/admin/management/RoleService";
import useAlert from "@/services/global-state/useAlert";

const Table = ({data}:{data:PayloadGetAllRolePaginated}) => {
    const roles = data.data;
    const error = data.error;
    const {setAlert} = useAlert()
    useEffect(() => {
        if (error){
            setAlert(error)
        }
    }, []);

    return (
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
    );
};

export default Table;