import React, { useState, useEffect } from "react";

const Pagination = ({ products, onPageChange, totalCount, currentPage, pageSize}) => {

//   const pageNumber = [];

//   for (let i = 1; i <= Math.ceil(products.length / pageSize); i++) {
//     pageNumber.push(i);
//   }

  const goToNextPage = () => {
    onPageChange(currentPage + 1);
  };

  const goToPreviousPage = () => {
    onPageChange(currentPage - 1);
  };

//   const changePage = (event) => {
//     const pageNumber = Number(event.target.textContent);
//     setCurrentPage(pageNumber);
//   };

//   const ChangePage = (pageNumber) => {
//     setNumber(pageNumber);
//   };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageSize) * pageSize;
    return new Array(pageSize).fill().map((_, idx) => start + idx + 1);
  };

  useEffect(() => {
    window.scrollTo({ behavior: 'smooth', top: '0px' });
  }, [currentPage]);

  return (
    <div>
     
      <div className="pagination">
        <button
          onClick={goToPreviousPage}
          className={`prev ${currentPage === 1 ? "disabled" : ""}`}
        >
          prev
        </button>
        {getPaginationGroup().map((item, index) => (
          <button
            key={index}
            // onClick={ChangePage}
            className={`paginationItem ${
              currentPage === item ? "active" : null
            }`}
          >
            <span>{item}</span>
          </button>
        ))}
        <button
          onClick={goToNextPage}
        //   className={`next ${currentPage === pages ? "disabled" : ""}`}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
