"use client"
import {theme} from "antd";
import LayoutDashboard from "@/components/Layouts/Dashboard";
import React from "react";

const PageColor = () => {
    const {token} = theme.useToken();
    return (
        <LayoutDashboard>
            <div>
                {Object.keys(token).map((value, key, a) => {
                    return (
                        <div key={key}>
                            <div style={{padding: 5, background: token[value], marginBottom: 1}}>
                                <h3 style={{}}>{value}  |  {token[value]}</h3>
                            </div>
                        </div>
                    )
                })}
            </div>
        </LayoutDashboard>
    )
}

export default PageColor