import { EEspecie } from "../enum/especie.enum";

export interface ITag {
    idTag: number;
    descricao: string;
    tipo: string;
  }

  export interface IAnimal {
    idAnimal: number;
    nome: string;
    raca: string;
    idade: number;
    descricao: string;
    adotado: boolean;
    especie: EEspecie;
    linkImagem: string;
    cidade: string;
    estado: string;
    genero: string;
    porte: string;
    tags: ITag[];  
  }
  
  export interface AnimalFilter {
    especie?: string;
    raca?: string;
    cidade?: string;
    estado?: string;
    adotado?: boolean;
  }