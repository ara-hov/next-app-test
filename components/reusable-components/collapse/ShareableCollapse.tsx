import { Collapse } from 'antd';
import { FC, ReactNode } from 'react';
import ArrowIcon from "@/components/reusable-components/collapse/ArrowIcon";

interface ShareableCollapseProps {
  header?: string;
  children?: ReactNode;
  className?: string;
  expandIcon?:ReactNode
}

const ShareableCollapse: FC<ShareableCollapseProps> = ({
  header,
  children,
  className
}) => {
  const { Panel } = Collapse;

  function callback(key) {
    console.log(key);
  }
  return (
    <Collapse
      defaultActiveKey={['1']}
      onChange={callback}
      bordered={false}
      className={className}
      expandIconPosition={"right"}
    >
      <Panel header={header} key="1">
        {children}
      </Panel>
    </Collapse>
  );
};

export default ShareableCollapse;
