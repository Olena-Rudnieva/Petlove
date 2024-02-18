import { Container } from 'components/Container/Container';
import { MyNotices } from 'components/MyNotices/MyNotices';
import { UserCard } from 'components/UserCard/UserCard';
import { Section, Wrapper } from './Profile.styled';

const Profile = () => {
  return (
    <Section>
      <Container>
        <Wrapper>
          <UserCard />
          <MyNotices />
        </Wrapper>
      </Container>
    </Section>
  );
};

export default Profile;
