import { useMotionValue } from "framer-motion";
import { DockApp } from "../../library/constant";
import { DockContainer } from "./Style";
import { useStore } from "../../library/useStore";
import { AppIcon } from "./AppIcon";

export function Dock() {
  const mouseX = useMotionValue(Infinity);

  const { setSettingOpen } = useStore();

  const onSettingsClick = () => {
    setSettingOpen(true);
  };

  const onAppClick = () => {
    console.log("hello");
  };

  return (
    <DockContainer
      onMouseMove={(event) => mouseX.set(event.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
    >
      {DockApp.map((item, index) => (
        <AppIcon
          key={index}
          item={item}
          mouseX={mouseX}
          onSettingsClick={onSettingsClick}
          onAppClick={onAppClick}
        />
      ))}
    </DockContainer>
  );
}
