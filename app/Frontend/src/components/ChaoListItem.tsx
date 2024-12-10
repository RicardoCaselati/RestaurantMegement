import ChaoInput from "./ChaoInput";
import ChaoText from "./ChaoText";
import { ChaoListItemInterface } from "../interface/ChaoListItemInterface";

import "./ChaoListItem.style.css";

const ChaoListItem: React.FC<ChaoListItemInterface> = ({
  item,
  onChange,
  dropdownMenuLabel,
  dropdownMenu,
}) => {
  const handleChange =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(field, e.target.value);
    };

  return (
    <div className="d-xl-flex" style={{ padding: "20px", width: "100%" }}>
      <div className="row align-items-center">
        <div className="col-xl-4">
          <ChaoText>
            {dropdownMenuLabel}
            {dropdownMenu}
          </ChaoText>
        </div>

        {Object.keys(item).map((field) => (
          <div className="col-xl-4" key={field}>
            <ChaoText>
              {field}:
              <ChaoInput
                className="ChaoInputStyle"
                type="text"
                value={item[field] || ""}
                onChange={handleChange(field)}
              />
            </ChaoText>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChaoListItem;
