import { useMotionValue } from "framer-motion";
import { DockApp } from "../../library/constant";
import { AppIcon } from "./AppIcon";
import { DockWrapper } from "./Style";
import { useStore } from "../../library/useStore";

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
    <DockWrapper
      onMouseMove={(event) => mouseX.set(event.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
    >
      {DockApp.map((item, index) => (
        <AppIcon
          mouseX={mouseX}
          key={index}
          item={item}
          onSettingsClick={onSettingsClick}
          onAppClick={onAppClick}
        />
      ))}
    </DockWrapper>
  );
}
