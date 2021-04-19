import React from 'react';
import Icon from '@ant-design/icons';
import Search from '@/styles/icons/search.svg';

const SearchIcon = ({...rest}) => {
    return (
            <Icon component={Search} {...rest}/>
    );
};

export default SearchIcon;
