import { Card } from "react-bootstrap";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";

interface Props {
  children: Game;
}

const GameCard = ({ children }: Props) => {
  const platforms = children.platforms.map((p) => p.platform);

  return (
    <Card style={{ height: "22rem" }}>
      <Card.Img
        style={{ height: "16rem", objectFit: "cover" }}
        src={children.background_image}
      />
      <Card.Body>
        <Card.Title>{children.name}</Card.Title>
        <PlatformIconList platforms={platforms} />
      </Card.Body>
    </Card>
  );
};

export default GameCard;
