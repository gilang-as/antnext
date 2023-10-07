import React from "react";
import LayoutDashboard from "@/components/Layouts/Dashboard";
import {Table} from "antd";

const dataSource = [
    {
        key: '1',
        name: 'Mike',
        age: 32,
        address: '10 Downing Street',
    },
    {
        key: '2',
        name: 'John',
        age: 42,
        address: '10 Downing Street',
    },
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

const DashboardPage : React.FC = () => {
    return (
        <LayoutDashboard>
            <Table dataSource={dataSource} columns={columns} style={{minHeight: "100%"}} />
        </LayoutDashboard>
    )
}

export default DashboardPage;