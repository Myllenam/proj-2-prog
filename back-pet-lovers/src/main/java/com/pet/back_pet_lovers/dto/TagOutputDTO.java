package com.pet.back_pet_lovers.dto;

public class TagOutputDTO {
    private Integer idTag;
    private String descricao;
    private String tipo;

    // Construtores
    public TagOutputDTO() {
    }

    public TagOutputDTO(Integer idTag, String descricao, String tipo) {
        this.idTag = idTag;
        this.descricao = descricao;
        this.tipo = tipo;
    }

    // Getters e Setters
    public Integer getIdTag() {
        return idTag;
    }

    public void setIdTag(Integer idTag) {
        this.idTag = idTag;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }
}
