import { Header } from "./components/Header";
// import { Button } from "./components/Button";
import { H1 } from "./components/H1";
import { Container } from "./components/Container";
import { Paragrafo } from "./components/Paragrafo";
import { Projects } from "./components/Projects";
import { Button } from "./components/Button";

export function App() {
  return (
    <>
    <Header content="Meu Portfólio" />

    <Container>
      <H1 />
    </Container>

    <Container>
      <Paragrafo />
    </Container>

    <Container>
        <Projects />
    </Container>


    <Container>
      <Button children="Clique aqui"/>
    </Container>
    </>
  );
}