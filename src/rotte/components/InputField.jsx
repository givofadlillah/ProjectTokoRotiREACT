import React from "react";

export default function InputField({
  label = "",
  placeholder = "",
  type = "text",
  value = "",
  onChange,
  error = "",
  icon: Icon = null,
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
      <div className="relative flex items-center">
        {Icon && (
          <div className="absolute left-3.5 text-gray-400 pointer-events-none">
            <Icon size={16} />
          </div>
        )}
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={`w-full px-4 py-2.5 bg-white border rounded-xl text-sm font-semibold text-[#2B1808] outline-none transition-all duration-200 ${
            Icon ? "pl-10" : ""
          } ${
            error
              ? "border-red-500 focus:border-red-600 focus:ring-4 focus:ring-red-500/10 bg-red-50/20"
              : "border-[#EDD9B8] hover:border-[#8B5E2A]/60 focus:border-[#8B5E2A] focus:ring-4 focus:ring-[#8B5E2A]/10"
          }`}
          {...props}
        />
      </div>
      {error && (
        <span className="text-[11px] font-bold text-red-500 mt-0.5 tracking-wide animate-pulse">
          {error}
        </span>
      )}
    </div>
  );
}
