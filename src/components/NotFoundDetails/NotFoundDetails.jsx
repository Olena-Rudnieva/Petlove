import {
  Description,
  Image,
  ImageWrapper,
  Link,
  Text,
  TextWrapper,
} from './NotFoundDetails.styled';
import notFoundImg from '../../images/notFoundImg.png';

export const NotFoundDetails = () => {
  return (
    <>
      <TextWrapper>
        <Text>4</Text>
        <ImageWrapper>
          <Image src={notFoundImg} alt="The Cat" />
        </ImageWrapper>
        <Text>4</Text>
      </TextWrapper>
      <Description>Ooops! This page not found :(</Description>
      <Link to="/home">To home page</Link>
    </>
  );
};
