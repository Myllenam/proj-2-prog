package com.pet.back_pet_lovers.model;

import java.util.HashSet;
import java.util.Set;


import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "animal")
public class Animal {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer idAnimal;

    private Integer idUser;
    private String nome;
    private String raca;
    private Float idade;
    private String descricao;
    private Boolean adotado;
    private String especie;
    private String linkImagem;
    private String cidade;
    private String estado;
    private String genero;
    private String porte;

    @OneToMany(mappedBy = "animal", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<AnimalTag> animalTags = new HashSet<>();
   
    public Integer getIdAnimal() {
        return idAnimal;
    }

    public void setIdAnimal(Integer idAnimal) {
        this.idAnimal = idAnimal;
    }

    public String getPorte() {
        return porte;
    }

    public void setPorte(String porte) {
        this.porte = porte;
    }

    public String getGenero() {
        return genero;
    }

    public void setGenero(String genero) {
        this.genero = genero;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public String getCidade() {
        return cidade;
    }

    public void setCidade(String cidade) {
        this.cidade = cidade;
    }

    public String getEspecie() {
        return especie;
    }

    public void setEspecie(String especie) {
        this.especie = especie;
    }

    public Boolean getAdotado() {
        return adotado;
    }

    public void setAdotado(Boolean adotado) {
        this.adotado = adotado;
    }

    public String getLinkImagem() {
        return linkImagem;
    }

    public void setLinkImagem(String linkImagem) {
        this.linkImagem = linkImagem;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Float getIdade() {
        return idade;
    }

    public void setIdade(Float idade) {
        this.idade = idade;
    }

    public String getRaca() {
        return raca;
    }

    public void setRaca(String raca) {
        this.raca = raca;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Integer getIdUser() {
        return idUser;
    }

    public void setIdUser(Integer idUser) {
        this.idUser = idUser;
    }

    public Set<AnimalTag> getAnimalTags() {
        return animalTags;
    }

    public void setAnimalTags(Set<AnimalTag> animalTags) {
        this.animalTags = animalTags;
    }

    public void addTag(Tag tag) {
        AnimalTag animalTag = new AnimalTag(this, tag);
        animalTags.add(animalTag);
        tag.getAnimalTags().add(animalTag);
    }

    public void removeTag(Tag tag) {
        animalTags.removeIf(at -> at.getTag().equals(tag));
        tag.getAnimalTags().removeIf(at -> at.getAnimal().equals(this));
    }

}
