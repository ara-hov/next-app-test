import React from 'react';
import FacebookIcon from '../../icons/FacebookIcon';
import GooglePlusIcon from '../../icons/GooglePlusIcon';
import VkIcon from '../../icons/VkIcon';
import OkIcon from '../../icons/Ok';

const SocialIconList = () => {
    return (
            <div className="social-icons">
                <div className="social-icon">
                    <FacebookIcon/>
                </div>
                <div className="social-icon">
                    <GooglePlusIcon/>
                </div>
                <div className="social-icon">
                    <VkIcon/>
                </div>
                <div className="social-icon">
                    <OkIcon/>
                </div>
            </div>
    );
};

export default SocialIconList;
