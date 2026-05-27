import React, { useEffect } from "react";
import { X } from "lucide-react";

export default function Modal({
  isOpen = false,
  onClose,
  title = "",
  children,
  footer = null,
  maxWidth = "max-w-lg",
  className = "",
  ...props
}) {
  // Prevent background scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#2B1808]/40 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-[fadeIn_0.2s_ease-out]"
      onClick={onClose}
      {...props}
    >
      <div
        className={`bg-white w-full ${maxWidth} border border-[#EDD9B8]/40 rounded-3xl shadow-[0_24px_70px_rgba(61,37,9,0.25)] flex flex-col overflow-hidden animate-[scaleUp_0.3s_cubic-bezier(0.34,1.56,0.64,1)] ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-[#EDD9B8]/20 flex items-center justify-between gap-4 bg-[#FFFBF5]">
          <h3 className="text-lg font-black text-[#2B1808] tracking-tight">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-black/5 text-[#8B5E2A] hover:scale-105 active:scale-95 transition-all duration-150 cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto max-h-[70vh] text-[#2B1808]/90 font-medium text-sm leading-relaxed">
          {children}
        </div>

        {/* Footer */}
        {footer && (
          <div className="px-6 py-4 border-t border-[#EDD9B8]/20 flex items-center justify-end gap-3 bg-[#FFFBF5]">
            {footer}
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleUp {
          from { opacity: 0; transform: scale(0.92) translateY(12px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );
}
