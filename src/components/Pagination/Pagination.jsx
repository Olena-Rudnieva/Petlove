import { useState } from 'react';
import { StyledReactPaginate } from './Pagination.styled';

export const Pagination = ({ totalPages, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(0);

  console.log(currentPage);

  const handlePageClick = data => {
    const selectedPage = data.selected + 1;
    setCurrentPage(selectedPage);
    onPageChange(selectedPage);
  };

  return (
    <StyledReactPaginate
      previousLabel={'<'}
      nextLabel={'>'}
      breakLabel={'...'}
      pageCount={totalPages}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={handlePageClick}
      containerClassName={'pagination'}
      activeClassName={'active'}
      pageClassName={'page'}
    />
  );
};
