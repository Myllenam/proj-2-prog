import {
    FormControl,
    FormControlLabel,
    Typography,
  } from "@mui/material";
  import Checkbox from "@mui/material/Checkbox";
  import { FC } from "react";
  import { Control, Controller } from "react-hook-form";
  
  export const AgeFilter: FC<{
    control: Control<any>;
  }> = ({ control }) => {
    return (
      <FormControl component="fieldset">
        <Typography className="!text-[16px] !font-bold text-preto">
          Idade
        </Typography>
        <Controller
          name="idade"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={value === 10}
                    onChange={() => onChange(value === 10 ? "" : 10)}
                  />
                }
                label="Até 10 anos"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={value === 5}
                    onChange={() => onChange(value === 5 ? "" : 5)}
                  />
                }
                label="Até 5 anos"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={value === 1}
                    onChange={() => onChange(value === 1 ? "" : 1)}
                  />
                }
                label="Até 1 ano"
              />
            </>
          )}
        />
      </FormControl>
    );
  };
  