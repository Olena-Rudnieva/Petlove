import { PetInfo } from 'components/PetInfo/PetInfo';
import { Image, Wrapper } from './PetBlock.styled';
import registrationImg from '../../images/registrationImg.png';

export const PetBlock = () => {
  return (
    <Wrapper>
      <Image src={registrationImg} alt="Pet" />
      <PetInfo />
    </Wrapper>
  );
};
