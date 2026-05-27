import React from "react";

export default function Spinner({
  size = "md",
  color = "primary",
  className = "",
  ...props
}) {
  const sizes = {
    sm: "w-4 h-4 stroke-[3]",
    md: "w-8 h-8 stroke-[3]",
    lg: "w-12 h-12 stroke-[4]",
  };

  const colors = {
    primary: "text-[#8B5E2A]",
    secondary: "text-[#D4A96A]",
    white: "text-white",
  };

  const appliedSize = sizes[size] || sizes.md;
  const appliedColor = colors[color] || colors.primary;

  return (
    <svg
      className={`animate-spin ${appliedSize} ${appliedColor} ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <circle
        className="opacity-20"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-80"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
}
