import React from "react";
import { Inbox } from "lucide-react";

export default function Table({
  headers = [],
  children,
  isLoading = false,
  empty = false,
  emptyMessage = "Tidak ada data yang tersedia",
  className = "",
  ...props
}) {
  return (
    <div className={`w-full overflow-hidden border border-[#EDD9B8]/60 rounded-3xl bg-white shadow-[0_8px_30px_rgba(139,94,42,0.02)] ${className}`} {...props}>
      <div className="w-full overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm text-[#2B1808]">
          {headers.length > 0 && (
            <thead>
              <tr className="bg-[#FFFBF5] border-b border-[#EDD9B8]/50">
                {headers.map((header, index) => (
                  <th
                    key={index}
                    className="px-6 py-4 text-xs font-black tracking-widest text-[#8B5E2A] uppercase select-none"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
          )}
          <tbody className="divide-y divide-[#EDD9B8]/20">
            {!isLoading && !empty && children}

            {/* Loading Placeholder */}
            {isLoading && (
              <tr>
                <td colSpan={headers.length || 1} className="py-12 text-center">
                  <div className="inline-flex flex-col items-center justify-center gap-3">
                    <svg
                      className="animate-spin h-8 w-8 text-[#8B5E2A]"
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
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                      Memuat Data...
                    </span>
                  </div>
                </td>
              </tr>
            )}

            {/* Empty Placeholder */}
            {!isLoading && empty && (
              <tr>
                <td colSpan={headers.length || 1} className="py-16 text-center">
                  <div className="flex flex-col items-center justify-center gap-3 text-gray-400">
                    <div className="w-14 h-14 rounded-2xl bg-[#FFFBF5] border border-[#EDD9B8]/30 flex items-center justify-center text-[#8B5E2A]/40 shadow-inner">
                      <Inbox size={26} />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-sm font-black text-[#2B1808]/75">
                        Data Kosong
                      </p>
                      <p className="text-xs text-gray-400 max-w-xs mx-auto">
                        {emptyMessage}
                      </p>
                    </div>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
