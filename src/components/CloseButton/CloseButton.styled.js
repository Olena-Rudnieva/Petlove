import styled from 'styled-components';
import { theme } from 'constants/theme';

export const Btn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: transparent;
  border: none;
  z-index: 200;
  width: 24px;
  height: 24px;
  padding: 0;
`;

export const Icon = styled.svg`
  width: 100%;
  height: 100%;
  scale: 1;
  stroke: ${theme.colors.black};

  transition: scale ${theme.transition}, stroke ${theme.transition};

  &:hover,
  &:focus {
    stroke: ${theme.colors.accent};
    scale: 1.2;
  }
`;
