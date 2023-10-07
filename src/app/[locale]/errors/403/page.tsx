'use client';

import React from "react";
import LayoutDashboard from "@/components/Layouts/Dashboard";
import {Button, Result} from "antd";
import styled from "@emotion/styled";


const Content = styled(Result)`
  :where(.css-dev-only-do-not-override-pr0fja).ant-result {
    padding: 48px 32px;
  }
`

const NotAuthorizedPage : React.FC = () => {
    return (
        <LayoutDashboard>
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
            }}>
                <Content
                    status="403"
                    title="403"
                    subTitle="Sorry, you are not authorized to access this page."
                    extra={<Button type="primary">Back to Dashboard</Button>}
                />
            </div>
        </LayoutDashboard>
    )
}

export default NotAuthorizedPage;