import { motion } from "framer-motion";
import styled from "styled-components";

export const DockContainer = styled(motion.div)`
  margin: 0 auto;
  display: flex;
  height: 4rem;
  align-items: end;
  gap: 6px;
  padding: 0 10px;
  background: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

export const DockIcon = styled(motion.img)`
  cursor: pointer;
`;

export const DockLink = styled.a`
  margin-bottom: -5px;
`;
