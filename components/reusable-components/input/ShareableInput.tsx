import { Input } from 'antd';
import { ChangeEvent, FC, ReactNode, KeyboardEvent } from 'react';

interface ShareableInputProps {
  size?: 'large' | 'middle' | 'small';
  placeholder?: string;
  label?: string;
  name?: string;
  value?: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: ChangeEvent<HTMLInputElement>) => void;
  onPressEnter?: (e: KeyboardEvent<HTMLInputElement>) => void;
  error?: boolean;
}

const ShareableInput: FC<ShareableInputProps> = ({
  size,
  placeholder,
  label,
  name,
  value,
  prefix,
  suffix,
  onChange,
  onBlur,
  onPressEnter,
  error
}) => {
  return (
    <>
      <label>{label}</label>
      <Input
        size={size}
        placeholder={placeholder}
        prefix={prefix}
        suffix={suffix}
        name={name}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
        onPressEnter={onPressEnter}
        className={error ? 'input__error' : ''}
      />
    </>
  );
};

export default ShareableInput;
