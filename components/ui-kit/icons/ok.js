import React from 'react';
import Icon from '@ant-design/icons';
import Ok from '@/styles/icons/ok.svg';

const OkIcon = ({...rest}) => {
    return (
            <Icon component={Ok} {...rest}/>
    );
};

export default OkIcon;
