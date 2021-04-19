import { Swiper, SwiperSlide } from 'swiper/swiper-react';
import { useEffect, FC, RefObject, SetStateAction, Dispatch } from 'react';

interface UploadModalFooterProps {
  images: string[];
  onClick?: RefObject<HTMLButtonElement>;
  navigationPrevRef?: RefObject<any>;
  navigationNextRef?: RefObject<any>;
  activeKey: number;
  setActiveKey?: Dispatch<SetStateAction<number>>;
  handleCancel: Function;
  showConfirm: Function;
  confirm: boolean;
}

const UploadModalFooter: FC<UploadModalFooterProps> = ({
  images,
  onClick,
  navigationPrevRef,
  navigationNextRef,
  activeKey,
  setActiveKey,
  handleCancel,
  showConfirm,
  confirm
}) => {
  useEffect(() => {
    console.log(images);

    if (images.length === 0) {
      handleCancel();
    }
  }, [images]);
  return (
    <div className={'upload__modal__footer'}>
      <div className={'upload__modal__footer__left'}>
        <a
          href={images[activeKey]}
          download
          style={confirm ? { pointerEvents: 'none' } : null}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={'uploadIcon'}
          >
            <path
              d="M59 39.125V56.5C59 57.8785 57.8785 59 56.5 59H7.5C6.1215 59 5 57.8785 5 56.5V39.125H0V56.5C0 60.6355 3.3645 64 7.5 64H56.5C60.6355 64 64 60.6355 64 56.5V39.125H59Z"
              fill="#0085FF"
            />
            <path
              d="M44.0005 29.4645L34.5005 38.9645V0H29.5005V38.9645L20.0005 29.4645L16.465 33L32.0005 48.5355L47.536 33L44.0005 29.4645Z"
              fill="#0085FF"
            />
          </svg>
        </a>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={confirm ? { pointerEvents: 'none' } : null}
          onClick={() => {
            if (!confirm) {
              showConfirm();
            }
          }}
        >
          <path
            d="M5.33325 28.4444C5.33325 30.4089 6.92434 31.9999 8.88883 31.9999H23.1111C25.0755 31.9999 26.6666 30.4089 26.6666 28.4444V7.11102H5.33325V28.4444Z"
            fill="#EB5757"
          />
          <path
            d="M22.2223 1.77775L20.4445 0H11.5557L9.77783 1.77775H3.55566V5.33333H28.4445V1.77775H22.2223Z"
            fill="#EB5757"
          />
        </svg>
        {onClick && (
          <svg
            onClick={() => {
              if (!confirm) {
                onClick.current.click();
              }
            }}
            style={confirm ? { pointerEvents: 'none' } : null}
            width="32"
            height="32"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5 25C19.4036 25 25 19.4036 25 12.5C25 5.59644 19.4036 0 12.5 0C5.59644 0 0 5.59644 0 12.5C0 19.4036 5.59644 25 12.5 25Z"
              fill="#0085FF"
            />
            <path
              d="M12.5 6.5V19"
              stroke="white"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.75 12.5H6.25"
              stroke="white"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
      {navigationPrevRef && navigationNextRef && (
        <div className={'upload__modal__footer__right'}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={confirm ? { pointerEvents: 'none' } : null}
            ref={navigationPrevRef}
          >
            <circle cx="16" cy="16" r="16" fill="#0085FF" />
            <path
              d="M14.4587 16.0034L20.4442 10.0176C20.6091 9.85314 20.6997 9.6333 20.6997 9.39889C20.6997 9.16436 20.6091 8.94465 20.4442 8.77997L19.9198 8.25574C19.7552 8.0908 19.5352 8 19.3008 8C19.0664 8 18.8467 8.0908 18.682 8.25574L11.5553 15.3824C11.3899 15.5476 11.2994 15.7683 11.3001 16.003C11.2994 16.2387 11.3898 16.4592 11.5553 16.6245L18.6754 23.7443C18.8401 23.9092 19.0598 24 19.2943 24C19.5287 24 19.7484 23.9092 19.9133 23.7443L20.4376 23.22C20.7788 22.8788 20.7788 22.3234 20.4376 21.9823L14.4587 16.0034Z"
              fill="white"
            />
          </svg>
          <div className={'upload__modal__body__footer__pagination'}>
            {images.map((e, i) => {
              return (
                <div
                  key={i}
                  className={`upload__modal__body__footer__pagination__items ${
                    activeKey === i
                      ? 'upload__modal__body__footer__pagination__itemsActive'
                      : null
                  }`}
                ></div>
              );
            })}
          </div>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={confirm ? { pointerEvents: 'none' } : null}
            ref={navigationNextRef}
          >
            <circle cx="16" cy="16" r="16" fill="#0085FF" />
            <path
              d="M17.5416 15.9966L11.556 21.9824C11.3912 22.1469 11.3005 22.3667 11.3005 22.6011C11.3005 22.8356 11.3912 23.0553 11.556 23.22L12.0805 23.7443C12.245 23.9092 12.465 24 12.6994 24C12.9338 24 13.1535 23.9092 13.3182 23.7443L20.445 16.6176C20.6103 16.4524 20.7008 16.2317 20.7002 15.997C20.7008 15.7613 20.6104 15.5408 20.445 15.3755L13.3248 8.25574C13.1602 8.0908 12.9405 8 12.7059 8C12.4715 8 12.2518 8.0908 12.087 8.25574L11.5626 8.77997C11.2214 9.12117 11.2214 9.67662 11.5626 10.0177L17.5416 15.9966Z"
              fill="white"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default UploadModalFooter;
