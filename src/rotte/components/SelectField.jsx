import React from "react";

export default function SelectField({
  label = "",
  value = "",
  onChange,
  options = [],
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
      <div className="relative">
        <select
          value={value}
          onChange={onChange}
          required={required}
          className={`w-full px-4 py-2.5 bg-white border rounded-xl text-sm font-semibold text-[#2B1808] outline-none transition-all duration-200 cursor-pointer appearance-none ${
            error
              ? "border-red-500 focus:border-red-600 focus:ring-4 focus:ring-red-500/10 bg-red-50/20"
              : "border-[#EDD9B8] hover:border-[#8B5E2A]/60 focus:border-[#8B5E2A] focus:ring-4 focus:ring-[#8B5E2A]/10"
          }`}
          {...props}
        >
          <option value="" disabled hidden>
            Pilih opsi...
          </option>
          {options.map((opt, idx) => (
            <option key={idx} value={opt.value} className="font-semibold">
              {opt.label}
            </option>
          ))}
        </select>
        {/* Custom Arrow Icon */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
      {error && (
        <span className="text-[11px] font-bold text-red-500 mt-0.5 tracking-wide animate-pulse">
          {error}
        </span>
      )}
    </div>
  );
}
