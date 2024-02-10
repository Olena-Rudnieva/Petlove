import {
  Accent,
  Avatar,
  Image,
  InfoText,
  InfoWrapper,
  Text,
  TextWrapper,
  Title,
} from './PetInfo.styled';
import registrationAvatar from '../../images/registrationAvatar.png';

export const PetInfo = () => {
  return (
    <InfoWrapper>
      <Avatar>
        <Image src={registrationAvatar} alt="Avatar" />
      </Avatar>
      <div>
        <TextWrapper>
          <Title>Jack</Title>
          <Text>
            Birthday: <Accent>18.10.2021</Accent>
          </Text>
        </TextWrapper>
        <InfoText>
          Jack is a gray Persian cat with green eyes. He loves to be pampered
          and groomed, and enjoys playing with toys.
        </InfoText>
      </div>
    </InfoWrapper>
  );
};
