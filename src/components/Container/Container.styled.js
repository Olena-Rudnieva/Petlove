import styled from 'styled-components';
import { theme } from 'constants/theme';

export const Wrapper = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;
  width: 100%;
  max-width: 480px;

  ${theme.mq.tablet} {
    padding-right: ${theme.space[6]};
    padding-left: ${theme.space[6]};
    width: ${theme.breakpoints[1]};
    max-width: 100%;
  }

  ${theme.mq.desktop} {
    width: ${theme.breakpoints[2]};
    max-width: 100%;
  }
`;
