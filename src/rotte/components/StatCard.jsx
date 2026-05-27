import React from "react";
import Card from "./Card";
import { TrendingUp, TrendingDown } from "lucide-react";

export default function StatCard({
  title = "Statistik",
  value = "0",
  icon: Icon = null,
  change = "",
  isPositive = true,
  color = "brown",
  className = "",
  ...props
}) {
  const colors = {
    brown: {
      bg: "#FEF3C7",
      color: "#92400E",
      border: "#FCD34D",
    },
    gold: {
      bg: "#FEF3C7",
      color: "#92400E",
      border: "#FCD34D",
    },
    red: {
      bg: "#FFEBEE",
      color: "#7B1C1C",
      border: "#FFCDD2",
    },
    green: {
      bg: "#DCFCE7",
      color: "#15803D",
      border: "#C8E6C9",
    },
    white: {
      bg: "#fff",
      color: "#3D2509",
      border: "#EDD9B8",
    }
  };

  const appliedColor = colors[color] || colors.white;

  return (
    <div
      style={{
        background: appliedColor.bg,
        border: `1px solid ${appliedColor.border}`,
        borderRadius: 14,
        padding: "20px 22px",
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: 8,
        minWidth: "220px",
        boxSizing: "border-box",
        transition: "all 0.2s ease",
      }}
      className={`hover:translate-y-[-2px] hover:shadow-[0_6px_24px_rgba(139,94,42,0.06)] ${className}`}
      {...props}
    >
      {/* Header containing Icon & Value */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10 }}>
        {Icon && (
          <span style={{ fontSize: 22, color: appliedColor.color, display: "flex", alignItems: "center" }}>
            <Icon size={22} />
          </span>
        )}
        <span style={{ fontSize: 26, fontWeight: 800, color: appliedColor.color, letterSpacing: "-0.5px", lineHeight: 1.1 }}>
          {value}
        </span>
      </div>

      {/* Title */}
      <div style={{ fontWeight: 700, fontSize: 14.5, color: appliedColor.color, marginTop: 4 }}>
        {title}
      </div>

      {/* Change / subtitle */}
      {change && (
        <div style={{ fontSize: 11, color: appliedColor.color + "99", display: "flex", alignItems: "center", gap: 4, marginTop: 2 }}>
          <span style={{ fontWeight: 800, display: "inline-flex", alignItems: "center", gap: 2 }}>
            {isPositive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
            {change}
          </span>
          <span>dari bulan lalu</span>
        </div>
      )}
    </div>
  );
}
