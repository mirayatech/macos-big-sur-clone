import { useRef } from "react";
import { MotionValue, useSpring, useTransform } from "framer-motion";
import { DockIcon, DockLink } from "./Style";

type AppIconProps = {
  mouseX: MotionValue;
  item: { name: string; icon: string; type: string; link?: string };
  onSettingsClick?: () => void;
};

export function AppIcon({ mouseX, item, onSettingsClick }: AppIconProps) {
  const ref = useRef<HTMLImageElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [70, 100, 70]);
  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const handleClick = () => {
    if (item.name === "Setting" && onSettingsClick) {
      onSettingsClick();
    }
  };

  if (item.type === "link" && item.link) {
    return (
      <DockLink href={item.link} target="_blank" rel="noopener noreferrer">
        <DockIcon src={item.icon} ref={ref} style={{ width }} />
      </DockLink>
    );
  } else {
    return (
      <DockIcon
        src={item.icon}
        ref={ref}
        style={{ width }}
        onClick={handleClick}
      />
    );
  }
}
