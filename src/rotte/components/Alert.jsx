import React from "react";
import { CheckCircle2, AlertCircle, AlertTriangle, Info, X } from "lucide-react";

export default function Alert({
  children,
  type = "info",
  title = "",
  onClose = null,
  className = "",
  ...props
}) {
  const configs = {
    success: {
      bg: "bg-[#E8F5E9] border-[#C8E6C9] text-[#1B5E20]",
      icon: CheckCircle2,
    },
    error: {
      bg: "bg-[#FFEBEE] border-[#FFCDD2] text-[#B71C1C]",
      icon: AlertCircle,
    },
    warning: {
      bg: "bg-[#FFFDE7] border-[#FFF9C4] text-[#F57F17]",
      icon: AlertTriangle,
    },
    info: {
      bg: "bg-[#E3F2FD] border-[#BBDEFB] text-[#0D47A1]",
      icon: Info,
    },
  };

  const current = configs[type] || configs.info;
  const Icon = current.icon;

  return (
    <div
      className={`flex items-start gap-3.5 p-4 border rounded-2xl transition-all duration-300 animate-[fadeIn_0.2s_ease-out] ${current.bg} ${className}`}
      role="alert"
      {...props}
    >
      <div className="shrink-0 mt-0.5">
        <Icon size={18} />
      </div>

      <div className="flex-1 flex flex-col gap-0.5 select-text">
        {title && <span className="text-sm font-black tracking-tight">{title}</span>}
        <span className="text-xs font-semibold leading-relaxed opacity-90">
          {children}
        </span>
      </div>

      {onClose && (
        <button
          onClick={onClose}
          className="shrink-0 p-1 rounded-lg hover:bg-black/5 hover:scale-105 active:scale-95 transition-all duration-150 cursor-pointer"
        >
          <X size={16} />
        </button>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
