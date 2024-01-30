import { Container } from 'components/Container/Container';
import { NoticesFilters } from 'components/NoticesFilters/NoticesFilters';
import { NoticesList } from 'components/NoticesList/NoticesList';
import { Pagination } from 'components/Pagination/Pagination';
import { Title } from 'components/Title/Title';

const Notices = () => {
  return (
    <Container>
      <Title />
      <NoticesFilters />
      <NoticesList />
      <Pagination />
    </Container>
  );
};

export default Notices;
