import { IconProps } from "./types";

export const StatusIcon = ({ color, width, height }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? "6"}
      height={height ?? "7"}
      viewBox="0 0 6 7"
      fill="none"
    >
      <circle cx="3" cy="3.25" r="3" fill={color ?? "#087A2E"} />
    </svg>
  );
};
