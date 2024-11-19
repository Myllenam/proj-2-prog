package com.pet.back_pet_lovers.service;
import com.pet.back_pet_lovers.dto.AnimalDTO;
import com.pet.back_pet_lovers.model.Animal;
import com.pet.back_pet_lovers.model.Tag;
import com.pet.back_pet_lovers.repository.AnimalRepository;
import com.pet.back_pet_lovers.repository.TagRepository;

import jakarta.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import jakarta.transaction.Transactional;

@Service
public class AnimalService {

    @Autowired
    private AnimalRepository animalRepository;

    @Autowired
    private TagRepository tagRepository;

 
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

    @Transactional
    public Animal saveAnimal(AnimalDTO animalDTO) {
        // Cria uma nova instância de Animal
        Animal animal = new Animal();
        animal.setIdUser(animalDTO.getIdUser());
        animal.setNome(animalDTO.getNome());
        animal.setRaca(animalDTO.getRaca());
        animal.setIdade(animalDTO.getIdade());
        animal.setDescricao(animalDTO.getDescricao());
        animal.setAdotado(animalDTO.getAdotado());
        animal.setEspecie(animalDTO.getEspecie());
        animal.setLinkImagem(animalDTO.getLinkImagem());
        animal.setCidade(animalDTO.getCidade());
        animal.setEstado(animalDTO.getEstado());
        animal.setGenero(animalDTO.getGenero());
        animal.setPorte(animalDTO.getPorte());

        // animal = animalRepository.save(animal);

        List<Integer> tagIds = animalDTO.getTagIds();
        if (tagIds != null && !tagIds.isEmpty()) {
            for (Integer tagId : tagIds) {
                Tag tag = tagRepository.findById(tagId)
                        .orElseThrow(() -> new EntityNotFoundException("Tag não encontrada com ID: " + tagId));
                animal.addTag(tag);
            }
        }

        return animalRepository.save(animal);
    }

}