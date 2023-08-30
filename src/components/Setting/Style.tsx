import { styled } from "styled-components";
import { lightTextColor } from "../../library/constant";

export const Modal = styled.div<{ $themeColor: string }>`
  padding-top: 50px;
  max-width: 500px;
  position: absolute;
  top: 300px;
  left: 35%;
  border-radius: 10px;
  overflow-y: auto;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  background-color: ${(props) =>
    props.$themeColor === "Dark" ? lightTextColor : "white"};

  border: ${(props) =>
    props.$themeColor === "Dark" ? "1px solid #525257" : "1px solid #a0a0a0"};
  transition: all 0.2s ease;
`;

export const Title = styled.span<{ $themeColor: string }>`
  position: absolute;
  left: 38%;
  top: 10px;
  font-size: 12px;
  color: ${(props) =>
    props.$themeColor === "Dark" ? "white" : lightTextColor};
`;

export const Themes = styled.div<{ $themeColor: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;

  h2 {
    font-size: 18px;
    text-indent: 20px;
    margin-bottom: 10px;
    color: ${(props) =>
      props.$themeColor === "Dark" ? "white" : lightTextColor};
  }
`;

export const Wallpapers = styled.div<{ $themeColor: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;

  h2 {
    font-size: 18px;
    text-indent: 20px;
    margin-bottom: 10px;
    color: ${(props) =>
      props.$themeColor === "Dark" ? "white" : lightTextColor};
  }
`;

export const Images = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const Image = styled.div<{ $themeColor: string }>`
  display: flex;
  gap: 10px;
  flex-direction: column;
  flex-wrap: wrap;

  img {
    width: 130px;
    height: 80px;
    border-radius: 5px;
    cursor: pointer;
  }

  span {
    font-size: 13px;
    text-align: center;
    padding-bottom: 20px;
    color: ${(props) =>
      props.$themeColor === "Dark" ? "white" : lightTextColor};
  }
`;

export const Buttons = styled.div`
  gap: 3px;
  display: flex;
  position: absolute;

  top: 10px;
  left: 10px;
  font-size: 14px;

  span:first-child svg {
    cursor: pointer;
    color: #ff5f56;
  }

  span:nth-child(2) svg {
    color: #ffbd2e;
  }

  span:last-child svg {
    color: #27c93f;
  }

  span svg:first-child {
    display: none;
  }

  &:hover {
    span:first-child svg:first-child {
      top: 2px;
      left: 2px;
      color: #731f1a;
      position: absolute;
      font-size: 10px;
      display: flex;
    }

    span:nth-child(2) svg:first-child {
      top: -2px;
      left: 18.5px;
      color: #6b4f10;
      position: absolute;
      font-size: 11px;
      display: flex;
    }
    span:last-child svg:first-child {
      top: 2px;
      left: 36px;
      color: #113a16;
      position: absolute;
      font-size: 10px;
      rotate: 40deg;
      display: flex;
    }
  }
`;
