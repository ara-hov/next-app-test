import React from 'react';
import {Collapse, Checkbox, Button} from 'antd';
import {DownOutlined, UpOutlined} from "@ant-design/icons";

const {Panel} = Collapse;

const FilterRestaurants = ({isPlacesPage}: any) => {
    return (
        <div className="custom_accordion">
            {isPlacesPage ?
                <Collapse accordion expandIconPosition="right" ghost defaultActiveKey={['1']}
                          expandIcon={({isActive}) => isActive ? <UpOutlined/> : <DownOutlined/>}>
                    <Panel header="Type of place" key="1">
                        <Checkbox>Volcanoes</Checkbox>
                        <Checkbox>Museum</Checkbox>
                        <Checkbox>Parks</Checkbox>
                        <Checkbox>Temples</Checkbox>
                        <Checkbox>Excursions</Checkbox>
                        <a href="#">More(17)</a>
                    </Panel>
                </Collapse> :
                <>
                    <Collapse accordion expandIconPosition="right" ghost defaultActiveKey={['1']}
                              expandIcon={({isActive}) => isActive ? <UpOutlined/> : <DownOutlined/>}>
                        <Panel header="Type of institution" key="1">
                            <Checkbox>Restaurant</Checkbox>
                            <Checkbox>Bistro</Checkbox>
                            <Checkbox>Dessert</Checkbox>
                            <Checkbox>Coffee</Checkbox>
                            <Checkbox>Fast-food</Checkbox>
                            <a href="#">More(17)</a>
                        </Panel>
                    </Collapse>
                    <Collapse accordion expandIconPosition="right" ghost defaultActiveKey={['1']}
                              expandIcon={({isActive}) => isActive ? <UpOutlined/> : <DownOutlined/>}>
                        <Panel header="Review Score" key="1">
                            <Checkbox>Excellent</Checkbox>
                            <Checkbox>Very good</Checkbox>
                            <Checkbox>Average</Checkbox>
                            <Checkbox>Poor</Checkbox>
                            <Checkbox>Terrible</Checkbox>
                        </Panel>
                    </Collapse>
                    <Collapse accordion expandIconPosition="right" ghost defaultActiveKey={['1']}
                              expandIcon={({isActive}) => isActive ? <UpOutlined/> : <DownOutlined/>}>
                        <Panel header="Type of institution" key="1">
                            <Checkbox>European</Checkbox>
                            <Checkbox>Japanese</Checkbox>
                            <Checkbox>Chinese</Checkbox>
                            <Checkbox>Russian</Checkbox>
                            <Checkbox>American</Checkbox>
                            <a href="#">More(17)</a>
                        </Panel>
                    </Collapse>
                </>
            }

        </div>
    );
}

export default FilterRestaurants;
