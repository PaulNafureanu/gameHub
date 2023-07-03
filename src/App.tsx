import { Col, Container, Row } from "react-bootstrap";
import NavBar from "./components/NavBar";
import useDarkMode from "./hooks/useDarkMode";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  const { darkMode, setDarkMode } = useDarkMode(true);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Container fluid>
      <Row className="mb-5">
        <Col>
          <NavBar darkMode={darkMode} onDarkModeToggle={handleDarkModeToggle} />
        </Col>
      </Row>
      <Row>
        <Col md={3} lg={2} className="d-none d-md-block">
          <GenreList />
        </Col>
        <Col md={9} lg={10}>
          <GameGrid />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
