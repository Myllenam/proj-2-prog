import { FC } from "react";
import { Alert, Typography } from "@mui/material";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldError, useForm } from "react-hook-form";
import CheckIcon from "@mui/icons-material/Check";
import ErrorIcon from "@mui/icons-material/Error";

import { Form } from "../Form";
import { Button } from "../../../../components/Button";
import { createSchema, FormData } from "../../utils";
import TagsDisplay from "../TagsDisplay";
import useAddAnimal from "../../../../hooks/addAnimal";

export const FormContent: FC = () => {
  const { addAnimal, loading, error, success } = useAddAnimal();
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    control,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(createSchema()),
  });
  const selectedTags = watch("tagIds") || [];
  const onSubmit = (data: FormData) => {
    addAnimal({
      ...data,
      idade: Number(data.idade),
      idUser: 1,
      adotado: true,
    });
    reset();
  };

  return (
    <div className="flex flex-col bg-rosa3 px-[105px] py-8 rounded-md sm:px-2 gap-[30px] items-center">
      <Typography
        variant="h2"
        className="text-preto !font-semibold text-center"
      >
        Cadastre um bichinho para adoção
      </Typography>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-[50px] items-center"
      >
        <Form control={control} register={register} errors={errors} />
        <TagsDisplay
          selectedTags={selectedTags}
          setValue={setValue}
          errors={errors.tagIds as FieldError | undefined}
        />
        <div className="lg:w-[350px] md:w-[350px]">
          <Button type="submit" disabled={loading}>
            <Typography className=" text-white !font-normal !text-[20px] capitalize py-1">
              Salvar
            </Typography>
          </Button>
        </div>
        {(success || error) && (
          <Alert
            variant="filled"
            className="w-full"
            icon={
              success ? (
                <CheckIcon fontSize="inherit" />
              ) : error ? (
                <ErrorIcon fontSize="inherit" />
              ) : null
            }
            severity={success ? "success" : "error"}
          >
            {success
              ? "Animal adicionado com sucesso."
              : "Erro ao adicionar animal"}
          </Alert>
        )}
      </form>
    </div>
  );
};
