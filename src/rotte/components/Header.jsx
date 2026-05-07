import { Search, Bell, User } from "lucide-react";
import { useState } from "react";

const BROWN = "#8B5E2A";
const BROWN_LIGHT = "#C17C2E";
const CREAM = "#FDF6ED";
const WARM_WHITE = "#FFFBF5";

export default function Header() {
    const [searchOpen, setSearchOpen] = useState(false);
    const [keyword, setKeyword] = useState("");

    return (
        <div style={{
            background: WARM_WHITE,
            borderBottom: "1px solid #EDD9B8",
            padding: "0 32px",
            height: 68,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexShrink: 0
        }}>
            {/* Search Bar */}
            <div style={{ position: "relative", flex: 1, maxWidth: 380 }}>
                <Search size={15} style={{
                    position: "absolute",
                    left: 14,
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#A07850"
                }} />
                <input
                    placeholder="Cari pelanggan, pesanan..."
                    style={{
                        width: "100%",
                        background: CREAM,
                        border: "1.5px solid #EDD9B8",
                        borderRadius: 50,
                        padding: "9px 16px 9px 42px",
                        fontSize: 13,
                        outline: "none",
                        transition: "all 0.2s",
                        color: "#2C1810",
                        fontFamily: "inherit"
                    }}
                    onFocus={(e) => {
                        e.target.style.borderColor = BROWN_LIGHT;
                        e.target.style.boxShadow = "0 0 0 3px rgba(193,124,46,0.1)";
                    }}
                    onBlur={(e) => {
                        e.target.style.borderColor = "#EDD9B8";
                        e.target.style.boxShadow = "none";
                    }}
                />
            </div>

            {/* Right Actions */}
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginLeft: 16 }}>
                {/* Notification Bell */}
                <button style={{
                    width: 40,
                    height: 40,
                    borderRadius: 12,
                    background: CREAM,
                    border: "1.5px solid #EDD9B8",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    color: "#6B4C35",
                    transition: "all 0.2s",
                    position: "relative"
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#EDD9B8";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.background = CREAM;
                }}
                >
                    <Bell size={17} />
                    <span style={{
                        position: "absolute",
                        top: 6,
                        right: 6,
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: "#E05252",
                        border: "1.5px solid white"
                    }} />
                </button>

                {/* Divider */}
                <div style={{ width: 1, height: 40, background: "#EDD9B8" }} />

                {/* User Chip */}
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    background: CREAM,
                    border: "1.5px solid #EDD9B8",
                    borderRadius: 50,
                    padding: "5px 14px 5px 5px",
                    cursor: "pointer",
                    transition: "all 0.2s"
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = BROWN_LIGHT;
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#EDD9B8";
                }}
                >
                    <div style={{
                        width: 32,
                        height: 32,
                        borderRadius: "50%",
                        background: BROWN,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontSize: 13,
                        fontWeight: 700,
                        flexShrink: 0
                    }}>
                        A
                    </div>
                    <div>
                        <div style={{ fontSize: 13, fontWeight: 600, color: "#2C1810" }}>Admin</div>
                        <div style={{ fontSize: 11, color: "#A07850" }}>Rotte Bakery</div>
                    </div>
                </div>
            </div>

            {/* Search Modal */}
            {searchOpen && (
                <div style={{
                    position: "fixed",
                    inset: 0,
                    background: "rgba(0,0,0,0.45)",
                    backdropFilter: "blur(4px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 50
                }}
                onClick={() => setSearchOpen(false)}
                >
                    <div style={{
                        background: "#fff",
                        borderRadius: 20,
                        padding: 28,
                        width: 384,
                        boxShadow: "0 20px 60px rgba(0,0,0,0.3)"
                    }}
                    onClick={(e) => e.stopPropagation()}
                    >
                        <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16 }}>🔍 Search</h2>
                        <input
                            type="text"
                            placeholder="Cari pelanggan, order, atau produk..."
                            value={keyword}
                            onChange={(e) => setKeyword(e.target.value)}
                            autoFocus
                            style={{
                                width: "100%",
                                border: "1.5px solid #EDD9B8",
                                padding: "12px 16px",
                                borderRadius: 14,
                                fontSize: 13.5,
                                outline: "none",
                                boxSizing: "border-box",
                                transition: "all 0.2s",
                                fontFamily: "inherit"
                            }}
                            onFocus={(e) => {
                                e.target.style.borderColor = BROWN_LIGHT;
                                e.target.style.boxShadow = "0 0 0 3px rgba(193,124,46,0.1)";
                            }}
                            onBlur={(e) => {
                                e.target.style.borderColor = "#EDD9B8";
                                e.target.style.boxShadow = "none";
                            }}
                        />
                        {keyword && (
                            <div style={{ marginTop: 12, fontSize: 13, color: "#6B4C35" }}>
                                Hasil pencarian: <strong>{keyword}</strong>
                            </div>
                        )}
                        <button
                            onClick={() => setSearchOpen(false)}
                            style={{
                                marginTop: 16,
                                width: "100%",
                                background: BROWN,
                                color: "#fff",
                                border: "none",
                                borderRadius: 10,
                                padding: 12,
                                fontSize: 14,
                                fontWeight: 600,
                                cursor: "pointer",
                                transition: "all 0.2s"
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = "#5C3D1E";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = BROWN;
                            }}
                        >
                            Tutup
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}