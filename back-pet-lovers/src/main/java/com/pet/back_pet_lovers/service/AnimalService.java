package com.pet.back_pet_lovers.service;
import com.pet.back_pet_lovers.dto.AnimalInputDTO;
import com.pet.back_pet_lovers.dto.AnimalOutputDTO;
import com.pet.back_pet_lovers.dto.TagInputDTO;
import com.pet.back_pet_lovers.dto.TagOutputDTO;
import com.pet.back_pet_lovers.model.Animal;
import com.pet.back_pet_lovers.model.Tag;
import com.pet.back_pet_lovers.repository.AnimalRepository;
import com.pet.back_pet_lovers.repository.TagRepository;

import jakarta.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;
import java.util.Set;

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



    // Método para pegar animais filtrados por espécie, raça e cidade
    public List<Animal> getAnimalsFiltered(String especie, String genero, String porte, Float idade) {

        especie = normalizeString(especie);
        genero = normalizeString(genero);
        porte = normalizeString(porte);


        if (especie != null && genero != null && porte != null && idade != null) {
            return animalRepository.findByEspecieIgnoreCaseAndGeneroIgnoreCaseAndPorteIgnoreCaseAndIdade(especie, genero, porte, idade);
        }
    

        if (especie != null && genero != null && porte != null) {
            return animalRepository.findByEspecieIgnoreCaseAndGeneroIgnoreCaseAndPorteIgnoreCase(especie, genero, porte);
        }
        if (especie != null && genero != null && idade != null) {
            return animalRepository.findByEspecieIgnoreCaseAndGeneroIgnoreCaseAndIdade(especie, genero, idade);
        }
        if (especie != null && porte != null && idade != null) {
            return animalRepository.findByEspecieIgnoreCaseAndPorteIgnoreCaseAndIdade(especie, porte, idade);
        }
        if (genero != null && porte != null && idade != null) {
            return animalRepository.findByGeneroIgnoreCaseAndPorteIgnoreCaseAndIdade(genero, porte, idade);
        }

        if (especie != null && genero != null) {
            return animalRepository.findByEspecieIgnoreCaseAndGeneroIgnoreCase(especie, genero);
        }
        if (especie != null && porte != null) {
            return animalRepository.findByEspecieIgnoreCaseAndPorteIgnoreCase(especie, porte);
        }
        if (especie != null && idade != null) {
            return animalRepository.findByEspecieIgnoreCaseAndIdade(especie, idade);
        }
        if (genero != null && porte != null) {
            return animalRepository.findByGeneroIgnoreCaseAndPorteIgnoreCase(genero, porte);
        }
        if (genero != null && idade != null) {
            return animalRepository.findByGeneroIgnoreCaseAndIdade(genero, idade);
        }
        if (porte != null && idade != null) {
            return animalRepository.findByPorteIgnoreCaseAndIdade(porte, idade);
        }
    
        if (especie != null) {
            return animalRepository.findByEspecieIgnoreCase(especie);
        }
        if (genero != null) {
            return animalRepository.findByGeneroIgnoreCase(genero);
        }
        if (porte != null) {
            return animalRepository.findByPorteIgnoreCase(porte);
        }
        if (idade != null) {
            return animalRepository.findByIdadeLessThanEqual(idade);
        }


        return animalRepository.findAll();
    }


    private String normalizeString(String value) {
        return (value != null) ? value.trim().toLowerCase() : null;
    }

@Transactional
public Animal saveAnimal(AnimalInputDTO animalDTO) {
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

    List<Integer> tagIds = animalDTO.getTagIds()
                                .stream()
                                .map(TagInputDTO::getId)
                                .collect(Collectors.toList());

    if (tagIds != null && !tagIds.isEmpty()) {

        List<Tag> tags = tagRepository.findAllById(tagIds);
        if (tags.size() != tagIds.size()) {
            throw new EntityNotFoundException("Uma ou mais tags não foram encontradas.");
        }

        for (Tag tag : tags) {
            animal.addTag(tag);
        }
    }

    return animalRepository.save(animal);
}


    public AnimalOutputDTO convertToDTO(Animal animal) {
        AnimalOutputDTO dto = new AnimalOutputDTO();
        dto.setIdAnimal(animal.getIdAnimal());
        dto.setIdUser(animal.getIdUser());
        dto.setNome(animal.getNome());
        dto.setRaca(animal.getRaca());
        dto.setIdade(animal.getIdade());
        dto.setDescricao(animal.getDescricao());
        dto.setAdotado(animal.getAdotado());
        dto.setEspecie(animal.getEspecie());
        dto.setLinkImagem(animal.getLinkImagem());
        dto.setCidade(animal.getCidade());
        dto.setEstado(animal.getEstado());
        dto.setGenero(animal.getGenero());
        dto.setPorte(animal.getPorte());

        Set<TagOutputDTO> tagDTOs = animal.getAnimalTags().stream()
                .map(animalTag -> {
                    Tag tag = animalTag.getTag();
                    return new TagOutputDTO(tag.getIdTag(), tag.getDescricao(), tag.getTipo());
                })
                .collect(Collectors.toSet());

        dto.setTags(tagDTOs);

        return dto;
    }    

}