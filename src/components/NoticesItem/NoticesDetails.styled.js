import { theme } from 'constants/theme';
import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 20px;
  margin-bottom: 16px;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const Label = styled.p`
  font-size: ${theme.fontSizes.xxxxs};
  font-weight: ${theme.fontWeight.medium};
  line-height: 1.4;
  letter-spacing: -0.2px;
  color: ${theme.colors.mediumGrey};
`;

export const Value = styled.p`
  font-size: ${theme.fontSizes.xxxs};
  font-weight: ${theme.fontWeight.medium};
  line-height: 1.16667;
  letter-spacing: -0.24px;
  color: ${theme.colors.black};
`;
