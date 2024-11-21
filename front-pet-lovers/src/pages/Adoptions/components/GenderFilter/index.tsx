import {
    FormControl,
    FormControlLabel,
    Typography,
  } from "@mui/material";
  import Checkbox from "@mui/material/Checkbox";
  import { FC } from "react";
  import { Control, Controller } from "react-hook-form";
  import { ESexo } from "../../../../models/enum/sexo.enum";
  
  export const GenderFilter: FC<{
    control: Control<any>;
  }> = ({ control }) => {
    return (
      <FormControl component="fieldset">
        <Typography className="!text-[16px] !font-bold text-preto">
          Sexo
        </Typography>
        <Controller
          name="genero"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={value === ESexo.MASCULINO}
                    onChange={() =>
                      onChange(value === ESexo.MASCULINO ? "" : ESexo.MASCULINO)
                    }
                  />
                }
                label="Macho"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={value === ESexo.FEMININO}
                    onChange={() =>
                      onChange(value === ESexo.FEMININO ? "" : ESexo.FEMININO)
                    }
                  />
                }
                label="Fêmea"
              />
            </>
          )}
        />
      </FormControl>
    );
  };
  