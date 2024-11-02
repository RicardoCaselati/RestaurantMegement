import { useNavigate } from "react-router-dom";
import ChaoButton from "../components/ChaoButtom";
import ChaoHeader from "../components/ChaoHeader";
import ChaoMenu from "../components/ChaoMenu";

const ShoppingList = () => {
  const navigate = useNavigate();

  const handleCreateShoppingList = () => {
    navigate("/create-shopping-lists");
  };

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
          {/* <div style={{ padding: "10px" }}>
            {registeredCompanies.map((company, index) => (
              <ChaoCardBody
                key={index}
                id={index + 1}
                company={company}
                setDeletesCompany={setDeletesCompany}
              />
            ))}
          </div> */}
        </div>
      </div>
    </>
  );
};

export default ShoppingList;
