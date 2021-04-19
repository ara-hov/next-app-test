import { Modal } from 'antd';
import { FC, ReactNode } from 'react';

interface ShareableModalProps {
  isModalVisible: boolean;
  handleOk: () => void;
  handleCancel: () => void;
  title?: string;
  children?: ReactNode;
  width?: string | number;
  footer?: ReactNode;
  wrapClassName?:string
}

const ShareableModal: FC<ShareableModalProps> = ({
  isModalVisible,
  handleOk,
  handleCancel,
  children,
  width,
  title,
  footer,
  wrapClassName
}) => {
  return (
    <Modal
      title={title}
      width={width}
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={footer}
      wrapClassName={wrapClassName}
    >
      {children}
    </Modal>
  );
};

export default ShareableModal;
