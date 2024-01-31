import { Logo } from 'components/Logo/Logo';
import { HeaderWrapper, Link, Navigation } from './Header.styled';
import { Container } from 'components/Container/Container';
import { Nav } from './Nav/Nav';
import { AuthNav } from './AuthNav/AuthNav';

export const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <Navigation>
          <Link to="/home">
            <Logo />
          </Link>
          <Nav />
          <AuthNav />
        </Navigation>
      </Container>
    </HeaderWrapper>
  );
};
