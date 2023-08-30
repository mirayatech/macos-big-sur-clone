import { styled } from "styled-components";
import { Navbar, Dock, Setting } from "./components";
import { useStore } from "./library/useStore";

export default function App() {
  const { isSettingOpen, wallpaper } = useStore();

  const Container = styled.div`
    height: 100vh;
    overflow: hidden;
    background: url(${wallpaper}) no-repeat center center/cover;
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
      {isSettingOpen && <Setting />}

      <DockWrapper>
        <Dock />
      </DockWrapper>
    </Container>
  );
}
