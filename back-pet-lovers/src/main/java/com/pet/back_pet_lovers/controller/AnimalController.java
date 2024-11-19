package com.pet.back_pet_lovers.controller;
import com.pet.back_pet_lovers.dto.AnimalDTO;
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



@RestController
@RequestMapping("/animais")
public class AnimalController {

    @Autowired
    private AnimalService animalService;

    // Endpoint para pegar todos os animais
    @GetMapping
    public List<Animal> getAnimais() {
        return animalService.getAllAnimais();
    }
  
      // Endpoint para criar um novo animal
    @PostMapping
    public Animal createAnimal(@RequestBody AnimalDTO animalDTO) {
        return animalService.saveAnimal(animalDTO);  // Chama o serviço para salvar o animal
    }

    @GetMapping("/gatos")
    public List<Animal> getGatos() {
        return animalService.getAllGatos();
    }

    // Endpoint para pegar todos os cachorros
    @GetMapping("/cachorros")
    public List<Animal> getCachorros() {
        return animalService.getAllCachorros();
    }

    // Endpoint para pegar animais filtrados por espécie, raça e estado
    @GetMapping("/filtrados")
    public List<Animal> getAnimaisFiltrados(
            @RequestParam(required = false) String especie,
            @RequestParam(required = false) String raca,
            @RequestParam(required = false) String estado
    ) {
        return animalService.getAnimalsFiltered(especie, raca, estado);
    }

    
}