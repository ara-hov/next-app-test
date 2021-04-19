const UploadIcon = ({ onClick }) => {
  return (
    <>
      <svg
        onClick={() => onClick.current.click()}
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={'uploadIcon'}
      >
        <path
          d="M59 39.125V56.5C59 57.8785 57.8785 59 56.5 59H7.5C6.1215 59 5 57.8785 5 56.5V39.125H0V56.5C0 60.6355 3.3645 64 7.5 64H56.5C60.6355 64 64 60.6355 64 56.5V39.125H59Z"
          fill="#0085FF"
        />
        <path
          d="M44.0005 29.4645L34.5005 38.9645V0H29.5005V38.9645L20.0005 29.4645L16.465 33L32.0005 48.5355L47.536 33L44.0005 29.4645Z"
          fill="#0085FF"
        />
      </svg>
    </>
  );
};

export default UploadIcon;
