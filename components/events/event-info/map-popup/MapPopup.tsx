import ShareableInput from '@/components/reusable-components/input/ShareableInput';
import LocatorIcon from '../../../icons/LocatorIcon';

const MapPopup = () => {
  return (
    <div className="mapPopup__container">
      <div className="mapPopup__container__inputs">
        <ShareableInput label="MapLink" />
      </div>
      <div className="mapPopup__container__inputs">
        <div className="mapPopup__container__inputs__content">
          <p>Coordinates</p>
          <LocatorIcon />
        </div>
        <ShareableInput />
      </div>
      <div className="mapPopup__container__mapInfo">
        <div className="mapPopup__container__mapInfo--image">
          <img src="/images/maskGroup.png" />
        </div>
        <div className="mapPopup__container__mapInfo__desc">
          <p className="mapPopup__container__mapInfo__desc--title">
            Jimbaran Beach
          </p>
          <p className="mapPopup__container__mapInfo__desc--text">
            Джимбаран, South Kuta, Бадунг, Бали
          </p>
        </div>
      </div>
    </div>
  );
};

export default MapPopup;
