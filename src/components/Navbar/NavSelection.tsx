import ClickAwayListener from "react-click-away-listener";
import { Grid, Column, Colors, ColumnLink } from "./Style";
import {
  MdMotionPhotosOn,
  MdWifiTethering,
  MdCircle,
  MdOutlineAutoAwesome,
} from "react-icons/md";

type NavSelectionProps = {
  setSelectionOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export function NavSelection({ setSelectionOpen }: NavSelectionProps) {
  return (
    <ClickAwayListener onClickAway={() => setSelectionOpen(false)}>
      <Grid>
        <Column>
          <span>
            <MdWifiTethering />
          </span>{" "}
          Airdrop
        </Column>
        <Column>
          <span>
            <MdMotionPhotosOn />
          </span>
          Animations
        </Column>
        <Column>
          System Color
          <Colors>
            {[1, 2, 3, 4, 5, 6, 7].map((index) => (
              <span key={index}>
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
