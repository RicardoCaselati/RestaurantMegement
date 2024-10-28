import ChaoHeader from "../components/ChaoHeader";
import ChaoInput from "../components/ChaoInput";
import ChaoMenu from "../components/ChaoMenu";
import ChaoText from "../components/ChaoText";
import { useState } from "react";
import ChaoTitle from "../components/ChaoTitle";
import ChaoButton from "../components/ChaoButtom";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

const CreateCompanyMarket = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const companyToEdit = location.state?.company || null;

  const [cnpj, setCnpj] = useState(companyToEdit?.cnpj || "");
  const [razaoSocial, setRazaoSocial] = useState(
    companyToEdit?.razao_social || "",
  );
  const [nomeFantasia, setNomeFantasia] = useState(
    companyToEdit?.nome_fantasia || "",
  );
  const [logradouro, setLogradouro] = useState(
    companyToEdit?.endereco?.logradouro || "",
  );
  const [numero, setNumero] = useState(companyToEdit?.endereco?.numero || "");
  const [complemento, setComplemento] = useState(
    companyToEdit?.endereco?.complemento || "",
  );
  const [bairro, setBairro] = useState(companyToEdit?.endereco?.bairro || "");

  const objSend = {
    cnpj: cnpj,
    razao_social: razaoSocial,
    nome_fantasia: nomeFantasia,
    endereco: {
      logradouro: logradouro,
      numero: numero,
      complemento: complemento,
      bairro: bairro,
    },
  };

  const handleSalvar = async () => {
    const url = companyToEdit
      ? `http://localhost:3001/company/update/${companyToEdit._id}`
      : "http://localhost:3001/company/create";

    try {
      const response = await axios.post(url, objSend);
      if (response.data.data.success === true) {
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
    navigate("/market");
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
          <ChaoTitle>Cadastro de Mercados</ChaoTitle>
          <ChaoText>
            CNPJ
            <ChaoInput
              value={cnpj}
              onChange={(e) => setCnpj(e.target.value)}
              style={{ width: "90%" }}
            />
          </ChaoText>
          <ChaoText>
            Razão Social
            <ChaoInput
              value={razaoSocial}
              onChange={(e) => setRazaoSocial(e.target.value)}
              style={{ width: "90%" }}
            />
          </ChaoText>
          <ChaoText>
            Nome Fantasia
            <ChaoInput
              value={nomeFantasia}
              onChange={(e) => setNomeFantasia(e.target.value)}
              style={{ width: "90%" }}
            />
          </ChaoText>
          <ChaoText>
            Logradouro
            <ChaoInput
              value={logradouro}
              onChange={(e) => setLogradouro(e.target.value)}
              style={{ width: "90%" }}
            />
          </ChaoText>
          <ChaoText>
            Número
            <ChaoInput
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
              style={{ width: "90%" }}
            />
          </ChaoText>
          <ChaoText>
            Complemento
            <ChaoInput
              value={complemento}
              onChange={(e) => setComplemento(e.target.value)}
              style={{ width: "90%" }}
            />
          </ChaoText>
          <ChaoText>
            Bairro
            <ChaoInput
              value={bairro}
              onChange={(e) => setBairro(e.target.value)}
              style={{ width: "90%" }}
            />
          </ChaoText>
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

export default CreateCompanyMarket;
