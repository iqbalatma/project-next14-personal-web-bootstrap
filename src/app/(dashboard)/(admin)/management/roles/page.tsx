import React from "react";
import PageTitle from "@/components/PageTitle";
import RoleService from "@/api/server-side/admin/management/RoleService";
import {Role} from "@/types/models/Roles";
import Table from "@/app/(dashboard)/(admin)/management/roles/table";


const Page = async ({
                        searchParams,
                    }: {
    searchParams: { [key: string]: string | string[] | undefined }
}) => {
    const response = await RoleService.getAllPaginated();
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
                                            <Table data={response}></Table>
                                            <nav aria-label="Page navigation example">
                                                <ul className="pagination justify-content-end">
                                                    <li className="page-item disabled">
                                                        <a className="page-link">Previous</a>
                                                    </li>
                                                    <li className="page-item"><a className="page-link" href="#">1</a>
                                                    </li>
                                                    <li className="page-item"><a className="page-link" href="#">2</a>
                                                    </li>
                                                    <li className="page-item"><a className="page-link" href="#">3</a>
                                                    </li>
                                                    <li className="page-item">
                                                        <a className="page-link" href="#">Next</a>
                                                    </li>
                                                </ul>
                                            </nav>
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