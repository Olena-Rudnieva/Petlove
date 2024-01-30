import { NewsItem } from 'components/NewsItem/NewsItem';
import { List } from './NewsList.styled';

export const NewsList = ({ news }) => {
  return (
    <List>
      {news?.map((item, index) => (
        <li key={index}>
          <NewsItem item={item} />
        </li>
      ))}
    </List>
  );
};
