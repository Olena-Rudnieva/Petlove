import { formattedDate } from 'utils/formattedDate';
import {
  BottomList,
  Date,
  Image,
  ImageWrapper,
  Link,
  NewsItemWrapper,
  Text,
  Title,
} from './NewsItem.styled';

export const NewsItem = ({ item }) => {
  const { title, text, imgUrl, url, date } = item;

  return (
    <NewsItemWrapper>
      <ImageWrapper>
        <Image src={imgUrl} alt={title} />
      </ImageWrapper>
      <Title>{title}</Title>
      <Text>{text}</Text>
      <BottomList>
        <Date>{formattedDate(date)}</Date>
        <Link to={url} target="_blank" rel="noopener noreferrer">
          Read more
        </Link>
      </BottomList>
    </NewsItemWrapper>
  );
};
