import { Button, Box, Typography, FormHelperText } from "@mui/material";
import { ITag } from "../../../../models/interface/animal.interface";
import { FieldError } from "react-hook-form";
import { FC, useEffect, useState } from "react";

export const tags: ITag[] = [
  { idTag: 1, descricao: "Castrado", tipo: "saude" },
  { idTag: 2, descricao: "Vacinado", tipo: "saude" },
  { idTag: 3, descricao: "Vermifugado", tipo: "saude" },
  { idTag: 4, descricao: "Precisa de cuidados especiais", tipo: "saude" },
  { idTag: 5, descricao: "Dócil", tipo: "temperamento" },
  { idTag: 6, descricao: "Agressivo", tipo: "temperamento" },
  { idTag: 7, descricao: "Calmo", tipo: "temperamento" },
  { idTag: 8, descricao: "Brincalhão", tipo: "temperamento" },
  { idTag: 9, descricao: "Sociável", tipo: "temperamento" },
  { idTag: 10, descricao: "Arisco", tipo: "temperamento" },
  { idTag: 11, descricao: "Independente", tipo: "temperamento" },
  { idTag: 12, descricao: "Carente", tipo: "temperamento" },
  { idTag: 13, descricao: "Gatos", tipo: "social" },
  { idTag: 14, descricao: "Desconhecidos", tipo: "social" },
  { idTag: 15, descricao: "Cachorros", tipo: "social" },
  { idTag: 16, descricao: "Crianças", tipo: "social" },
];

const TagsDisplay: FC<{
  selectedTags: any;
  setValue: any;
  errors?: FieldError;
}> = ({ selectedTags, setValue, errors }) => {
  const [selectedTagIds, setSelectedTagIds] =
    useState<{ id: number }[]>(selectedTags);
  useEffect(() => {
    setSelectedTagIds(selectedTags);
  }, [selectedTags]);

  const handleTagClick = (tagId: number) => {
    const updatedTags = selectedTagIds.some((tag) => tag.id === tagId)
      ? selectedTagIds.filter((tag) => tag.id !== tagId)
      : [...selectedTagIds, { id: tagId }];

    setSelectedTagIds(updatedTags);
    setValue("tagIds", updatedTags);
  };
  const saudeTags = tags.filter((tag) => tag.tipo === "saude");
  const temperamentoTags = tags.filter((tag) => tag.tipo === "temperamento");
  const socialTags = tags.filter((tag) => tag.tipo === "social");

  return (
    <Box className="p-2">
      <Box className="mb-3">
        <Typography variant="h6" className="font-semibold mb-2">
          Cuidados Veterinários
        </Typography>
        <Box className="flex flex-wrap gap-1">
          {saudeTags.map((tag) => (
            <Button
              key={tag.idTag}
              variant="outlined"
              className={`py-2 m-0.5 ${
                selectedTagIds.some((item) => item.id === tag.idTag)
                  ? "bg-rosa2 text-white"
                  : "bg-transparent text-black"
              }`}
              onClick={() => handleTagClick(tag.idTag)}
            >
              {tag.descricao}
            </Button>
          ))}
        </Box>
      </Box>
      <Box className="mb-3">
        <Typography variant="h6" className="font-semibold mb-2">
          Temperamento
        </Typography>
        <Box className="flex flex-wrap gap-1">
          {temperamentoTags.map((tag) => (
            <Button
              key={tag.idTag}
              variant="outlined"
              className={`py-2 m-0.5 ${
                selectedTagIds.some((item) => item.id === tag.idTag)
                  ? "bg-rosa2 text-white"
                  : "bg-transparent text-black"
              }`}
              onClick={() => handleTagClick(tag.idTag)}
            >
              {tag.descricao}
            </Button>
          ))}
        </Box>
      </Box>
      <Box className="mb-3">
        <Typography variant="h6" className="font-semibold mb-2">
          Sociável com
        </Typography>
        <Box className="flex flex-wrap gap-1">
          {socialTags.map((tag) => (
            <Button
              key={tag.idTag}
              variant="outlined"
              className={`py-2 m-0.5 ${
                selectedTagIds.some((item) => item.id === tag.idTag)
                  ? "bg-rosa2 text-white"
                  : "bg-transparent text-black"
              }`}
              onClick={() => handleTagClick(tag.idTag)}
            >
              {tag.descricao}
            </Button>
          ))}
        </Box>
      </Box>
      {!!errors && (
        <FormHelperText className="text-red-600">
          {errors.message}
        </FormHelperText>
      )}
    </Box>
  );
};

export default TagsDisplay;
