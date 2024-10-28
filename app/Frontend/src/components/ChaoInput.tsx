import { ChaoInputProps } from "../interface/ChaoInputInterface";

const ChaoInput: React.FC<ChaoInputProps> = ({
  value,
  onChange,
  // style,
  className,
}) => {
  return (
    <input
      type="text"
      className={`form-control ${className}`}
      aria-label="Sizing example input"
      aria-describedby="inputGroup-sizing-default"
      value={value}
      onChange={onChange}
      // style={{ ...style }}
    />
  );
};

export default ChaoInput;
