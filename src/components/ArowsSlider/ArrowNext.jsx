import React from "react";

function ArrowNext({ onClick, color, classArrow }) {
  return (
    <button onClick={onClick} className={classArrow}>
      <svg
        width="17"
        height="29"
        viewBox="0 0 17 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.8936 13.632L2.33608 0.236548C2.01686 -0.0788495 1.50491 -0.0788495 1.1857 0.236548C0.866485 0.551946 0.866485 1.05777 1.1857 1.37317L14.1651 14.1974L1.1857 27.0216C0.866485 27.337 0.866485 27.8428 1.1857 28.1582C1.3423 28.3129 1.5531 28.3962 1.75788 28.3962C1.96266 28.3962 2.17346 28.3189 2.33005 28.1582L15.8876 14.7627C16.2068 14.4533 16.2068 13.9415 15.8936 13.632Z"
          fill={color}
        />
      </svg>
    </button>
  );
}

export default ArrowNext;
