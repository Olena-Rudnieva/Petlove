import { Container } from 'components/Container/Container';
import { MyNotices } from 'components/MyNotices/MyNotices';
import { UserCard } from 'components/UserCard/UserCard';
import { Wrapper } from './Profile.styled';

const Profile = () => {
  return (
    <Container>
      <Wrapper>
        <UserCard />
        <MyNotices />
      </Wrapper>
    </Container>
  );
};

export default Profile;
