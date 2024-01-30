import { Container } from 'components/Container/Container';
import { MyNotices } from 'components/MyNotices/MyNotices';
import { UserCard } from 'components/UserCard/UserCard';

const Profile = () => {
  return (
    <Container>
      <UserCard />
      <MyNotices />
    </Container>
  );
};

export default Profile;
