import DeleteIcon from '@/components/icons/DeleteIcon';
import { Select } from 'antd';
import { FC, useEffect, useState } from 'react';
// import DeleteIcon from '@/components/reusable-components/multi-select/DeleteIcon';

const { Option } = Select;

interface shareableMultiSelectProps {
  countries: string[];
  className?: string;
}

const ShareableMultiSelect: FC<shareableMultiSelectProps> = ({
  countries,
  className
}) => {
  const [selectedArray, setSelectedArray] = useState([]);
  const handleSelect = (value?: string) => {
    if (!selectedArray.includes(value)) {
      setSelectedArray([...selectedArray, value]);
    }
  };
  const onDelete = (elem?: string) => {
    let arr = selectedArray.filter((name) => name !== elem);
    setSelectedArray([...arr]);
  };
  return (
    <div className="shareable__select">
      <Select
        defaultValue={'Select Country'}
        style={{ width: 120 }}
        onChange={handleSelect}
        className={className}
        suffixIcon={
          <svg
            width="10"
            height="7"
            viewBox="0 0 10 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 1L5 5L9 1" stroke="#EB5757" strokeWidth="2" />
          </svg>
        }
      >
        {countries.map((elem, index) => (
          <Option key={elem} value={elem}>
            {elem}
          </Option>
        ))}
      </Select>
      <div className="shareable__select__selected">
        {selectedArray.map((elem) => {
          return (
            <div key={elem} className="shareable__select__selected__element">
              <p>{elem}</p>
              <DeleteIcon onClick={onDelete} elem={elem} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShareableMultiSelect;
