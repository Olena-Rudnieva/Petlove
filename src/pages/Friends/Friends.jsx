import { Container } from 'components/Container/Container';
import { FriendsList } from 'components/FriendsList/FriendsList';
import { Title } from 'components/Title/Title';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFriends } from '../../redux/friends/friendsOperations';
import { selectFriends } from '../../redux/friends/friendsSelector';
import { TitleWrapper } from 'pages/Notices/Notices.styled';
import { Section } from './Friends.styled';

const Friends = () => {
  const dispatch = useDispatch();
  const friends = useSelector(selectFriends);

  useEffect(() => {
    dispatch(fetchFriends());
  }, [dispatch]);

  return (
    <Section>
      <Container>
        <TitleWrapper>
          <Title name={'Our friends'} />
        </TitleWrapper>
        <FriendsList friends={friends} />
      </Container>
    </Section>
  );
};

export default Friends;
