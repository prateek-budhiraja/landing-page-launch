import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Container } from "reactstrap";
import Nav from "./Nav";
import HeroSection from "./HeroSection";
import Footer from "./Footer";

function App() {
  return (
    <Container fluid className="App">
      <Container className="top">
        <Nav />
        <HeroSection />
      </Container>
      <Footer />
    </Container>
  );
}

export default App;
