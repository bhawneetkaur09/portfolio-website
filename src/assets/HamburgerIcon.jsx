import * as React from "react"
const HamburgerIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={54}
    height={54}
    viewBox="0 0 256 256"
    {...props}
  >
    <path
      fill="#fff"
      strokeMiterlimit={10}
      d="M3 9a1 1 0 1 0 0 2h44a1 1 0 1 0 0-2zm0 15a1 1 0 1 0 0 2h44a1 1 0 1 0 0-2zm0 15a1 1 0 1 0 0 2h44a1 1 0 1 0 0-2z"
      fontFamily="none"
      fontSize="none"
      fontWeight="none"
      style={{
        mixBlendMode: "normal",
      }}
      textAnchor="none"
      transform="scale(5.12)"
    />
  </svg>
)
export default HamburgerIcon
