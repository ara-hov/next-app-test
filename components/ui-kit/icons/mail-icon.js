import React from 'react';
import Icon from '@ant-design/icons';
import Mail from '@/styles/icons/mail.svg';

const MailIcon = ({...rest}) => {
    return (
            <Icon component={Mail} {...rest}/>
    );
};

export default MailIcon;
