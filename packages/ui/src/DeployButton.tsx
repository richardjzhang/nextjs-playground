import * as React from "react";

export const DeployButton = () => {
  return (
    <a
      target="_blank"
      href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Frichardjzhang%2Fnextjs-playground&demo-url=https%3A%2F%2Fwatchthis.dev"
      className="ui-text-black hover:ui-bg-black hover:ui-text-white hover:ui-border-white ui-border ui-bg-white ui-shadow ui-font-medium ui-rounded ui-p-2 ui-text-sm ui-flex ui-items-center"
    >
      <svg
        height="16"
        viewBox="0 0 113 100"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="a" x1="196.57%" x2="50%" y1="228.82%" y2="50%">
            <stop offset="0%"></stop>
            <stop offset="100%" stopColor="currentColor"></stop>
          </linearGradient>
        </defs>
        <path
          d="M350.5 150L407 250H294z"
          fill="url(#a)"
          fillRule="evenodd"
          transform="translate(-294 -150)"
        ></path>
      </svg>
      <p className="ui-ml-2">Deploy</p>
    </a>
  );
};
