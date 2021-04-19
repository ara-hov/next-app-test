import React from 'react';
import Icon from '@ant-design/icons';
import Facebook from '@/styles/icons/facebook.svg';

const FacebookIcon = ({...rest}) => {
    return (
            <Icon component={Facebook} {...rest}/>
    );
};

export default FacebookIcon;
