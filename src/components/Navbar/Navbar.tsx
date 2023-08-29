import { TopBarMenu } from "../../library/constant";
import { MdOutlineToggleOff, MdToggleOn } from "react-icons/md";
import {
  getCurrentFormattedDate,
  getCurrentFormattedTime,
} from "../../library/services";
import { NavMenu } from "./NavMenu";
import { Nav, Wrapper, IconFlex, IconFlexItem } from "./Style";
import { useState } from "react";
import { NavSelection } from "./NavSelection";

export function Navbar() {
  const [isSelectionOpen, setSelectionOpen] = useState(false);
  return (
    <Nav>
      <Wrapper>
        {TopBarMenu.map((item, index) => (
          <NavMenu item={item} key={index} />
        ))}
      </Wrapper>

      <Wrapper>
        <div>
          <IconFlex onClick={() => setSelectionOpen(!isSelectionOpen)}>
            <IconFlexItem>
              <MdOutlineToggleOff />
            </IconFlexItem>
            <IconFlexItem>
              <MdToggleOn />
            </IconFlexItem>
          </IconFlex>
        </div>
        <div>{getCurrentFormattedDate()}</div>
        <div>{getCurrentFormattedTime()}</div>

        {isSelectionOpen && (
          <NavSelection setSelectionOpen={setSelectionOpen} />
        )}
      </Wrapper>
    </Nav>
  );
}
