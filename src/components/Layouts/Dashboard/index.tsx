"use client";

import React from 'react';
import { Layout } from 'antd';
import DashboardSidebar from "@/components/Layouts/Dashboard/Sidebar";
import DashboardNavbar from "@/components/Layouts/Dashboard/Navbar";
import DashboardFooter from "@/components/Layouts/Dashboard/Footer";
import DashboardContent from "@/components/Layouts/Dashboard/Content";

type Props = {
    children: React.ReactNode;
    params?: Record<string, any>;
}
const LayoutDashboard: React.FC<Props> = (props: Props) => {
    return (
        <Layout hasSider>
            <DashboardSidebar />
            <Layout css={{height: "100vh"}}>
                <DashboardNavbar />
                <DashboardContent>
                    {props.children}
                </DashboardContent>
                <DashboardFooter />
            </Layout>
        </Layout>
    );
};

export default LayoutDashboard;