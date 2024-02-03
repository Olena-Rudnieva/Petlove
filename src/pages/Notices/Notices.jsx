import { Container } from 'components/Container/Container';
import { NoticesFilters } from 'components/NoticesFilters/NoticesFilters';
import { NoticesList } from 'components/NoticesList/NoticesList';
import { Pagination } from 'components/Pagination/Pagination';
import { Title } from 'components/Title/Title';
import { Section, TitleWrapper } from './Notices.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectNotices } from '../../redux/notices/noticesSelectors';
import { useEffect } from 'react';
import { fetchNotices } from '../../redux/notices/noticesOperations';

const Notices = () => {
  const dispatch = useDispatch();
  const notices = useSelector(selectNotices);

  useEffect(() => {
    dispatch(fetchNotices());
  }, [dispatch]);

  return (
    <Section>
      <Container>
        <TitleWrapper>
          <Title name={'Find your favorite pet'} />
        </TitleWrapper>
        <NoticesFilters />
        <NoticesList notices={notices} />
        <Pagination />
      </Container>
    </Section>
  );
};

export default Notices;
