import React from 'react';
import Icon from '@ant-design/icons';
import Instagram from '@/icons/instagram.svg';

const InstagramIcon = ({...rest}) => {
    return (
            <Icon component={Instagram} {...rest}/>
    );
};

export default InstagramIcon;
