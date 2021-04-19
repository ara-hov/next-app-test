import ShareableButton from '@/components/reusable-components/button/ShareableButton';
import ShareableCollapse from '@/components/reusable-components/collapse/ShareableCollapse';
import ShareableInput from '@/components/reusable-components/input/ShareableInput';
import ShareableSelect from '@/components/reusable-components/select/ShareableSelect';
import { DatePicker, Menu } from 'antd';
import ShareableTextArea from '../../reusable-components/textarea/ShareableTextArea';

const EventParticipants = () => {
  const { SubMenu } = Menu;
  return (
    <div className="participants__container">
      <ShareableCollapse
        header="Content"
        className="participants__container__collapse"
      >
        {/* <div>
          <p>Guest Photo</p>
        </div>
        <div>
          <ShareableSelect />
          <ShareableInput />
          <DatePicker />
          <ShareableTextArea rows={4} label="About guest" />
        </div> */}
        {/* <SubMenu key="sub2" title="Navigation Two">
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
        </SubMenu> */}
      </ShareableCollapse>
    </div>
  );
};

export default EventParticipants;
