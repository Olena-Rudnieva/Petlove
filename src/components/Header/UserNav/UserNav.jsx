import { UserBar } from '../UserBar/UserBar';
import { Link, UserNavWrapper } from './UserNav.styled';

export const UserNav = () => {
  return (
    <UserNavWrapper>
      {/* <Link to="/register" specialbackground="true">
        Registration
      </Link> */}
      <Link to="/login">Log out</Link>
      <UserBar />
    </UserNavWrapper>
  );
};
