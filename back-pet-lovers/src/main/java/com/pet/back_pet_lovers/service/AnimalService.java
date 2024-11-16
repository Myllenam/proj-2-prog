package com.pet.back_pet_lovers.service;
import com.pet.back_pet_lovers.model.Animal;
import com.pet.back_pet_lovers.repository.AnimalRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class AnimalService {

    @Autowired
    private AnimalRepository animalRepository;

 
    public List<Animal> getAllAnimais() {
        return animalRepository.findAll();
    }

    // Método para pegar todos os gatos
    public List<Animal> getAllGatos() {
        return animalRepository.findByEspecie("gato");
    }

    // Método para pegar todos os cachorros
    public List<Animal> getAllCachorros() {
        return animalRepository.findByEspecie("cachorro");
    }

    // Método para pegar animais filtrados por espécie, raça e cidade
    public List<Animal> getAnimalsFiltered(String especie, String raca, String estado) {
        // Converter raça, cidade e espécie para lowercase e remover espaços
        if (especie != null) {
            especie = especie.trim().toLowerCase();
        }
        if (raca != null) {
            raca = raca.trim().toLowerCase().replaceAll("\\s+", "");
        }
        if (estado != null) {
            estado = estado.trim().toLowerCase().replaceAll("\\s+", "");
        }

        // Se o estado for fornecido
        if (estado != null && especie != null && raca != null) {
            return animalRepository.findByEspecieAndRacaAndEstadoIgnoreCase(especie, raca, estado);
        } 
        // Se o estado for null, buscar apenas por espécie e raça
        else if (especie != null && raca != null) {
            return animalRepository.findByEspecieAndRacaIgnoreCase(especie, raca);
        } 
        // Caso contrário, buscar apenas por raça ou apenas por espécie
        else if (especie != null) {
            return animalRepository.findByEspecieIgnoreCase(especie);
        } 
        else if (raca != null) {
            return animalRepository.findByRacaIgnoreCase(raca);
        } else {
            return animalRepository.findAll();  // Retorna todos os animais se nenhum filtro for passado
        }
    }
}

