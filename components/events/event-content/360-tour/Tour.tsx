import { FC, useState, useRef, useEffect } from 'react';
import { Tag } from 'antd';
import DeleteIcon from '@/components/icons/DeleteIcon';
import PlusIcon from '@/components/icons/PlusIcon';
import ShareableInput from '@/components/reusable-components/input/ShareableInput';
import ShareableModal from '@/components/reusable-components/modal/ShareableModal';
import UploadModalContent from '@/components/reusable-components/upload-component/modal-component/ModalComponent';
import UploadModalFooter from '@/components/reusable-components/upload-component/modal-component/ModalFooter';

interface TourProps {}

const REGEXP = /^https:\/\/app\.cloudpano\.com\/tours\/\S+/g;

const Tour: FC<TourProps> = () => {
  const inputRef = useRef(null);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const [tags, setTags] = useState<string[]>([]);
  const [inputVisible, setInputVisible] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');
  const [valid, setValid] = useState<boolean>(true);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [activeKey, setActiveKey] = useState(0);
  const [deleteConfirmUI, setDeleteConfirmUI] = useState(false);

  const handleClose = (removedTag) => {
    setDeleteConfirmUI(false);
    setTags(tags.filter((tag) => tag !== removedTag));
  };

  const showInput = () => {
    setInputVisible(true);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputConfirm = () => {
    if (inputValue) {
      if (REGEXP.test(inputValue) && tags.indexOf(inputValue) === -1) {
        setTags([...tags, inputValue]);
        setInputVisible(false);
        setInputValue('');
        setValid(true);
      } else {
        setValid(false);
        inputRef.current.lastChild.blur();
      }
    } else {
      setInputVisible(false);
      setInputValue('');
    }
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const confirmDeleteShow = () => {
    setDeleteConfirmUI(true);
  };

  const confirmDeleteClose = () => {
    setDeleteConfirmUI(false);
  };

  useEffect(() => {
    if (inputVisible) {
      inputRef.current.lastChild.focus();
    }
  }, [inputVisible]);

  return (
    <>
      <div className="tour__container">
        <label htmlFor="">360 tour</label>
        <div className="tour__items">
          {tags.map((tag, index) => {
            const isLongTag = tag.length > 20;

            return (
              <Tag
                className="tour__chips"
                key={tag}
                closable
                onClose={() => handleClose(tag)}
                closeIcon={<DeleteIcon />}
                onClick={showModal}
              >
                {/* <span>{isLongTag ? `${tag.slice(0, 20)}...` : tag}</span> */}
                <span className="tour__chips--title" onMouseOver={showModal}>
                  Tour 360 #{index + 1}
                </span>
              </Tag>
            );
          })}
          {!inputVisible && (
            <div className="tour__chips--add" onClick={showInput}>
              <PlusIcon />
            </div>
          )}
        </div>
      </div>
      {inputVisible && (
        <div className="content__container__inputs" ref={inputRef}>
          <ShareableInput
            label="Ad 360 Tour link"
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleInputConfirm}
            onPressEnter={handleInputConfirm}
            error={!valid}
          />
        </div>
      )}
      <ShareableModal
        isModalVisible={isModalVisible}
        handleCancel={closeModal}
        handleOk={closeModal}
        width={995}
        wrapClassName={'on__upload__modal'}
        footer={
          <UploadModalFooter
            images={tags}
            navigationPrevRef={navigationPrevRef}
            navigationNextRef={navigationNextRef}
            activeKey={activeKey}
            setActiveKey={setActiveKey}
            handleCancel={closeModal}
            showConfirm={confirmDeleteShow}
            confirm={deleteConfirmUI}
          />
        }
      >
        <UploadModalContent
          images={tags}
          onDelete={handleClose}
          navigationPrevRef={navigationPrevRef}
          navigationNextRef={navigationNextRef}
          activeKey={activeKey}
          setActiveKey={setActiveKey}
          confirmShowed={deleteConfirmUI}
          closeConfirm={confirmDeleteClose}
          fileType={'360tour'}
        />
      </ShareableModal>
    </>
  );
};

export default Tour;
