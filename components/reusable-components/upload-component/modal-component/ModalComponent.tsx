import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import {
  useRef,
  useState,
  FC,
  RefObject,
  Dispatch,
  SetStateAction
} from 'react';

SwiperCore.use([Pagination, Navigation]);

const youtubeREGEXP = new RegExp(
  '^(https?://)?(www.youtube.com|youtu.?be)/.+$'
);

interface UploadModalContentProps {
  images: string[];
  onDelete: Function;
  navigationPrevRef?: RefObject<any>;
  navigationNextRef?: RefObject<any>;
  activeKey: number;
  setActiveKey?: Dispatch<SetStateAction<number>>;
  confirmShowed: boolean;
  closeConfirm: Function;
  fileType: 'photo' | 'video' | '360tour';
  height?: number;
}

const UploadModalContent: FC<UploadModalContentProps> = ({
  images,
  onDelete,
  navigationPrevRef,
  navigationNextRef,
  activeKey,
  setActiveKey,
  confirmShowed,
  closeConfirm,
  fileType,
  height
}) => {
  return (
    <div
      className={`upload__modal__container ${
        fileType === 'photo' && images.length > 1 ? '' : 'fill'
      }`}
    >
      <div className={`upload__modal__body`} style={{ height: `${height}px` }}>
        <Swiper
          spaceBetween={images.length > 1 && 50}
          slidesPerView={1}
          navigation={
            images.length > 1 && {
              prevEl: navigationPrevRef?.current,
              nextEl: navigationNextRef?.current
            }
          }
          onSlideChange={(e) => setActiveKey(e.activeIndex)}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {images.map((e, i) => {
            return (
              <SwiperSlide key={i}>
                <div className={'upload__modal__body__images'}>
                  {fileType === 'photo' && <img src={e} alt={e} key={i} />}
                  {fileType === 'video' &&
                    (youtubeREGEXP.test(e) ? (
                      <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${e.slice(-11)}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      />
                    ) : (
                      <video width="100%" controls>
                        <source src={`${e}`} type="video/mp4" />
                        Your browser does not support HTML5 video.
                      </video>
                    ))}

                  {fileType === '360tour' && (
                    <iframe
                      id={e.substr(25)}
                      allow="camera;microphone;vr;accelerometer;gyroscope;fullscreen"
                      allowFullScreen
                      frameBorder="0"
                      width="100%"
                      height="100%"
                      src={e}
                    />
                  )}
                </div>
              </SwiperSlide>
            );
          })}
          {confirmShowed && (
            <div
              className={`confirm-ui ${
                images.length === 1 && fileType === 'photo' ? 'small' : ''
              }`}
            >
              <button
                className={'confirm'}
                onClick={() => onDelete(images[activeKey])}
              >
                Delete
              </button>
              <button className={'back'} onClick={() => closeConfirm()}>
                Back
              </button>
            </div>
          )}
        </Swiper>
      </div>
      {fileType === 'photo' && images.length > 1 && (
        <div className="upload__modal__body__galery">
          {images.map(
            (e, i) =>
              i !== activeKey && (
                <img
                  src={e}
                  alt={e}
                  key={i}
                  className="upload__modal__body__galery--file"
                  onClick={() => {
                    // setActiveKey(i);
                  }}
                />
              )
          )}
        </div>
      )}
    </div>
  );
};

export default UploadModalContent;
