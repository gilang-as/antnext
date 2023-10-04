import React from "react";
import {Alert, Breadcrumb, Button, Card, Col, Layout, Row, Space, Table, theme, Typography} from "antd";
import {HomeOutlined, UserOutlined} from "@ant-design/icons";
const { Content} = Layout;

type Props = {
    children: React.ReactNode;
    params?: Record<string, any>;
}
const DashboardContent : React.FC<Props> = (props: Props) => {
    const {token: { colorBgContainer }} = theme.useToken();

    return(
        <Content style={{ margin: '24px 16px 0', overflow: 'initial'}}>
            <div style={{
                padding: "15px 15px 15px 15px",
                marginBottom: 15,
                background: colorBgContainer,
                borderRadius: 5
            }}>
                <Breadcrumb
                    items={[
                        {
                            href: '',
                            title: <HomeOutlined />,
                        },
                        {
                            title: (
                                <>
                                    <UserOutlined />
                                    <span>Dashboard</span>
                                </>
                            ),
                        },
                    ]}
                />
            </div>
            <div style={{ padding: 10, background: colorBgContainer, borderRadius: 5, minHeight: "90%" }}>
                {props.children}
            </div>
        </Content>
    )
}

export default DashboardContent