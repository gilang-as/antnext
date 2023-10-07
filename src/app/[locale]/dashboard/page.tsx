import React from "react";
import LayoutDashboard from "@/components/Layouts/Dashboard";
import LogoAntNext from "@/icons/antnext";
import {ConfigProvider} from "antd";
import {defaultLocale, languages} from "@/utils/locale";
import themes from "@/utils/themes";
import {WithThemes} from "@/components/ThemesProvider";

const DashboardPage : React.FC = () => {
    return (
                <LayoutDashboard>
                    <h1>Hello</h1>
                </LayoutDashboard>
    )
}

export default DashboardPage;