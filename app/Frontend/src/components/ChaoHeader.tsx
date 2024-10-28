import ChaoModal from "./ChaoModal";
import logoChao from "../assets/logo_chao.png";
import { ChaoHeaderProps } from "../interface/ChaoHeaderInterface";

const ChaoHeader: React.FC<ChaoHeaderProps> = ({ obj1, obj2 }) => {
  return (
    <section
      className="container-fluid headerStyle"
      style={{ backgroundColor: "#F0141E" }}
    >
      <div className="row align-items-end">
        <div className="col-8 align-items-center">
          <img
            src={logoChao}
            alt="Logotipo Restaurante Chão Goiano"
            style={{ width: "90px", padding: "5px" }}
          />
        </div>
        <div className="col-4 " style={{ paddingBottom: "10px" }}>
          {obj2 && obj2}
        </div>
      </div>

      {obj1 && (
        <ChaoModal
          id={obj1.id}
          title={obj1.title}
          content={obj1.content}
          bottom1={obj1.bottom1}
          bottom2={obj1.bottom2}
          onBottom1Click={obj1.onBottom1Click}
          onBottom2Click={obj1.onBottom2Click}
        />
      )}
    </section>
  );
};

export default ChaoHeader;
