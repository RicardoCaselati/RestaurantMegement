import React, { useState } from "react";
import { ChaoDropdownProps } from "../interface/ChaoDropdownInterface";

const ChaoDropdown: React.FC<ChaoDropdownProps> = ({
  arrayList = [],
  style,
  title,
}) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const newListRender = () => {
    if (!Array.isArray(arrayList)) {
      return <div>Carregando...</div>;
    }
    return arrayList.map((eachList, index) => (
      <li key={index}>
        <button
          className="dropdown-item"
          type="button"
          onClick={() => setSelectedItem(eachList)}
        >
          {typeof eachList === "string" ? eachList : "Item inválido"}
        </button>
      </li>
    ));
  };

  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {selectedItem || title}
      </button>
      <ul className="dropdown-menu" style={{ ...style }}>
        {newListRender()}
      </ul>
    </div>
  );
};

export default ChaoDropdown;
