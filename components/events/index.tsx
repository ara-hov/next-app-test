import ShareableTabMenu from '../reusable-components/menu/ShareableTabMenu';
import EventInfo from './event-info/EventInfo';
import Menu from '@/components/events/event-menu/Menu';
import EventContent from './event-content/EventContent';

const Events = () => {
  const menuData = [
    {
      id: '1',
      title: 'Event info',
      content: <EventInfo />
    },
    {
      id: '2',
      title: 'Menu',
      content: <Menu />
    },
    {
      id: '3',
      title: 'Content',
      content: <EventContent />
    },
    {
      id: '4',
      title: 'Object plan',
      content: <div>4aaaaaaaaaaaaaaaaaa</div>
    },
    {
      id: '5',
      title: 'Add new',
      content: <div>5</div>
    },
    {
      id: '6',
      title: 'Hole 1',
      content: <div>6qqqqqqqqqqqqqqqqqqqqqqqqqqqq</div>
    }
  ];
  return (
    <div className={'events__settings__body'}>
      <ShareableTabMenu
        data={menuData}
        defaultActiveKey="1"
        menuTitle="Settings menu"
      />
    </div>
  );
};

export default Events;
