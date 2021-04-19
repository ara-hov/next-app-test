import React, { FC, useEffect, useRef, useState } from 'react';

import ImageIcon from '@/components/reusable-components/upload-component/icons/ImageIcon';
import UploadIcon from '@/components/reusable-components/upload-component/icons/UploadIcon';
import PlusIcon from '@/components/icons/PlusIcon';

import ImageDeleteIcon from '@/components/reusable-components/upload-component/icons/ImageDeleteIcon';
import ShareableModal from '@/components/reusable-components/modal/ShareableModal';
import UploadModalContent from '@/components/reusable-components/upload-component/modal-component/ModalComponent';
import UploadModalFooter from '@/components/reusable-components/upload-component/modal-component/ModalFooter';

interface UploadLogoProps {}

const UploadLogo: FC<UploadLogoProps> = () => {
  const fileInput = useRef<HTMLInputElement>();
  const [img, setImg] = useState(null);
  const [deleteConfirmUI, setDeleteConfirmUI] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  //upload file
  const fileUploadHandler = (event) => {
    const b = Object.values(event.target.files).map((e) =>
      URL.createObjectURL(e)
    );
    if (b) {
      setImg(b);
    }
  };

  //delete img
  const onDeleteHandler = () => {
    setDeleteConfirmUI(false);
    setImg(null);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  //close modal
  const closeModal = () => {
    setIsModalVisible(false);
  };

  //show confirm and close buttons
  const confirmDeleteShow = () => {
    setDeleteConfirmUI(true);
  };

  //close confirm and close buttons
  const confirmDeleteClose = () => {
    setDeleteConfirmUI(false);
  };

  const loadImg = () => {
    fileInput?.current.click();
  };

  return (
    <div className="upload__image__body">
      <div className="upload__image__container logo">
        <div className="upload__image__container__content__item logo">
          {img && (
            <>
              <img
                src={img}
                alt="logo"
                style={{ borderRadius: '50%' }}
                onMouseOver={showModal}
              />
              <ImageDeleteIcon onDelete={onDeleteHandler} />
            </>
          )}
          <div style={img && { display: 'none' }}>
            <input
              type="file"
              onChange={fileUploadHandler}
              ref={fileInput}
              className={`upload__input ${img ? 'hide' : ''}`}
              accept="image/x-png,image/jpeg"
            />
            <ImageIcon />
            <UploadIcon onClick={fileInput} />
          </div>
        </div>
        <div style={{ cursor: 'pointer' }} onClick={loadImg}>
          {!img && <PlusIcon />}
        </div>
      </div>

      <ShareableModal
        isModalVisible={isModalVisible}
        handleCancel={closeModal}
        handleOk={closeModal}
        width={275}
        wrapClassName="on__upload__modal"
        footer={
          <UploadModalFooter
            images={img ? [img] : []}
            onClick={fileInput}
            handleCancel={closeModal}
            activeKey={0}
            showConfirm={confirmDeleteShow}
            confirm={deleteConfirmUI}
          />
        }
      >
        <UploadModalContent
          height={412}
          images={[img]}
          onDelete={onDeleteHandler}
          activeKey={0}
          confirmShowed={deleteConfirmUI}
          closeConfirm={confirmDeleteClose}
          fileType={'photo'}
        />
      </ShareableModal>
    </div>
  );
};

export default UploadLogo;
