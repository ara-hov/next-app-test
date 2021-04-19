import React from 'react';
import Icon from '@ant-design/icons';
import User from '@/styles/icons/user.svg';
import UserGrey from '@/styles/icons/user-grey.svg';

const UserIcon = ({color,...rest}) => {
    return (
            <Icon component={color === 'grey' ? UserGrey :User} {...rest}/>
    );
};

export default UserIcon;
