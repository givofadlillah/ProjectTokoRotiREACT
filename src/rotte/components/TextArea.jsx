import React from "react";

export default function TextArea({
  label = "",
  placeholder = "",
  value = "",
  onChange,
  rows = 3,
  error = "",
  required = false,
  className = "",
  ...props
}) {
  return (
    <div className={`flex flex-col gap-1.5 w-full ${className}`}>
      {label && (
        <label className="text-xs uppercase font-extrabold tracking-wider text-[#2B1808]/80 select-none">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        required={required}
        className={`w-full px-4 py-2.5 bg-white border rounded-xl text-sm font-semibold text-[#2B1808] outline-none transition-all duration-200 resize-y ${
          error
            ? "border-red-500 focus:border-red-600 focus:ring-4 focus:ring-red-500/10 bg-red-50/20"
            : "border-[#EDD9B8] hover:border-[#8B5E2A]/60 focus:border-[#8B5E2A] focus:ring-4 focus:ring-[#8B5E2A]/10"
        }`}
        {...props}
      />
      {error && (
        <span className="text-[11px] font-bold text-red-500 mt-0.5 tracking-wide animate-pulse">
          {error}
        </span>
      )}
    </div>
  );
}
