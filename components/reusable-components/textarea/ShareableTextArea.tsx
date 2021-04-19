import { Input } from 'antd';

const ShareableTextArea = ({ rows, label }) => {
  const { TextArea } = Input;
  return (
    <>
      <label>{label}</label>
      <TextArea rows={rows} />
    </>
  );
};

export default ShareableTextArea;
