import * as React from "react";
const LocationIcn = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      d="M15 7.5c0 3.745-4.154 7.645-5.55 8.85a.75.75 0 0 1-.9 0C7.153 15.144 3 11.244 3 7.5a6 6 0 1 1 12 0Z"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      d="M9 9.75a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
    />
  </svg>
);
export default LocationIcn;
