import { Container } from 'components/Container/Container';
import { PetBlock } from 'components/PetBlock/PetBlock';
import { RegistrationForm } from 'components/RegistrationForm/RegistrationForm';
import { Wrapper } from './Registration.styled';
import registrationImg from '../../images/registrationImg.png';
import { registrationPet } from 'constants/pets';

const Registration = () => {
  return (
    <Container>
      <Wrapper>
        <PetBlock img={registrationImg} pet={registrationPet} />
        <RegistrationForm />
      </Wrapper>
    </Container>
  );
};

export default Registration;
