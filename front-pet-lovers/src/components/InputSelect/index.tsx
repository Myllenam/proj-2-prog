import { FC } from "react";
import { Noop } from "react-hook-form";
import "./style.css";
import { FormHelperText, MenuItem, Select, Typography } from "@mui/material";

export interface Props {
  value: any;
  options: IOptions[];
  label: string;
  onChange: () => void | ((value: number) => void);
  onBlur: Noop;
  error?: boolean;
  helperText?: string;
}

export interface IOptions {
  value: any;
  label: string;
}
export const InputSelect: FC<Props> = ({
  label,
  onBlur,
  onChange,
  options,
  value,
  error,
  helperText,
}) => {
  return (
    <div className="w-full">
      <Typography className="!text-[14px] !font-medium text-preto">
        {label}
      </Typography>
      <Select
       color="primary"
        error={error}
        value={value}
        size="small"
        onChange={onChange}
        onBlur={onBlur}
        className="text-field"
      >
        {options.map((option: IOptions, index) => (
          <MenuItem key={index} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      {!!helperText && <FormHelperText className="text-red-600">{helperText}</FormHelperText>}
    </div>
  );
};
