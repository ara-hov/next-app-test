import React from "react";
import styles from "../../styles/filterVillas.module.css";
import { Collapse, Checkbox, Button, Select, Input, Slider, Rate } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import Icon from "@ant-design/icons";
import Star from "@/icons/star.svg";
const { Option } = Select;

const { Panel } = Collapse;

const FilterVillas = ({ isPlacesPage }) => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <>
      <div className="chek_in_out_panel">
        <div className="chek_in_out_item">
          <span className="chek_in_out_text">Chek-in</span>
          <Select
            defaultValue="12.11.2019"
            style={{ width: 274 }}
            bordered={false}
          >
            <Option value="time_1">12.11.2019</Option>
            <Option value="time_2">13.09.2020</Option>
            <Option value="time_3">12.11.2019</Option>
          </Select>
        </div>
        <div className="chek_in_out_item">
          <span className="chek_in_out_text">Chek-out</span>
          <Select
            defaultValue="13.11.2019"
            style={{ width: 274 }}
            bordered={false}
          >
            <Option value="time_1">12.11.2019</Option>
            <Option value="time_2">13.09.2020</Option>
            <Option value="time_3">12.11.2019</Option>
          </Select>
        </div>
        <div className="chek_in_out_item">
          <span className="chek_in_out_text">Guests</span>
          <Select
            defaultValue="2 Adult , 0 Child"
            style={{ width: 274 }}
            bordered={false}
          >
            <Option value="family_1">3 Adult , 1 Child</Option>
            <Option value="family_2">4 Adult , 2 Child</Option>
            <Option value="family_3">5 Adult , 0 Child</Option>
          </Select>
        </div>
      </div>
      <div className="villas_filter_btns">
        <Button type="primary" danger block>
          Search
        </Button>
        <Button block className="map_button">
          View on the map
        </Button>
      </div>
      <div className={styles.price_wrapper}>
        <span className={styles.price_text}>Price</span>
        <div className="price_inputs">
          <Input />
          <Input />
        </div>
        <div className="custom_range">
          <Slider range={{ draggableTrack: true }} defaultValue={[0, 50]} />
        </div>
      </div>
      <div className="custom_accordion">
        <Collapse
          accordion
          expandIconPosition="right"
          ghost
          defaultActiveKey={["1"]}
          expandIcon={({ isActive }) =>
            isActive ? <UpOutlined /> : <DownOutlined />
          }
        >
          <Panel header="Review Score" key="1">
            <Checkbox>Excellent</Checkbox>
            <Checkbox>Very good</Checkbox>
            <Checkbox>Average</Checkbox>
            <Checkbox>Poor</Checkbox>
            <Checkbox>Terrible</Checkbox>
          </Panel>
        </Collapse>
        <Collapse
          accordion
          expandIconPosition="right"
          ghost
          defaultActiveKey={["1"]}
          expandIcon={({ isActive }) =>
            isActive ? <UpOutlined /> : <DownOutlined />
          }
        >
          <Panel header="Hotel Star" key="1">
            <Checkbox>
              <Rate
                disabled
                defaultValue={5}
                count={5}
                character={<Icon component={Star} />}
              />
            </Checkbox>
            <Checkbox>
              {" "}
              <Rate
                disabled
                defaultValue={4}
                count={4}
                character={<Icon component={Star} />}
              />
            </Checkbox>
            <Checkbox>
              <Rate
                disabled
                defaultValue={3}
                count={3}
                character={<Icon component={Star} />}
              />
            </Checkbox>
            <Checkbox>
              <Rate
                disabled
                defaultValue={2}
                count={2}
                character={<Icon component={Star} />}
              />
            </Checkbox>
            <Checkbox>
              <Rate
                disabled
                defaultValue={1}
                count={1}
                character={<Icon component={Star} />}
              />
            </Checkbox>
          </Panel>
        </Collapse>
        <Collapse
          accordion
          expandIconPosition="right"
          ghost
          defaultActiveKey={["1"]}
          expandIcon={({ isActive }) =>
            isActive ? <UpOutlined /> : <DownOutlined />
          }
        >
          <Panel header="Distance to the sea" key="1">
            <Checkbox>15 km</Checkbox>
            <Checkbox> 12 km</Checkbox>
            <Checkbox>5 km</Checkbox>
            <Checkbox>1 km</Checkbox>
            <Checkbox>200 m</Checkbox>
          </Panel>
        </Collapse>
      </div>
    </>
  );
};

export default FilterVillas;
