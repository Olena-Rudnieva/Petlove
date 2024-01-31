import { AuthNavWrapper, Link } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthNavWrapper>
      <Link to="/login">Log in</Link>
      <Link to="/register" specialbackground="true">
        Registration
      </Link>
    </AuthNavWrapper>
  );
};
