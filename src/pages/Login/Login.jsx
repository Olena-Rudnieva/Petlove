import { Container } from 'components/Container/Container';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { PetBlock } from 'components/PetBlock/PetBlock';
import { Title } from 'components/Title/Title';

const Login = () => {
  return (
    <Container>
      <Title />
      <LoginForm />
      <PetBlock />
    </Container>
  );
};

export default Login;
