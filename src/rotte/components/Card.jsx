import React from "react";

export default function Card({
  children,
  title = "",
  subtitle = "",
  action = null,
  noPadding = false,
  hoverable = false,
  className = "",
  ...props
}) {
  return (
    <div
      className={`bg-white border border-[#EDD9B8]/60 rounded-3xl transition-all duration-300 ${
        hoverable
          ? "hover:shadow-[0_20px_40px_rgba(139,94,42,0.08)] hover:-translate-y-1 hover:border-[#8B5E2A]/30"
          : "shadow-[0_8px_30px_rgba(139,94,42,0.03)]"
      } ${className}`}
      {...props}
    >
      {(title || subtitle || action) && (
        <div className="px-6 py-5 border-b border-[#EDD9B8]/40 flex items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            {title && (
              <h3 className="text-base font-black text-[#2B1808] tracking-tight">
                {title}
              </h3>
            )}
            {subtitle && (
              <p className="text-xs text-gray-500 font-medium">
                {subtitle}
              </p>
            )}
          </div>
          {action && <div className="shrink-0">{action}</div>}
        </div>
      )}
      <div className={noPadding ? "" : "p-6"}>{children}</div>
    </div>
  );
}
