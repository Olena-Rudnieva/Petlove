import { Container } from 'components/Container/Container';
import { FriendsList } from 'components/FriendsList/FriendsList';
import { Title } from 'components/Title/Title';

const Friends = () => {
  return (
    <Container>
      <Title />
      <FriendsList />
    </Container>
  );
};

export default Friends;
