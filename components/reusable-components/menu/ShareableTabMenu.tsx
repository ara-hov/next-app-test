import { Tabs, Typography } from 'antd';
import { FC, ReactNode } from 'react';

interface ShareableMenuProps {
  data: dataType[];
  defaultActiveKey: string;
  menuTitle?: string;
  className?: string;
}

type dataType = {
  id: string;
  title?: string;
  content: ReactNode | string;
};

const ShareableMenu: FC<ShareableMenuProps> = ({
  data,
  defaultActiveKey,
  menuTitle,
  className
}) => {
  const { TabPane } = Tabs;
  const { Title } = Typography;
  return (
    <>
      <Title level={5}>{menuTitle}</Title>
      <Tabs
        tabPosition="left"
        defaultActiveKey={defaultActiveKey}
        className={className}
      >
        {data.map((item: dataType) => {
          return (
            <TabPane key={item.id} tab={item.title}>
              {item.content}
            </TabPane>
          );
        })}
      </Tabs>
    </>
  );
};

export default ShareableMenu;
