import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Container } from "reactstrap";
import Nav from "./Nav";
import HeroSection from "./HeroSection";

function App() {
  return (
    <Container fluid className="App">
      <Nav />
      <HeroSection />
    </Container>
  );
}

export default App;
