import { NoticesItem } from 'components/NoticesItem/NoticesItem';
import { List } from './NoticesList.styled';

export const NoticesList = ({ notices }) => {
  return (
    <List>
      {notices?.map((item, index) => (
        <li key={index}>
          <NoticesItem item={item} />
        </li>
      ))}
    </List>
  );
};
