import {
    FormControl,
    FormControlLabel,
    Typography,
  } from "@mui/material";
  import Checkbox from "@mui/material/Checkbox";
  import { FC } from "react";
  import { Control, Controller } from "react-hook-form";
  import { EEspecie } from "../../../../models/enum/especie.enum";
  
  export const AnimalFilter: FC<{
    control: Control<any>;
  }> = ({ control }) => {
    return (
      <FormControl component="fieldset">
        <Typography className="!text-[16px] !font-bold text-preto">
          Animais
        </Typography>
        <Controller
          name="especie"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={value === EEspecie.CACHORRO}
                    onChange={() =>
                      onChange(value === EEspecie.CACHORRO ? "" : EEspecie.CACHORRO)
                    }
                  />
                }
                label="Cachorro"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={value === EEspecie.GATO}
                    onChange={() =>
                      onChange(value === EEspecie.GATO ? "" : EEspecie.GATO)
                    }
                  />
                }
                label="Gato"
              />
            </>
          )}
        />
      </FormControl>
    );
  };
  