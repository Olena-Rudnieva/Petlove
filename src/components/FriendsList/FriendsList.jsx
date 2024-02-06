import { FriendsItem } from 'components/FriendsItem/FriendsItem';
import { List } from './FriendsList.styled';

export const FriendsList = ({ friends }) => {
  return (
    <List>
      {friends?.map(item => (
        <FriendsItem key={item._id} item={item} />
      ))}
    </List>
  );
};
