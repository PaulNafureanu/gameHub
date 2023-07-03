import { Card, Stack } from "react-bootstrap";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import GameMetacritic from "./GameMetacritic";
import getCropImageUrl from "../utility/getCropImageUrl";

interface Props {
  children: Game;
}

const GameCard = ({ children }: Props) => {
  const platforms = children.platforms.map((p) => p.platform);

  return (
    <Card style={{ height: "22rem" }}>
      <Card.Img
        style={{ height: "16rem", objectFit: "cover" }}
        src={getCropImageUrl(children.background_image)}
      />
      <Card.Body>
        <Card.Title>{children.name}</Card.Title>
        <Stack direction="horizontal" className="justify-content-between">
          <PlatformIconList platforms={platforms} />
          <GameMetacritic metacritic={children.metacritic} />
        </Stack>
      </Card.Body>
    </Card>
  );
};

export default GameCard;
