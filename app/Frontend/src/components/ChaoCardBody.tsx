import axios from "axios";
import { ChaoCardBodyInterface } from "../interface/ChaoCardBodyInterface";
import { useNavigate } from "react-router-dom";
import ChaoButton from "./ChaoButtom";
import ChaoSubtitle from "./ChaoSubtitle";
import ChaoText from "./ChaoText";
import ChaoTitle from "./ChaoTitle";

const ChaoCardBody: React.FC<ChaoCardBodyInterface> = ({
  id,
  company, // Usar a propriedade company
  setDeletesCompany,
}) => {
  const navigate = useNavigate();

  const handleEditCompany = () => {
    navigate("/createMarket", { state: { company } });
  };

  const handleExclude = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/company/delete",
        { id: company._id }, // Usando company._id para exclusão
      );
      if (response.status === 200) {
        setDeletesCompany((prev) => !prev);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Erro na requisição Axios:", error.response?.data);
      } else {
        console.error("Erro inesperado:", error);
      }
    }
  };

  return (
    <div className="card">
      <div className="card-body d-flex justify-content-between">
        <div
          className="d-flex align-items-center justify-content-between"
          style={{ width: "25%" }}
        >
          <ChaoTitle style={{ padding: "0px", margin: "0px" }}>{id}</ChaoTitle>
          <div className="d-flex flex-column">
            <ChaoText style={{ padding: "0px", margin: "0px" }}>
              {company.nome_fantasia}
            </ChaoText>
            <ChaoSubtitle style={{ padding: "0px", margin: "0px" }}>
              {company.cnpj}
            </ChaoSubtitle>
          </div>
        </div>
        <div
          className="d-flex justify-content-between"
          style={{ width: "21%" }}
        >
          <ChaoButton
            text={"Editar"}
            className={"btn-info"}
            onClick={handleEditCompany} // Corrigido para não passar company diretamente
          />
          <ChaoButton
            text={"Excluir"}
            onClick={handleExclude} // Atualizando a função para não precisar de argumento
            className={"btn-danger"}
          />
        </div>
      </div>
    </div>
  );
};

export default ChaoCardBody;
