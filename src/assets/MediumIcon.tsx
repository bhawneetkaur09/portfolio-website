import React from 'react';

const MediumIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#fff"
      d="M13 12a6 6 0 1 1-12 0 6 6 0 0 1 12 0ZM23 12c0 2.761-.448 5-1 5s-1-2.239-1-5 .448-5 1-5 1 2.239 1 5ZM17 18c1.657 0 3-2.686 3-6s-1.343-6-3-6-3 2.686-3 6 1.343 6 3 6Z"
    />
  </svg>
);

export default MediumIcon; 