import { styled } from "styled-components";
import { Navbar } from "./components";

export default function App() {
  const Container = styled.div`
    height: 100vh;
    background: url("/wallpaper/mojave.jpeg") no-repeat center center/cover;
  `;

  return (
    <Container>
      <Navbar />
    </Container>
  );
}
