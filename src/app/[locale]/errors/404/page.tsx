'use client';

import React from "react";
import LayoutDashboard from "@/components/Layouts/Dashboard";
import LogoAntNext from "@/icons/antnext";
import {Button, ConfigProvider, Result} from "antd";
import {defaultLocale, languages} from "@/utils/locale";
import themes from "@/utils/themes";
import {WithThemes} from "@/components/ThemesProvider";
import styled from "@emotion/styled";

const Content = styled(Result)`
  :where(.css-dev-only-do-not-override-pr0fja).ant-result {
    padding: 48px 32px;
  }
`

const NotFoundPage : React.FC = () => {
    return (
        <LayoutDashboard>
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
            }}>
                <Content
                    status="404"
                    title="404"
                    subTitle="Sorry, the page you visited does not exist."
                    extra={<Button type="primary">Back to Dashboard</Button>}
                />
            </div>
        </LayoutDashboard>
    )
}

export default NotFoundPage;