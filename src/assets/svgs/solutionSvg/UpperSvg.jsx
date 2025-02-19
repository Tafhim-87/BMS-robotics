import * as React from "react";
const UpperSvg = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={171}
    height={86}
    fill="none"
    {...props}
  >
    <path
      stroke="url(#a)"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M85 85h85"
    />
    <path
      fill="url(#b)"
      d="M85 85v.5a.5.5 0 0 0 .5-.5H85Zm-.5-85v85h1V0h-1Zm.5 84.5H0v1h85v-1Z"
    />
    <path
      fill="#0B61EA"
      fillRule="evenodd"
      d="M85.5 74h-1v10.5H74v1h22v-1H85.5V74Z"
      clipRule="evenodd"
    />
    <defs>
      <linearGradient
        id="a"
        x1={85}
        x2={170}
        y1={85}
        y2={171.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D1D2D8" />
        <stop offset={0.7} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="b"
        x1={85}
        x2={0}
        y1={85}
        y2={0}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D1D2D8" />
        <stop offset={0.482} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);
export default UpperSvg;
