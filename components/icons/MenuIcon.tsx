import React from 'react';
import Icon from '@ant-design/icons';
import Menu from '@/icons/menu.svg';

const MenuIcon = ({...rest}) => {
    return (
        <div>
            <Icon component={Menu} {...rest}/>
        </div>
    );
};

export default MenuIcon;
