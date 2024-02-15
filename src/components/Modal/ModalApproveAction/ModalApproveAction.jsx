import { Button } from 'components/Button/Button';
import {
  Avatar,
  ButtonWrapper,
  Image,
  Title,
  Wrapper,
} from './ModalApproveAction.styled';
import { useDispatch } from 'react-redux';
import { logOut } from '../../../redux/auth/authOperation';
import { useNavigate } from 'react-router-dom';
import registrationAvatar from '../../../images/registrationAvatar.png';

export const ModalApproveAction = ({ handleModalToggle }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(logOut());
    navigate('/home');
  };

  const handleClick = () => {
    handleLogOut();
    handleModalToggle();
  };

  const handleCancel = () => {
    handleModalToggle();
  };

  return (
    <Wrapper>
      <Avatar>
        <Image src={registrationAvatar} alt="Avatar" />
      </Avatar>
      <Title>Already leaving?</Title>
      <ButtonWrapper>
        <Button
          text={'Yes'}
          type={'button'}
          width={'140px'}
          height={'48px'}
          handleClick={handleClick}
        />
        <Button
          text={'Cancel'}
          type={'button'}
          width={'140px'}
          height={'48px'}
          handleClick={handleCancel}
          specialbackground="true"
        />
      </ButtonWrapper>
    </Wrapper>
  );
};
