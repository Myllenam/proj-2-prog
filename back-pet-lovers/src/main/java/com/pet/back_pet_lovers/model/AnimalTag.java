package com.pet.back_pet_lovers.model;

import java.io.Serializable;
import java.util.Objects;

import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name = "animal_tags", uniqueConstraints = { @UniqueConstraint(columnNames = { "id_animal", "id_tag" }) })
public class AnimalTag implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // Chave primária da tabela

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_animal")
    @JsonBackReference
    private Animal animal;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_tag")
    @JsonBackReference
    private Tag tag;

    public AnimalTag() {}

    public AnimalTag(Animal animal, Tag tag) {
        this.animal = animal;
        this.tag = tag;
    }

    // Getters e Setters

    public Long getId() {
        return id;
    }

    public Animal getAnimal() {
        return animal;
    }

    public Tag getTag() {
        return tag;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setAnimal(Animal animal) {
        this.animal = animal;
    }

    public void setTag(Tag tag) {
        this.tag = tag;
    }

    // equals e hashCode baseados em animal e tag

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        AnimalTag that = (AnimalTag) o;

        return Objects.equals(animal.getIdAnimal(), that.animal.getIdAnimal()) &&
               Objects.equals(tag.getIdTag(), that.tag.getIdTag());
    }

    @Override
    public int hashCode() {
        return Objects.hash(animal.getIdAnimal(), tag.getIdTag());
    }
}
