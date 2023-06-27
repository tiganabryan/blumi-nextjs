import React from 'react';
// import HeroVector from '/Users/user/Desktop/blumi/blumi-nextjs/src/img/Group 739.svg';

const HeroVector = ({ viewBoxWidth = 1440, viewBoxHeight = 827 }) => {
  return (
    <svg
      width="100%"
      height="1000"
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.75" filter="url(#filter0_d_235_9790)">
        <path
          d="M1 664V-27H1441V744C1256 808 1152 800 980 700C732.497 556.103 312 820 1 664Z"
          fill="#EC91D8"
        />
      </g>
      <g opacity="0.75" filter="url(#filter1_d_235_9790)">
        <path
          d="M0 598V-36H1440V634C1144 710 995.98 632.361 800 538C476 382 392 682 0 598Z"
          fill="#A9DDD6"
        />
      </g>
      <g opacity="0.75" filter="url(#filter2_d_235_9790)">
        <path
          d="M1441 445V-6H-2V755C364 775 512.383 686.166 722.487 586.168C1062.96 424.12 1165 561 1441 445Z"
          fill="#FFC857"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_235_9790"
          x="-32"
          y="-56"
          width="1510"
          height="882.056"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="2" dy="6" />
          <feGaussianBlur stdDeviation="17.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_235_9790"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_235_9790"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_235_9790"
          x="-33"
          y="-65"
          width="1510"
          height="770.713"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="2" dy="6" />
          <feGaussianBlur stdDeviation="17.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.552941 0 0 0 0 0.231373 0 0 0 0 0.447059 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_235_9790"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_235_9790"
            result="shape"
          />
        </filter>
        <filter
          id="filter2_d_235_9790"
          x="-35"
          y="-35"
          width="1513"
          height="833.837"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="2" dy="6" />
          <feGaussianBlur stdDeviation="17.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.133333 0 0 0 0 0.486275 0 0 0 0 0.615686 0 0 0 0.6 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_235_9790"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_235_9790"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default HeroVector;
