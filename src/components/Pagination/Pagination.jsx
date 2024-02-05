import { useState } from 'react';
import { Icon, IconWrapper, StyledReactPaginate } from './Pagination.styled';
import sprite from '../../images/sprite.svg';

export const Pagination = ({ totalPages, onPageChange, selectedPage }) => {
  // const [currentPage, setCurrentPage] = useState(0);

  // console.log(currentPage);

  // const handlePageClick = data => {
  //   const selectedPage = data.selected + 1;
  //   setCurrentPage(selectedPage);
  //   onPageChange(selectedPage);
  // };

  // const handleFirstPageClick = () => {
  //   setCurrentPage(0);
  //   onPageChange(1, true);
  // };

  // const handleLastPageClick = () => {
  //   setCurrentPage(totalPages - 1);
  //   onPageChange(totalPages, true);
  // };

  return (
    <>
      {/* <button onClick={handleFirstPageClick}>{'<<'}</button> */}
      <StyledReactPaginate
        previousLabel={
          <svg>
            <use href={sprite + '#icon-angle-left'}></use>
          </svg>
        }
        nextLabel={
          <svg>
            <use href={sprite + '#icon-angle-right'}></use>
          </svg>
        }
        breakLabel={'...'}
        pageCount={Math.ceil(totalPages)}
        marginPagesDisplayed={0}
        pageRangeDisplayed={3}
        onPageChange={onPageChange}
        containerClassName={'pagination'}
        activeClassName={'active'}
        pageClassName={'page'}
        breakClassName={'pagination-break'}
        // onPageActive={({ selected }) => setCurrentPage(selected)}
        previousClassName={'pagination-previous'}
        nextClassName={'pagination-next'}
        previousLinkClassName={'pagination-previous-link'}
        nextLinkClassName={'pagination-next-link'}
        disabledClassName={'pagination-disabled'}
      />
      {/* <button onClick={handleLastPageClick}>{'>>'}</button> */}
    </>
  );
};
