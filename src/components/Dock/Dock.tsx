import { useMotionValue } from "framer-motion";
import { DockApp } from "../../library/constant";
import { DockContainer } from "./Style";
import { AppIcon } from "./AppIcon";
import { useSettingStore } from "../../library/useSettingStore";
import { useThemeStore } from "../../library/useThemeStore";

export function Dock() {
  const mouseX = useMotionValue(Infinity);

  const { setSettingOpen } = useSettingStore();
  const { themeColor } = useThemeStore();

  const onSettingsClick = () => {
    setSettingOpen(true);
  };

  return (
    <DockContainer
      $themeColor={themeColor}
      onMouseMove={(event) => mouseX.set(event.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
    >
      {DockApp.map((item, index) => (
        <AppIcon
          key={index}
          item={item}
          mouseX={mouseX}
          onSettingsClick={onSettingsClick}
        />
      ))}
    </DockContainer>
  );
}
