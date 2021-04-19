import React, { useState } from 'react';
import ShareableButton from '@/components/reusable-components/button/ShareableButton';
import ShareableCollapse from '@/components/reusable-components/collapse/ShareableCollapse';
import ShareableUploadComponent from '@/components/reusable-components/upload-component/shareableUploadComponent';
import ShareableUploadVideoComponent from '@/components/reusable-components/upload-component/shareableUploadVideoComponent';
import UploadLogo from '@/components/reusable-components/upload-component/upload-logo/UploadLogo';
import ShareableTextArea from '../../reusable-components/textarea/ShareableTextArea';
import Link from './link/Link';
import Tour from './360-tour/Tour';

const youtubeREGEXP = new RegExp(
  '^(https?://)?(www.youtube.com|youtu.?be)/.+$'
);

const EventContent = () => {
  const [overwievLink, setOverwievLink] = useState<string[]>(['']);

  const handlerAddOverwievLink = () => {
    setOverwievLink([...overwievLink, '']);
  };

  const handleOverwievLinkChange = (idx) => (e) => {
    setOverwievLink(
      overwievLink.map((v, i) => (i === idx ? e.target.value : v))
    );
  };

  const handlerDeleteOverwievLink = (i: number) => {
    setOverwievLink(overwievLink.filter((_, _i) => _i !== i));
  };

  const clearOverwievLink = () => {
    // console.log(
    //   overwievLink.filter((v, i) => {
    //     console.log(i, v);
    //     if (i === 0 || v) {
    //       console.log(true);
    //       return v;
    //     }
    //   })
    // );
  };

  React.useEffect(() => {
    console.log(overwievLink);
  }, [overwievLink]);

  return (
    <div className="content__container">
      <ShareableCollapse
        header="Content"
        className="content__container__collapse"
      >
        <div className="content__container__inputs">
          <label htmlFor="">Event pictures</label>
          <ShareableUploadComponent lines={2} fileType="photo" />
        </div>
        <div className="content__container__inputs">
          <label htmlFor="">Video overwiev</label>
          <ShareableUploadComponent
            lines={1}
            fileType="video"
            youtubeVideo={overwievLink}
          />
        </div>

        {overwievLink.map((link, i) => {
          return (
            <Link
              label="Video overview link"
              onClick={handlerAddOverwievLink}
              last={i === overwievLink.length - 1}
              index={i}
              onChange={handleOverwievLinkChange(i)}
              remove={handlerDeleteOverwievLink}
              key={i}
              link={link}
              clearNull={clearOverwievLink}
              regexp={youtubeREGEXP}
            />
          );
        })}

        <Tour />

        <div className="content__container__inputs">
          <label htmlFor="">Event logo</label>
          <UploadLogo />
        </div>

        <div className="content__container__textArea">
          <ShareableTextArea rows={4} label="About event" />
        </div>
        <div className="eventInfo__container__buttons">
          <ShareableButton
            buttonText="Delete all"
            danger={true}
          ></ShareableButton>
          <ShareableButton buttonText="Preview"></ShareableButton>
          <ShareableButton
            buttonText="Cancel"
            disabled={true}
          ></ShareableButton>
          <ShareableButton buttonText="Save"></ShareableButton>
        </div>
      </ShareableCollapse>
    </div>
  );
};

export default EventContent;
