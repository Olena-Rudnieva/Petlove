import { AvatarLink, Text, UserBarWrapper, UserIcon } from './UserBar.styled';

import sprite from '../../../images/sprite.svg';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../redux/auth/authSelectors';

export const UserBar = () => {
  const user = useSelector(selectUser);

  return (
    <UserBarWrapper>
      <AvatarLink to="/profile">
        <UserIcon>
          <use href={sprite + '#icon-user'}></use>
        </UserIcon>
      </AvatarLink>
      <Text>{user?.name}</Text>
    </UserBarWrapper>
  );
};
