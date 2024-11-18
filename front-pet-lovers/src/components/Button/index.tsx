import { FC, ReactNode } from "react";
import { Button as MuiButton } from "@mui/material";

export const Button: FC<{
  children: ReactNode;
  variant?: "text" | "contained";
  onClick?: () => void;
  isWhite?: boolean;
}> = ({ children, variant = "contained", onClick, isWhite = false }) => {
  return (
    <MuiButton
      variant={variant}
      className={`rounded-[10px] ${
        variant === "text" ? "bg-transparent" :isWhite?"!bg-white ": "!bg-rosa2"
      }`}
      onClick={onClick}
    >
      {children}
    </MuiButton>
  );
};
