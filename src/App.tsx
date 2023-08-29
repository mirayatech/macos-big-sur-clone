import { styled } from "styled-components";
import { Navbar } from "./components";
import { Dock } from "./components/Dock/Dock";

export default function App() {
  const Container = styled.div`
    height: 100vh;
    background: url("/wallpaper/mojave.jpeg") no-repeat center center/cover;
  `;

  const DockWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    height: 95%;
  `;

  return (
    <Container>
      <Navbar />
      <DockWrapper>
        <Dock />
      </DockWrapper>
    </Container>
  );
}
