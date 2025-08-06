import { IconProps } from "./types";

export const SearchIcon = ({ color, width, height }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? "24"}
      height={height ?? "25"}
      viewBox="0 0 24 25"
      fill="none"
    >
      <path
        d="M21.0004 21.25L16.6504 16.9M19 11.25C19 15.6683 15.4183 19.25 11 19.25C6.58172 19.25 3 15.6683 3 11.25C3 6.83172 6.58172 3.25 11 3.25C15.4183 3.25 19 6.83172 19 11.25Z"
        stroke={color ?? "#1B2528"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
