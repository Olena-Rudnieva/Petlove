import { Button } from 'components/Button/Button';
import {
  AvatarBlock,
  AvatarText,
  AvatarWrapper,
  EditBtn,
  EditIcon,
  StyledUser,
  UpperWrapper,
  UserIcon,
  UserIconAvatar,
  Wrapper,
} from './UserCard.styled';
import { UserBlock } from 'components/UserBlock/UserBlock';
import { PetsBlock } from 'components/PetsBlock/PetsBlock';
import sprite from '../../images/sprite.svg';

export const UserCard = () => {
  return (
    <Wrapper>
      <UpperWrapper>
        <StyledUser>
          <p>User</p>
          <UserIcon>
            <use href={sprite + '#icon-user'}></use>
          </UserIcon>
        </StyledUser>
        <AvatarBlock>
          <AvatarWrapper>
            <UserIconAvatar>
              <use href={sprite + '#icon-user'}></use>
            </UserIconAvatar>
          </AvatarWrapper>
          <AvatarText>Upload photo</AvatarText>
        </AvatarBlock>
        <EditBtn>
          <EditIcon>
            <use href={sprite + '#icon-edit'}></use>
          </EditIcon>
        </EditBtn>
      </UpperWrapper>
      <UserBlock />
      <PetsBlock />
      <Button text={'LOG OUT'} />
    </Wrapper>
  );
};
