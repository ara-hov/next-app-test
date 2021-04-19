import {
  FC,
  useState,
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect
} from 'react';
import AddButton from '@/components/reusable-components/add-button/AddButton';
import ShareableInput from '@/components/reusable-components/input/ShareableInput';
import CloseIcon from './ico/CloseIcon';

interface ToutLinkProps {
  onClick?: () => void;
  link?: string;
  label: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  last?: boolean;
  index?: number;
  remove?: Function;
  clearNull?: Function;
  regexp: RegExp;
}

const Link: FC<ToutLinkProps> = ({
  onClick,
  label,
  onChange,
  last,
  index,
  remove,
  link,
  clearNull,
  regexp
}) => {
  const [valid, setValid] = useState<boolean>(true);

  const fakeRemove = () => {
    remove(index);
  };

  const validate = () => {
    if (link) {
      if (regexp.test(link)) {
        setValid(true);
      } else {
        setValid(false);
      }
    }
    clearNull();
  };
  return (
    <div className="tourLink__container">
      <div className="tourLink__input__container">
        <ShareableInput
          label={label}
          onChange={onChange}
          value={link}
          onBlur={validate}
          onPressEnter={validate}
          error={!valid}
        />
        {index !== 0 && <CloseIcon onClick={fakeRemove} />}
      </div>
      {last && <AddButton onClick={onClick} />}
    </div>
  );
};

export default Link;
