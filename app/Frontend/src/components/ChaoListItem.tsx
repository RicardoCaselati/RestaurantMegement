import ChaoInput from "./ChaoInput";
import ChaoText from "./ChaoText";
import { ChaoListItemInterface } from "../interface/ChaoListItemInterface";

const ChaoListItem: React.FC<ChaoListItemInterface> = ({
  item,
  onChange,
  fabricanteDropdown,
}) => {
  const handleChange =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(field, e.target.value);
    };

  return (
    <div className="d-xl-flex" style={{ padding: "20px" }}>
      <div className="row align-items-center">
        <div className="col-xl-2">
          <ChaoText>
            Fabricante:
            {fabricanteDropdown}
          </ChaoText>
        </div>

        {Object.keys(item).map((field) => (
          <div className="col-xl-2" key={field}>
            <ChaoText>
              {field}:
              <ChaoInput
                type="text"
                value={item[field]}
                onChange={handleChange(field)}
                style={{ width: "80%" }}
              />
            </ChaoText>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChaoListItem;
