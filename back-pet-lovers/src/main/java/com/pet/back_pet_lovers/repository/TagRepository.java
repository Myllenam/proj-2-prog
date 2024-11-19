package com.pet.back_pet_lovers.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pet.back_pet_lovers.model.Tag;

@Repository
public interface TagRepository extends JpaRepository<Tag, Integer> {
}