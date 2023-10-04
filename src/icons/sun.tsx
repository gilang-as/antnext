import React from "react";
import {IconProps} from "@/icons/icon";

const IconSun: React.FC<IconProps> = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="4"/>
            <path d="M12 3v1"/>
            <path d="M12 20v1"/>
            <path d="M3 12h1"/>
            <path d="M20 12h1"/>
            <path d="m18.364 5.636-.707.707"/>
            <path d="m6.343 17.657-.707.707"/>
            <path d="m5.636 5.636.707.707"/>
            <path d="m17.657 17.657.707.707"/>
        </svg>
    )
}

export default IconSun