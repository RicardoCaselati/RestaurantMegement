import { EmpresaData } from "../interface/CompanyInterface";

export interface ChaoCardBodyInterface {
  id?: number;
  company?: EmpresaData;
  setDeletesCompany?: React.Dispatch<React.SetStateAction<boolean>>;
  setDeleteManufacturers?: React.Dispatch<React.SetStateAction<boolean>>;
}
