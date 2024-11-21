import { FC, ReactNode } from "react";
import { Button as MuiButton } from "@mui/material";

export const Button: FC<{
  type?:"submit"|"button"
  children: ReactNode;
  variant?: "text" | "contained";
  onClick?: () => void;
  isWhite?: boolean;
  disabled?:boolean
}> = ({ children, variant = "contained", onClick, isWhite = false,type='button',disabled=false }) => {
  return (
    <MuiButton
    disabled={disabled}
    type={type}
      variant={variant}
      className={`rounded-[10px] w-full ${
        variant === "text" ? "bg-transparent" :isWhite?"!bg-white ": disabled?"bg-neutral-700":"!bg-rosa2"
      }`}
      onClick={onClick}
    >
      {children}
    </MuiButton>
  );
};
