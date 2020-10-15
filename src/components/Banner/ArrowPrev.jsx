import React from "react";
import btnPrev from "../../img/arrow-left.svg";
function ArrowPrev({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="banner-section__slider-btn banner-section__slider-btnPrev"
    >
      <img src={btnPrev} alt="btn-prev" />
    </button>
  );
}

export default ArrowPrev;
