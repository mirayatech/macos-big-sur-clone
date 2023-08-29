import styled from "styled-components";

export const Nav = styled.nav`
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(20px);
  display: flex;
  justify-content: space-between;
  padding: 4px 10px;
`;

export const Wrapper = styled.div`
  position: relative;
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
  cursor: pointer;
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
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  display: grid;
  gap: 10px;
`;

export const Column = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  padding: 15px 10px;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.204);
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.05);

  span {
    display: flex;
    font-size: 18px;
    padding: 2px;
    border-radius: 50%;
  }

  &:first-child span,
  &:nth-child(2) span {
    background-color: #0a85ff;
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
export const ColumnLink = styled.a`
  color: white;
  &:hover {
    opacity: 0.8;
  }
`;

export const Colors = styled.div`
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
