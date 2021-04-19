import React from 'react';
import Icon from '@ant-design/icons';
import Heart from '@/styles/icons/whishlist.svg';

const HeartIcon = ({...rest}) => {
    return (
            <Icon component={Heart} {...rest}/>
    );
};

export default HeartIcon;
