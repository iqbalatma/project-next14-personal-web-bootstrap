import React from "react";
import PageTitle from "@/components/PageTitle";
import RoleService from "@/api/server-side/admin/management/RoleService";
import Table from "@/app/(dashboard)/(admin)/management/roles/table";

const Page = async ({
                        searchParams,
                    }: {
    searchParams: { [key: string]: string | string[] | undefined }
}) => {
    const page: string|string[]|null = searchParams.page ?? null
    const response = await RoleService.getAllPaginated(page);

    console.log(searchParams.page)
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
                                    <ul>
                                        <li>Page : {searchParams.page ?? "-"}</li>
                                    </ul>
                                </div>
                                <div className="card-content">
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <Table data={response}></Table>
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