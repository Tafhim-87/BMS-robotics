import * as React from "react";
const PlusSvg = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <path
      fill="#0B61EA"
      fillRule="evenodd"
      d="M11.5 0h-1v10.5H0v1h10.5V22h1V11.5H22v-1H11.5V0Z"
      clipRule="evenodd"
    />
  </svg>
);
export default PlusSvg;
