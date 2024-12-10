export interface ChaoDropdownInterface {
  arrayList: { id: string; nomeItem: string }[];
  title: string;
  style?: React.CSSProperties;
  onSelect?: (id: string) => void;
}

// export interface ChaoDropdownProps {
//   arrayList: { id: string; nome_fantasia: string }[];
//   title: string;
//   style?: React.CSSProperties;
//   onSelect?: (id: string) => void;
// }
