import {
  EditBtn,
  EditIcon,
  InputWrapper,
  StyledUser,
  Title,
  UpperWrapper,
  UserIcon,
  Wrapper,
} from './UserBlock.styled';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/authSelectors';
import { useState } from 'react';
import sprite from '../../images/sprite.svg';
import { Avatar } from 'components/Avatar/Avatar';
import { BasicModalWindow } from 'components/Modal/BasicModalWindow';
import { ModalEditUser } from 'components/Modal/ModalEditUser/ModalEditUser';

export const UserBlock = () => {
  const [modal, setModal] = useState(false);

  const user = useSelector(selectUser);
  const { name, email, phone } = user;

  const handleModal = () => {
    setModal(state => !state);
  };

  return (
    <Wrapper>
      <UpperWrapper>
        <StyledUser>
          <p>User</p>
          <UserIcon>
            <use href={sprite + '#icon-user'}></use>
          </UserIcon>
        </StyledUser>
        <Avatar />
        <EditBtn onClick={handleModal}>
          <EditIcon>
            <use href={sprite + '#icon-edit'}></use>
          </EditIcon>
        </EditBtn>
        {modal && (
          <BasicModalWindow handleModalToggle={handleModal}>
            <ModalEditUser handleModalToggle={handleModal} />
          </BasicModalWindow>
        )}
      </UpperWrapper>
      <Title>My information</Title>

      <form>
        <InputWrapper>
          <label>
            <input type="text" name="name" value={name} readOnly />
          </label>
        </InputWrapper>
        <InputWrapper>
          <label>
            <input type="text" name="email" value={email} readOnly />
          </label>
        </InputWrapper>
        <InputWrapper>
          <label>
            <input
              type="text"
              name="phone"
              value={phone || '+380'}
              readOnly
              className={phone ? 'filled' : 'unfilled'}
            />
          </label>
        </InputWrapper>
      </form>
    </Wrapper>
  );
};
