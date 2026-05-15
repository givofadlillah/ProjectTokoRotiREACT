import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { products } from "../data/products";
import PageHeader from "../components/PageHeader";
import { FaArrowLeft } from "react-icons/fa";

const MAROON = "#7B1C1C";

export default function ProductDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Simulasi request API
        setLoading(true);
        setTimeout(() => {
            const foundProduct = products.find(p => p.id === parseInt(id));
            if (foundProduct) {
                setProduct(foundProduct);
            } else {
                setError("Produk tidak ditemukan");
            }
            setLoading(false);
        }, 500);
    }, [id]);

    return (
        <div style={{ background: "#F7F7F7", minHeight: "100vh", paddingBottom: 32 }}>
            <PageHeader title="Product Detail" breadcrumb={["Dashboard", "Products", product ? product.title : "Detail"]}>
                <button
                    onClick={() => navigate("/products")}
                    style={{ display: "flex", alignItems: "center", gap: 8, background: "#fff", color: "#555", border: "1px solid #DDD", borderRadius: 8, padding: "9px 18px", fontSize: 13, fontWeight: 600, cursor: "pointer" }}
                >
                    <FaArrowLeft size={11} /> Kembali
                </button>
            </PageHeader>

            {loading ? (
                <div style={{ padding: 40, textAlign: "center", color: "#888" }}>Loading...</div>
            ) : error ? (
                <div style={{ padding: 40, textAlign: "center", color: "#B91C1C", background: "#FEE2E2", borderRadius: 12, border: "1px solid #FCA5A5", margin: 20 }}>
                    {error}
                </div>
            ) : product ? (
                <div style={{ display: "flex", gap: 24, maxWidth: 800, margin: "0 auto", alignItems: "flex-start" }}>
                    <div style={{ flex: 1, background: "#fff", borderRadius: 16, overflow: "hidden", border: "1px solid #EEE" }}>
                        <img src={product.thumbnail} alt={product.title} style={{ width: "100%", height: 300, objectFit: "cover", display: "block" }} />
                        <div style={{ padding: 24 }}>
                            <h2 style={{ margin: "0 0 12px", fontSize: 24, color: "#222" }}>{product.title}</h2>
                            <div style={{ display: "flex", gap: 12, marginBottom: 20 }}>
                                <span style={{ background: "#F5F5F5", padding: "4px 12px", borderRadius: 20, fontSize: 12, color: "#666", fontWeight: 600 }}>{product.category}</span>
                                <span style={{ background: "#F5F5F5", padding: "4px 12px", borderRadius: 20, fontSize: 12, color: "#666", fontWeight: 600 }}>{product.brand}</span>
                            </div>
                            
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 24, paddingTop: 24, borderTop: "1px solid #F0F0F0" }}>
                                <div>
                                    <div style={{ fontSize: 12, color: "#888", marginBottom: 4 }}>Harga</div>
                                    <div style={{ fontSize: 20, fontWeight: 800, color: MAROON }}>Rp {(product.price * 1000).toLocaleString()}</div>
                                </div>
                                <div>
                                    <div style={{ fontSize: 12, color: "#888", marginBottom: 4 }}>Stok Tersedia</div>
                                    <div style={{ fontSize: 20, fontWeight: 800, color: "#222" }}>{product.stock} pcs</div>
                                </div>
                                <div>
                                    <div style={{ fontSize: 12, color: "#888", marginBottom: 4 }}>Kode Produk</div>
                                    <div style={{ fontSize: 14, fontWeight: 600, color: "#555", fontFamily: "monospace" }}>{product.code}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
}
