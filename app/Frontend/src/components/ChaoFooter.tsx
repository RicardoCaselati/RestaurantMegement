// import "../styles/components/ChaoHeader.css";
import logoChao from "../assets/logo_chao.png";
import ChaoText from "../components/ChaoText";
import LogoVisa from "../assets/logo_visa.png";
import LogoMasterCard from "../assets/Logo_MasterCard.png";
import LogoPix from "../assets/pix.png";
import ChaoSubtitle from "./ChaoSubtitle";

const ChaoFooter = () => {
  return (
    <section
      className="container-fluid"
      style={{ backgroundColor: "#000000", padding: "20px" }}
    >
      <div className="row align-items-center" style={{ color: "whitesmoke" }}>
        <div className="col-12 col-sm-4 justify-content-center">
          <ChaoSubtitle>Formas de Pagamento</ChaoSubtitle>
          <ChaoText>Dinheiro | Cartão de Débito e Crédito | PIX</ChaoText>
          <div
            className="d-flex justify-content-evenly"
            style={{ width: "50%" }}
          >
            <img src={LogoVisa} alt="Logotipo Visa" style={{ width: "43px" }} />
            <img
              src={LogoMasterCard}
              alt="Logotipo MasterCard"
              style={{ width: "30px" }}
            />
            <img src={LogoPix} alt="Logotipo Pix" style={{ width: "18px" }} />
          </div>
        </div>
        <div
          className="col-12 col-sm-4 d-flex flex-column align-items-center"
          style={{ paddingTop: "20px" }}
        >
          <ChaoText style={{ lineHeight: "1.0px" }}>
            <a
              href="https://www.instagram.com/chao.goianovalinhos/"
              style={{ color: "whiteSmoke", fontSize: "18px" }}
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </ChaoText>
          <ChaoText style={{ marginBottom: "0" }}>
            Silva e Cruz Restaurante LTDA
          </ChaoText>
          <ChaoText style={{ marginBottom: "0" }}>46.480.853/001-79</ChaoText>
          <ChaoText style={{ marginBottom: "0" }}>
            Rua Angelo Barbisan, 91 - Jd. Maracanã
          </ChaoText>
          <ChaoText style={{ marginBottom: "0" }}>Valinhos-SP</ChaoText>
          <ChaoText style={{ marginBottom: "0" }}>(19)9 99454-1062</ChaoText>
        </div>
        <div className="col-12 col-sm-4 d-flex justify-content-center justify-content-sm-end">
          <img
            src={logoChao}
            alt="Logotipo Restaurante Chão Goiano"
            style={{ width: "70px", paddingRight: "20px" }}
          />
        </div>
      </div>
    </section>
  );
};

export default ChaoFooter;
