import { useEffect, useState } from "react";
import ChaoDropdown from "./ChaoDropdown";
import ChaoInput from "./ChaoInput";
import ChaoText from "./ChaoText";
import axios from "axios";

const ChaoListItem = ({ index, item, onItemChange }) => {
  const [arrayList, setArrayList] = useState([]);

  const getManufacturers = async () => {
    try {
      const url = "http://localhost:3001/manufacturers/list";
      const response = await axios.get(url);
      if (response.status === 200) {
        console.log("Fabricantes listados com sucesso");
        const manufacturers = response.data.map(
          (eachItem) => eachItem.nome_fantasia
        );
        setArrayList(manufacturers);
      } else {
        console.log("Não foi possível listar os fabricantes.");
      }
    } catch (error) {
      console.error("Erro inesperado:", error);
    }
  };

  useEffect(() => {
    getManufacturers();
  }, []);

  return (
    <div className="d-xl-flex" style={{ padding: "20px" }}>
      <div className="row align-items-center">
        <div className="col-xl-2">
          <ChaoText>
            Fabricante:
            <ChaoDropdown
              arrayList={arrayList}
              onSelect={(manufacturer) =>
                onItemChange(index, "nomeProduto", manufacturer)
              }
              title="Selecione"
            />
          </ChaoText>
        </div>
        <div className="col-xl-2">
          <ChaoText>
            Nome do Produto:
            <ChaoInput
            style={{ width: "80%" }}
              type="text"
              value={item.nomeProduto}
              onChange={(e) =>
                onItemChange(index, "nomeProduto", e.target.value)
              }
            />
          </ChaoText>
        </div>
        <div className={"col-xl-2"}>
          <ChaoText>
            Valor por Und.:
            <ChaoInput
              style={{ width: "80%" }}
              type="text"
              value={item.nomeProduto}
              onChange={(e) =>
                onItemChange(index, "nomeProduto", e.target.value)
              }
            />
          </ChaoText>
        </div>
        <div className={"col-xl-2"}>
          <ChaoText>
            Qtd.:
            <ChaoInput
              style={{ width: "80%" }}
              type="text"
              value={item.nomeProduto}
              onChange={(e) =>
                onItemChange(index, "nomeProduto", e.target.value)
              }
            />
          </ChaoText>
        </div>
        <div className={"col-xl-2"}>
          <ChaoText>
            Valor Total:
            <ChaoInput
              style={{ width: "80%" }}
              type="text"
              value={item.nomeProduto}
              onChange={(e) =>
                onItemChange(index, "nomeProduto", e.target.value)
              }
            />
          </ChaoText>
        </div>
        <div className={"col-xl-2"}>
          <ChaoText>
            Último preço:
            <ChaoInput
              style={{ width: "80%" }}
              type="text"
              value={item.nomeProduto}
              onChange={(e) =>
                onItemChange(index, "nomeProduto", e.target.value)
              }
            />
          </ChaoText>
        </div>
      </div>
    </div>
  );
};

export default ChaoListItem;
