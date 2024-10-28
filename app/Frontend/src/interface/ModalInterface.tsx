import { ReactNode } from "react";

export interface ModalProps {
  id?: string;
  title?: string;
  content?: ReactNode;
  bottom1?: string;
  bottom2?: string;
  onBottom1Click?: () => void;
  onBottom2Click?: () => void;
}
