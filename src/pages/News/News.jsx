import { Container } from 'components/Container/Container';
import { NewsList } from 'components/NewsList/NewsList';
import { Pagination } from 'components/Pagination/Pagination';
import { SearchField } from 'components/SearchField/SearchField';
import { Title } from 'components/Title/Title';
import { Section, Wrapper } from './News.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchNews } from '../../redux/news/newsOperations';
import { selectNews, selectTotalPages } from '../../redux/news/newsSelectors';
import { topScroll } from 'utils/topScroll';

const News = () => {
  const [selectedPage, setSelectedPage] = useState(1);
  const dispatch = useDispatch();
  const news = useSelector(selectNews);
  const totalPages = useSelector(selectTotalPages);

  const handlePageChange = e => {
    // console.log(`Selected page: ${page}`);
    // setSelectedPage(page);
    setSelectedPage(e.selected + 1);
    topScroll();
  };

  console.log(selectedPage);

  useEffect(() => {
    dispatch(fetchNews(selectedPage));
  }, [dispatch, selectedPage]);

  return (
    <Section>
      <Container>
        <Wrapper>
          <Title name={'News'} />
          <SearchField />
        </Wrapper>
        <NewsList news={news} />
        <Pagination totalPages={totalPages} onPageChange={handlePageChange} />
      </Container>
    </Section>
  );
};

export default News;
