import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { Button } from "../../components/Button";
import { FormContent } from "./components/FormContent";

export const Component = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="w-full flex flex-col py-8 gap-10 items-center">
      <div className="w-full pl-10 sm:pl-3">
        <div className="w-[115px]">
          <Button onClick={goBack}>
            <ArrowBackIcon className="mr-2 !h-[20px]" />
            <Typography className=" text-white !font-normal !text-[15px] capitalize">
              Voltar
            </Typography>
          </Button>
        </div>
      </div>
      <div className="sm:px-3">
      <FormContent />
      </div>
    </div>
  );
};
export default Component;
