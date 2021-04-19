import { FC } from 'react';
import PlusIcon from '../../icons/PlusIcon';

interface AddButtonProps {
  onClick?: () => void;
}

const AddButton: FC<AddButtonProps> = ({ onClick }) => {
  return (
    <div className="addButton__container" onClick={onClick}>
      <PlusIcon />
    </div>
  );
};

export default AddButton;
