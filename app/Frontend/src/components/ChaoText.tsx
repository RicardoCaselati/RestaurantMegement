import { ChaoTextInterface } from "../interface/ChaoTextInterface";

const ChaoText: React.FC<ChaoTextInterface> = ({
  children,
  className,
  style,
}) => {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
};

export default ChaoText;
