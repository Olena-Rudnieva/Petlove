import { PetInfo } from 'components/PetInfo/PetInfo';
import { Image, Wrapper } from './PetBlock.styled';

export const PetBlock = ({ img, pet }) => {
  return (
    <Wrapper>
      <Image src={img} alt="Pet" />
      <PetInfo pet={pet} />
    </Wrapper>
  );
};
