import ChaoHeader from "../components/ChaoHeader";
import ChaoMenu from "../components/ChaoMenu";
import ChaoCardComponent from "../components/ChaoCardComponent";
import ChaoButton from "../components/ChaoButtom";
import { useNavigate } from "react-router-dom";

const HubRecipes = () => {
  const navigate = useNavigate();

  const handleCreateRecipe = () => {
    navigate("/createRecipe", { state: { company: null } });
  };

  return (
    <>
      <ChaoHeader />
      <div className="d-lg-flex">
        <ChaoMenu
          itens={[
            "Home",
            "Receitas",
            "Mercados",
            "Fabricantes",
            "Lista de Compras",
            "Estoque",
            "Pessoal",
            "Clientes",
          ]}
          routes={[
            "/hub",
            "/recipes",
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
            text={"Criar Receita"}
            className={"btn-success"}
            onClick={handleCreateRecipe}
          />
          <div style={{ padding: "10px" }}>
            <ChaoCardComponent id={undefined} title={"Feijoada"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HubRecipes;
