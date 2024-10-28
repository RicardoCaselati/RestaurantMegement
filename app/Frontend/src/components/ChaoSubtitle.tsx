import { ChaoSubtitleInterface } from "../interface/ChaoSubtitleInterface";

const ChaoSubtitle: React.FC<ChaoSubtitleInterface> = ({ children }) => {
  return <h3 style={{ fontSize: "10px", fontWeight: "500" }}>{children}</h3>;
};

export default ChaoSubtitle;
