import { Container } from 'components/Container/Container';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { PetBlock } from 'components/PetBlock/PetBlock';
import { Wrapper } from './Login.styled';

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <PetBlock />
        <LoginForm />
      </Wrapper>
    </Container>
  );
};

export default Login;
