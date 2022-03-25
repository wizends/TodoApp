import React from 'react';
import ReactPaginate from 'react-paginate';
import { getTodosAsync } from '../redux/todoSlice';
import { useDispatch } from 'react-redux';

const Pagination = () => {
    const dispatch = useDispatch();
    const handlePageclick = (data) => {
        console.log(data.selected)
        let currentPage = data.selected + 1;
        dispatch(getTodosAsync(currentPage));
      }
	return (
        <ReactPaginate 
        previousLabel={'<<'}
        nextLabel={'>>'}
        breakLabel={'...'}
        pageCount={10}
        marginPagesDisplayed={2}
        onPageChange={handlePageclick}
        containerClassName={'pagination'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        nextClassName={'page-item'}
        breakLinkClassName={'page-item'}
        activeClassName={'page-item'}
      />
	);
};

export default Pagination;
