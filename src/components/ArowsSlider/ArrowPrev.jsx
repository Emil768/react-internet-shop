import React from "react";

function ArrowPrev({ onClick, color, classArrow }) {
  return (
    <button onClick={onClick} className={classArrow}>
      <svg
        width="16"
        height="29"
        viewBox="0 0 16 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.9673 14.1924L14.9422 1.37269C15.2613 1.05741 15.2613 0.551755 14.9422 0.236466C14.6231 -0.0788221 14.1113 -0.0788221 13.7922 0.236466L0.239328 13.6273C-0.0797759 13.9426 -0.0797759 14.4482 0.239328 14.7635L13.7922 28.1484C13.9487 28.3031 14.1595 28.3864 14.3642 28.3864C14.5689 28.3864 14.7796 28.309 14.9362 28.1484C15.2553 27.8331 15.2553 27.3275 14.9362 27.0122L1.9673 14.1924Z"
          fill={color}
        />
      </svg>
    </button>
  );
}

export default ArrowPrev;
