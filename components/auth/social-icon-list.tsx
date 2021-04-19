import React from 'react';
import FacebookIcon from '@/ui-kit/icons/facebook-icon';
import GooglePlusIcon from '@/ui-kit/icons/google-plus-icon';
import VkIcon from '@/ui-kit/icons/vk-icon';
import OkIcon from '@/ui-kit/icons/ok';

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
