import "./style.css";
import { TextField, Typography } from "@mui/material";
import { FC } from "react";
import { UseFormRegister } from "react-hook-form";

interface Props {
  label: string;
  disabled?: boolean;
  placeholder: string;
  name: string;
  errors?: boolean;
  register: UseFormRegister<any>;
  errorMessage?: string;
  multiline?: boolean;
  maxRows?: number;
  type?: "text" | "number";
}

export const InputText: FC<Props> = ({
  label,
  name,
  placeholder,
  disabled,
  errors,
  register,
  errorMessage,
  multiline = false,
  maxRows,
  type = "text",
}) => {
  return (
    <div>
      <Typography className="!text-[14px] !font-medium text-preto">
        {label}
      </Typography>
      <TextField
        type={type}
        {...register(name)}
        multiline={multiline}
        maxRows={maxRows}
        placeholder={placeholder}
        className="text-field"
        size="small"
        error={errors}
        helperText={errorMessage}
        disabled={disabled}
  
      />
    </div>
  );
};
