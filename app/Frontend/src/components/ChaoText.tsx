import { ChaoTextInterface } from "../interface/ChaoTextInterface";

const ChaoTextInput: React.FC<ChaoTextInterface> = ({
  children,
  className,
  style,
  // disabled = false,
}) => {
  return (
    <input
      type="text"
      className={className}
      style={{ fontSize: "12px", fontWeight: "500", ...style }}
      value={children?.toString() || ""}
      // disabled={disabled}
    />
  );
};

export default ChaoTextInput;
