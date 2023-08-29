import { useMotionValue } from "framer-motion";
import { DockApp } from "../../library/constant";
import { AppIcon } from "./AppIcon";
import { DockWrapper } from "./Style";

export function Dock() {
  const mouseX = useMotionValue(Infinity);

  return (
    <DockWrapper
      onMouseMove={(event) => mouseX.set(event.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
    >
      {DockApp.map((item, index) => (
        <AppIcon mouseX={mouseX} key={index} item={item} />
      ))}
    </DockWrapper>
  );
}
