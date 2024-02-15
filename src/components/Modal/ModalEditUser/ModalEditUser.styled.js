import styled from 'styled-components';
import { theme } from 'constants/theme';

export const Wrapper = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px;
  width: 100%; */
`;

export const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px;
  background-color: ${theme.colors.beige};
  border-radius: 50%;
  margin-bottom: 20px;
`;

export const Image = styled.img`
  width: 44px;
  height: 44px;
`;

export const Title = styled.h2`
  color: ${theme.colors.black};
  font-size: ${theme.fontSizes.l};
  font-weight: ${theme.fontWeight.bold};
  line-height: 1.1667;
  letter-spacing: -0.72px;
  margin-bottom: 28px;
`;

export const TitleWrapper = styled.div`
  margin-bottom: 16px;
`;

export const Text = styled.p`
  font-size: ${theme.fontSizes.s};
  font-weight: ${theme.fontWeight.medium};
  line-height: 1.222;
  letter-spacing: -0.16px;
  color: ${theme.colors.black};
  margin-bottom: 32px;
`;

export const FormWrapper = styled.div`
  margin-bottom: 40px;
`;

export const InputWrapper = styled.div`
  margin-bottom: 16px;
  max-width: 424px;
  position: relative;
  width: 100%;

  input {
    width: 100%;
    padding: 16px;
    font-size: ${theme.fontSizes.xs};
    color: ${theme.colors.black};
    font-weight: ${theme.fontWeight.medium};
    line-height: 1.25;
    border: 1px solid
      ${props =>
        props.haserror
          ? theme.colors.red
          : props.hassuccess
          ? theme.colors.green
          : theme.colors.lightGrey};
    border-radius: 30px;
    box-sizing: border-box;
    outline: none;
    transition: border-color 0.3s;

    &:focus {
      border-color: ${theme.colors.accent};
    }

    .error {
      border: 1px solid ${theme.colors.red};
    }
  }
`;

export const ErrorText = styled.div`
  color: ${theme.colors.red};
  font-size: ${theme.fontSizes.xxxs};
  font-weight: ${theme.fontWeight.medium};
  line-height: 1.1667;
  letter-spacing: -0.36px;
  margin-top: 4px;
  margin-bottom: 12px;
`;

export const SuccessMessage = styled.div`
  color: ${theme.colors.green};
  font-size: ${theme.fontSizes.xxxs};
  font-weight: ${theme.fontWeight.medium};
  line-height: 1.1667;
  letter-spacing: -0.36px;
  margin-top: 4px;
  margin-bottom: 12px;
`;

export const ErrorIcon = styled.span`
  position: absolute;
  top: 15px;
  right: ${props => (props.erroriconright ? '50px' : '16px')};
  font-size: 22px;
  font-size: ${theme.fontWeight.bold};
  color: ${theme.colors.red};
  display: ${props => (props.haserror ? 'block' : 'none')};
`;

// export const Link = styled(NavLink)`
//   color: ${theme.colors.accent};
//   transition: color ${theme.transition};

//   &:hover,
//   :focus {
//     color: ${theme.colors.beige};
//   }
// `;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  font-size: ${theme.fontSizes.xxs};
  font-weight: ${theme.fontWeight.medium};
  line-height: 1.428;
  letter-spacing: -0.42px;
  color: ${theme.colors.mediumGrey};
`;
