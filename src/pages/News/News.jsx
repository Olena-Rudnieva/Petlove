import { Container } from 'components/Container/Container';
import { NewsList } from 'components/NewsList/NewsList';
import { Pagination } from 'components/Pagination/Pagination';
import { SearchField } from 'components/SearchField/SearchField';
import { Title } from 'components/Title/Title';
import { Section, Wrapper } from './News.styled';

const News = () => {
  return (
    <Section>
      <Container>
        <Wrapper>
          <Title name={'News'} />
          <SearchField />
        </Wrapper>
        <NewsList />
        <Pagination />
      </Container>
    </Section>
  );
};

export default News;
