"use client";

import React from "react";
import { ConfigProvider } from "antd";

const withTheme = (node: JSX.Element) => (
    <>
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#52c41a',
                },
            }}
        >
            <ConfigProvider
                theme={{
                    token: {
                    },
                }}
            >
                {node}
            </ConfigProvider>
        </ConfigProvider>
    </>
)

export default withTheme;