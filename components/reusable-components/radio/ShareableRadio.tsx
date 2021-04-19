import { Radio } from 'antd';
import { FC } from 'react';

interface ShareableRadioProps {
  id: string | number;
  country: string;
}

const ShareableRadio: FC<ShareableRadioProps> = ({ id, country }) => {
  console.log('file: Shareableradio.tsx ~ line 10 ~ id', id);
  console.log('file: Shareableradio.tsx ~ line 10 ~ id', country);
  const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px'
  };

  const onChange = (e) => {
    console.log('radio checked', e.target.value);
  };

  return (
    <Radio.Group>
      <Radio style={radioStyle} value={id}>
        {country}
      </Radio>
    </Radio.Group>
  );
};

export default ShareableRadio;
