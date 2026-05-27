import React from "react";
import { Croissant, Facebook, Instagram, Twitter, Globe } from "lucide-react";

export default function Footer({ className = "", ...props }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`relative mt-12 rounded-3xl overflow-hidden shadow-xl ${className}`}
      style={{
        background: "linear-gradient(180deg, #3D2509 0%, #1A0D02 100%)",
        fontFamily: "Barlow, Inter, sans-serif",
      }}
      {...props}
    >
      {/* Decorative Warm Backglow */}
      <div
        className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none filter blur-[80px]"
        style={{
          background: "rgba(240, 200, 120, 0.08)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 py-10 md:py-14 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-white/10 pb-8">
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
                style={{
                  background: "linear-gradient(135deg, #C17C2E, #8B5E2A)",
                  boxShadow: "0 6px 20px rgba(193, 124, 46, 0.25)",
                }}
              >
                <Croissant size={20} />
              </div>
              <div>
                <span className="text-xl font-black text-[#FDF6ED] tracking-wide">
                  Rotte<span className="text-[#F0C878]">.</span>
                </span>
                <p className="text-xs text-white/40 uppercase tracking-widest font-bold">
                  Bakery CRM
                </p>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-sm">
              Sistem Manajemen Pelanggan, Transaksi, dan Program Loyalitas Rotte Bakery. Menyajikan kehangatan di setiap interaksi.
            </p>
          </div>

          {/* Navigation Links Column */}
          <div className="flex flex-col gap-4 md:pl-10">
            <h3 className="text-sm font-bold text-[#F0C878] uppercase tracking-wider">
              Navigasi Cepat
            </h3>
            <div className="grid grid-cols-2 gap-2.5">
              {[
                { label: "Dashboard", href: "/" },
                { label: "Produk", href: "/products" },
                { label: "Pesanan", href: "/orders" },
                { label: "Loyalty", href: "/loyalty" },
                { label: "Pelanggan", href: "/customers" },
                { label: "Laporan", href: "/reports" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Socials & Contacts Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold text-[#F0C878] uppercase tracking-wider">
              Ikuti Kami
            </h3>
            <p className="text-sm text-white/60">
              Temukan promo terbaru dan aktivitas bakery kami di media sosial.
            </p>
            <div className="flex items-center gap-3 mt-1">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Instagram, label: "Instagram" },
                { icon: Twitter, label: "Twitter" },
                { icon: Globe, label: "Website" },
              ].map((social, idx) => {
                const Icon = social.icon;
                return (
                  <button
                    key={idx}
                    title={social.label}
                    className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/75 border border-white/5 hover:bg-[#8B5E2A] hover:text-white hover:border-[#C17C2E] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
                  >
                    <Icon size={16} />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
          <p className="text-xs text-white/40">
            © {currentYear} Rotte Bakery. Seluruh hak cipta dilindungi.
          </p>
          <div className="flex items-center gap-5">
            <a
              href="#"
              className="text-xs text-white/40 hover:text-white/70 transition-colors duration-200"
            >
              Kebijakan Privasi
            </a>
            <a
              href="#"
              className="text-xs text-white/40 hover:text-white/70 transition-colors duration-200"
            >
              Syarat & Ketentuan
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
