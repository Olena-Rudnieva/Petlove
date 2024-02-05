import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

export const StyledReactPaginate = styled(ReactPaginate)`
  display: flex;
  list-style: none;
  padding: 0;
  justify-content: center;
  margin-top: 20px;

  .page {
    margin: 0 5px;
    border: 1px solid #ccc;
    border-radius: 50%;
    padding: 10px;
    cursor: pointer;
  }

  .active {
    background-color: orange;
    color: white;
  }
`;
