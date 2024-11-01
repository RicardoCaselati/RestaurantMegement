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
  const companyToEdit = location.state?.company || null;

  const [mercado, setMercado] = useState(companyToEdit?.cnpj || "");
  const [dataCompra, setDataCompra] = useState(companyToEdit?.razao_social || "");
  const [purchaseDate, setPurchaseDate] = useState("");
  const [arrayList, setArrayList] = useState([""]);
  const [items, setItems] = useState([
    { nomeProduto: "", quantidade: "", valorUnidade: "", valorTotal: "" },
  ]);

  const objSend = {
    mercado,
    data_compra: dataCompra,
    items,
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPurchaseDate(e.target.value);
  };

  const handleItemChange = (index, field, value) => {
    const updatedItems = items.map((item, i) =>
      i === index ? { ...item, [field]: value } : item
    );
    setItems(updatedItems);
  };

  const handleAdicionar = () => {
    setItems([...items, { nomeProduto: "", quantidade: "", valorUnidade: "", valorTotal: "" }]);
  };

  const handleSalvar = async () => {
    const url = companyToEdit
      ? `http://localhost:3001/manufacturers/update/${companyToEdit._id}`
      : "http://localhost:3001/manufacturers/create";

    try {
      const response = await axios.post(url, objSend);
      if (response.data.data.success) {
        console.log("Fornecedor salvo com sucesso");
      } else {
        console.log("Dados de fornecedor inválidos");
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

  useEffect(() => {
    const getCompanies = async () => {
      try {
        const url = "http://localhost:3001/company/list";
        const response = await axios.get(url);
        if (response.status === 200) {
          const manufacturers = response.data.map(
            (eachItem) => eachItem.nome_fantasia
          );
          setArrayList(manufacturers);
        } else {
          console.log("Não foi possível listar os mercados.");
        }
      } catch (error) {
        console.error("Erro inesperado:", error);
      }
    };
    getCompanies();
  }, []);

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
                <ChaoDropdown arrayList={arrayList} title="Selecione" />
              </ChaoText>
              <ChaoText>
                Data da Compra:
                <ChaoInput
                  type="date"
                  className="form-control"
                  id="purchaseDate"
                  name="purchaseDate"
                  value={purchaseDate}
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
            {items.map((item, index) => (
              <ChaoListItem
                key={index}
                index={index}
                item={item}
                onItemChange={handleItemChange}
              />
            ))}
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
