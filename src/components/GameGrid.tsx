import { Col, Container, Row } from "react-bootstrap";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { data: games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  if (error) return <div>{error}</div>;

  if (isLoading)
    return (
      <Container fluid>
        <Row>
          {skeletons.map((skeleton) => (
            <Col key={skeleton} md={4} className="mb-4">
              <GameCardSkeleton />
            </Col>
          ))}
        </Row>
      </Container>
    );

  return (
    <Container fluid>
      <Row>
        {games.map((game) => (
          <Col key={game.id} md={4} className="mb-4">
            <GameCard>{game}</GameCard>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default GameGrid;
