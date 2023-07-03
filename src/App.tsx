import { Col, Container, Row } from "react-bootstrap";
import NavBar from "./components/NavBar";
import useDarkMode from "./hooks/useDarkMode";
import GameGrid from "./components/GameGrid";

function App() {
  const { darkMode, setDarkMode } = useDarkMode(true);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Container fluid>
      <Row>
        <Col>
          <NavBar darkMode={darkMode} onDarkModeToggle={handleDarkModeToggle} />
        </Col>
      </Row>
      <Row>
        <Col md={2} className="d-none d-md-block">
          Aside
        </Col>
        <Col md={10}>
          <GameGrid />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
