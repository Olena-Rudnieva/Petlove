import { FriendsItem } from 'components/FriendsItem/FriendsItem';
import { List } from './FriendsList.styled';

export const FriendsList = ({ friends }) => {
  return (
    <List>
      {friends?.map((item, index) => (
        <li key={index}>
          <FriendsItem item={item} />
        </li>
      ))}
    </List>
  );
};
