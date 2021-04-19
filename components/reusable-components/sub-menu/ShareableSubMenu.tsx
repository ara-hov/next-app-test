import React, { FC, ReactNode } from 'react';
import { Menu } from 'antd';

interface ShareableSubMenuProps {
  onClick?: () => void;
  width?: string | number;
  icon?: ReactNode;
  title?: string;
  subKey?: string | number;
  key?: string | number;
  option?: ReactNode | string;
}

const ShareableSubMenu: FC<ShareableSubMenuProps> = ({
  onClick,
  width,
  icon,
  title,
  subKey,
  key,
  option
}) => {
  const { SubMenu } = Menu;

  return (
    <Menu
      onClick={onClick}
      style={{ width: width }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
    >
      <SubMenu key={subKey} icon={icon} title={title}>
        <Menu.Item key={key}>{option}</Menu.Item>
      </SubMenu>
    </Menu>
  );
};

export default ShareableSubMenu;
