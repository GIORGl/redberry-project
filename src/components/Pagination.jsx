import React from "react";
import './Pagination.css'

function Pagination() {
  return (
    <div className="pagination">
      <button className="previous">^</button>

      <div className="balls">
        <div className="ball active"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
      </div>
      <button className="next">^</button>
    </div>
  );
}

export default Pagination;
