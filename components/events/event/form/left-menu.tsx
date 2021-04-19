import React from 'react';
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import Link from "next/link";

const { SubMenu } = Menu;

const LeftMenu = ({selectKey, eventId}) => {
    return (
        <div className="left-menu">
            <Menu mode="inline" defaultSelectedKeys={[selectKey]} defaultOpenKeys={['menu_events']} inlineIndent={12}>
                <SubMenu key="menu_events" title="Setting menu" className="with-border">
                    <Menu.Item key="menu_events-event-info">
                        <Link href={`/admin/events/${eventId}`} locale={"ru"}>
                            Event info
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="menu_events-menu">
                        <Link href={`/admin/events/${eventId}/menu`} locale={"ru"}>
                            Menu
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="menu_events-content">
                        <Link href={`/admin/events/${eventId}/content`} locale={"ru"}>
                            Content
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="menu_events-object-plan">
                        <Link href={`/admin/events/${eventId}/object-plan`} locale={"ru"}>
                            Object plan
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="menu_events-add-new">
                        <Link href={`/admin/events/new`} locale={"ru"}>
                            Add new
                        </Link>
                    </Menu.Item>
                </SubMenu>
            </Menu>
        </div>
    );
};

export default LeftMenu;