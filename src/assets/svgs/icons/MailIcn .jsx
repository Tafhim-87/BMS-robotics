import * as React from "react";
const MailIcn = (props) => (
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
      strokeWidth={1.6}
      d="M15 3H3a1.5 1.5 0 0 0-1.5 1.5v9A1.5 1.5 0 0 0 3 15h12a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 15 3Z"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.6}
      d="M16.5 5.25 9.773 9.525a1.455 1.455 0 0 1-1.546 0L1.5 5.25"
    />
  </svg>
);
export default MailIcn;
