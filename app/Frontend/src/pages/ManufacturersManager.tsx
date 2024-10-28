import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ChaoHeader from "../components/ChaoHeader";
import ChaoMenu from "../components/ChaoMenu";
import ChaoButton from "../components/ChaoButtom";
import ChaoCardBody from "../components/ChaoCardBody";
import axios from "axios";
import { ManufacturersData } from "../interface/ManufacturersInterface";

const ManufacturesManager = () => {
  const navigate = useNavigate();
  const [registeredManufacturers, setRegisteredManufacturers] = useState<
    ManufacturersData[]
  >([]);

  const [deleteManufacturers, setDeleteManufacturers] = useState(false);

  const handleCreateCompany = () => {
    navigate("/createManufacturers", { state: { company: null } });
  };

  useEffect(() => {
    const getMarketsRegistered = async () => {
      try {
        const url = "http://localhost:3001/manufacturers/list";
        const response = await axios.get(url);

        if (response.status === 200) {
          console.log("Mercados listados com sucesso");

          setRegisteredManufacturers(response.data);
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
  }, [deleteManufacturers]);

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
            text={"Incluir Fabricante"}
            className={"btn-success"}
            onClick={handleCreateCompany}
          />
          <div style={{ padding: "10px" }}>
            {registeredManufacturers.map((company, index) => (
              <ChaoCardBody
                key={index}
                id={index + 1}
                company={company}
                setDeleteManufacturers={setDeleteManufacturers}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ManufacturesManager;
