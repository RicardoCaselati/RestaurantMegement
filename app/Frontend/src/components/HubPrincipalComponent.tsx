const HubPrincipalComponent = () => {
  return (
    <>
      <div
        className="container d-flex justify-content-evenly flex-lg-row flex-column"
        style={{ paddingTop: "20px", paddingBottom: "20px" }}
      >
        <section
          style={{
            width: "200px",
            height: "200px",
            border: "1px red solid",
            borderRadius: "20px",
          }}
        >
          <p>Gráfico Orçamento Estoque</p>
        </section>
        <section
          style={{
            width: "200px",
            height: "200px",
            border: "1px red solid",
            borderRadius: "20px",
          }}
        >
          <p>Gráfico Orçamento Pessoal</p>
        </section>
        <section
          style={{
            width: "200px",
            height: "200px",
            border: "1px red solid",
            borderRadius: "20px",
          }}
        >
          <p>Gráfico Vendas Mensal</p>
        </section>
      </div>
    </>
  );
};

export default HubPrincipalComponent;
