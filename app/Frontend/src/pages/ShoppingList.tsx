import { useNavigate } from "react-router-dom";
import ChaoButton from "../components/ChaoButtom";
import ChaoHeader from "../components/ChaoHeader";
import ChaoMenu from "../components/ChaoMenu";
import { useEffect, useState } from "react";
import ChaoCardBody from "../components/ChaoCardBody";
import axios from "axios";

const ShoppingList = () => {
  const [registeredShoppingList, setRegisteredShoppingList] = useState([]);
  const navigate = useNavigate();

  const handleCreateShoppingList = () => {
    // navigate("/create-shopping-lists");
    getShoppingList();
    console.log("🚀 ~ handleCreateShoppingList ~ getShoppingList:")    
  };

  const getShoppingList = async () => {
    try {
      const url = "http://localhost:3001/shopping-lists/list";
      const response = await axios.get(url);

      if (response.status === 200) {
        console.log("Listas de Compra listadas com sucesso");

        console.log("🚀 ~ getShoppingList ~ response.data:", response.data)
        setRegisteredShoppingList(response.data);
      } else {
        console.log("Não foi possível listar as Listas de Compra.");
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

  useEffect(() => {
    getShoppingList();
  }, []);

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
            text={"Criar Nova Lista de Compras"}
            className={"btn-success"}
            onClick={handleCreateShoppingList}
          />
          <div style={{ padding: "10px" }}>
            {registeredShoppingList.map((nomeMercado, index) => (
              <ChaoCardBody
                key={index}
                id={index + 1}
                company={registeredShoppingList}
                // setDeletesCompany={setDeletesCompany}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingList;
