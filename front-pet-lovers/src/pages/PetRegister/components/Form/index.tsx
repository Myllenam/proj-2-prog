import { FC } from "react";
import { InputText } from "../../../../components/InputText";
import {
  Control,
  Controller,
  FieldErrors,
  UseFormRegister,
} from "react-hook-form";
import { EEspecie } from "../../../../models/enum/especie.enum";
import { ESexo } from "../../../../models/enum/sexo.enum";
import { EPorte } from "../../../../models/enum/porte.interface";
import { InputSelect } from "../../../../components/InputSelect";
import { especie, porte } from "../../utils";
import { GenderComponent } from "../GenderComponent";

export const Form: FC<{
  register: UseFormRegister<any>;
  control: Control<any>;
  errors: FieldErrors<{
    nome: string;
    raca: string;
    idade: number;
    descricao: string;
    adotado: boolean;
    especie: EEspecie;
    linkImagem: string;
    cidade: string;
    estado: string;
    genero: ESexo;
    porte: EPorte;
    animalTags: {
      id: number;
    }[];
  }>;
}> = ({ control, register, errors }) => {
  return (
    <div className="flex gap-[100px] w-full sm:flex-col ">
      <div className="flex flex-col w-[400px] gap-[50px] sm:w-full">
        <InputText
          label="Nome do bichinho*"
          name="nome"
          placeholder="Digite um nome"
          register={register}
          errors={!!errors.nome?.message}
          errorMessage={errors.nome?.message}
        />

        <GenderComponent control={control} errors={errors.genero} />
        <Controller
          name="porte"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputSelect
              error={!!errors.porte}
              helperText={errors.porte?.message}
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              label="Porte*"
              options={porte}
            />
          )}
        />
        <InputText
          label="Raça*"
          name="raca"
          placeholder="Digite uma raça"
          register={register}
          errors={!!errors.raca?.message}
          errorMessage={errors.raca?.message}
        />
        <InputText
          label="Link imagem*"
          name="linkImagem"
          placeholder="Link de sua imagem"
          register={register}
          errors={!!errors.linkImagem?.message}
          errorMessage={errors.linkImagem?.message}
        />
      </div>
      <div className="flex flex-col w-[400px] gap-[49.9px] sm:w-full">
        <Controller
          control={control}
          name="especie"
          render={({ field: { onChange, onBlur, value } }) => (
            <InputSelect
              error={!!errors.especie}
              helperText={errors.especie?.message}
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              label="Especie*"
              options={especie}
            />
          )}
        />
        <InputText
          type="number"
          label="Idade(anos)*"
          name="idade"
          placeholder="Digite a idade"
          register={register}
          errors={!!errors.idade?.message}
          errorMessage={errors.idade?.message}
        />
        <InputText
          multiline={true}
          maxRows={4}
          label="Sobre o bichinho*"
          name="descricao"
          placeholder="Digite um texto breve sobre o animal"
          register={register}
          errors={!!errors.descricao?.message}
          errorMessage={errors.descricao?.message}
        />
        <InputText
          label="Estado*"
          name="estado"
          placeholder="Digite seu estado"
          register={register}
          errors={!!errors.estado?.message}
          errorMessage={errors.estado?.message}
        />
        <InputText
          label="Cidade*"
          name="cidade"
          placeholder="Digite sua cidade"
          register={register}
          errors={!!errors.cidade?.message}
          errorMessage={errors.cidade?.message}
        />
      </div>
    </div>
  );
};
