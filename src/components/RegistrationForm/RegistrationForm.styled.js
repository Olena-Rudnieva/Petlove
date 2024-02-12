import { theme } from 'constants/theme';
import styled from 'styled-components';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';

export const Wrapper = styled.div`
  padding: 77px 84px;
  border-radius: 60px;
  background-color: ${theme.colors.white};
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
  margin-bottom: 16px;
`;

export const InputWrapper = styled.div`
  margin-bottom: 16px;
  max-width: 424px;
  position: relative;
  width: 100%;

  /* label {
    font-size: 16px;
    color: var(--black);
    font-weight: 400;
    line-height: 1.375;
  } */

  input {
    width: 100%;
    padding: 16px;
    font-size: ${theme.fontSizes.xs};
    color: ${theme.colors.black};
    font-weight: ${theme.fontWeight.medium};
    line-height: 1.25;
    border: 1px solid ${theme.colors.lightGrey};
    border-radius: 30px;
    box-sizing: border-box;
    outline: none;
    transition: border-color 0.3s;

    &:focus {
      border-color: ${theme.colors.accent};
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
`;

export const EyeIconInvisible = styled(AiOutlineEyeInvisible)`
  position: absolute;
  top: 26px;
  right: 16px;
  width: 22px;
  height: 22px;
  fill: ${theme.colors.accent};
  transform: translateY(-50%);
`;

export const EyeIconVisible = styled(AiOutlineEye)`
  position: absolute;
  top: 26px;
  right: 16px;
  width: 22px;
  height: 22px;
  fill: ${theme.colors.accent};
  transform: translateY(-50%);
`;

export const ButtonWrapper = styled.div`
  display: inline-block;
  margin-top: 16px;
`;
