import styled from 'styled-components';
import { theme } from 'constants/theme';

export const Wrapper = styled.div`
  background-color: ${theme.colors.white};
  border-radius: 60px;
  padding: 40px;
`;

export const UpperWrapper = styled.div`
  display: flex;
`;

export const StyledUser = styled.div`
  display: flex;
  gap: 4px;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 38px;
  border-radius: 30px;
  background-color: ${theme.colors.accent};
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.xxs};
  font-weight: ${theme.fontWeight.medium};
  line-height: 1.2857;
  letter-spacing: -0.28px;
`;

export const UserIcon = styled.svg`
  width: 18px;
  height: 18px;
  fill: ${theme.colors.white};
`;

export const AvatarBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  align-items: center;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 110px;
  height: 110px;
  background-color: ${theme.colors.beige};
  border-radius: 50%;
  margin-left: 85px;
  margin-right: 127px;
`;

export const UserIconAvatar = styled.svg`
  width: 50px;
  height: 50px;
  fill: ${theme.colors.accent};
`;

export const AvatarText = styled.p`
  color: ${theme.colors.black};
  font-size: ${theme.fontSizes.xxs};
  font-weight: ${theme.fontWeight.medium};
  line-height: 1.2857;
  letter-spacing: -0.28px;
  text-decoration: underline;
  margin-right: 40px;
`;

export const EditBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background-color: ${theme.colors.beige};
  border: none;
`;

export const EditIcon = styled.svg`
  width: 18px;
  height: 18px;
  fill: ${theme.colors.accent};
`;
