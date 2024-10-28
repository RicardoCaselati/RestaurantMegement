import { useState } from "react";
import ChaoHeader from "../components/ChaoHeader";
import ChaoInput from "../components/ChaoInput";
import ChaoMenu from "../components/ChaoMenu";
import ChaoText from "../components/ChaoText";
import ChaoTitle from "../components/ChaoTitle";
import ChaoButton from "../components/ChaoButtom";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import ChaoDropdown from "../components/ChaoDropdown";
// import ChaoListItem from "../components/ChaoListItem";

const CreateShoppingList = () => {
  const navigate = useNavigate();
//   const location = useLocation();
//   const companyToEdit = location.state?.company || null;

//   const [cnpj, setCnpj] = useState(companyToEdit?.cnpj || "");
//   const [razaoSocial, setRazaoSocial] = useState(
//     companyToEdit?.razao_social || "",
//   );
//   const [nomeFantasia, setNomeFantasia] = useState(
//     companyToEdit?.nome_fantasia || "",
//   );
//   const [logradouro, setLogradouro] = useState(
//     companyToEdit?.endereco?.logradouro || "",
//   );
//   const [numero, setNumero] = useState(companyToEdit?.endereco?.numero || "");
//   const [complemento, setComplemento] = useState(
//     companyToEdit?.endereco?.complemento || "",
//   );
//   const [bairro, setBairro] = useState(companyToEdit?.endereco?.bairro || "");

//   const objSend = {
//     cnpj: cnpj,
//     razao_social: razaoSocial,
//     nome_fantasia: nomeFantasia,
//     endereco: {
//       logradouro: logradouro,
//       numero: numero,
//       complemento: complemento,
//       bairro: bairro,
//     },
//   };

  const handleSalvar = async () => {
    // const url = companyToEdit
    //   ? `http://localhost:3001/manufacturers/update/${companyToEdit._id}`
    //   : "http://localhost:3001/manufacturers/create";

    // try {
    //   const response = await axios.post(url, objSend);
    //   if (response.data.data.success === true) {
    //     console.log("Fornecedor salvo com sucesso");
    //   } else {
    //     console.log("Dados de fornecedor inválidos");
    //   }
    // } catch (error) {
    //   if (axios.isAxiosError(error)) {
    //     console.error("Erro na requisição Axios:", error.response?.data);
    //   } else {
    //     console.error("Erro inesperado:", error);
    //   }
    // }
  };

  const handleVoltar = () => {
    navigate("/shopping-lists");
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
        <div className="container" style={{ padding: "20px" }}>
          <ChaoTitle>Cadastro de Lista de Compras</ChaoTitle>
          {/* <div className=" d-flex justify-content-around">
            <ChaoText>
              Mercado:
              <ChaoDropdown />
            </ChaoText>
            <ChaoText>
              Data da Compra:
              <input
                type="date"
                className="form-control"
                id="purchaseDate"
                name="purchaseDate"
              />
            </ChaoText>
          </div> */}

          {/* <ChaoListItem /> */}

          <div style={{ marginTop: "15px" }}>
            <ChaoButton
              text={"Salvar"}
              className={"btn-success"}
              onClick={handleSalvar}
            />
            <ChaoButton
              text={"Voltar"}
              className={"btn-danger"}
              onClick={handleVoltar}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateShoppingList;
