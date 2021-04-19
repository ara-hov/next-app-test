import { Select } from 'antd';
import React, {useState} from "react";
import { SelectItemInterface} from "@/props/form"

const { Option } = Select
export default function MultipleSelect({defaultValue = [], optionList, placeholder, onChangeParent, filterFunction = null}) {
    const onFilter = (input, option) => {
        if (!filterFunction)
            return option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
        else
            return filterFunction(input, option);
    }

    return (
        <Select mode="multiple" placeholder={placeholder} onChange={onChangeParent} className="form-multiple-select" value={defaultValue}
                filterOption={onFilter}>
            { optionList.map((option: SelectItemInterface) => (
                <Option value={option.value} key={Math.random().toString(36).substr(2, 9)}>
                    {option.label}
                </Option>)) }
        </Select>
    );
}