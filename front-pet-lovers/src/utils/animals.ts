import { IAnimal } from "../models/interface/animal.interface";

export const mockAnimais:IAnimal[] = [
    {
        idAnimal: 3,
        idUser: 1,
        nome: "Miau",
        raca: "Siames",
        idade: 3.0,
        descricao: "Gato brincalhão",
        adotado: false,
        especie: "gato",
        linkImagem: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
        cidade: "São Paulo",
        estado: "SP",
        genero: "Fêmea",
        porte: "Médio",
        tags: []
    },
    {
        idAnimal: 4,
        idUser: 1,
        nome: "Floquinho",
        raca: "SRD",
        idade: 3.0,
        descricao: "Gato brincalhão",
        adotado: false,
        especie: "gato",
        linkImagem: "https://images.pexels.com/photos/177809/pexels-photo-177809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        cidade: "São Paulo",
        estado: "SP",
        genero: "Fêmea",
        porte: "Médio",
        tags: []
    },
    {
        idAnimal: 2,
        idUser: 1,
        nome: "Rex",
        raca: "SRD",
        idade: 4.0,
        descricao: "Cachorro de guarda",
        adotado: true,
        especie: "cachorro",
        linkImagem: "https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg",
        cidade: "Rio de Janeiro",
        estado: "RJ",
        genero: "Macho",
        porte: "Grande",
        tags: [
            {
                idTag: 10,
                descricao: "Arisco",
                tipo: "temperamento"
            },
            {
                idTag: 7,
                descricao: "Calmo",
                tipo: "temperamento"
            },
            {
                idTag: 16,
                descricao: "Crianças",
                tipo: "social"
            }
        ]
    },
    {
        idAnimal: 7,
        idUser: 1,
        nome: "Anakin",
        raca: "SRD",
        idade: 5.0,
        descricao: "Cachorro carinhoso",
        adotado: false,
        especie: "cachorro",
        linkImagem: "https://img.freepik.com/fotos-gratis/adoravel-cachorro-basenji-marrom-e-branco-sorrindo-e-dando-mais-uns-cinco-isolado-no-branco_346278-1657.jpg?t=st=1731868207~exp=1731871807~hmac=40b2ff37250fe69051c9eed3f50e874be43d8b5dcac229b1ecdd922497decd82&w=740",
        cidade: "São Paulo",
        estado: "SP",
        genero: "Macho",
        porte: "Pequeno",
        tags: []
    },
    {
        idAnimal: 8,
        idUser: 1,
        nome: "Rex",
        raca: "SRD",
        idade: 4.0,
        descricao: "Cachorro de colo",
        adotado: false,
        especie: "cachorro",
        linkImagem: "https://img.freepik.com/fotos-gratis/cachorros-de-caes-no-vidro-isolado-no-fundo-branco_1232-1677.jpg?t=st=1731885881~exp=1731889481~hmac=69fbfccdfea2aabbd1c9bb942e44430fbc456225bb8c461c4424abe528ee979f&w=740",
        cidade: "Rio de Janeiro",
        estado: "RJ",
        genero: "Macho",
        porte: "Pequeno",
        tags: []
    },
    {
        idAnimal: 9,
        idUser: 1,
        nome: "Pistache",
        raca: "SRD",
        idade: 4.0,
        descricao: "gato pequeno",
        adotado: false,
        especie: "gato",
        linkImagem: "https://img.freepik.com/fotos-gratis/kitty-com-parede-monocromatica-atras-dela_23-2148955134.jpg?t=st=1731869865~exp=1731873465~hmac=60aa706044fdfe869511dd6174508671f429f8a790caf1b3d2fd8342b876fa04&w=360",
        cidade: "Rio de Janeiro",
        estado: "RJ",
        genero: "Macho",
        porte: "Pequeno",
        tags: []
    },
    {
        idAnimal: 10,
        idUser: 1,
        nome: "Soonie",
        raca: "SRD",
        idade: 4.0,
        descricao: "gato pequeno",
        adotado: false,
        especie: "gato",
        linkImagem: "https://img.freepik.com/fotos-gratis/o-gato-em-fundo-branco_155003-15385.jpg?t=st=1731886000~exp=1731889600~hmac=ecadb9cf6379c1980de5d2bc26102b1854716b18a412a18612342e3d755b4b23&w=360",
        cidade: "Rio de Janeiro",
        estado: "RJ",
        genero: "Macho",
        porte: "Grande",
        tags: []
    },
    {
        idAnimal: 1,
        idUser: 1,
        nome: "Bidu",
        raca: "Vira-Lata",
        idade: 5.0,
        descricao: "Cachorro carinhoso",
        adotado: false,
        especie: "cachorro",
        linkImagem: "https://as1.ftcdn.net/v2/jpg/02/94/41/12/1000_F_294411202_GAGqtdy9EjlcGqwoQd2noZ5HiZaf7hQE.jpg",
        cidade: "São Paulo",
        estado: "SP",
        genero: "Macho",
        porte: "Pequeno",
        tags: [
            {
                idTag: 2,
                descricao: "Vacinado",
                tipo: "saude"
            },
            {
                idTag: 1,
                descricao: "Castrado",
                tipo: "saude"
            },
            {
                idTag: 13,
                descricao: "Gatos",
                tipo: "social"
            },
            {
                idTag: 5,
                descricao: "Dócil",
                tipo: "temperamento"
            }
        ]
    },
    {
        idAnimal: 11,
        idUser: 1,
        nome: "Robson",
        raca: "SRD",
        idade: 5.0,
        descricao: "Cachorro carinhoso e brincalhão",
        adotado: false,
        especie: "cachorro",
        linkImagem: "https://img.freepik.com/fotos-gratis/lindo-cao-funy_144627-13723.jpg?t=st=1731886623~exp=1731890223~hmac=63c76e6be866f42093a21f64a0f785e9768474ea9accc810828cde90104656d6&w=740",
        cidade: "São Paulo",
        estado: "SP",
        genero: "Macho",
        porte: "Pequeno",
        tags: []
    },
    {
        idAnimal: 12,
        idUser: 1,
        nome: "Belinha",
        raca: "SRD",
        idade: 4.0,
        descricao: "Cachorra meiga procurando um lar, ama crianças.",
        adotado: false,
        especie: "cachorro",
        linkImagem: "https://img.freepik.com/fotos-gratis/cao-bonito-olhando-diretamente-para-a-camera_23-2148326237.jpg?t=st=1731886681~exp=1731890281~hmac=596ac7074e51144207f2714afa93ff960a97756f8d808b3543c85b90afc8aa22&w=740",
        cidade: "Rio de Janeiro",
        estado: "RJ",
        genero: "Femea",
        porte: "Pequeno",
        tags: []
    },
    {
        idAnimal: 13,
        idUser: 1,
        nome: "Luna",
        raca: "SRD",
        idade: 4.0,
        descricao: "gata pequeno e dengosa",
        adotado: false,
        especie: "gato",
        linkImagem: "https://img.freepik.com/fotos-gratis/gatinho-cinza-com-parede-monocromatica-atras-dela_23-2148955129.jpg?t=st=1731886573~exp=1731890173~hmac=1a66571f1e483c2c340c104f5dd0ea7e88fb79c8bd213d14436268476b7f6651&w=360",
        cidade: "Rio de Janeiro",
        estado: "RJ",
        genero: "Femea",
        porte: "Pequeno",
        tags: []
    },
    {
        idAnimal: 14,
        idUser: 1,
        nome: "Madruguinha",
        raca: "SRD",
        idade: 4.0,
        descricao: "gato brincalhão em busca de um lar.",
        adotado: false,
        especie: "gato",
        linkImagem: "https://img.freepik.com/fotos-gratis/o-gato-engracado-de-bengala-joga-na-escada-de-aco_8353-519.jpg?t=st=1731886834~exp=1731890434~hmac=75cf54929cd771ae5ec4572ce35f50addb05da5f86c0efa6d0071f948ca30a1a&w=740",
        cidade: "Rio de Janeiro",
        estado: "RJ",
        genero: "Femea",
        porte: "Grande",
        tags: []
    }
];
