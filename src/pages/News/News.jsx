import { Container } from 'components/Container/Container';
import { NewsList } from 'components/NewsList/NewsList';
import { Pagination } from 'components/Pagination/Pagination';
import { SearchField } from 'components/SearchField/SearchField';
import { Title } from 'components/Title/Title';
import { Section, Wrapper } from './News.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchNews } from '../../redux/news/newsOperations';
import { selectNews } from '../../redux/news/newsSelectors';

const News = () => {
  const dispatch = useDispatch();
  const news = useSelector(selectNews);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  return (
    <Section>
      <Container>
        <Wrapper>
          <Title name={'News'} />
          <SearchField />
        </Wrapper>
        <NewsList news={news} />
        <Pagination />
      </Container>
    </Section>
  );
};

export default News;
