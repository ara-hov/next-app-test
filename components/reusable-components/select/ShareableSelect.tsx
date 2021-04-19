import { Select } from 'antd';
import { ChangeEvent, FC, ReactNode } from 'react';

interface ShareableSelectProps {
  defaultValue?: string;
  name?: string;
  onChange?: (e: ChangeEvent<HTMLSelectElement> | any) => void;
  onClick?: () => void;
  value?: string;
  mode?: 'multiple' | 'tags';
  children?: ReactNode;
  className?: string;
}

const ShareableSelect: FC<ShareableSelectProps> = ({
  defaultValue,
  mode,
  children,
  onChange,
  onClick,
  className
}) => {
  return (
    <Select
      defaultValue={defaultValue}
      onChange={onChange}
      mode={mode}
      className={className}
    >
      {children}
    </Select>
  );
};

export default ShareableSelect;
