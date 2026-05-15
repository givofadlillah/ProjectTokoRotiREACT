import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBoxOpen, FaSearch } from "react-icons/fa";
import PageHeader from "../components/PageHeader";
import { products } from "../data/products";

const MAROON = "#7B1C1C";
const MAROON_DARK = "#5A1313";

export default function Products() {
    const [search, setSearch] = useState("");

    const filtered = products.filter(p =>
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.code.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div style={{ background: "#F7F7F7", minHeight: "100vh", paddingBottom: 32 }}>
            <PageHeader title="Products" breadcrumb={["Dashboard", "Products"]} />

            {/* Filter Bar */}
            <div style={{ background: "#fff", borderRadius: 12, padding: "14px 18px", border: "1px solid #EEE", marginBottom: 16 }}>
                <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
                    <div style={{ position: "relative", flex: 1, minWidth: 200 }}>
                        <FaSearch style={{ position: "absolute", left: 11, top: "50%", transform: "translateY(-50%)", color: "#CCC", fontSize: 12 }} />
                        <input
                            placeholder="Cari nama / kode produk..."
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            style={{ width: "100%", paddingLeft: 32, paddingRight: 10, paddingTop: 8, paddingBottom: 8, border: "1px solid #E5E7EB", borderRadius: 8, fontSize: 13, outline: "none", boxSizing: "border-box", color: "#333" }}
                        />
                    </div>
                </div>
            </div>

            {/* Table */}
            <div style={{ background: "#fff", borderRadius: 12, border: "1px solid #EEE", overflow: "hidden" }}>
                <div style={{ padding: "13px 18px", borderBottom: "1px solid #F0F0F0" }}>
                    <span style={{ fontSize: 13, color: "#888" }}>Menampilkan <strong style={{ color: "#333" }}>{filtered.length}</strong> produk</span>
                </div>
                <div style={{ overflowX: "auto" }}>
                    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                        <thead>
                            <tr style={{ background: "#FAFAFA" }}>
                                {["Gambar", "Title", "Code", "Category", "Brand", "Price", "Stock"].map(h => (
                                    <th key={h} style={{ textAlign: "left", padding: "11px 16px", color: "#999", fontWeight: 600, fontSize: 11, textTransform: "uppercase", letterSpacing: 0.5, borderBottom: "1px solid #F0F0F0" }}>{h}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map(p => (
                                <tr key={p.id}
                                    style={{ borderBottom: "1px solid #F9F9F9", transition: "background 0.1s" }}
                                    onMouseEnter={e => e.currentTarget.style.background = "#FAFAFA"}
                                    onMouseLeave={e => e.currentTarget.style.background = "transparent"}
                                >
                                    <td style={{ padding: "12px 16px" }}>
                                        <img src={p.thumbnail} alt={p.title} style={{ width: 40, height: 40, borderRadius: 6, objectFit: "cover" }} />
                                    </td>
                                    <td style={{ padding: "12px 16px", fontWeight: 600 }}>
                                        <Link to={`/products/${p.id}`} style={{ color: MAROON, textDecoration: "none" }}>
                                            {p.title}
                                        </Link>
                                    </td>
                                    <td style={{ padding: "12px 16px", color: "#666" }}>
                                        <span style={{ fontFamily: "monospace", background: "#F5F5F5", padding: "3px 8px", borderRadius: 5, fontSize: 12 }}>{p.code}</span>
                                    </td>
                                    <td style={{ padding: "12px 16px", textTransform: "capitalize", color: "#555" }}>{p.category}</td>
                                    <td style={{ padding: "12px 16px", color: "#555" }}>{p.brand}</td>
                                    <td style={{ padding: "12px 16px", fontWeight: 700 }}>Rp {(p.price * 1000).toLocaleString()}</td>
                                    <td style={{ padding: "12px 16px" }}>
                                        <span style={{ 
                                            background: p.stock > 20 ? "#DCFCE7" : "#FEE2E2", 
                                            color: p.stock > 20 ? "#15803D" : "#B91C1C", 
                                            padding: "3px 10px", borderRadius: 5, fontSize: 12, fontWeight: 600 
                                        }}>
                                            {p.stock}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                            {filtered.length === 0 && (
                                <tr><td colSpan={7} style={{ padding: 40, textAlign: "center", color: "#CCC" }}>
                                    <FaBoxOpen size={32} style={{ display: "block", margin: "0 auto 12px", opacity: 0.3 }} />
                                    Tidak ada produk
                                </td></tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
