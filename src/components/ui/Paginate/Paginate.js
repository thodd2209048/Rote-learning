import React from "react";
import PropTypes from "prop-types";
import ReactPaginate from "react-paginate";

Paginate.propTypes = {
  handlePageClick: PropTypes.func,
  pageCount: PropTypes.number,
  currentPage: PropTypes.number,
};

function Paginate({ handlePageClick, pageCount = 1, currentPage = 0 }) {
  return (
    <div className="mt-2 d-flex justify-content-center">
      <ReactPaginate
        onPageChange={(e) => {
          handlePageClick(e);
          window.scrollTo(0, 0);
        }}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        previousLabel="<"
        nextLabel=">"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
        forcePage={currentPage}
      />
    </div>
  );
}

export default Paginate;
