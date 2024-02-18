import { Button } from 'components/Button/Button';
import { Wrapper } from './UserCard.styled';
import { UserBlock } from 'components/UserBlock/UserBlock';
import { PetsBlock } from 'components/PetsBlock/PetsBlock';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/authOperation';

export const UserCard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(logOut());
    navigate('/home');
  };

  return (
    <Wrapper>
      <UserBlock />
      <PetsBlock />

      <Button
        text={'LOG OUT'}
        type={'button'}
        width={'136px'}
        height={'50px'}
        handleClick={handleClick}
        beigebackground="true"
      />
    </Wrapper>
  );
};
