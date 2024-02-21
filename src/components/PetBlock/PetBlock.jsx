import { PetInfo } from 'components/PetInfo/PetInfo';
import { Image, Wrapper } from './PetBlock.styled';

export const PetBlock = ({ img, pet = null }) => {
  return (
    <Wrapper>
      <Image src={img} alt="Pet" />
      {pet && <PetInfo pet={pet} />}
    </Wrapper>
  );
};
