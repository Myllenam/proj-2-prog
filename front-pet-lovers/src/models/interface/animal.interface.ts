import { EEspecie } from "../enum/especie.enum";
import { EPorte } from "../enum/porte.interface";
import { ESexo } from "../enum/sexo.enum";

export interface ITag {
    idTag: number;
    descricao: string;
    tipo: string;
  }

  export interface IAnimal {
    idUser: number,
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
  
  export interface IAnimalPost {
    idUser: number,
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
    tags: {id:number}[];  
  }
  export interface AnimalFilter {
    especie?: EEspecie |null;
    porte?:EPorte|null;
    genero?:ESexo|null;
    idade?:number|null;
  }