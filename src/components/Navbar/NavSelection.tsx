import { useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import {
  MdMotionPhotosOn,
  MdWifiTethering,
  MdCircle,
  MdOutlineAutoAwesome,
} from "react-icons/md";
import { useStore } from "../../library/useStore";
import { Grid, Column, ColumnLink, Colors } from "./Style";

type NavSelectionProps = {
  setSelectionOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export function NavSelection({ setSelectionOpen }: NavSelectionProps) {
  const { systemColorPreference, setSystemColorPreference } = useStore();
  const [isAirdropOpen, setIsAirdropOpen] = useState(false);
  const [isAnimationOpen, setIsAnimationOpen] = useState(false);

  const handleToggleAirdrop = () => {
    setIsAirdropOpen(!isAirdropOpen);
  };

  const handleToggleAnimation = () => {
    setIsAnimationOpen(!isAnimationOpen);
  };

  const handleColorPreference = (color: string) => {
    setSystemColorPreference(color);
  };

  return (
    <ClickAwayListener onClickAway={() => setSelectionOpen(false)}>
      <Grid>
        <Column
          $isAirdropOpen={isAirdropOpen}
          onClick={handleToggleAirdrop}
          $systemColorPreference={systemColorPreference}
        >
          <span>
            <MdWifiTethering />
          </span>
          Airdrop
        </Column>
        <Column
          $isAnimationOpen={isAnimationOpen}
          onClick={handleToggleAnimation}
          $systemColorPreference={systemColorPreference}
        >
          <span>
            <MdMotionPhotosOn />
          </span>
          Animations
        </Column>
        <Column>
          System Color
          <Colors>
            {[
              "#ff9d0a",
              "#2dcb55",
              "#66d4ff",
              "#0a85ff",
              "#5e5ce6",
              "#bf5af2",
              "#ff3860",
            ].map((color, index) => (
              <span key={index} onClick={() => handleColorPreference(color)}>
                <MdCircle />
              </span>
            ))}
          </Colors>
        </Column>
        <Column>
          <span>
            <MdOutlineAutoAwesome />
          </span>
          <ColumnLink
            href="https://github.com/mirayatech/macOS-clone"
            target="_blank"
          >
            Created by Miraya Tech
          </ColumnLink>
        </Column>
      </Grid>
    </ClickAwayListener>
  );
}
