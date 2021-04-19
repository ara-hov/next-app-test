import { FC } from 'react';

interface deleteIconProps {
  onClick?: (elem: string) => void;
  elem?: string;
}
const DeleteIcon: FC<deleteIconProps> = ({ onClick, elem }) => {
  return (
    <svg
      width="23"
      height="23"
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => onClick(elem)}
    >
      <g clipPath="url(#clip0)">
        <path
          d="M16.9706 16.9703C20.0948 13.8461 20.0948 8.78082 16.9706 5.65662C13.8464 2.53243 8.78105 2.53243 5.65685 5.65662C2.53266 8.78082 2.53266 13.8461 5.65685 16.9703C8.78105 20.0945 13.8464 20.0945 16.9706 16.9703Z"
          fill="#EB5757"
        />
        <path
          d="M8.59839 8.59833L14.2552 14.2552"
          stroke="white"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.1422 8.48517L8.48535 14.142"
          stroke="white"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(0 11.3135) rotate(-45)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default DeleteIcon;
