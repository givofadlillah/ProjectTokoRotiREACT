import React, { useState } from "react";
import Badge from "./Badge";
import Button from "./Button";
import { Tag, Copy, Check, Calendar } from "lucide-react";

export default function PromoBanner({
  title = "Nikmati Kelezatan Spesial Pekan Ini!",
  discount = "DISKON 20%",
  code = "ROTTEHANGAT20",
  expiry = "31 Juni 2026",
  image = "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=800&auto=format&fit=crop",
  onClaimClick = null,
  className = "",
  ...props
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    if (onClaimClick) onClaimClick(code);
  };

  return (
    <section
      className={`relative w-full rounded-3xl overflow-hidden p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 text-white shadow-xl ${className}`}
      style={{
        background: "linear-gradient(135deg, #8B5E2A 0%, #5A3511 50%, #2B1808 100%)",
        fontFamily: "Barlow, Inter, sans-serif",
      }}
      {...props}
    >
      {/* Dynamic Background Glow */}
      <div
        className="absolute top-0 left-0 w-72 h-72 rounded-full pointer-events-none filter blur-[90px] opacity-[0.12]"
        style={{
          background: "radial-gradient(circle, #F0C878 0%, transparent 70%)",
        }}
      />

      <div className="flex-1 flex flex-col md:flex-row items-center gap-6 z-10 w-full">
        {/* Banner Image Mock */}
        {image && (
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden border-2 border-[#EDD9B8]/30 shadow-lg shrink-0">
            <img src={image} alt="Voucher Promo" className="w-full h-full object-cover" />
          </div>
        )}

        {/* Text descriptions */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2.5">
          <div className="flex items-center gap-2">
            <Badge type="warning" variant="solid" className="bg-[#F0C878] text-[#3D2509] font-black uppercase text-[10px] tracking-wider py-1 px-3">
              {discount}
            </Badge>
            <span className="flex items-center gap-1 text-[11px] text-[#FDF6ED]/70 font-bold uppercase tracking-wider">
              <Calendar size={11} />
              s.d. {expiry}
            </span>
          </div>

          <h3 className="text-xl md:text-2xl font-black text-[#FFFBF5] tracking-tight leading-tight">
            {title}
          </h3>

          <p className="text-xs text-[#FFFBF5]/70 max-w-md leading-relaxed font-medium">
            Gunakan kode kupon di bawah ini saat checkout transaksi CRM pelanggan Anda untuk mengaktifkan potongan harga spesial.
          </p>
        </div>
      </div>

      {/* Coupon box & claim button */}
      <div className="shrink-0 flex flex-col items-center gap-3 z-10 w-full md:w-auto">
        <div className="flex items-center gap-2 border-2 border-dashed border-[#F0C878]/60 bg-[#2B1808]/50 rounded-2xl p-1.5 pl-4 w-full max-w-sm md:max-w-none">
          <span className="font-mono text-sm md:text-base font-black tracking-wider text-[#F0C878] select-all">
            {code}
          </span>
          <button
            onClick={handleCopy}
            className={`cursor-pointer px-4 py-2 rounded-xl text-xs font-black transition-all duration-200 flex items-center gap-1.5 shadow-md active:scale-95 ${
              copied
                ? "bg-green-600 text-white"
                : "bg-[#FFFBF5] text-[#8B5E2A] hover:bg-[#FDF6ED] border border-[#EDD9B8]"
            }`}
          >
            {copied ? <Check size={13} /> : <Copy size={13} />}
            {copied ? "Tersalin!" : "Salin Kode"}
          </button>
        </div>
      </div>
    </section>
  );
}
