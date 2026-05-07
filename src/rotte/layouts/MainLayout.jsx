import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
    Home, ShoppingBag, Users, Star, Tag, BarChart3, LogOut,
    Menu, X, Bell, User
} from "lucide-react";

// ── Warna tema coklat milik Rotte ──────────────────────────────────────────
const BROWN_DARK  = "#3D2509";
const BROWN       = "#8B5E2A";
const BROWN_LIGHT = "#C17C2E";
const CREAM       = "#FDF6ED";
const ACCENT_LIGHT = "#F0C878";

const NAV_ITEMS = [
    { path: "/",          icon: Home,      label: "Dashboard" },
    { path: "/orders",    icon: ShoppingBag, label: "Orders" },
    { path: "/customers", icon: Users,     label: "Customers" },
    { path: "/loyalty",   icon: Star,      label: "Loyalty" },
    { path: "/promos",    icon: Tag,       label: "Promos" },
    { path: "/reports",   icon: BarChart3, label: "Reports" },
];

export default function MainLayout() {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/auth/login");
    };

    return (
        <div style={{
            display: "flex",
            minHeight: "100vh",
            background: CREAM,
            fontFamily: "Barlow, sans-serif"
        }}>

            {/* ── Sidebar ─────────────────────────────────────────────── */}
            <aside style={{
                width: collapsed ? 68 : 230,
                minHeight: "100vh",
                background: BROWN_DARK,
                display: "flex",
                flexDirection: "column",
                transition: "width 0.25s ease",
                flexShrink: 0,
                position: "sticky",
                top: 0,
                height: "100vh",
                overflowY: "auto",
                overflowX: "hidden",
            }}>

                {/* Logo */}
                <div style={{
                    padding: collapsed ? "18px 0" : "20px 18px",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    borderBottom: "1px solid rgba(255,255,255,0.08)",
                    justifyContent: collapsed ? "center" : "flex-start",
                    position: "relative",
                    overflow: "hidden",
                }}>
                    {/* Decorative circle */}
                    <div style={{
                        position: "absolute", top: -40, right: -40,
                        width: 120, height: 120, borderRadius: "50%",
                        background: "rgba(193,124,46,0.15)", pointerEvents: "none"
                    }} />
                    <div style={{
                        width: 36, height: 36, borderRadius: 10,
                        background: "rgba(255,255,255,0.1)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 18, flexShrink: 0,
                    }}>🥐</div>
                    {!collapsed && (
                        <div>
                            <div style={{ color: CREAM, fontWeight: 800, fontSize: 16, lineHeight: 1 }}>
                                Rotte<span style={{ color: ACCENT_LIGHT }}>.</span>
                            </div>
                            <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 10, marginTop: 2, letterSpacing: "0.5px" }}>
                                Bakery CRM
                            </div>
                        </div>
                    )}
                </div>

                {/* Navigation */}
                <nav style={{ flex: 1, padding: "12px 8px" }}>
                    {!collapsed && (
                        <div style={{
                            fontSize: 10, fontWeight: 600, letterSpacing: "1.5px",
                            color: "rgba(255,255,255,0.3)", padding: "6px 10px 10px",
                            textTransform: "uppercase"
                        }}>Menu</div>
                    )}
                    {NAV_ITEMS.map(item => {
                        const Icon = item.icon;
                        return (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                end={item.path === "/"}
                                style={({ isActive }) => ({
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 10,
                                    padding: collapsed ? "11px 0" : "11px 12px",
                                    justifyContent: collapsed ? "center" : "flex-start",
                                    borderRadius: 10,
                                    marginBottom: 2,
                                    textDecoration: "none",
                                    fontSize: 13,
                                    fontWeight: isActive ? 600 : 500,
                                    transition: "all 0.15s",
                                    background: isActive ? BROWN_LIGHT : "transparent",
                                    color: isActive ? "#fff" : "rgba(255,255,255,0.55)",
                                    borderLeft: isActive ? `3px solid ${ACCENT_LIGHT}` : "3px solid transparent",
                                    boxShadow: isActive ? `0 4px 16px rgba(193,124,46,0.25)` : "none",
                                })}
                            >
                                <Icon size={15} style={{ flexShrink: 0 }} />
                                {!collapsed && <span>{item.label}</span>}
                            </NavLink>
                        );
                    })}
                </nav>

                {/* Logout */}
                <div style={{ padding: "12px 8px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                    <button
                        onClick={handleLogout}
                        style={{
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            gap: 10,
                            justifyContent: collapsed ? "center" : "flex-start",
                            padding: collapsed ? "11px 0" : "11px 12px",
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            borderRadius: 10,
                            color: "rgba(255,255,255,0.45)",
                            fontSize: 13,
                            fontWeight: 500,
                            transition: "all 0.15s",
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.background = "rgba(255,80,80,0.1)";
                            e.currentTarget.style.color = "#ff9090";
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.background = "none";
                            e.currentTarget.style.color = "rgba(255,255,255,0.45)";
                        }}
                    >
                        <LogOut size={14} />
                        {!collapsed && <span>Logout</span>}
                    </button>
                </div>

                {/* Copyright */}
                {!collapsed && (
                    <div style={{
                        textAlign: "center", fontSize: 10.5,
                        color: "rgba(255,255,255,0.2)",
                        padding: "10px 12px 14px",
                        borderTop: "1px solid rgba(255,255,255,0.06)"
                    }}>
                        © 2025 Rotte Bakery CRM
                    </div>
                )}
            </aside>

            {/* ── Main Content ─────────────────────────────────────────── */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>

                {/* Topbar */}
                <header style={{
                    background: "#FFFBF5",
                    borderBottom: "1px solid #EDD9B8",
                    padding: "0 24px",
                    height: 56,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    position: "sticky",
                    top: 0,
                    zIndex: 30,
                    flexShrink: 0,
                }}>
                    {/* Hamburger */}
                    <button
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            background: "none", border: "none", cursor: "pointer",
                            color: BROWN, display: "flex", alignItems: "center", padding: 4,
                            borderRadius: 8, transition: "background 0.15s",
                        }}
                        onMouseEnter={e => e.currentTarget.style.background = "#EDD9B8"}
                        onMouseLeave={e => e.currentTarget.style.background = "none"}
                    >
                        {collapsed ? <Menu size={18} /> : <X size={18} />}
                    </button>

                    {/* Right: Bell + User */}
                    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                        {/* Notification Bell */}
                        <button style={{
                            background: "none", border: "none", cursor: "pointer",
                            position: "relative", color: BROWN,
                            display: "flex", alignItems: "center", padding: 4,
                        }}>
                            <Bell size={16} />
                            <span style={{
                                position: "absolute", top: 0, right: 0,
                                width: 7, height: 7,
                                background: "#E05252",
                                borderRadius: "50%",
                                border: "1.5px solid #FFFBF5"
                            }} />
                        </button>

                        {/* User chip */}
                        <div style={{
                            display: "flex", alignItems: "center", gap: 8,
                            cursor: "pointer",
                            background: CREAM,
                            border: "1px solid #EDD9B8",
                            borderRadius: 50,
                            padding: "4px 12px 4px 4px",
                            transition: "border-color 0.15s",
                        }}
                            onMouseEnter={e => e.currentTarget.style.borderColor = BROWN_LIGHT}
                            onMouseLeave={e => e.currentTarget.style.borderColor = "#EDD9B8"}
                        >
                            <div style={{
                                width: 28, height: 28, borderRadius: "50%",
                                background: BROWN,
                                display: "flex", alignItems: "center", justifyContent: "center",
                            }}>
                                <User size={13} style={{ color: "#fff" }} />
                            </div>
                            <div>
                                <div style={{ fontSize: 12, fontWeight: 700, color: "#2C1810", lineHeight: 1 }}>Admin</div>
                                <div style={{ fontSize: 10, color: "#A07850" }}>Rotte Bakery</div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main style={{
                    flex: 1,
                    padding: "24px 28px",
                    minWidth: 0,
                    overflowY: "auto",
                }}>
                    <Outlet />
                </main>
            </div>
        </div>
    );
}