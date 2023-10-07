'use client';

import {PropsWithChildren, useEffect, useState} from "react";
import {useTheme, ThemeProvider} from "next-themes";
import {ConfigProvider, Spin} from "antd";
import themes from "@/utils/themes";
import styled from "@emotion/styled";

const LoadingPage = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    background: rgba(0, 0, 0, 0.05);
`;

export const ThemesProvider = (props: PropsWithChildren) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <LoadingPage>
                <Spin />
            </LoadingPage>
        );
    }

    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            {props.children}
        </ThemeProvider>
    );
}

export const WithThemes = ({ children }: PropsWithChildren) => {
    const [themeSystem, changeSystemTheme] = useState('system');
    const {theme: nowTheme} = useTheme();

    useEffect(() => {
        const media = window.matchMedia('(prefers-color-scheme: dark)');
        media.addEventListener('change', e => {
            changeSystemTheme(e.matches ? 'dark' : 'light');
        });
    }, [themeSystem]);

    return (
            <ConfigProvider
                theme={nowTheme === 'system' ? (themeSystem === 'dark' ? themes.darkTheme : themes.lightTheme) : (nowTheme === 'dark' ? themes.darkTheme : themes.lightTheme)}
            >
                {children}
            </ConfigProvider>
    );
}
