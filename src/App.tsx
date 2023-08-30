import { useState, useEffect } from "react";
import { styled } from "styled-components";
import { Navbar, Dock, Setting } from "./components";
import { useWallpaper } from "./library/useWallpaperStore";
import { useSettingStore } from "./library/useSettingStore";

export default function App() {
  const { wallpaper } = useWallpaper();
  const { isSettingOpen } = useSettingStore();

  const [background, setBackground] = useState(wallpaper);

  useEffect(() => {
    setBackground(wallpaper);
  }, [wallpaper]);

  const Container = styled.div`
    height: 100vh;
    overflow: hidden;
    position: relative;
  `;

  const Background = styled.div`
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${background}) no-repeat center center/cover;
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

      {isSettingOpen && <Setting key="setting" />}

      <DockWrapper>
        <Dock />
      </DockWrapper>

      <Background />
    </Container>
  );
}
