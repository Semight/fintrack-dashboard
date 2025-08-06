import { IconProps } from "./types";

export const MenuIcon = ({ color, width, height }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? "20"}
      height={height ?? "20"}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M8 1.25H1V8.25H8V1.25Z"
        stroke={color ?? "#1B2528"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 1.25H12V8.25H19V1.25Z"
        stroke={color ?? "#1B2528"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 12.25H12V19.25H19V12.25Z"
        stroke={color ?? "#1B2528"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 12.25H1V19.25H8V12.25Z"
        stroke={color ?? "#1B2528"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
