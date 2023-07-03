import React from "react";
import { Badge } from "react-bootstrap";

interface Props {
  metacritic: number;
}

const GameMetacritic = ({ metacritic }: Props) => {
  const color =
    metacritic > 90 ? "success" : metacritic > 75 ? "warning" : "danger";

  return (
    <Badge pill bg={color} className="px-3">
      {metacritic}
    </Badge>
  );
};

export default GameMetacritic;
