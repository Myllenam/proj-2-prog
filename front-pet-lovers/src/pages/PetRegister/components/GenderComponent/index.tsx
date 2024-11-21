import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { Control, Controller, FieldError } from "react-hook-form";
import { ESexo } from "../../../../models/enum/sexo.enum";

export const GenderComponent: FC<{
  control: Control<any>;
  errors?: FieldError;
}> = ({ control, errors }) => {
  return (
    <div>
      <FormControl component="fieldset">
        <Typography className="!text-[14px] !font-medium text-preto">
          Sexo
        </Typography>
        <Controller
          name="genero"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <RadioGroup {...field} row={true}>
              <FormControlLabel
                value={ESexo.MASCULINO}
                control={<Radio />}
                label="Macho"
              />
              <FormControlLabel
                value={ESexo.FEMININO}
                control={<Radio/>}
                label="Fêmea"
              />
            </RadioGroup>
          )}
        />
      </FormControl>
      {!!errors && <FormHelperText className="text-red-600">{errors.message}</FormHelperText>}
    </div>
  );
};
