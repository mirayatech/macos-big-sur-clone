import styled from "styled-components";

export const Nav = styled.nav`
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(20px);
  display: flex;
  justify-content: space-between;
  padding: 4px 10px;
`;

export const Wrapper = styled.div`
  align-items: center;
  color: white;
  display: flex;
  font-size: 12px;
  gap: 15px;

  &:last-child {
    gap: 8px;
  }
`;

export const IconFlex = styled.div`
  font-size: 13px;
  margin-right: 5px;
  position: relative;
`;

export const IconFlexItem = styled.div`
  position: absolute;

  &:first-child {
    top: -10px;
    right: -0px;
  }

  &:last-child {
    top: -2px;
    right: -0px;
  }
`;

export const Icon = styled.span`
  display: flex;
  font-size: 16px;
`;

export const Menu = styled.div`
  position: relative;
`;

export const Label = styled.span`
  cursor: pointer;
`;

export const Dropdown = styled.div`
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(0, 0, 0, 0.441);
  border-radius: 5px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
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
