import React from "react";
import {Layout, Menu, theme} from "antd";
import {FolderOutlined, HomeOutlined} from "@ant-design/icons";
import LogoAntNext from "@/icons/antnext";
import {useTranslations} from "next-intl";

const { Sider} = Layout;

const DashboardSidebar : React.FC = () => {
    const t = useTranslations('sidebar');
    const {token} = theme.useToken();

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
                // overflow: 'auto',
                // height: '100vh',
                // position: 'fixed',
                // left: 0,
                // top: 0,
                // bottom: 0,
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
            <Menu mode="inline" defaultSelectedKeys={['dashboard']} items={[
                {
                    icon: <HomeOutlined />,
                    key: 'dashboard',
                    label: t('dashboard'),
                    title: t('dashboard'),
                },
                {
                    icon: <FolderOutlined />,
                    key: 'Dashboard',
                    label: 'Dashboard',
                    title: 'Dashboard',
                    children: [
                        {
                            key: 'Form',
                            label: 'Form',
                            title: 'Form',
                        },
                        {
                            key: 'List',
                            label: 'List',
                            title: 'List',
                        },
                        {
                            key: 'User management',
                            label: 'User management',
                            title: 'User management',
                        },
                        {
                            key: 'Result',
                            label: 'Result',
                            title: 'Result',
                        },
                    ],
                },
                {
                    icon: <FolderOutlined />,
                    key: 'Exception',
                    label: 'Exception',
                    title: 'Exception',
                    children: [],
                },
                {
                    icon: <FolderOutlined />,
                    key: 'Account',
                    label: 'Account',
                    title: 'Account',
                    children: [],
                },
                {
                    icon: <FolderOutlined />,
                    key: 'Editor',
                    label: 'Editor',
                    title: 'Editor',
                    children: [],
                },
            ]} />
        </Sider>
    )
}

export default DashboardSidebar;