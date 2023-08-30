import { motion } from "framer-motion";
import styled from "styled-components";

export const DockContainer = styled(motion.div)<{ $themeColor: string }>`
  margin: 0 auto;
  display: flex;
  height: 4rem;
  align-items: end;
  gap: 6px;
  padding: 0 10px;
  backdrop-filter: blur(20px);
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

  background-color: ${(props) =>
    props.$themeColor === "Dark"
      ? " rgba(0, 0, 0, 0.25)"
      : "rgba(255, 255, 255, 0.2)"};
  border: ${(props) =>
    props.$themeColor === "Dark"
      ? "1px solid  rgba(255, 255, 255, 0.1)"
      : "1px solid rgba(227, 227, 227, 0.3)"};
  transition: all 0.2s ease;
`;

export const DockIcon = styled(motion.img)`
  cursor: pointer;
`;

export const DockLink = styled.a`
  margin-bottom: -5px;
`;
