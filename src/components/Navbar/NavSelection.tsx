import { useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import {
  MdMotionPhotosOn,
  MdWifiTethering,
  MdCircle,
  MdOutlineAutoAwesome,
} from "react-icons/md";
import { Grid, Column, ColorCircle, SystemColorPreferenceLink } from "./Style";
import { useSelectionStore } from "../../library/useSelectionStore";
import { useThemeStore } from "../../library/useThemeStore";

type NavSelectionProps = {
  setSelectionOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export function NavSelection({ setSelectionOpen }: NavSelectionProps) {
  const { systemColorPreference, setSystemColorPreference } =
    useSelectionStore();
  const { themeColor } = useThemeStore();
  const [isAirdropOpen, setIsAirdropOpen] = useState(true);
  const [isAnimationOpen, setIsAnimationOpen] = useState(true);

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
      <Grid $themeColor={themeColor}>
        <Column
          $themeColor={themeColor}
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
          $themeColor={themeColor}
          $isAnimationOpen={isAnimationOpen}
          onClick={handleToggleAnimation}
          $systemColorPreference={systemColorPreference}
        >
          <span>
            <MdMotionPhotosOn />
          </span>
          Animations
        </Column>
        <Column $themeColor={themeColor}>
          System Color
          <ColorCircle>
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
          </ColorCircle>
        </Column>
        <Column $themeColor={themeColor}>
          <span>
            <MdOutlineAutoAwesome />
          </span>
          <SystemColorPreferenceLink
            $themeColor={themeColor}
            href="https://github.com/mirayatech/macos-big-sur-clone"
            target="_blank"
          >
            Created by Miraya Tech
          </SystemColorPreferenceLink>
        </Column>
      </Grid>
    </ClickAwayListener>
  );
}
