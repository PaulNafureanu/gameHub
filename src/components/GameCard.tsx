import { Card } from "react-bootstrap";
import { Game } from "../hooks/useGames";

interface Props {
  children: Game;
}

const GameCard = ({ children }: Props) => {
  return (
    <Card style={{ height: "22rem" }}>
      <Card.Img src={children.background_image} />
      <Card.Body>
        <Card.Title>{children.name}</Card.Title>
        <Card.Text>Text</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default GameCard;
