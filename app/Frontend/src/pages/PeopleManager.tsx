import ChaoHeader from "../components/ChaoHeader";
import ChaoMenu from "../components/ChaoMenu";

const PeopleManager = () => {
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
        <div
          className=" d-flex align-items-center justify-content-center"
          style={{ width: "100%", padding: "10px" }}
        >
          <h2>Em Breve</h2>
        </div>
      </div>
    </>
  );
};

export default PeopleManager;
