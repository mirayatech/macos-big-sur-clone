import { useMotionValue } from "framer-motion";
import { DockMenu } from "../../library/constant";
import { AppIcon } from "./AppIcon";
import { DockWrapper } from "./Style";

export function Dock() {
  const mouseX = useMotionValue(Infinity);

  return (
    <DockWrapper
      onMouseMove={(event) => mouseX.set(event.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
    >
      {DockMenu.map((item, index) => (
        <AppIcon mouseX={mouseX} key={index} item={item} />
      ))}
    </DockWrapper>
  );
}
