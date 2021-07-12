import * as React from "react";

function SvgLogo(props) {
  return (
    <svg
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 172 172"
      width="2.5em"
      height="2.5em"
      {...props}
    >
      <defs>
        <style>
          {
            ".logo:hover{stroke:#D0DEE8}"
          }
        </style>
      </defs>
      <path
      className="logo"
        d="M130 157c-8.71 4.69-30.55 9-44 9-36 0-80-27.72-80-80a80 80 0 01160 0c0 25.26-5 46-40 47V45l-41.17 62-39-62-.83 87"
        fill="none"
        stroke="#0A2D46"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={12}
      />
    </svg>
  );
}

export default SvgLogo;