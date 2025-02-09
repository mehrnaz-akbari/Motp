import { FC } from "react";
import "./style.scss";

const Loading: FC = () => {
  return (
    <div className="loading_provider">
      <svg
        className="pl"
        viewBox="0 0 160 160"
        width="160px"
        height="160px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#000"></stop>
            <stop offset="100%" stopColor="#fff"></stop>
          </linearGradient>
          <mask id="mask1">
            <rect x="0" y="0" width="160" height="160" fill="url(#grad)"></rect>
          </mask>
          <mask id="mask2">
            <rect
              x="28"
              y="28"
              width="104"
              height="104"
              fill="url(#grad)"
            ></rect>
          </mask>
        </defs>

        <g>
          <g className="pl__ring-rotate">
            <circle
              className="pl__ring-stroke"
              cx="80"
              cy="80"
              r="72"
              fill="none"
              stroke="hsl(223,90%,55%)"
              strokeWidth="12"
              strokeDasharray="452.39 452.39"
              strokeDashoffset="452"
              strokeLinecap="round"
              transform="rotate(-45,80,80)"
            ></circle>
          </g>
        </g>
        <g mask="url(#mask1)">
          <g className="pl__ring-rotate">
            <circle
              className="pl__ring-stroke"
              cx="80"
              cy="80"
              r="72"
              fill="none"
              stroke="hsl(193,90%,55%)"
              strokeWidth="12"
              strokeDasharray="452.39 452.39"
              strokeDashoffset="452"
              strokeLinecap="round"
              transform="rotate(-45,80,80)"
            ></circle>
          </g>
        </g>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        width="5em"
        height="5em"
        className={"blu-icon"}
      >
        <path
          fill="#2E7BDB"
          fillRule="evenodd"
          d="M8 10.653C9.049 9.63 10.44 9 12 9c3.401 0 6 3.002 6 6.5S15.401 22 12 22s-6-3.002-6-6.5q0-.182.01-.363A1 1 0 0 1 6 15V4a1 1 0 1 1 2 0zM12 11c-2.122 0-4 1.923-4 4.5S9.878 20 12 20s4-1.923 4-4.5-1.878-4.5-4-4.5"
          clipRule="evenodd"
        />
        <path
          fill="#2E7BDB"
          d="M12 3a1.5 1.5 0 0 1 1.5-1.5h.01a1.5 1.5 0 0 1 1.5 1.5v.01a1.5 1.5 0 0 1-1.5 1.5h-.01a1.5 1.5 0 0 1-1.5-1.5z"
        />
      </svg>
    </div>
  );
};

export default Loading;
