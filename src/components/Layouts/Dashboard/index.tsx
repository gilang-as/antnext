"use client";

import React from 'react';
import {Layout, theme} from 'antd';
import DashboardSidebar from "@/components/Layouts/Dashboard/Sidebar";
import DashboardNavbar from "@/components/Layouts/Dashboard/Navbar";
import DashboardFooter from "@/components/Layouts/Dashboard/Footer";
import DashboardContent from "@/components/Layouts/Dashboard/Content";
import styled from "@emotion/styled";
import {WithThemes} from "@/components/ThemesProvider";
import NextTopLoader from "nextjs-toploader";

type Props = {
    children: React.ReactNode;
    params?: Record<string, any>;
}

const LayoutChild = styled(Layout)`
    height: 100vh;
`;

const PageLoader: React.FC = () => {
    const {token} = theme.useToken();
    return (
        <NextTopLoader
            color={token.colorPrimary}
            initialPosition={1}
            crawlSpeed={200}
            height={2}
            crawl={true}
            showSpinner={false}
            easing="ease"
            speed={500}
            shadow={`0 0 10px ${token.colorPrimary},0 0 5px ${token.colorPrimary}`}
        />
    )
}

const LayoutDashboard: React.FC<Props> = (props: Props) => {
    return (
        <WithThemes>
            <PageLoader/>
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