package com.pet.back_pet_lovers.dto;

public class TagInputDTO {
    private Integer id;

    // Construtor padrão (necessário para frameworks de desserialização como Jackson)
    public TagInputDTO() {
    }

    // Getter para o campo id
    public Integer getId() {
        return id;
    }

    // Setter para o campo id
    public void setId(Integer id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "TagInputDTO{id=" + id + "}";
    }
}
