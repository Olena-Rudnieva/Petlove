import styled from 'styled-components';
import { theme } from 'constants/theme';

export const ButtonStyle = styled.button`
  font-weight: ${theme.fontWeight.medium};
  font-size: ${theme.fontSizes.xs};
  line-height: 1.25;
  letter-spacing: -0.48px;
  background-color: ${theme.colors.accent};
  /* padding: ${({ padding }) => padding}; */
  padding: 14px 89px;
  width: ${({ width }) => width};
  color: ${theme.colors.white};
  border-radius: 30px;
  border: none;
  transition: color ${theme.transition}, background-color ${theme.transition};

  &:hover,
  :focus {
    color: ${theme.colors.accent};
    background-color: ${theme.colors.beige};
  }
`;
