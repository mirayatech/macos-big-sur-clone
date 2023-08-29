import { TopBarMenu } from "../../library/constant";
import { MdOutlineToggleOff, MdToggleOn } from "react-icons/md";
import {
  getCurrentFormattedDate,
  getCurrentFormattedTime,
} from "../../library/services";
import { NavMenu } from "./NavMenu";
import { Nav, Wrapper, IconFlex, IconFlexItem } from "./Style";

export function Navbar() {
  return (
    <Nav>
      <Wrapper>
        {TopBarMenu.map((item, index) => (
          <NavMenu item={item} key={index} />
        ))}
      </Wrapper>

      <Wrapper>
        <div>
          <IconFlex>
            <IconFlexItem>
              <MdOutlineToggleOff />
            </IconFlexItem>{" "}
            <IconFlexItem>
              <MdToggleOn />
            </IconFlexItem>
          </IconFlex>
        </div>
        <div>{getCurrentFormattedDate()}</div>
        <div>{getCurrentFormattedTime()}</div>
      </Wrapper>
    </Nav>
  );
}
