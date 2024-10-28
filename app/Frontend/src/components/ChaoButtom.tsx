import ChaoButtonInterface from "../interface/ChaoButtonInterface";

const ChaoButton: React.FC<ChaoButtonInterface> = ({
  text,
  onClick,
  className,
  style,
}) => {
  return (
    <button
      type="button"
      className={`btn ${className}`}
      aria-label="Close"
      onClick={onClick}
      style={{ ...style }}
    >
      {text}
    </button>
  );
};

export default ChaoButton;
