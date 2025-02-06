import * as React from "react";
const Arrow = ({ props, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={7}
    height={11}
    fill="none"
    {...props}
  >
    <path
      stroke={color || "#fff"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m1.5 9.5 4-4-4-4"
    />
  </svg>
);
export default Arrow;
