import heroImg from '../../images/heroImg.jpg';
import { HeroWrapper, Image, Text, Title } from './Hero.styled';

export const Hero = () => {
  return (
    <HeroWrapper>
      <Title>Take good care of your small pets</Title>
      <Text>
        Choosing a pet for your home is a choice that is meant to enrich your
        life with immeasurable joy and tenderness.
      </Text>

      <Image src={heroImg} alt="Girl with a dog" />
    </HeroWrapper>
  );
};
