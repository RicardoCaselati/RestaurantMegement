import { ChaoInputProps } from "../interface/ChaoInputInterface";

const ChaoInput: React.FC<ChaoInputProps> = ({
  value,
  type,
  onChange,
  style,
  className,
  name,
}) => {
  return (
    <input
      type={type}
      className={`form-control ${className}`}
      aria-label="Sizing example input"
      aria-describedby="inputGroup-sizing-default"
      value={value || ""}
      onChange={(e) => onChange && onChange(e)}
      style={{ ...style }}
      name={name}
    />
  );
};

export default ChaoInput;
