export interface ChaoInputProps {
  id?: string;
  type: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
  className?: string;
  name?: string;
}
