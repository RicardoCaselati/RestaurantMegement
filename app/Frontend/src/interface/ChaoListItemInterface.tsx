export interface ChaoListItemInterface {
  item: { [key: string]: string | number };
  onChange: (field: string, value: string | number) => void;
  dropdownMenuLabel: string | undefined;
  dropdownMenu: React.ReactNode;
}
