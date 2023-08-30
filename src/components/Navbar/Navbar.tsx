import { useState } from "react";
import { MdOutlineToggleOff, MdToggleOn } from "react-icons/md";
import {
  getCurrentFormattedDate,
  getCurrentFormattedTime,
} from "../../library/services";
import { TopBarMenu } from "../../library/constant";
import {
  Wrapper,
  ToggleIconsContainer,
  DateContainer,
  NavContainer,
  ToggleFlex,
} from "./Style";
import { NavMenu } from "./NavMenu";
import { NavSelection } from "./NavSelection";
import { useThemeStore } from "../../library/useThemeStore";

export function Navbar() {
  const [isSelectionOpen, setSelectionOpen] = useState(false);
  const { themeColor } = useThemeStore();

  return (
    <NavContainer $themeColor={themeColor}>
      <Wrapper>
        {TopBarMenu.map((item, index) => (
          <NavMenu item={item} key={index} />
        ))}
      </Wrapper>

      <Wrapper>
        <ToggleIconsContainer
          onClick={() => setSelectionOpen(!isSelectionOpen)}
        >
          <ToggleFlex>
            <MdOutlineToggleOff />
            <MdToggleOn />
          </ToggleFlex>
        </ToggleIconsContainer>
        <DateContainer>{getCurrentFormattedDate()}</DateContainer>
        <DateContainer>{getCurrentFormattedTime()}</DateContainer>

        {isSelectionOpen && (
          <NavSelection setSelectionOpen={setSelectionOpen} />
        )}
      </Wrapper>
    </NavContainer>
  );
}
