import React from "react";
import Badge from "./Badge";
import Button from "./Button";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroSection({
  title = "Kehangatan di Setiap Gigitan, Kemudahan di Setiap Kelola",
  description = "Selamat datang di Rotte Bakery CRM. Kelola data transaksi, pantau loyalitas pelanggan, aktifkan kupon promo secara otomatis, dan tingkatkan penjualan toko roti Anda dalam satu dashboard intuitif.",
  image = "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&w=800&auto=format&fit=crop",
  badgeText = "Pembaruan Baru - Versi 2.0",
  ctaText = "Lihat Statistik Penjualan",
  onCtaClick = null,
  className = "",
  ...props
}) {
  return (
    <section
      className={`relative w-full overflow-hidden rounded-3xl border border-[#EDD9B8]/60 p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 bg-gradient-to-br from-[#FFFBF5] via-[#FDF6ED] to-[#FFF5E6] shadow-[0_12px_40px_rgba(139,94,42,0.03)] ${className}`}
      {...props}
    >
      {/* Decorative Ornaments */}
      <div
        className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none filter blur-[100px] opacity-[0.07]"
        style={{
          background: "linear-gradient(135deg, #C17C2E, #F0C878)",
        }}
      />
      <div
        className="absolute -left-10 -bottom-10 w-60 h-60 rounded-full pointer-events-none filter blur-[90px] opacity-[0.05]"
        style={{
          background: "linear-gradient(135deg, #8B5E2A, #D4A96A)",
        }}
      />

      {/* Left Text Block */}
      <div className="flex-1 flex flex-col items-start gap-4 z-10">
        {badgeText && (
          <Badge type="primary" variant="soft" className="flex items-center gap-1.5 py-1 px-3.5">
            <Sparkles size={11} className="animate-spin text-[#8B5E2A]" />
            {badgeText}
          </Badge>
        )}

        <h1
          className="text-3xl md:text-4xl lg:text-5xl font-black text-[#2B1808] leading-[1.12] tracking-tight"
          style={{ fontFamily: "Barlow, Inter, sans-serif" }}
        >
          {title}
        </h1>

        <p className="text-sm md:text-base text-gray-500 font-medium leading-relaxed max-w-xl">
          {description}
        </p>

        <div className="mt-4 flex flex-wrap gap-3">
          <Button
            type="primary"
            size="lg"
            onClick={onCtaClick}
            icon={ArrowRight}
            className="shadow-md"
          >
            {ctaText}
          </Button>
        </div>
      </div>

      {/* Right Image Block */}
      {image && (
        <div className="flex-1 w-full max-w-md md:max-w-none shrink-0 relative z-10 flex justify-center">
          <div className="relative group">
            {/* Soft Backing Glow */}
            <div className="absolute -inset-1.5 rounded-[32px] bg-gradient-to-r from-[#C17C2E] to-[#F0C878] opacity-25 blur-md group-hover:opacity-40 transition duration-300" />

            <div className="relative overflow-hidden rounded-[28px] border border-[#EDD9B8]/40 shadow-xl w-full aspect-[4/3] max-w-[420px]">
              <img
                src={image}
                alt="Bakery Hero"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="eager"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
