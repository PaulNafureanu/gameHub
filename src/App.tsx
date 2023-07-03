import { Col, Container, Row, Stack } from "react-bootstrap";
import NavBar from "./components/NavBar";
import useDarkMode from "./hooks/useDarkMode";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import OrderingSelector from "./components/OrderingSelector";
import { useState } from "react";

export interface GameQuery {
  search?: string;
  platforms?: string;
  genres?: string;
  ordering?: string;
}

function App() {
  const { darkMode, setDarkMode } = useDarkMode(true);
  const [gameQuery, setGameQuery] = useState<GameQuery>({});

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  const handleGameQueryChange = (key: keyof GameQuery, value: string) => {
    const newGameQuery = { ...gameQuery };
    if (key === "ordering" && gameQuery["ordering"]?.includes(value)) {
      newGameQuery["ordering"] = gameQuery["ordering"].includes("-")
        ? gameQuery["ordering"].slice(1)
        : "-" + value;
    } else newGameQuery[key] = value;
    setGameQuery(newGameQuery);
  };

  return (
    <Container fluid>
      <Row className="mb-5">
        <Col>
          <NavBar
            darkMode={darkMode}
            onDarkModeToggle={handleDarkModeToggle}
            onSubmit={(value) => handleGameQueryChange("search", value)}
          />
        </Col>
      </Row>
      <Row>
        <Col md={3} lg={2} className="d-none d-md-block">
          <GenreList
            selectedGenreId={gameQuery.genres}
            onClick={(genreId) => handleGameQueryChange("genres", genreId)}
          />
        </Col>
        <Col md={9} lg={10}>
          <Stack className="ms-3 mb-3" direction="horizontal">
            <PlatformSelector
              onClick={(platform) => {
                // handleGameQueryChange("platforms", platform);
              }}
            />
            <OrderingSelector
              onClick={(order) => handleGameQueryChange("ordering", order)}
            />
          </Stack>
          <GameGrid gameQuery={gameQuery} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
