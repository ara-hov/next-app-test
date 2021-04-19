import React from 'react';
import Icon from '@ant-design/icons';
import Location from '@/icons/location.svg';

const LocationIcon = ({...rest}) => {
    return (
            <Icon component={Location} {...rest}/>
    );
};

export default LocationIcon;
