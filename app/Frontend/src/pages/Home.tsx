import ChaoFooter from "../components/ChaoFooter";
import ChaoSlides from "../components/ChaoSlides";
import ChaoText from "../components/ChaoText";
import ChaoTitle from "../components/ChaoTitle";
import ChaoHeader from "../components/ChaoHeader";
import { ModalProps } from "../interface/ModalInterface";
import ChaoModal from "../components/ChaoModal";
import ChaoInput from "../components/ChaoInput";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

declare global {
  interface Window {
    bootstrap: {
      Modal: {
        getInstance: (element: HTMLElement) => { hide: () => void } | null;
      };
    };
  }
}

const Home = () => {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    console.log("cliquei");
    if (!usuario || !senha) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3001/login/", {
        usuario,
        senha,
      });

      if (response.data.data.success) {
        console.log("Login bem-sucedido");

        const modalElement = document.getElementById("loginModal");
        if (modalElement) {
          const bootstrapModal =
            window.bootstrap.Modal.getInstance(modalElement);
          bootstrapModal?.hide();
        }

        navigate("/hub");
      } else {
        alert("Dados de login inválidos");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Erro na requisição Axios:", error.response?.data);
      } else {
        console.error("Erro inesperado:", error);
      }
    }
  };

  const handleClose = () => {
    console.log("Close clicked");
  };

  const credentials = () => (
    <div>
      <ChaoText>Insira seus dados de Login</ChaoText>
      <ChaoText>
        Usuário
        <span>
          <ChaoInput
            type="text"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
        </span>
      </ChaoText>
      <ChaoText>
        Senha
        <span>
          <ChaoInput
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </span>
      </ChaoText>
    </div>
  );

  const modalProps: ModalProps = {
    id: "loginModal",
    title: "Login",
    content: credentials(),
    bottom1: "Close",
    bottom2: "Login",
    onBottom1Click: handleClose,
    onBottom2Click: handleLogin,
  };

  const loginButton = (
    <button
      type="button"
      className="btn btn-dark"
      data-bs-toggle="modal"
      data-bs-target="#loginModal"
    >
      Login
    </button>
  );

  return (
    <>
      <ChaoHeader obj1={modalProps} obj2={loginButton} />
      <ChaoModal {...modalProps} />
      <section
        style={{ backgroundColor: "#000000" }}
        className={"container-fluid"}
      >
        <a
          href="https://www.instagram.com/chao.goianovalinhos/"
          style={{
            color: "whiteSmoke",
            fontSize: "18px",
            padding: "4px 0 4px 0",
            textDecoration: "none",
          }}
          className={"d-flex justify-content-end align-items-center"}
        >
          <ChaoTitle
            style={{
              color: "whiteSmoke",
              fontSize: "12px",
              padding: "0 10px 0 0",
              margin: "0",
            }}
          >
            Visite nosso Instagram
          </ChaoTitle>
          <i className="fa-brands fa-instagram"></i>
        </a>
      </section>

      <section>
        <ChaoSlides />
      </section>

      <section
        className={"container-fluid"}
        style={{ backgroundColor: "#f6f2e9" }}
      >
        <ChaoTitle style={{ color: "#454545" }}>
          Horário de atendimento
        </ChaoTitle>
        <ChaoText style={{ fontSize: "18px", paddingLeft: "20px" }}>
          Apenas no horário de almoço
        </ChaoText>
        <div className="row">
          <div className={"col-12 col-md-6 text-center"}>
            <ChaoText style={{ fontSize: "20px" }}>SEGUNDA A SEXTA</ChaoText>
            <ChaoText style={{ fontSize: "20px" }}>11H ÀS 14h</ChaoText>
          </div>
          <div className={"col-12 col-md-6 text-center"}>
            <ChaoText style={{ fontSize: "20px" }}>SÁBADOS E FERIADOS</ChaoText>
            <ChaoText style={{ fontSize: "20px" }}>11H ÀS 14H</ChaoText>
          </div>
        </div>
      </section>

      <ChaoFooter />
    </>
  );
};

export default Home;
