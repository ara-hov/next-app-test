import React from 'react';
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import Link from 'next/link';

const { SubMenu } = Menu;

const LeftMenu = ({selectKey, eventId}) => {
    const isDisabledItem = !eventId
    const isDisabledEventInfo = selectKey === 'menu_events-add-new'
    return (
        <div className="left-menu">
            <Menu mode="inline" defaultSelectedKeys={[selectKey]}
                  defaultOpenKeys={['menu_events', 'menu_security']} inlineIndent={12}>
                <SubMenu key="menu_events" title="Events" className="with-border">
                    <Menu.Item key="menu_events-event-info" disabled={isDisabledEventInfo}>
                        <Link href={`/admin/events/${eventId}`} locale={"ru"}>
                            Event info
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="menu_events-menu" disabled={isDisabledItem}>
                        <Link href={`/admin/events/${eventId}/menu`} locale={"ru"}>
                            Menu
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="menu_events-content" disabled={isDisabledItem}>
                        <Link href={`/admin/events/${eventId}/content`} locale={"ru"}>
                            Content
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="menu_events-object-plan" disabled={isDisabledItem}>Object plan</Menu.Item>
                    <Menu.Item key="menu_events-add-new" disabled={selectKey ? false : isDisabledItem}>
                        <Link href={`/admin/events/new`} locale={"ru"}>
                            Add new
                        </Link>
                    </Menu.Item>
                </SubMenu>
                <SubMenu key="menu_security" title="Security" className="with-border">
                    <Menu.Item key="menu_security-password-settings">Password settings</Menu.Item>
                    <Menu.Item key="menu_security-accounts">Enter in accounts</Menu.Item>
                    <Menu.Item key="menu_security-auth">Two-factor authentication</Menu.Item>
                    <Menu.Item key="menu_security-confidentiality">Confidentiality</Menu.Item>
                    <Menu.Item key="menu_security-delete-account">Delete account</Menu.Item>
                </SubMenu>
            </Menu>
        </div>
    );
};

export default LeftMenu;