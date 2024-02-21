import { Container } from 'components/Container/Container';
import { Section, Wrapper } from './AddPet.styled';
import { PetBlock } from 'components/PetBlock/PetBlock';
import addPetImg from '../../images/addPetImg.png';
import { AddPetForm } from 'components/AddPetForm/AddPetForm';

const AddPet = () => {
  return (
    <Section>
      <Container>
        <Wrapper>
          <PetBlock img={addPetImg} />
          <AddPetForm />
        </Wrapper>
      </Container>
    </Section>
  );
};

export default AddPet;
