import React, { useState } from "react";
import { ChaoDropdownInterface } from "../interface/ChaoDropdownInterface";

const ChaoDropdown: React.FC<ChaoDropdownInterface> = ({
  arrayList = [],
  style,
  title,
  onSelect,
}) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleSelect = (item: { id: string; nomeItem: string }) => {
    setSelectedItem(item.nomeItem);
    if (onSelect) {
      onSelect(item.id);
    }
  };

  const newListRender = () => {
    if (!Array.isArray(arrayList)) {
      return <div>Carregando...</div>;
    }

    return arrayList.map((eachList, index) => (
      <li key={index}>
        <button
          className="dropdown-item"
          type="button"
          onClick={() => handleSelect(eachList)}
        >
          {eachList.nomeItem || "Item inválido"}
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
