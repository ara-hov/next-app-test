import ShareableButton from '@/components/reusable-components/button/ShareableButton';
import ShareableCollapse from '@/components/reusable-components/collapse/ShareableCollapse';
import ShareableMultiSelect from '@/components/reusable-components/multi-select/ShareableMultiSelect';
import ShareableUploadComponent from '@/components/reusable-components/upload-component/shareableUploadComponent';

const Menu = () => {
  const menuItemsData = [
    {
      id: 1,
      name: 'Kitchen',
      data: ['China', 'Russia', 'Armenia', 'USA', 'Canada', 'Iceland']
    },
    {
      id: 2,
      name: 'Special menu',
      data: ['China', 'Russia', 'Armenia', 'USA', 'Canada', 'Iceland']
    },
    {
      id: 3,
      name: 'Facilities',
      data: ['China', 'Russia', 'Armenia', 'USA', 'Canada', 'Iceland']
    },
    {
      id: 4,
      name: 'Average Prices',
      data: ['100$', '1010$', '210$', '540$', '716$', '625$']
    }
  ];
  return (
    <div className="events__menu">
      <ShareableCollapse header="Menu">
        <div className={'events__menu__elements'}>
          {menuItemsData.map((e) => {
            return (
              <div className="events__menu__elements__item" key={e.id}>
                <p className={'title'}>{e.name}</p>
                <ShareableMultiSelect countries={e.data} />
              </div>
            );
          })}
        </div>
        <ShareableUploadComponent />
        <div className="eventInfo__container__buttons">
          <ShareableButton
            buttonText="Delete all"
            danger={true}
          ></ShareableButton>
          <ShareableButton buttonText="Preview"></ShareableButton>
          <ShareableButton buttonText="Cancel" disabled={true}></ShareableButton>
          <ShareableButton buttonText="Save" onClick={() => {}}></ShareableButton>
        </div>
      </ShareableCollapse>
    </div>
  );
};

export default Menu;
