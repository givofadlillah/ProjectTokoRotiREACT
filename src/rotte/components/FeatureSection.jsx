import React from "react";
import { Sparkles } from "lucide-react";

export default function FeatureSection({
  title = "Mengapa Memilih Rotte CRM?",
  subtitle = "Solusi modern yang dirancang khusus untuk mempermudah operasional toko roti, memahami loyalitas pelanggan, dan melipatgandakan omzet penjualan.",
  features = [],
  className = "",
  ...props
}) {
  // Default fallback features
  const defaultFeatures = [
    {
      title: "Manajemen Orders Realtime",
      description: "Catat dan lacak pesanan roti tawar, cake, dan roti manis secara instan dari kasir langsung ke dapur.",
      icon: Sparkles,
    },
    {
      title: "Loyalty Point & Cashback",
      description: "Tingkatkan retensi pelanggan dengan loyalty tier otomatis. Makin sering belanja, reward makin manis.",
      icon: Sparkles,
    },
    {
      title: "Laporan & Grafik Analytics",
      description: "Analisis grafik produk terlaris mingguan dan bulanan untuk mengurangi sisa produk terbuang.",
      icon: Sparkles,
    },
  ];

  const list = features.length > 0 ? features : defaultFeatures;

  return (
    <section className={`py-6 w-full ${className}`} {...props}>
      {/* Title block */}
      <div className="text-center max-w-2xl mx-auto mb-12 flex flex-col gap-3">
        <h2 className="text-2xl md:text-3xl font-black text-[#2B1808] tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-sm font-semibold text-gray-500 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {/* Grid Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {list.map((item, idx) => {
          const Icon = item.icon || Sparkles;
          return (
            <div
              key={idx}
              className="bg-white border border-[#EDD9B8]/40 rounded-3xl p-6 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(139,94,42,0.06)] hover:-translate-y-1 hover:border-[#8B5E2A]/30 flex flex-col gap-4 group"
            >
              {/* Feature Icon box */}
              <div className="w-12 h-12 rounded-2xl bg-[#FDF6ED] border border-[#EDD9B8]/30 flex items-center justify-center text-[#8B5E2A] group-hover:bg-[#8B5E2A] group-hover:text-white group-hover:scale-105 transition-all duration-300 shadow-sm shrink-0">
                <Icon size={20} />
              </div>

              {/* Feature info */}
              <div className="flex flex-col gap-1.5">
                <h3 className="text-base font-black text-[#2B1808] tracking-tight group-hover:text-[#8B5E2A] transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 font-medium leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
