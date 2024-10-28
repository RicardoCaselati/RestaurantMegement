import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ChaoHeader from "../components/ChaoHeader";
import ChaoMenu from "../components/ChaoMenu";
import ChaoButton from "../components/ChaoButtom";
import ChaoCardBody from "../components/ChaoCardBody";
import axios from "axios";
import { EmpresaData } from "../interface/CompanyInterface";

const CompanyManager = () => {
  const navigate = useNavigate();
  const [registeredCompanies, setRegisteredCompanies] = useState<EmpresaData[]>(
    [],
  );
  const [deletesCompany, setDeletesCompany] = useState(false);

  const handleCreateCompany = () => {
    navigate("/createMarket", { state: { company: null } });
  };

  useEffect(() => {
    const getMarketsRegistered = async () => {
      try {
        const url = "http://localhost:3001/company/list";
        const response = await axios.get(url);

        if (response.status === 200) {
          console.log("Mercados listados com sucesso");

          setRegisteredCompanies(response.data);
        } else {
          console.log("Não foi possível listar os mercados.");
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error(
            "Erro na requisição Axios:",
            error.response?.data || error.message,
          );
        } else {
          console.error("Erro inesperado:", error);
        }
      }
    };

    getMarketsRegistered();
  }, [deletesCompany]);

  return (
    <>
      <ChaoHeader />
      <div className="d-lg-flex">
        <ChaoMenu
          itens={[
            "Home",
            "Mercados",
            "Fabricantes",
            "Lista de Compras",
            "Estoque",
            "Pessoal",
            "Clientes",
          ]}
          routes={[
            "/hub",
            "/market",
            "/manufacturers",
            "/shopping-lists",
            "/stock",
            "/people",
            "/clients",
          ]}
        />
        <div className="container" style={{ padding: "10px" }}>
          <ChaoButton
            text={"Incluir Mercado"}
            className={"btn-success"}
            onClick={handleCreateCompany}
          />
          <div style={{ padding: "10px" }}>
            {registeredCompanies.map((company, index) => (
              <ChaoCardBody
                key={index}
                id={index + 1}
                company={company}
                setDeletesCompany={setDeletesCompany}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyManager;
