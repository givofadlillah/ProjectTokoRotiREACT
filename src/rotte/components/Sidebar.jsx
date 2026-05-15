import {
  Home,
  ShoppingBag,
  Users,
  Star,
  Tag,
  BarChart3,
  LogOut,
  Croissant,
  ChevronRight,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

const COLORS = {
  dark: "#2B1808",
  brown: "#8B5E2A",
  gold: "#C17C2E",
  cream: "#FDF6ED",
  light: "#FFF9F3",
  border: "rgba(255,255,255,0.08)",
};

export default function Sidebar() {
  const navigate = useNavigate();

  const menuItems = [
    {
      path: "/",
      icon: Home,
      label: "Dashboard",
      desc: "Overview bisnis",
    },
    {
      path: "/orders",
      icon: ShoppingBag,
      label: "Orders",
      desc: "Data pesanan",
    },
    {
      path: "/customers",
      icon: Users,
      label: "Customers",
      desc: "Pelanggan",
    },
    {
      path: "/loyalty",
      icon: Star,
      label: "Loyalty",
      desc: "Member aktif",
    },
    {
      path: "/promos",
      icon: Tag,
      label: "Promos",
      desc: "Promo bakery",
    },
    {
      path: "/reports",
      icon: BarChart3,
      label: "Reports",
      desc: "Laporan data",
    },
  ];

  return (
    <aside
      style={{
        width: 285,
        minWidth: 285,
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #2B1808 0%, #4E2D12 45%, #6B3E18 100%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 24,
        position: "relative",
        overflow: "hidden",
        boxShadow: "18px 0 45px rgba(43,24,8,0.25)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -80,
          right: -80,
          width: 240,
          height: 240,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.06)",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: -120,
          left: -90,
          width: 260,
          height: 260,
          borderRadius: "50%",
          background: "rgba(193,124,46,0.12)",
        }}
      />

      <div style={{ position: "relative", zIndex: 2 }}>
        <div
          style={{
            background: "rgba(255,255,255,0.06)",
            border: `1px solid ${COLORS.border}`,
            borderRadius: 26,
            padding: 20,
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginBottom: 28,
            backdropFilter: "blur(10px)",
          }}
        >
          <div
            style={{
              width: 54,
              height: 54,
              borderRadius: 18,
              background:
                "linear-gradient(135deg, #C17C2E 0%, #8B5E2A 55%, #3D2509 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              flexShrink: 0,
              boxShadow: "0 12px 25px rgba(193,124,46,0.28)",
            }}
          >
            <Croissant size={28} />
          </div>

          <div>
            <h1
              style={{
                margin: 0,
                color: COLORS.cream,
                fontSize: 24,
                fontWeight: 950,
                letterSpacing: "-0.7px",
              }}
            >
              Rotte<span style={{ color: "#F0C878" }}>.</span>
            </h1>

            <p
              style={{
                margin: "4px 0 0",
                fontSize: 11,
                color: "rgba(255,255,255,0.48)",
                letterSpacing: 1.2,
                fontWeight: 700,
              }}
            >
              BAKERY CRM SYSTEM
            </p>
          </div>
        </div>

        <div
          style={{
            marginBottom: 14,
            color: "rgba(255,255,255,0.28)",
            fontSize: 11,
            fontWeight: 900,
            letterSpacing: 1.8,
            paddingLeft: 6,
          }}
        >
          MAIN MENU
        </div>

        <nav
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                style={({ isActive }) => ({
                  textDecoration: "none",
                  borderRadius: 22,
                  padding: "15px 16px",
                  transition: "0.22s ease",
                  background: isActive
                    ? "linear-gradient(135deg, #C17C2E, #8B5E2A)"
                    : "rgba(255,255,255,0.04)",
                  border: isActive
                    ? "1px solid rgba(255,255,255,0.12)"
                    : "1px solid rgba(255,255,255,0.03)",
                  boxShadow: isActive
                    ? "0 18px 30px rgba(193,124,46,0.28)"
                    : "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                })}
              >
                {({ isActive }) => (
                  <>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 14,
                      }}
                    >
                      <div
                        style={{
                          width: 42,
                          height: 42,
                          borderRadius: 15,
                          background: isActive
                            ? "rgba(255,255,255,0.16)"
                            : "rgba(255,255,255,0.07)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#fff",
                          flexShrink: 0,
                        }}
                      >
                        <Icon size={19} />
                      </div>

                      <div>
                        <div
                          style={{
                            color: "#fff",
                            fontSize: 14,
                            fontWeight: 850,
                          }}
                        >
                          {item.label}
                        </div>

                        <div
                          style={{
                            marginTop: 3,
                            color: isActive
                              ? "rgba(255,255,255,0.72)"
                              : "rgba(255,255,255,0.4)",
                            fontSize: 11,
                          }}
                        >
                          {item.desc}
                        </div>
                      </div>
                    </div>

                    <ChevronRight
                      size={16}
                      color={
                        isActive
                          ? "rgba(255,255,255,0.9)"
                          : "rgba(255,255,255,0.25)"
                      }
                    />
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>
      </div>

      <div style={{ position: "relative", zIndex: 2 }}>
        <div
          style={{
            background: "rgba(255,255,255,0.06)",
            border: `1px solid ${COLORS.border}`,
            borderRadius: 22,
            padding: 18,
            marginBottom: 16,
          }}
        >
          <div
            style={{
              color: "#F0C878",
              fontSize: 12,
              fontWeight: 900,
              letterSpacing: 1,
            }}
          >
            TODAY SALES
          </div>

          <div
            style={{
              marginTop: 8,
              color: "#fff",
              fontSize: 30,
              fontWeight: 950,
            }}
          >
            Rp 12.8M
          </div>

          <div
            style={{
              marginTop: 6,
              color: "rgba(255,255,255,0.55)",
              fontSize: 12,
            }}
          >
            +18% dibanding kemarin
          </div>
        </div>

        <button
          onClick={() => navigate("/auth/login")}
          style={{
            width: "100%",
            height: 54,
            borderRadius: 18,
            border: "none",
            background: "rgba(255,255,255,0.07)",
            borderColor: "rgba(255,255,255,0.08)",
            color: "#FFD6D6",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            cursor: "pointer",
            fontWeight: 800,
            fontSize: 14,
            transition: "0.22s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background =
              "rgba(255,80,80,0.14)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background =
              "rgba(255,255,255,0.07)";
          }}
        >
          <LogOut size={18} />
          Logout
        </button>

        <div
          style={{
            marginTop: 16,
            textAlign: "center",
            color: "rgba(255,255,255,0.22)",
            fontSize: 11,
            letterSpacing: 0.4,
          }}
        >
          © 2026 Rotte Bakery CRM
        </div>
      </div>
    </aside>
  );
}