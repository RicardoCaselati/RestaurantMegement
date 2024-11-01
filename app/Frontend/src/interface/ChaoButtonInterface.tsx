interface ChaoButtonProps {
  text?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
  style?: React.CSSProperties;
}

export default ChaoButtonProps;
