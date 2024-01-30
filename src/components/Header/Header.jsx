import { Logo } from 'components/Logo/Logo';
import { HeaderWrapper } from './Header.styled';
import { Container } from 'components/Container/Container';
import { Link } from 'react-router-dom';
import { Navigation } from './Nav/Nav';
import { AuthNav } from './AuthNav/AuthNav';

export const Header = () => {
  return (
    <Container>
      <HeaderWrapper>
        <Link to="/home">
          <Logo />
        </Link>
        <Navigation />
        <AuthNav />
      </HeaderWrapper>
    </Container>
  );
};
