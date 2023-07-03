import { useState } from "react";
import useGenres, { Genre } from "../hooks/useGenres";
import { Stack } from "react-bootstrap";
import GenreItem from "./GenreItem";

interface Props {
  selectedGenre: Genre | undefined;
  onClick: (selectedGenre: Genre) => void;
}

const GenreList = ({ selectedGenre, onClick }: Props) => {
  const { data, error, isLoading } = useGenres();

  if (error) return null;

  if (isLoading) return <div>Loading...</div>;

  return (
    <Stack gap={2} className="m-2 mt-0">
      {data.map((genre) => (
        <GenreItem
          onClick={() => onClick(genre)}
          key={genre.id}
          isFwBold={genre.id === selectedGenre?.id}
        >
          {genre}
        </GenreItem>
      ))}
    </Stack>
  );
};

export default GenreList;
