import { useEffect, useState } from "react";
import ChaoHeader from "../components/ChaoHeader";
import ChaoInput from "../components/ChaoInput";
import ChaoMenu from "../components/ChaoMenu";
import ChaoText from "../components/ChaoText";
import ChaoTitle from "../components/ChaoTitle";
import ChaoButton from "../components/ChaoButtom";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import ChaoDropdown from "../components/ChaoDropdown";
import ChaoListItem from "../components/ChaoListItem";

const CreateRecipes = () => {
  const navigate = useNavigate();
  // const location = useLocation();

  const [ingedientsList, setIngedientsList] = useState<
    { id: string; nome_fantasia: string }[]
  >([]);

  const [items, setItems] = useState([
    {
      QuantidadeKg: "",
    },
  ]);

  const objSend = {
    items,
  };

  // const handleItemChange = (index, field, value) => {
  //   const updatedItems = items.map((item, i) =>
  //     i === index ? { ...item, [field]: value } : item
  //   );
  //   setItems(updatedItems);
  // };

  const handleAdicionar = () => {
    setItems([...items, { QuantidadeKg: "" }]);
  };

  const handleSalvar = async () => {
    // const url = companyToEdit
    //   ? `http://localhost:3001/shopping-lists/update/${companyToEdit._id}`
    //   : "http://localhost:3001/shopping-lists/create";

    const url = "http://localhost:3001/recipes/create";

    try {
      const response = await axios.post(url, objSend);
      if (response.data.data.success) {
        console.log("Lista de compras salva com sucesso");
        navigate("/shopping-lists");
      } else {
        console.log("Lista de compras inválida");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Erro na requisição Axios:", error.response?.data);
      } else {
        console.error("Erro inesperado:", error);
      }
    }
  };

  const handleVoltar = () => {
    navigate("/shopping-lists");
  };

  const getIngredientsList = async () => {
    try {
      const url = "http://localhost:3001/shopping-lists-ingredients/list";
      const response = await axios.get(url);
      console.log("🚀 ~ getIngredientsList ~ response:", response);
      if (response.status === 200) {
        const ingredients = response.data.data.map((eachItem) => ({
          id: eachItem.id,
          nomeItem: eachItem.nomeProduto,
        }));
        console.log("🚀 ~ ingredients ~ ingredients:", ingredients);
        setIngedientsList(ingredients);
      } else {
        console.log("Não foi possível listar os ingredientes.");
      }
    } catch (error) {
      console.error("Erro inesperado:", error);
    }
  };

  useEffect(() => {
    getIngredientsList();
  }, []);

  const dropdownMenuIngredients = (index) => (
    <ChaoDropdown
      arrayList={ingedientsList}
      // onSelect={(id) => handleItemChange(index, id)}
      title="Selecione"
    />
  );

  return (
    <>
      <ChaoHeader />
      <div className="d-lg-flex flex-nowrap">
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
        <div className="container" style={{ padding: "20px" }}>
          <div className={"col-lg-10"}>
            <ChaoTitle>Cadastro de Receitas</ChaoTitle>
            {/* <div className="d-flex justify-content-around"> */}
            {/* <ChaoText>
                Mercado:
                <ChaoDropdown
                  arrayList={companiesList}
                  title="Selecione"
                  onSelect={setMercado}
                />
              </ChaoText> */}
            {/* <ChaoText>
                Data da Compra:
                <ChaoInput
                  type="date"
                  className="form-control"
                  id="dataCompra"
                  name="dataCompra"
                  value={dataCompra}
                  onChange={handleDateChange}
                />
              </ChaoText> */}
            {/* </div> */}
          </div>
          <div className={"col-lg-10"} style={{ paddingTop: "15px" }}>
            <ChaoButton
              text={"Adicionar Ingrediente"}
              className={"btn-success"}
              onClick={handleAdicionar}
            />
          </div>
          <div className={"col-lg-10"}>
            {items.map((item, index) => {
              return (
                <ChaoListItem
                  key={index}
                  item={item}
                  onChange={(field, value) =>
                    handleItemChange(index, field, value)
                  }
                  dropdownMenuLabel="Ingrediente:"
                  dropdownMenu={dropdownMenuIngredients(index)}
                />
              );
            })}
          </div>
          <div className={"col-lg-10"}>
            <div
              className={"d-flex justify-content-around"}
              style={{ marginTop: "15px" }}
            >
              <ChaoButton
                text={"Voltar"}
                className={"btn-danger"}
                onClick={handleVoltar}
              />
              <ChaoButton
                text={"Salvar"}
                className={"btn-success"}
                onClick={handleSalvar}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateRecipes;
