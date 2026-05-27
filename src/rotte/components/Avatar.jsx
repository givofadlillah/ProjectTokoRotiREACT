import React, { useState } from "react";

export default function Avatar({
  name = "User",
  src = "",
  size = "md",
  className = "",
  ...props
}) {
  const [imageError, setImageError] = useState(false);

  const sizes = {
    sm: "w-8 h-8 text-xs font-semibold",
    md: "w-10 h-10 text-sm font-bold",
    lg: "w-14 h-14 text-lg font-extrabold",
  };

  const initial = name.trim().charAt(0).toUpperCase();
  const appliedSize = sizes[size] || sizes.md;

  return (
    <div
      className={`relative inline-flex items-center justify-center rounded-full shrink-0 overflow-hidden select-none border border-[#EDD9B8]/40 shadow-sm ${appliedSize} ${className}`}
      {...props}
    >
      {src && !imageError ? (
        <img
          src={src}
          alt={name}
          onError={() => setImageError(true)}
          className="w-full h-full object-cover transition-opacity duration-200"
        />
      ) : (
        <div
          className="w-full h-full flex items-center justify-center text-white"
          style={{
            background: "linear-gradient(135deg, #C17C2E 0%, #8B5E2A 100%)",
            textShadow: "0 1px 2px rgba(0,0,0,0.15)",
          }}
        >
          {initial}
        </div>
      )}
    </div>
  );
}
