import React from "react";
import {IconProps} from "@/icons/icon";

const IconTranslation : React.FC<IconProps> = () => {
    return(
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
            <path d="m5 8 6 6"/>
            <path d="m4 14 6-6 2-3"/>
            <path d="M2 5h12"/>
            <path d="M7 2h1"/>
            <path d="m22 22-5-10-5 10"/>
            <path d="M14 18h6"/>
        </svg>
    )
}

export default IconTranslation