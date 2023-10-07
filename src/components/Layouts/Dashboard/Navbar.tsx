'use client';

import React from "react";
import {Avatar, Badge, Dropdown, Layout, MenuProps, Space, theme} from "antd";
import {useTheme} from "next-themes";
import { useTranslations } from 'next-intl';
import IconTranslation from "@/icons/translation";
import IconSun from "@/icons/sun";
import IconMoon from "@/icons/moon";
import IconLaptop from "@/icons/laptop";
import {usePathname} from "next-intl/client";
import {languages} from "src/utils/locale";
import Link from "next-intl/link";
import {UserOutlined} from "@ant-design/icons";
import IconNotificationRing from "@/icons/notification-ring";
const { Header} = Layout;

const DashboardNavbar : React.FC = () => {
    const {token: {  colorBgContainer }} = theme.useToken();
    return(
        <Header
            style={{
                padding: "16px 24px",
                margin: 0,
                position: 'sticky',
                top: 0,
                zIndex: 1,
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                background: colorBgContainer
            }}
        >
            <div style={{"display": "flex", "justifyContent": "space-between", "width": "100%"}}>
                <div style={{"display": "flex", "alignItems": "center", "margin": "4px 0", "overflow": "hidden"}}>
                    <span style={{"boxSizing":"border-box", "marginRight": 12,"padding":"0","color":"#fff","fontSize":"14px","fontVariant":"tabular-nums","lineHeight":"32px","listStyle":"none","fontFeatureSettings":"\"tnum\"","position":"relative","display":"inline-block","overflow":"hidden","whiteSpace":"nowrap","textAlign":"center","verticalAlign":"middle","background":"#ccc","width":"32px","height":"32px","borderRadius":"50%"}}><img style={{display: "block", width: "100%", height: "100%", OObjectFit: "cover", objectFit: "cover"}} src="https://avatars1.githubusercontent.com/u/8186664?s=460&amp;v=4"/></span>
                    <span style={{"marginRight": "12px", "marginBottom": "0", "color": "#000000d9", "fontWeight": "600", "fontSize": "20px", "lineHeight": "32px", "overflow": "hidden", "whiteSpace": "nowrap", "textOverflow": "ellipsis"}} title="Title">Title</span>
                    <span style={{"marginRight": "12px", "color": "#00000073", "fontSize": "14px", "lineHeight": "1.5715", "overflow": "hidden", "whiteSpace": "nowrap", "textOverflow": "ellipsis"}} title="This is a subtitle">This is a subtitle</span>
                </div>
                <div style={{"display": "flex", "alignItems": "center", "margin": "4px 0", "overflow": "hidden"}}>
                    <LocaleSwitcher/>
                    <ThemeToggle />
                        <span style={{marginRight: 15, "width":"20px","height":"100%"}}>
                            <IconNotificationRing/>
                        </span>
                    <ProfileToggle/>
                </div>
            </div>
        </Header>
    )
}

export default DashboardNavbar

const ThemeToggle: React.FC = () => {
    const { setTheme, theme } = useTheme();
    const t = useTranslations('theme');
    const onClick: MenuProps['onClick'] = ({ key }) => {
        setTheme(key);
    };

    const items: MenuProps['items'] = [
        {
            key: 'light',
            label: (
                <div className="flex items-center">
                    <IconSun/>
                    <span>{t('light')}</span>
                </div>
            ),
        },
        {
            key: 'dark',
            label: (
                <div className="flex items-center">
                    <IconMoon/>
                    <span>{t('dark')}</span>
                </div>
            ),
        },
        {
            key: 'system',
            label: (
                <div className="flex items-center">
                    <IconLaptop />
                    <span>{t('system')}</span>
                </div>
            ),
        },
    ];

    return (
        <Dropdown
            menu={{
                items,
                selectable: true,
                selectedKeys: [theme ?? 'system'],
                onClick,
            }}
            trigger={['click']}
        >
            <span style={{marginRight: 15, "width":"20px","height":"100%"}}>
                {theme === "system"? (window.matchMedia('(prefers-color-scheme: dark)').matches ? (<IconMoon/>):(<IconSun/>)) : (theme === 'light' ? (<IconSun/>):(<IconMoon/>))}
            </span>
        </Dropdown>
    );
}

const LocaleSwitcher: React.FC = () => {

    const pathname = usePathname();

    return (
        <Dropdown
            menu={{
                items: Object.entries(languages).map(([lang, setting]) => ({
                    key: lang,
                    label: (
                        <Link href={pathname ?? '/'} locale={lang}>
                            {setting.flag}&nbsp;&nbsp;{setting.name}
                        </Link>
                    ),
                })),
            }}
        >
            <span style={{marginRight: 15, "width":"20px","height":"100%"}}>
                <IconTranslation/>
            </span>
        </Dropdown>
    );
}

const items: MenuProps['items'] = [
    {
        label: <a href="https://www.antgroup.com">1st menu item</a>,
        key: '0',
    },
    {
        label: <a href="https://www.aliyun.com">2nd menu item</a>,
        key: '1',
    },
    {
        type: 'divider',
    },
    {
        label: '3rd menu item',
        key: '3',
    },
];

const ProfileToggle: React.FC = () => (
    <Dropdown menu={{ items }} trigger={['click']}>
        <a onClick={e => e.preventDefault()} style={{marginRight: 15}}>
            <Space>
                <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }} icon={<UserOutlined />} />
                <span style={{"color": "#000", "fontSize": "14px", "lineHeight": "1.5715", "overflow": "hidden", "whiteSpace": "nowrap", "textOverflow": "ellipsis"}}
                      title="Penguji Coba">
                    Penguji Coba
                </span>
            </Space>
        </a>
    </Dropdown>
);