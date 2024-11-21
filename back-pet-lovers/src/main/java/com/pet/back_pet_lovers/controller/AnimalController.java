package com.pet.back_pet_lovers.controller;
import com.pet.back_pet_lovers.dto.AnimalInputDTO;
import com.pet.back_pet_lovers.dto.AnimalOutputDTO;
import com.pet.back_pet_lovers.model.Animal;
import com.pet.back_pet_lovers.service.AnimalService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import java.util.stream.Collectors;



@RestController
@RequestMapping("/animais")
public class AnimalController {

    @Autowired
    private AnimalService animalService;

    // Endpoint para pegar todos os animais
    @GetMapping
    public List<AnimalOutputDTO> getAnimais() {
        List<Animal> animais = animalService.getAllAnimais();
        return animais.stream()
                .map(animalService::convertToDTO)
                .collect(Collectors.toList());
    }
  
      // Endpoint para criar um novo animal
    @PostMapping
    public AnimalOutputDTO createAnimal(@RequestBody AnimalInputDTO animalDTO) {
        Animal animal = animalService.saveAnimal(animalDTO);
        return animalService.convertToDTO(animal);
    }

    // Endpoint para pegar animais filtrados por espécie, raça e estado
    @GetMapping("/filtrados")
    public List<AnimalOutputDTO> getAnimaisFiltrados(
            @RequestParam(required = false) String especie,
            @RequestParam(required = false) String genero,
            @RequestParam(required = false) String porte,
            @RequestParam(required = false) Float idade
    ) {
        List<Animal> animais = animalService.getAnimalsFiltered(especie, genero, porte,idade);
        return animais.stream()
                .map(animalService::convertToDTO)
                .collect(Collectors.toList());
    }
  

    
}