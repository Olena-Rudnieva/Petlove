import { Container } from 'components/Container/Container';
import { PetBlock } from 'components/PetBlock/PetBlock';
import { RegistrationForm } from 'components/RegistrationForm/RegistrationForm';
import { Wrapper } from './Registration.styled';

const Registration = () => {
  return (
    <Container>
      <Wrapper>
        <PetBlock />
        <RegistrationForm />
      </Wrapper>
    </Container>
  );
};

export default Registration;
