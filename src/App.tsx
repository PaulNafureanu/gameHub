import { Col, Container, Row, Stack } from "react-bootstrap";
import NavBar from "./components/NavBar";
import useDarkMode from "./hooks/useDarkMode";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import OrderingSelector from "./components/OrderingSelector";
import { useState } from "react";
import { Platform } from "./hooks/useGames";
import { Genre } from "./hooks/useGenres";

export interface GameQuery {
  search?: string;
  platforms?: { id: string; name: string };
  genres?: Genre;
  ordering?: string;
}

function App() {
  const { darkMode, setDarkMode } = useDarkMode(true);
  const [gameQuery, setGameQuery] = useState<GameQuery>({});

  let title = `${gameQuery.platforms?.name || ""} ${
    gameQuery.genres?.name || ""
  } Games`;

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  const handleGameQueryChange = (key: keyof GameQuery, value: any) => {
    const newGameQuery = { ...gameQuery };
    if (key === "ordering" && gameQuery["ordering"]?.includes(value)) {
      newGameQuery["ordering"] = gameQuery["ordering"].includes("-")
        ? gameQuery["ordering"].slice(1)
        : "-" + value;
    } else newGameQuery[key] = value;
    if (key === "platforms" && value.id === "")
      delete newGameQuery["platforms"];
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
            selectedGenre={gameQuery.genres}
            onClick={(genreId) => handleGameQueryChange("genres", genreId)}
          />
        </Col>
        <Col md={9} lg={10}>
          <h1 className="fw-bold ms-3">{title}</h1>
          <Stack className="ms-3 mb-3" direction="horizontal">
            <PlatformSelector
              selectedPlatform={gameQuery.platforms?.name || "All"}
              onClick={(platform) => {
                handleGameQueryChange("platforms", platform);
              }}
            />
            <OrderingSelector
              selectedOrder={gameQuery.ordering || "None"}
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
