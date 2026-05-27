import React from "react";
import Card from "./Card";
import Badge from "./Badge";
import Button from "./Button";
import { ShoppingCart } from "lucide-react";

export default function ProductCard({
  image = "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600&auto=format&fit=crop",
  title = "Produk Bakery",
  category = "Roti",
  price = 0,
  description = "Roti lezat buatan sendiri yang dipanggang segar setiap hari dengan bahan-bahan premium pilihan.",
  stock = 10,
  onActionClick,
  actionLabel = "Pesan Roti",
  className = "",
  ...props
}) {
  // Format price helper
  const formatRupiah = (val) => {
    if (typeof val === "number") {
      // Multiply by 1000 if it's a raw number from mock products (e.g. 15 -> 15000)
      const adjusted = val < 1000 ? val * 1000 : val;
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(adjusted);
    }
    return val;
  };

  // Determine stock alert
  const getStockStatus = () => {
    if (stock === 0) {
      return { label: "Habis", type: "danger" };
    }
    if (stock <= 10) {
      return { label: `Stok Tipis (${stock})`, type: "warning" };
    }
    return { label: `Stok: ${stock}`, type: "success" };
  };

  const stockStatus = getStockStatus();

  return (
    <Card noPadding hoverable className={`overflow-hidden h-full flex flex-col ${className}`} {...props}>
      {/* Product Image Wrapper with Hover Zoom */}
      <div className="relative h-48 overflow-hidden bg-[#FDF6ED]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-108"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 flex gap-1.5 flex-wrap">
          <Badge type="primary" variant="solid" className="backdrop-blur-md bg-[#8B5E2A]/90">
            {category}
          </Badge>
          <Badge type={stockStatus.type} variant="soft" className="backdrop-blur-md bg-white/80">
            {stockStatus.label}
          </Badge>
        </div>
      </div>

      {/* Card Info Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h4 className="text-lg font-black text-[#2B1808] line-clamp-1 mb-1 tracking-tight" title={title}>
            {title}
          </h4>
          <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed mb-4">
            {description}
          </p>
        </div>

        <div className="flex items-center justify-between gap-3 mt-2 border-t border-[#EDD9B8]/20 pt-4">
          <div>
            <span className="block text-[10px] uppercase font-bold tracking-wider text-gray-400">
              Harga
            </span>
            <span className="text-lg font-black text-[#8B5E2A] tracking-tight">
              {formatRupiah(price)}
            </span>
          </div>

          <Button
            size="sm"
            onClick={onActionClick}
            icon={ShoppingCart}
            disabled={stock === 0}
            className="shadow-sm"
          >
            {actionLabel}
          </Button>
        </div>
      </div>
    </Card>
  );
}
