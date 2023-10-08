"use client";

import React from 'react';
import {Layout, theme} from 'antd';
import styled from "@emotion/styled";
import NextTopLoader from "nextjs-toploader";
import {If, Then} from "react-if";
import {WithThemes} from "@/components/ThemesProvider";
import DashboardSidebar from "@/components/Layouts/Dashboard/Sidebar";
import DashboardNavbar from "@/components/Layouts/Dashboard/Navbar";
import DashboardFooter from "@/components/Layouts/Dashboard/Footer";
import DashboardContent from "@/components/Layouts/Dashboard/Content";

type LayoutProps = {
    children?: React.ReactNode;
    params?: Record<string, any>;
    title?: string;
    subTitle?: string;
    icon?: React.ReactNode;
    actions?: React.ReactNode[];
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
            height={3}
            crawl={true}
            showSpinner={false}
            easing="ease"
            speed={500}
            shadow={`0 0 10px ${token.colorPrimary},0 0 5px ${token.colorPrimary}`}
        />
    )
}

const LayoutContent: React.FC<LayoutProps> = (props) => {
    const {token} = theme.useToken();
    return (
        <>
            <If condition={props.title != null || props.subTitle != null || props.icon != null || (props.actions != null && props.actions.length > 0)}>
                <Then>
                    <div style={{"display": "flex", "justifyContent": "space-between", "width": "100%", "padding": "15px 15px 15px 15px"}}>
                        <div style={{"display": "flex", "alignItems": "center", "margin": "4px 0", "overflow": "hidden"}}>
                            <If condition={props.icon != null}>
                                <Then>
                                <span style={{"boxSizing":"border-box", "marginRight": 12,"padding":"0","color":"#fff","fontSize":"14px","fontVariant":"tabular-nums","lineHeight":"32px","listStyle":"none","fontFeatureSettings":"\"tnum\"","position":"relative","display":"inline-block","overflow":"hidden","whiteSpace":"nowrap","textAlign":"center","verticalAlign":"middle","background":"#ccc","width":"32px","height":"32px","borderRadius":"50%"}}>{props.icon}</span>
                                </Then>
                            </If>
                            <If condition={props.title != null}>
                                <Then>
                                    <span style={{"marginRight": "12px", "marginBottom": "0", "color": token.colorText, "fontWeight": "600", "fontSize": "20px", "lineHeight": "32px", "overflow": "hidden", "whiteSpace": "nowrap", "textOverflow": "ellipsis"}} title={props.title}>{props.title}</span>
                                </Then>
                            </If>
                            <If condition={props.subTitle != null}>
                                <Then>
                                    <span style={{"marginRight": "12px", "color": token.colorTextTertiary, "fontSize": "14px", "lineHeight": "1.5715", "overflow": "hidden", "whiteSpace": "nowrap", "textOverflow": "ellipsis"}} title={props.subTitle}>{props.subTitle}</span>
                                </Then>
                            </If>
                        </div>
                        <If condition={props.actions != null && props.actions.length > 0}>
                            <Then>
                                <div style={{"display": "flex", "alignItems": "center", "margin": "4px 0", "overflow": "hidden"}}>
                                    {props.actions?.map((action, index) => {
                                        return (
                                            <span style={{marginRight: 15, "height":"100%"}} key={index}>
                                                {action}
                                            </span>
                                        )
                                    })}
                                </div>
                            </Then>
                        </If>
                    </div>
                </Then>
            </If>
            <div style={{"width": "100%", "padding": "15px 15px 15px 15px"}}>
                {props.children}
            </div>
        </>
    )
}

const LayoutDashboard: React.FC<LayoutProps> = (props: LayoutProps) => {
    return (
        <WithThemes>
            <PageLoader/>
            <Layout hasSider>
                <DashboardSidebar />
                <LayoutChild>
                    <DashboardNavbar />
                    <DashboardContent>
                        <LayoutContent {...props}/>
                    </DashboardContent>
                    <DashboardFooter />
                </LayoutChild>
            </Layout>
        </WithThemes>
    );
};

export default LayoutDashboard;