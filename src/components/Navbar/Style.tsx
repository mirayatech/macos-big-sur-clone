import styled from "styled-components";
import {
  darkBackgroundColor,
  darkBorderColor,
  lightBackgroundColor,
  lightBorderColor,
  lightTextColor,
} from "../../library/constant";

export const NavContainer = styled.nav<{ $themeColor: string }>`
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  padding: 4px 10px;

  background-color: ${(props) =>
    props.$themeColor === "Dark" ? darkBackgroundColor : "rgba(0, 0, 0, 0.3)"};
  transition: all 0.2s ease;
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

export const DropdownContainer = styled.div`
  position: relative;
`;

export const MenuItem = styled.div`
  cursor: pointer;

  svg {
    font-size: 18px;
  }
`;

export const Dropdown = styled.div<{ $themeColor: string }>`
  border-radius: 6px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  font-size: 14px;
  min-width: 220px;
  padding: 5px;
  position: absolute;
  top: 25px;

  span {
    white-space: nowrap;
    cursor: pointer;
    padding: 5px;
    border-radius: 3px;
  }

  span:hover {
    background-color: #147ce5;
  }
  color: ${(props) =>
    props.$themeColor === "Dark" ? "white" : lightTextColor};
  background-color: ${(props) =>
    props.$themeColor === "Dark" ? darkBackgroundColor : lightBackgroundColor};

  border: ${(props) =>
    props.$themeColor === "Dark"
      ? `1px solid ${darkBorderColor}`
      : `1px solid ${lightBorderColor}`};
`;

export const Divider = styled.div<{ $themeColor: string }>`
  background-color: ${(props) =>
    props.$themeColor === "Dark"
      ? "rgba(255, 255, 255, 0.3)"
      : "rgba(0, 0, 0, 0.233)"};
  height: 1px;
  width: 100%;

  color: ${(props) =>
    props.$themeColor === "Dark" ? "white" : lightTextColor};
`;

export const Grid = styled.div<{ $themeColor: string }>`
  position: absolute;
  top: 28px;
  right: -5px;
  padding: 10px;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  display: grid;
  gap: 10px;

  background-color: ${(props) =>
    props.$themeColor === "Dark" ? darkBackgroundColor : lightBackgroundColor};

  border: ${(props) =>
    props.$themeColor === "Dark"
      ? `1px solid ${darkBorderColor}`
      : `1px solid ${lightBorderColor}`};
`;

export const Column = styled.div<{
  $systemColorPreference?: string;
  $isAirdropOpen?: boolean;
  $isAnimationOpen?: boolean;
  $themeColor: string;
}>`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  padding: 15px 10px;
  border-radius: 8px;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.05);
  background-color: ${(props) =>
    props.$themeColor === "Dark" ? "rgba(0, 0, 0, 0.3)" : lightBackgroundColor};

  border: ${(props) =>
    props.$themeColor === "Dark"
      ? `1px solid ${darkBorderColor}`
      : `1px solid ${lightBorderColor}`};
  color: ${(props) =>
    props.$themeColor === "Dark" ? "white" : lightTextColor};

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
    color: ${(props) =>
      props.$themeColor === "Dark" ? "rgba(0, 0, 0, 0.738);" : "white"};
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
  width: 100%;
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

export const SystemColorPreferenceLink = styled.a<{
  $themeColor: string;
}>`
  color: ${(props) =>
    props.$themeColor === "Dark" ? "white" : lightTextColor};
  &:hover {
    opacity: 0.8;
  }
`;
