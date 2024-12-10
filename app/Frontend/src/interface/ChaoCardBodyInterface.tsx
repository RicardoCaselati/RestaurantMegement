export interface ChaoCardBodyInterface {
  id?: number;
  title: string | undefined;
  subTitle: string | undefined;
  registeredId: number | undefined;
  setDeletesCompany?: React.Dispatch<React.SetStateAction<boolean>>;
  setDeleteManufacturers?: React.Dispatch<React.SetStateAction<boolean>>;
}
