import React from "react";

export default function Button({
  children,
  type = "primary",
  variant = "solid",
  size = "md",
  className = "",
  disabled = false,
  isLoading = false,
  icon: Icon = null,
  onClick,
  ...props
}) {
  // Rotte Bakery Theme color classes mapping
  const colors = {
    primary: {
      solid: "bg-[#8B5E2A] text-white hover:bg-[#734A1E] border-transparent shadow-[0_4px_12px_rgba(139,94,42,0.25)] hover:shadow-[0_6px_20px_rgba(139,94,42,0.35)]",
      outline: "bg-transparent text-[#8B5E2A] border-[#8B5E2A] hover:bg-[#FDF6ED]",
      ghost: "bg-transparent text-[#8B5E2A] border-transparent hover:bg-[#FDF6ED] hover:text-[#734A1E]",
    },
    secondary: {
      solid: "bg-[#FFFBF5] text-[#8B5E2A] border-[#EDD9B8] hover:bg-[#FDF6ED] shadow-[0_4px_10px_rgba(139,94,42,0.05)]",
      outline: "bg-transparent text-gray-600 border-gray-300 hover:bg-gray-50",
      ghost: "bg-transparent text-gray-500 border-transparent hover:bg-gray-100 hover:text-gray-700",
    },
    success: {
      solid: "bg-[#15803D] text-white hover:bg-[#166534] border-transparent shadow-[0_4px_12px_rgba(21,128,61,0.25)]",
      outline: "bg-transparent text-[#15803D] border-[#15803D] hover:bg-green-50",
      ghost: "bg-transparent text-[#15803D] border-transparent hover:bg-green-50",
    },
    danger: {
      solid: "bg-[#7B1C1C] text-white hover:bg-[#5A1313] border-transparent shadow-[0_4px_12px_rgba(123,28,28,0.25)]",
      outline: "bg-transparent text-[#7B1C1C] border-[#7B1C1C] hover:bg-red-50",
      ghost: "bg-transparent text-[#7B1C1C] border-transparent hover:bg-red-50",
    },
    warning: {
      solid: "bg-[#D4A96A] text-[#3D2509] hover:bg-[#C09657] border-transparent shadow-[0_4px_12px_rgba(212,169,106,0.25)]",
      outline: "bg-transparent text-[#C09657] border-[#C09657] hover:bg-amber-50",
      ghost: "bg-transparent text-[#C09657] border-transparent hover:bg-amber-50",
    },
    info: {
      solid: "bg-[#1D4ED8] text-white hover:bg-[#1E40AF] border-transparent shadow-[0_4px_12px_rgba(29,78,216,0.25)]",
      outline: "bg-transparent text-[#1D4ED8] border-[#1D4ED8] hover:bg-blue-50",
      ghost: "bg-transparent text-[#1D4ED8] border-transparent hover:bg-blue-50",
    },
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs rounded-lg font-medium",
    md: "px-5 py-2.5 text-sm rounded-xl font-bold",
    lg: "px-7 py-3.5 text-base rounded-2xl font-extrabold",
  };

  const baseStyle =
    "inline-flex items-center justify-center gap-2 cursor-pointer border transition-all duration-200 ease-out select-none active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8B5E2A]";
  const disabledStyle = "opacity-50 cursor-not-allowed active:scale-100 pointer-events-none";

  const appliedColor = colors[type]?.[variant] || colors.primary.solid;
  const appliedSize = sizes[size] || sizes.md;

  return (
    <button
      className={`${baseStyle} ${appliedColor} ${appliedSize} ${
        disabled || isLoading ? disabledStyle : "hover:-translate-y-0.5"
      } ${className}`}
      disabled={disabled || isLoading}
      onClick={onClick}
      {...props}
    >
      {isLoading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {!isLoading && Icon && <Icon className={size === "sm" ? "w-3.5 h-3.5" : "w-4.5 h-4.5"} />}
      <span>{children}</span>
    </button>
  );
}
