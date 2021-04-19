import { FC } from 'react';
import { Tabs } from 'antd';
import ImageIcon from '@/components/reusable-components/upload-component/icons/ImageIcon';
import UploadIcon from '@/components/reusable-components/upload-component/icons/UploadIcon';
import VideoIcon from '@/components/reusable-components/upload-component/icons/VideoIcon';
import { useEffect, useRef, useState } from 'react';
import ImageDeleteIcon from '@/components/reusable-components/upload-component/icons/ImageDeleteIcon';
import ShareableModal from '@/components/reusable-components/modal/ShareableModal';
import UploadModalContent from '@/components/reusable-components/upload-component/modal-component/ModalComponent';
import UploadModalFooter from '@/components/reusable-components/upload-component/modal-component/ModalFooter';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const fileTypes = {
  photo: 'image/x-png,image/gif,image/jpeg',
  video: 'video/mp4'
};

const youtubeREGEXP = new RegExp(
  '^(https?://)?(www.youtube.com|youtu.?be)/.+$'
);

interface ShareableUploadComponentProps {
  lines?: number;
  fileType?: 'photo' | 'video';
  youtubeVideo?: string[];
}

const ShareableUploadComponent: FC<ShareableUploadComponentProps> = ({
  lines,
  fileType,
  youtubeVideo
}) => {
  const fileInput = useRef(null);
  const [img, setImg] = useState([]);
  const [deleteConfirmUI, setDeleteConfirmUI] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [activeKey, setActiveKey] = useState(0);

  //upload file or files and push to array
  const fileUploadHandler = (event) => {
    const b = Object.values(event.target.files).map((e) =>
      URL.createObjectURL(e)
    );
    if (b) {
      setImg([...img, ...b]);
    }
  };

  //delete img from array
  const onDeleteHandler = (e) => {
    setDeleteConfirmUI(false);
    setImg(img.filter((k) => k !== e));
  };

  //close modal
  const handleOk = () => {
    setIsModalVisible(false);
  };

  //close modal
  const handleCancel = () => {
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

  useEffect(() => {
    if (fileType === 'video') {
      const onlyVideoFiles = img.filter((v) => !youtubeREGEXP.test(v) && v);

      const validVideos = youtubeVideo.filter(
        (v) => youtubeREGEXP.test(v) && v
      );
      console.log([...onlyVideoFiles, ...validVideos]);

      setImg([...onlyVideoFiles, ...validVideos]);
    }
  }, [youtubeVideo]);

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <div className={'upload__image__body'}>
      <div className="upload__image__container">
        <div
          className={`upload__image__container__content ${
            img.length <= 1
              ? 'upload__image__container__contentNotScrolled'
              : ''
          }`}
          style={{
            height: `${img.length > 2 ? lines * 200 : 200}px`
          }}
        >
          <div className={'upload__image__container__content__item'}>
            <input
              type="file"
              onChange={fileUploadHandler}
              ref={fileInput}
              multiple
              className="upload__input"
              accept={fileType ? fileTypes[fileType] : ''}
            />

            {fileType === 'photo' ? <ImageIcon /> : <VideoIcon />}
            <UploadIcon onClick={fileInput} />
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={'upload__absolute'}
            >
              <path
                d="M22.125 14.6719V21.1875C22.125 21.7044 21.7044 22.125 21.1875 22.125H2.8125C2.29556 22.125 1.875 21.7044 1.875 21.1875V14.6719H0V21.1875C0 22.7383 1.26169 24 2.8125 24H21.1875C22.7383 24 24 22.7383 24 21.1875V14.6719H22.125Z"
                fill="#0085FF"
              />
              <path
                d="M16.5001 11.0492L12.9376 14.6117V0H11.0626V14.6117L7.50013 11.0492L6.17432 12.375L12.0001 18.2008L17.8259 12.375L16.5001 11.0492Z"
                fill="#0085FF"
              />
            </svg>
          </div>
          {img.map((e, i) => {
            return (
              <div className="upload__image__container__content__item" key={i}>
                {fileType === 'photo' ? (
                  <img
                    src={e}
                    alt={e}
                    onMouseOver={() => {
                      setIsModalVisible(true);
                    }}
                  />
                ) : (
                  <>
                    {youtubeREGEXP.test(e.trim()) ? (
                      <img
                        src={`https://img.youtube.com/vi/${e.substr(
                          -11
                        )}/0.jpg`}
                        alt={e}
                        onMouseOver={() => {
                          setIsModalVisible(true);
                        }}
                      />
                    ) : (
                      <video
                        className="upload__image__container__content__item"
                        controls={false}
                        onMouseOver={() => {
                          setIsModalVisible(true);
                        }}
                      >
                        <source src={`${e}#t=1`} type={fileTypes.video} />
                        Your browser does not support HTML5 video.
                      </video>
                    )}

                    <svg
                      className="play_absolute"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0)">
                        <path
                          d="M36.9799 18.2564L4.97999 0.256442C4.35999 -0.0915568 3.604 -0.0835568 2.992 0.272442C2.376 0.632441 2 1.28844 2 2.00044V38.0003C2 38.7123 2.376 39.3683 2.992 39.7283C3.304 39.9083 3.652 40.0003 3.99999 40.0003C4.33599 40.0003 4.67599 39.9163 4.97999 39.7443L36.9799 21.7444C37.6079 21.3884 37.9999 20.7244 37.9999 20.0004C37.9999 19.2764 37.6079 18.6124 36.9799 18.2564Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0">
                          <rect width="40" height="40" rx="5" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </>
                )}
                <ImageDeleteIcon onDelete={onDeleteHandler} elem={e} />
              </div>
            );
          })}
        </div>
      </div>
      <ShareableModal
        isModalVisible={isModalVisible}
        handleCancel={handleCancel}
        handleOk={handleOk}
        width={fileType === 'photo' ? 975 : 675}
        wrapClassName={'on__upload__modal'}
        footer={
          <UploadModalFooter
            images={img}
            navigationPrevRef={navigationPrevRef}
            navigationNextRef={navigationNextRef}
            activeKey={activeKey}
            setActiveKey={setActiveKey}
            onClick={fileInput}
            handleCancel={handleCancel}
            showConfirm={confirmDeleteShow}
            confirm={deleteConfirmUI}
          />
        }
      >
        <UploadModalContent
          images={img}
          onDelete={onDeleteHandler}
          navigationPrevRef={navigationPrevRef}
          navigationNextRef={navigationNextRef}
          activeKey={activeKey}
          setActiveKey={setActiveKey}
          confirmShowed={deleteConfirmUI}
          closeConfirm={confirmDeleteClose}
          fileType={fileType}
        />
      </ShareableModal>
    </div>
  );
};

export default ShareableUploadComponent;
