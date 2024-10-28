import { ChaoTitleInterface } from "../interface/ChaoTextInterface";

const ChaoTitle: React.FC<ChaoTitleInterface> = ({
  children,
  className,
  style,
}) => {
  return (
    <h1
      style={{
        fontSize: "32px",
        fontWeight: "700",
        color: "#404449",
        padding: "18px 0 0 20px",
        ...style,
      }}
      className={className}
    >
      {children}
    </h1>
  );
};

export default ChaoTitle;
