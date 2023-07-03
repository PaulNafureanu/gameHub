import { useState } from "react";
import useGenres, { Genre } from "../hooks/useGenres";
import { Stack } from "react-bootstrap";
import GenreItem from "./GenreItem";

interface Props {
  selectedGenreId: string | undefined;
  onClick: (selectedGenreId: string) => void;
}

const GenreList = ({ selectedGenreId, onClick }: Props) => {
  const { data, error, isLoading } = useGenres();

  if (error) return null;

  if (isLoading) return <div>Loading...</div>;

  return (
    <Stack gap={2} className="m-2 mt-0">
      {data.map((genre) => (
        <GenreItem
          onClick={() => onClick(genre.id.toString())}
          key={genre.id}
          isFwBold={
            genre.id === parseInt(selectedGenreId ? selectedGenreId : "")
          }
        >
          {genre}
        </GenreItem>
      ))}
    </Stack>
  );
};

export default GenreList;
