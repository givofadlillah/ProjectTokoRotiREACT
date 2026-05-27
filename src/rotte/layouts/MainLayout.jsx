import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Home,
  ShoppingBag,
  Users,
  Star,
  Tag,
  BarChart3,
  LogOut,
  Menu,
  X,
  Bell,
  User,
  Croissant,
  Layers,
} from "lucide-react";

const BROWN_DARK = "#3D2509";
const BROWN = "#8B5E2A";
const BROWN_LIGHT = "#C17C2E";
const CREAM = "#FDF6ED";
const WARM_WHITE = "#FFFBF5";
const BORDER = "#EDD9B8";
const ACCENT_LIGHT = "#F0C878";

const NAV_ITEMS = [
  { path: "/", icon: Home, label: "Dashboard" },
  { path: "/orders", icon: ShoppingBag, label: "Orders" },
  { path: "/customers", icon: Users, label: "Customers" },
  { path: "/products", icon: Croissant, label: "Products" },
  { path: "/loyalty", icon: Star, label: "Loyalty" },
  { path: "/promos", icon: Tag, label: "Promos" },
  { path: "/reports", icon: BarChart3, label: "Reports" },
  { path: "/components", icon: Layers, label: "Components" },
];

export default function MainLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/auth/login", { replace: true });
  };

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top right, #F6D9AA 0%, transparent 30%), #FDF6ED",
        fontFamily: "Barlow, Inter, sans-serif",
      }}
    >
      <aside
        style={{
          width: collapsed ? 78 : 260,
          minHeight: "100vh",
          background: `linear-gradient(180deg, ${BROWN_DARK} 0%, #2B1808 100%)`,
          display: "flex",
          flexDirection: "column",
          transition: "0.25s ease",
          flexShrink: 0,
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
          boxShadow: "16px 0 40px rgba(61,37,9,0.2)",
        }}
      >
        <div
          style={{
            padding: collapsed ? "22px 0" : "24px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: collapsed ? "center" : "flex-start",
            gap: 12,
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 16,
              background: `linear-gradient(135deg, ${BROWN_LIGHT}, ${BROWN})`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              boxShadow: "0 10px 24px rgba(193,124,46,0.35)",
              flexShrink: 0,
            }}
          >
            <Croissant size={25} />
          </div>

          {!collapsed && (
            <div>
              <div
                style={{
                  color: CREAM,
                  fontWeight: 900,
                  fontSize: 20,
                  lineHeight: 1,
                }}
              >
                Rotte<span style={{ color: ACCENT_LIGHT }}>.</span>
              </div>
              <div
                style={{
                  color: "rgba(255,255,255,0.45)",
                  fontSize: 11,
                  marginTop: 4,
                  letterSpacing: 1,
                }}
              >
                BAKERY CRM
              </div>
            </div>
          )}
        </div>

        <nav style={{ flex: 1, padding: "18px 12px" }}>
          {!collapsed && (
            <div
              style={{
                fontSize: 11,
                fontWeight: 800,
                letterSpacing: 1.4,
                color: "rgba(255,255,255,0.28)",
                padding: "0 12px 12px",
              }}
            >
              MENU UTAMA
            </div>
          )}

          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                style={({ isActive }) => ({
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: collapsed ? "13px 0" : "13px 14px",
                  justifyContent: collapsed ? "center" : "flex-start",
                  borderRadius: 16,
                  marginBottom: 7,
                  textDecoration: "none",
                  fontSize: 14,
                  fontWeight: isActive ? 800 : 600,
                  transition: "0.2s ease",
                  background: isActive
                    ? `linear-gradient(135deg, ${BROWN_LIGHT}, ${BROWN})`
                    : "transparent",
                  color: isActive ? "#fff" : "rgba(255,255,255,0.58)",
                  boxShadow: isActive
                    ? "0 10px 24px rgba(193,124,46,0.28)"
                    : "none",
                })}
              >
                <Icon size={18} />
                {!collapsed && <span>{item.label}</span>}
              </NavLink>
            );
          })}
        </nav>

        <div
          style={{
            padding: "14px 12px",
            borderTop: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <button
            onClick={handleLogout}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              gap: 12,
              justifyContent: collapsed ? "center" : "flex-start",
              padding: collapsed ? "13px 0" : "13px 14px",
              background: "rgba(255,255,255,0.06)",
              border: "none",
              cursor: "pointer",
              borderRadius: 16,
              color: "#FFD2D2",
              fontSize: 14,
              fontWeight: 700,
            }}
          >
            <LogOut size={17} />
            {!collapsed && <span>Logout</span>}
          </button>
        </div>
      </aside>

      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <header
          style={{
            background: "rgba(255,251,245,0.9)",
            backdropFilter: "blur(16px)",
            borderBottom: `1px solid ${BORDER}`,
            padding: "0 28px",
            height: 68,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "sticky",
            top: 0,
            zIndex: 30,
          }}
        >
          <button
            onClick={() => setCollapsed(!collapsed)}
            style={{
              width: 42,
              height: 42,
              background: CREAM,
              border: `1px solid ${BORDER}`,
              cursor: "pointer",
              color: BROWN,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 14,
            }}
          >
            {collapsed ? <Menu size={20} /> : <X size={20} />}
          </button>

          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <button
              style={{
                width: 42,
                height: 42,
                borderRadius: 14,
                border: `1px solid ${BORDER}`,
                background: CREAM,
                cursor: "pointer",
                position: "relative",
                color: BROWN,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Bell size={18} />
              <span
                style={{
                  position: "absolute",
                  top: 9,
                  right: 10,
                  width: 8,
                  height: 8,
                  background: "#E05252",
                  borderRadius: "50%",
                  border: `2px solid ${CREAM}`,
                }}
              />
            </button>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                background: WARM_WHITE,
                border: `1px solid ${BORDER}`,
                borderRadius: 999,
                padding: "6px 14px 6px 6px",
                boxShadow: "0 8px 20px rgba(139,94,42,0.08)",
              }}
            >
              <div
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: "50%",
                  background: `linear-gradient(135deg, ${BROWN_LIGHT}, ${BROWN_DARK})`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                }}
              >
                <User size={16} />
              </div>

              <div>
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 900,
                    color: "#2C1810",
                    lineHeight: 1,
                  }}
                >
                  Admin
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: "#A07850",
                    marginTop: 4,
                  }}
                >
                  Rotte Bakery
                </div>
              </div>
            </div>
          </div>
        </header>

        <main
          style={{
            flex: 1,
            padding: "30px",
            minWidth: 0,
          }}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}