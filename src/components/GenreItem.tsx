import React from "react";
import { Genre } from "../hooks/useGenres";
import { Button, Image, Stack } from "react-bootstrap";
import getCropImageUrl from "../utility/getCropImageUrl";
import noImage from "./../assets/placeholder.webp";

interface Props {
  children: Genre;
  onClick: () => void;
  isFwBold?: boolean;
}

const GenreItem = ({ children, onClick, isFwBold = false }: Props) => {
  const size = "40px";
  let btnClasses = "text-start link-body-emphasis link-underline-opacity-0";

  return (
    <Stack direction="horizontal">
      <Image
        src={
          children.image_background
            ? getCropImageUrl(children.image_background)
            : noImage
        }
        style={{ objectFit: "cover", height: size, width: size }}
        className="rounded-3"
      />
      <Button
        variant="link"
        className={isFwBold ? btnClasses + " fw-bold" : btnClasses}
        onClick={onClick}
      >
        {children.name}
      </Button>
    </Stack>
  );
};

export default GenreItem;
