package com.pet.back_pet_lovers.repository;

import com.pet.back_pet_lovers.model.Animal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AnimalRepository extends JpaRepository<Animal, Integer> {


    List<Animal> findByEspecieIgnoreCase(String especie);
    List<Animal> findByGeneroIgnoreCase(String genero);
    List<Animal> findByPorteIgnoreCase(String porte);
    List<Animal> findByIdade(Float idade);
    

    @Query("SELECT a FROM Animal a WHERE a.idade <= :idade")
    List<Animal> findByIdadeLessThanEqual(@Param("idade") Float idade);


    List<Animal> findByEspecieIgnoreCaseAndGeneroIgnoreCase(String especie, String genero);
    List<Animal> findByEspecieIgnoreCaseAndPorteIgnoreCase(String especie, String porte);
    List<Animal> findByEspecieIgnoreCaseAndIdade(String especie, Float idade);
    List<Animal> findByGeneroIgnoreCaseAndPorteIgnoreCase(String genero, String porte);
    List<Animal> findByGeneroIgnoreCaseAndIdade(String genero, Float idade);
    List<Animal> findByPorteIgnoreCaseAndIdade(String porte, Float idade);

    List<Animal> findByEspecieIgnoreCaseAndGeneroIgnoreCaseAndPorteIgnoreCase(String especie, String genero, String porte);
    List<Animal> findByEspecieIgnoreCaseAndGeneroIgnoreCaseAndIdade(String especie, String genero, Float idade);
    List<Animal> findByEspecieIgnoreCaseAndPorteIgnoreCaseAndIdade(String especie, String porte, Float idade);
    List<Animal> findByGeneroIgnoreCaseAndPorteIgnoreCaseAndIdade(String genero, String porte, Float idade);


    List<Animal> findByEspecieIgnoreCaseAndGeneroIgnoreCaseAndPorteIgnoreCaseAndIdade(String especie, String genero, String porte, Float idade);
}
