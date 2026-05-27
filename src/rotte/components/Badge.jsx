import React from "react";

export default function Badge({
  children,
  type = "primary",
  variant = "soft",
  className = "",
  ...props
}) {
  const colors = {
    primary: {
      solid: "bg-[#8B5E2A] text-white",
      soft: "bg-[#FFF3E0] text-[#8B5E2A] border border-[#FFE0B2]",
    },
    secondary: {
      solid: "bg-gray-600 text-white",
      soft: "bg-gray-100 text-gray-700 border border-gray-200",
    },
    success: {
      solid: "bg-[#15803D] text-white",
      soft: "bg-[#E8F5E9] text-[#15803D] border border-[#C8E6C9]",
    },
    danger: {
      solid: "bg-[#7B1C1C] text-white",
      soft: "bg-[#FFEBEE] text-[#7B1C1C] border border-[#FFCDD2]",
    },
    warning: {
      solid: "bg-[#D4A96A] text-[#3D2509]",
      soft: "bg-[#FFFDE7] text-[#827717] border border-[#FFF9C4]",
    },
    info: {
      solid: "bg-[#1D4ED8] text-white",
      soft: "bg-[#E3F2FD] text-[#1565C0] border border-[#BBDEFB]",
    },
  };

  const baseStyle =
    "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide whitespace-nowrap transition-all duration-150 select-none";
  const appliedStyle = colors[type]?.[variant] || colors.primary.soft;

  return (
    <span className={`${baseStyle} ${appliedStyle} ${className}`} {...props}>
      {children}
    </span>
  );
}
