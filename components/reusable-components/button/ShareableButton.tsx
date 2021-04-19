import { Button } from 'antd';
import React, { FC } from 'react';

interface ShareableButtonProps {
  buttonText?: string;
  ype?: string;
  className?: string;
  danger?: boolean;
  disabled?: boolean;
  type?: 'text' | 'link' | 'ghost' | 'default' | 'primary' | 'dashed';
  onClick?: (value: any) => void;
}

const ShareableButton: FC<ShareableButtonProps> = ({
  buttonText,
  className,
  type,
  disabled,
  danger,
  onClick
}) => {
  return (
    <Button
      className={`${className} shareable__button`}
      onClick={onClick}
      type={type}
      danger={danger}
      disabled={disabled}
    >
      {buttonText}
    </Button>
  );
};

export default ShareableButton;
