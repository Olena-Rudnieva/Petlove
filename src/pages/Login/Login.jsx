import { Container } from 'components/Container/Container';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { PetBlock } from 'components/PetBlock/PetBlock';
import { Wrapper } from './Login.styled';
import loginImg from '../../images/loginImg.png';
import { loginPet } from 'constants/pets';

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <PetBlock img={loginImg} pet={loginPet} />
        <LoginForm />
      </Wrapper>
    </Container>
  );
};

export default Login;
