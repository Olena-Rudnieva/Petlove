import { Container } from 'components/Container/Container';
import { PetBlock } from 'components/PetBlock/PetBlock';
import { RegistrationForm } from 'components/RegistrationForm/RegistrationForm';
import { Title } from 'components/Title/Title';

const Registration = () => {
  return (
    <Container>
      <Title />
      <RegistrationForm />
      <PetBlock />
    </Container>
  );
};

export default Registration;
