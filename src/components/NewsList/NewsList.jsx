import { NewsItem } from 'components/NewsItem/NewsItem';
import { List } from './NewsList.styled';

export const NewsList = ({ news }) => {
  return (
    <List>
      {news?.map(item => (
        <NewsItem key={item._id} item={item} />
      ))}
    </List>
  );
};
