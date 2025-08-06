import { IconProps } from "./types";

export const UnionIcon = ({ color, width, height }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? "18"}
      height={height ?? "5"}
      viewBox="0 0 18 5"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 0.25C0.89543 0.25 0 1.14543 0 2.25C0 3.35457 0.89543 4.25 2 4.25C3.10457 4.25 4 3.35457 4 2.25C4 1.14543 3.10457 0.25 2 0.25ZM7 2.25C7 1.14543 7.89543 0.25 9 0.25C10.1046 0.25 11 1.14543 11 2.25C11 3.35457 10.1046 4.25 9 4.25C7.89543 4.25 7 3.35457 7 2.25ZM14 2.25C14 1.14543 14.8954 0.25 16 0.25C17.1046 0.25 18 1.14543 18 2.25C18 3.35457 17.1046 4.25 16 4.25C14.8954 4.25 14 3.35457 14 2.25Z"
        fill={color ?? "#1B2528"}
      />
    </svg>
  );
};
