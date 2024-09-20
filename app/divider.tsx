import React from "react";

interface RainbowDividerProps {
  thickness?: number;
  dotSize?: number;
  dotSpacing?: number;
  className?: string;
}

export default function RainbowDivider({
  thickness = 8,
  dotSize = 4,
  dotSpacing = 4,
  className = "",
}: RainbowDividerProps = {}) {
  const colors = [
    "from-red-500",
    "via-orange-500",
    "via-yellow-500",
    "via-green-500",
    "via-blue-500",
    "via-indigo-500",
    "to-purple-500",
  ];

  const gradientClass = `bg-gradient-to-r ${colors.join(" ")}`;
  const maskSize = dotSize + dotSpacing;

  return (
    <div
      className={`!w-full ${gradientClass} ${className}`}
      style={{
        height: `${thickness}px`,
        maskImage: `radial-gradient(circle, black ${dotSize / 2}px, transparent ${dotSize / 2}px)`,
        maskSize: `${maskSize}px ${maskSize}px`,
        WebkitMaskImage: `radial-gradient(circle, black ${dotSize / 2}px, transparent ${dotSize / 2}px)`,
        WebkitMaskSize: `${maskSize}px ${maskSize}px`,
      }}
      role="separator"
      aria-orientation="horizontal"
    />
  );
}
