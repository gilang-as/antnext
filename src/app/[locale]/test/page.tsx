'use client';
import React from "react";
import LayoutDashboard from "@/components/Layouts/Dashboard";
import {Counter} from "@/app/[locale]/test/A";

const DashboardPage : React.FC = () => {
    return (
        <LayoutDashboard title="TEST">
            <Counter />
        </LayoutDashboard>
    )
}

export default DashboardPage;