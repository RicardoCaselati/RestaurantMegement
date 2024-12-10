import Feijoada from "../assets/feijoada.jpg";
import { ChaoRecipesInterface } from "../interface/ChaoRecipesInterface";

const ChaoCardComponent: React.FC<ChaoRecipesInterface> = ({ id, title }) => {
  return (
    <div
      className="card"
      style={{ width: "214px", height: "184px", border: "solid 1px grey" }}
    >
      <img src={Feijoada} className="card-img-top" alt="Feijoada" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
      </div>
    </div>
  );
};

export default ChaoCardComponent;
