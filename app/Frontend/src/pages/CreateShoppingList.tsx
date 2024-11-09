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

const CreateShoppingList = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [mercado, setMercado] = useState("");
  const [dataCompra, setDataCompra] = useState("");
  const [companiesList, setCompaniesList] = useState<
    { id: string; nome_fantasia: string }[]
  >([]);
  const [manufacturersList, setManufacturersList] = useState<
    { id: string; nome_fantasia: string }[]
  >([]);
  const [items, setItems] = useState([
    {
      fabricanteId: "",
      nomeProduto: "",
      quantidade: "",
      valorUnidade: "",
      valorTotal: "",
    },
  ]);

  const objSend = {
    mercado,
    data_compra: dataCompra,
    items: items.map((item) => ({
      ...item,
      fabricanteId: item.fabricanteId,
    })),
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDataCompra(e.target.value);
  };

  const handleItemChange = (index, field, value) => {
    const updatedItems = items.map((item, i) =>
      i === index ? { ...item, [field]: value } : item
    );
    setItems(updatedItems);
  };

  const handleAdicionar = () => {
    setItems([
      ...items,
      {
        fabricanteId: "",
        nomeProduto: "",
        quantidade: "",
        valorUnidade: "",
        valorTotal: "",
      },
    ]);
  };

  const handleSalvar = async () => {
    // const url = companyToEdit
    //   ? `http://localhost:3001/shopping-lists/update/${companyToEdit._id}`
    //   : "http://localhost:3001/shopping-lists/create";

    const url = "http://localhost:3001/shopping-lists/create";

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

  const getCompanies = async () => {
    try {
      const url = "http://localhost:3001/company/list";
      const response = await axios.get(url);
      if (response.status === 200) {
        const companies = response.data.map((eachItem) => ({
          id: eachItem._id,
          nome_fantasia: eachItem.nome_fantasia,
        }));
        setCompaniesList(companies);
      } else {
        console.log("Não foi possível listar os mercados.");
      }
    } catch (error) {
      console.error("Erro inesperado:", error);
    }
  };

  const getManufacturers = async () => {
    try {
      const url = "http://localhost:3001/manufacturers/list";
      const response = await axios.get(url);
      if (response.status === 200) {
        const manufacturers = response.data.map((eachItem) => ({
          id: eachItem._id,
          nome_fantasia: eachItem.nome_fantasia,
        }));
        setManufacturersList(manufacturers);
      } else {
        console.log("Não foi possível listar os fabricantes.");
      }
    } catch (error) {
      console.error("Erro inesperado:", error);
    }
  };

  useEffect(() => {
    getCompanies();
    getManufacturers();
  }, []);

  const fabricanteDropdown = (index) => (
    <ChaoDropdown
      arrayList={manufacturersList}
      onSelect={(id) => handleItemChange(index, "fabricanteId", id)}
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
        <div className="container" style={{ padding: "20px" }}>
          <div className={"col-lg-10"}>
            <ChaoTitle>Cadastro de Lista de Compras</ChaoTitle>
            <div className="d-flex justify-content-around">
              <ChaoText>
                Mercado:
                <ChaoDropdown
                  arrayList={companiesList}
                  title="Selecione"
                  onSelect={setMercado}
                />
              </ChaoText>
              <ChaoText>
                Data da Compra:
                <ChaoInput
                  type="date"
                  className="form-control"
                  id="dataCompra"
                  name="dataCompra"
                  value={dataCompra}
                  onChange={handleDateChange}
                />
              </ChaoText>
            </div>
          </div>
          <div className={"col-lg-10"} style={{ paddingTop: "15px" }}>
            <ChaoButton
              text={"Adicionar Item"}
              className={"btn-success"}
              onClick={handleAdicionar}
            />
          </div>
          <div className={"col-lg-10"}>
            {items.map((item, index) => {
              const { fabricanteId, ...itemWithoutFabricante } = item;
              return (
                <ChaoListItem
                  key={index}
                  item={itemWithoutFabricante}
                  onChange={(field, value) =>
                    handleItemChange(index, field, value)
                  }
                  fabricanteDropdown={fabricanteDropdown(index)}
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

export default CreateShoppingList;
