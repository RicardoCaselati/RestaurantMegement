import ChaoHeader from "../components/ChaoHeader";
import ChaoMenu from "../components/ChaoMenu";
import HubPrincipalComponent from "../components/HubPrincipalComponent";

const SystemHub = () => {
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
        <HubPrincipalComponent />
      </div>
    </>
  );
};

export default SystemHub;
