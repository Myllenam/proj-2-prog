import { EEspecie } from "../../models/enum/especie.enum";
import { ESexo } from "../../models/enum/sexo.enum";
import { EPorte } from "../../models/enum/porte.interface";
import { z } from "../../utils/zodConfig";

export const especie = [
  { value: EEspecie.CACHORRO, label: "Cachorro" },
  { value: EEspecie.GATO, label: "Gato" },
];

export const porte = [
  { value: EPorte.PEQUENO, label: "Pequeno" },
  { value: EPorte.MEDIO, label: "Medio" },
  { value: EPorte.GRANDE, label: "Grande" },
];

export const createSchema = () =>
  z.object({
    nome: z.string().min(2),
    raca: z.string().min(2),
    idade: z
      .string()
      .transform((val) => {
        const num = parseFloat(val);
        return isNaN(num) ? NaN : num;
      })
      .refine((val) => !isNaN(val) && val >= 0, {
        message: "Idade não pode ser negativa",
      }),
    descricao: z.string().min(20).max(200),
    especie: z.enum([EEspecie.CACHORRO, EEspecie.GATO]),
    linkImagem: z.string().url({ message: "URL inválida" }),
    cidade: z.string().min(3),
    estado: z.string().min(2),
    genero: z.enum([ESexo.FEMININO, ESexo.MASCULINO],{message:"Escolha um valor para o sexo"}),
    porte: z.enum([EPorte.GRANDE, EPorte.MEDIO, EPorte.PEQUENO]),
    tagIds: z.any().optional(),
  });

export type FormData = z.infer<ReturnType<typeof createSchema>>;
