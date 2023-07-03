import { Col, Container, Row } from "react-bootstrap";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data: games, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  if (error) return <div>{error}</div>;

  if (!games) return <div>No games were found!</div>;

  if (isLoading)
    return (
      <Container fluid>
        <Row>
          {skeletons.map((skeleton) => (
            <Col key={skeleton} md={6} lg={4} xxl={3} className="mb-4">
              <GameCardSkeleton />
            </Col>
          ))}
        </Row>
      </Container>
    );

  return (
    <Container fluid>
      <Row className="justify-content-between">
        {games.map((game) => (
          <Col key={game.id} md={6} lg={4} xxl={3} className="mb-4">
            <GameCard>{game}</GameCard>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default GameGrid;
