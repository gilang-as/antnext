'use client';

import React from "react";
import LayoutDashboard from "@/components/Layouts/Dashboard";
import {Button, ConfigProvider, Result} from "antd";
import styled from "@emotion/styled";

const Content = styled(Result)`
  :where(.css-dev-only-do-not-override-pr0fja).ant-result {
    padding: 48px 32px;
  }
`

const SomethingWentWrongPage : React.FC = () => {
    return (
        <LayoutDashboard>
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
            }}>
                <Content
                    status="500"
                    title="500"
                    subTitle="Sorry, something went wrong."
                    extra={<Button type="primary">Back to Dashboard</Button>}
                />
            </div>
        </LayoutDashboard>
    )
}

export default SomethingWentWrongPage;