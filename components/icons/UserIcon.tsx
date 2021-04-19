import React from 'react';
import Icon from '@ant-design/icons';
import User from '@/icons/user.svg';
import UserGrey from '@/icons/user-grey.svg';

const UserIcon = ({color,...rest}: any) => {
    return (
            <Icon component={color === 'grey' ? UserGrey :User} {...rest}/>
    );
};

export default UserIcon;
