import {
    FormControl,
    FormControlLabel,
    Typography,
  } from "@mui/material";
  import Checkbox from "@mui/material/Checkbox";
  import { FC } from "react";
  import { Control, Controller } from "react-hook-form";
  import { EPorte } from "../../../../models/enum/porte.interface";
  
  export const SizeFilter: FC<{
    control: Control<any>;
  }> = ({ control }) => {
    return (
      <FormControl component="fieldset">
        <Typography className="!text-[16px] !font-bold text-preto">
          Porte
        </Typography>
        <Controller
          name="porte"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={value === EPorte.GRANDE}
                    onChange={() =>
                      onChange(value === EPorte.GRANDE ? "" : EPorte.GRANDE)
                    }
                  />
                }
                label="G (mais de 25kg)"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={value === EPorte.MEDIO}
                    onChange={() =>
                      onChange(value === EPorte.MEDIO ? "" : EPorte.MEDIO)
                    }
                  />
                }
                label="M (até 25kg)"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={value === EPorte.PEQUENO}
                    onChange={() =>
                      onChange(value === EPorte.PEQUENO ? "" : EPorte.PEQUENO)
                    }
                  />
                }
                label="P (até 10kg)"
              />
            </>
          )}
        />
      </FormControl>
    );
  };
  