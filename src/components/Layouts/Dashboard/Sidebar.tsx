'use client';

import React from "react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {Layout, Menu, theme} from "antd";
import {CloseSquareOutlined, HomeOutlined, TableOutlined} from "@ant-design/icons";
import LogoAntNext from "@/icons/antnext";
import {useTranslations} from "next-intl";

const { Sider} = Layout;

const DashboardSidebar : React.FC = () => {
    const t = useTranslations('sidebar');
    const {token} = theme.useToken();

    const fullPath = usePathname();
    const currentPath = (): string[] | undefined => {
        const paths = fullPath.split('/');
        if(paths.length < 2) return undefined;
        return [paths[paths.length - 1]];
    }

    const currentOpenKey = (): string[] | undefined => {
        const paths = fullPath.split('/');
        if(paths.length < 3) return undefined;
        return [paths[paths.length - 2]];
    }

    return (
        <Sider
            trigger={null}
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
                // console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                // console.log(collapsed, type);
            }}
            style={{
                background: token.colorBgContainer,
            }}
        >

            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "64px",
                    width: "100%",
                }}
            >
                <LogoAntNext/>
            </div>
            <Menu mode="inline" defaultSelectedKeys={currentPath()} defaultOpenKeys={currentOpenKey()} items={[
                {
                    icon: <HomeOutlined />,
                    key: 'dashboard',
                    label: (<Link href="/dashboard">{t('dashboard')}</Link>),
                    title: t('dashboard'),
                },
                {
                    icon: <TableOutlined />,
                    key: 'table',
                    label: (<Link href="/table">{t('table')}</Link>),
                    title: t('table'),
                },
                {
                    icon: <CloseSquareOutlined />,
                    key: 'errors',
                    label: t('error'),
                    title: t('error'),
                    children: [
                        {
                            key: '403',
                            label: (<Link href="/errors/403">{t('error:403')}</Link>),
                            title: t('error:403'),
                        },
                        {
                            key: '404',
                            label: (<Link href="/errors/404">{t('error:404')}</Link>),
                            title: t('error:404'),
                        },
                        {
                            key: '500',
                            label: (<Link href="/errors/500">{t('error:500')}</Link>),
                            title: t('error:500'),
                        },
                    ]
                },
            ]} />
        </Sider>
    )
}

export default DashboardSidebar;