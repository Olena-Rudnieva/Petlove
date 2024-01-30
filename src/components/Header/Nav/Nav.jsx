import { Nav, StyledLink } from './Nav.styled';

export const Navigation = () => {
  return (
    <Nav>
      {/* <StyledLink to="/home">Home</StyledLink> */}
      <StyledLink to="/news">News</StyledLink>
      <StyledLink to="/notices">Notices</StyledLink>
      <StyledLink to="/friends">Friends</StyledLink>
    </Nav>
  );
};
