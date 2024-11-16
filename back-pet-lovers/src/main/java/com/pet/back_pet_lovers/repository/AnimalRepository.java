package com.pet.back_pet_lovers.repository;

import com.pet.back_pet_lovers.model.Animal;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface AnimalRepository extends JpaRepository<Animal, Integer> {
    List<Animal> findByEspecieIgnoreCase(String especie);

    // Método para buscar animais por raça
    List<Animal> findByRacaIgnoreCase(String raca);

    // Método para buscar animais por espécie e raça
    List<Animal> findByEspecieAndRacaIgnoreCase(String especie, String raca);

    // Método para buscar animais por espécie, raça e estado
    List<Animal> findByEspecieAndRacaAndEstadoIgnoreCase(String especie, String raca, String estado);

    // Método para buscar animais por estado
    List<Animal> findByEstadoIgnoreCase(String estado);

    // Método para buscar animais por cidade
    List<Animal> findByCidadeIgnoreCase(String cidade);
    List<Animal> findByEspecie(String especie);
    List<Animal> findByEspecieAndRacaAndCidade(String especie, String raca, String cidade);
}

