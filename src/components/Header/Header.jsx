import { Logo } from 'components/Logo/Logo';
import { HeaderWrapper, Link, Navigation } from './Header.styled';
import { Container } from 'components/Container/Container';
import { Nav } from './Nav/Nav';
import { AuthNav } from './AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';
import { UserNav } from './UserNav/UserNav';

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <HeaderWrapper>
      <Container>
        <Navigation>
          <Link to="/home">
            <Logo />
          </Link>
          <Nav />
          {isLoggedIn ? <UserNav /> : <AuthNav />}
        </Navigation>
      </Container>
    </HeaderWrapper>
  );
};
