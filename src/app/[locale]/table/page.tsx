'use client';
import React, {useEffect} from "react";
import LayoutDashboard from "@/components/Layouts/Dashboard";
import {Table} from "antd";
import {FormAdd} from "@/app/[locale]/table/FormAddData";

const DashboardPage : React.FC = () => {
    const dataSource = [
        {
            key: 1,
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
        }
    ];
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
    ];
    return (
        <LayoutDashboard title="Table Title" subTitle="Description of data" actions={[<FormAdd/>]} >
            <Table dataSource={dataSource} columns={columns} style={{minHeight: "100%"}} />
        </LayoutDashboard>
    )
}

export default DashboardPage;