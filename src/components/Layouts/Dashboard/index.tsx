"use client";

import React from 'react';
import { Layout } from 'antd';
import DashboardSidebar from "@/components/Layouts/Dashboard/Sidebar";
import DashboardNavbar from "@/components/Layouts/Dashboard/Navbar";
import DashboardFooter from "@/components/Layouts/Dashboard/Footer";
import DashboardContent from "@/components/Layouts/Dashboard/Content";
import styled from "@emotion/styled";
import {WithThemes} from "@/components/ThemesProvider";

type Props = {
    children: React.ReactNode;
    params?: Record<string, any>;
}

const LayoutChild = styled(Layout)`
    height: 100vh;
`;

const LayoutDashboard: React.FC<Props> = (props: Props) => {
    return (
        <WithThemes>
            <Layout hasSider>
                <DashboardSidebar />
                <LayoutChild>
                    <DashboardNavbar />
                    <DashboardContent>
                        {props.children}
                    </DashboardContent>
                    <DashboardFooter />
                </LayoutChild>
            </Layout>
        </WithThemes>
    );
};

export default LayoutDashboard;