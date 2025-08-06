import { IconProps } from "./types";

export const HamburgerIcon = ({ color, width, height }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? "20"}
      height={height ?? "14"}
      viewBox="0 0 20 14"
      fill="none"
    >
      <path
        d="M1 7.25H19M1 1.25H19M1 13.25H19"
        stroke={color ?? "#1B2528"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
