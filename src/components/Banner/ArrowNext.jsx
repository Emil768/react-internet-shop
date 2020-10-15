import React from "react";
import btnNext from "../../img/arrow-right.svg";
function ArrowNext({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="banner-section__slider-btn banner-section__slider-btnNext"
    >
      <img src={btnNext} alt="btn-prev" />
    </button>
  );
}

export default ArrowNext;
