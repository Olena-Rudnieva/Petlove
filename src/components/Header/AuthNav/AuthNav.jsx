import { AuthNavWrapper, LogInBtn, RegistrationBtn } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthNavWrapper>
      <LogInBtn>Log in</LogInBtn>
      <RegistrationBtn>Registration</RegistrationBtn>
    </AuthNavWrapper>
  );
};
