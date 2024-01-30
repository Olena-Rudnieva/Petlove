import { Container } from 'components/Container/Container';
import { NewsList } from 'components/NewsList/NewsList';
import { Pagination } from 'components/Pagination/Pagination';
import { SearchField } from 'components/SearchField/SearchField';
import { Title } from 'components/Title/Title';

const News = () => {
  return (
    <Container>
      <Title />
      <SearchField />
      <NewsList />
      <Pagination />
    </Container>
  );
};

export default News;
