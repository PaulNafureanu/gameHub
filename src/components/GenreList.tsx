import { useState } from "react";
import useGenres, { Genre } from "../hooks/useGenres";
import { Stack } from "react-bootstrap";
import GenreItem from "./GenreItem";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  if (error) return null;

  if (isLoading) return <div>"Loading..."</div>;

  return (
    <Stack gap={2} className="m-2">
      {data.map((genre) => (
        <GenreItem
          onClick={() => setSelectedGenre(genre)}
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
