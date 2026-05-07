import { Home, ShoppingBag, Users, Star, Tag, BarChart3, LogOut } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

const BROWN_DARK = "#3D2509";
const BROWN = "#8B5E2A";
const BROWN_LIGHT = "#C17C2E";
const CREAM = "#FDF6ED";
const ACCENT_LIGHT = "#F0C878";

export default function Sidebar() {
    const navigate = useNavigate();

    const menuItems = [
        { path: "/", icon: Home, label: "Dashboard" },
        { path: "/orders", icon: ShoppingBag, label: "Orders" },
        { path: "/customers", icon: Users, label: "Customers" },
        { path: "/loyalty", icon: Star, label: "Loyalty" },
        { path: "/promos", icon: Tag, label: "Promos" },
        { path: "/reports", icon: BarChart3, label: "Reports" },
    ];

    const menuClass = ({ isActive }) => ({
        display: "flex",
        alignItems: "center",
        gap: 12,
        borderRadius: 12,
        padding: "11px 14px",
        transition: "all 0.2s",
        cursor: "pointer",
        textDecoration: "none",
        fontSize: 13.5,
        fontWeight: isActive ? 600 : 500,
        color: isActive ? "#fff" : "rgba(255,255,255,0.5)",
        background: isActive ? BROWN_LIGHT : "transparent",
        boxShadow: isActive ? `0 4px 16px ${BROWN_LIGHT}33` : "none"
    });

    return (
        <div style={{
            width: 240,
            minWidth: 240,
            background: BROWN_DARK,
            padding: "28px 24px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            minHeight: "100vh",
            position: "relative",
            overflow: "hidden"
        }}>
            {/* Decorative circles */}
            <div style={{
                position: "absolute",
                top: "-60px",
                right: "-60px",
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                background: "rgba(193,124,46,0.15)",
                pointerEvents: "none"
            }} />

            {/* Logo */}
            <div>
                <div style={{ marginBottom: 20, borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: 20 }}>
                    <h1 style={{
                        fontSize: 26,
                        fontWeight: 800,
                        color: CREAM,
                        margin: 0,
                        letterSpacing: "-0.5px"
                    }}>
                        Rotte<span style={{ color: ACCENT_LIGHT }}>.</span>
                    </h1>
                    <p style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", margin: "2px 0 0", letterSpacing: "0.5px" }}>
                        Bakery CRM
                    </p>
                </div>

                {/* Menu Label */}
                <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "1.5px", color: "rgba(255,255,255,0.3)", padding: "20px 0 8px", textTransform: "uppercase" }}>
                    Menu
                </div>

                {/* Navigation */}
                <nav style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    {menuItems.map(item => {
                        const Icon = item.icon;
                        return (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                style={({ isActive }) => menuClass({ isActive })}
                            >
                                <Icon size={16} style={{ flexShrink: 0 }} />
                                {item.label}
                            </NavLink>
                        );
                    })}
                </nav>
            </div>

            {/* Footer */}
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 16 }}>
                <button
                    onClick={() => navigate('/auth/login')}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        width: "100%",
                        borderRadius: 12,
                        padding: "11px 14px",
                        background: "none",
                        border: "none",
                        color: "rgba(255,255,255,0.4)",
                        fontSize: 13.5,
                        fontWeight: 500,
                        cursor: "pointer",
                        transition: "all 0.2s"
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.color = "#ff8080";
                        e.currentTarget.style.background = "rgba(255,80,80,0.08)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.color = "rgba(255,255,255,0.4)";
                        e.currentTarget.style.background = "none";
                    }}
                >
                    <LogOut size={16} />
                    Logout
                </button>
            </div>

            {/* Copyright */}
            <div style={{ textAlign: "center", fontSize: 11.5, color: "rgba(255,255,255,0.2)", marginTop: 16, borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 12 }}>
                © 2025 Rotte Bakery CRM
            </div>
        </div>
    );
}