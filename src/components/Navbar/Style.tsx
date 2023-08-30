import styled from "styled-components";

export const NavContainer = styled.nav`
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  padding: 4px 10px;
`;

export const Wrapper = styled.div`
  position: relative;
  align-items: center;
  color: white;
  display: flex;
  font-size: 15px;
  gap: 15px;

  &:last-child {
    gap: 8px;
  }
`;

export const ToggleIconsContainer = styled.div`
  font-size: 16px;
  position: relative;
  cursor: pointer;
`;

export const ToggleFlex = styled.div`
  position: relative;
  cursor: pointer;

  svg:first-child {
    top: -12px;
    right: 5px;
    position: absolute;
  }

  svg:last-child {
    top: -4px;
    right: 5px;
    position: absolute;
  }
`;

export const DateContainer = styled.div`
  position: relative;
`;

export const SelectionContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 6px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  font-size: 12px;
  min-width: 220px;
  padding: 5px;
  position: absolute;
  top: 20px;

  span {
    white-space: nowrap;
    cursor: pointer;
    padding: 5px;
    border-radius: 3px;
  }

  span:hover {
    background-color: #147ce5;
  }
`;

export const DropdownContainer = styled.div`
  position: relative;
`;

export const MenuItem = styled.div`
  cursor: pointer;

  svg {
    font-size: 18px;
  }
`;

export const Dropdown = styled.div`
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 6px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  font-size: 12px;
  min-width: 220px;
  padding: 5px;
  position: absolute;
  top: 20px;

  span {
    white-space: nowrap;
    cursor: pointer;
    padding: 5px;
    border-radius: 3px;
  }

  span:hover {
    background-color: #147ce5;
  }
`;

export const Divider = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  height: 1px;
  width: 100%;
`;

export const Grid = styled.div`
  position: absolute;
  top: 22px;
  right: -5px;
  width: 250px;
  padding: 10px;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  display: grid;
  gap: 10px;
`;

export const Column = styled.div<{
  $systemColorPreference?: string;
  $isAirdropOpen?: boolean;
  $isAnimationOpen?: boolean;
}>`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  padding: 15px 10px;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.204);
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.05);

  span {
    display: flex;
    font-size: 18px;
    padding: 2px;
    border-radius: 50%;
    background-color: ${(props) =>
      props.$isAirdropOpen || props.$isAnimationOpen
        ? props.$systemColorPreference
        : "transparent"};
    transition: all 0.2s ease-in-out;
  }

  &:first-child,
  &:nth-child(2) {
    cursor: pointer;
  }

  &:first-child svg,
  &:nth-child(2) svg {
    color: rgba(0, 0, 0, 0.738);
  }

  &:nth-child(3) {
    gap: 15px;
    align-items: start;
    flex-direction: column;
    padding: 10px 10px 5px 10px;
  }

  &:nth-child(3),
  &:last-child {
    grid-column: span 2;
  }
`;

export const ColorCircle = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    cursor: pointer;
    font-size: 25px;
    background-color: transparent;
  }

  span:first-child {
    color: #ff9d0a;
  }
  span:nth-child(2) {
    color: #2dcb55;
  }
  span:nth-child(3) {
    color: #66d4ff;
  }
  span:nth-child(4) {
    color: #0a85ff;
  }
  span:nth-child(5) {
    color: #5e5ce6;
  }
  span:nth-child(6) {
    color: #bf5af2;
  }
  span:last-child {
    color: #ff3860;
  }
`;

export const SystemColorPreferenceLink = styled.a`
  color: white;
  &:hover {
    opacity: 0.8;
  }
`;
