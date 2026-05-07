import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            background: "#FDF6ED",
            color: "#3D2509"
        }}>
            <h1 style={{ fontSize: 72, fontWeight: 800, margin: 0, color: "#8B5E2A" }}>404</h1>
            <p style={{ fontSize: 20, marginBottom: 24, fontWeight: 600 }}>Oops! Halaman tidak ditemukan.</p>
            <Link to="/" style={{
                background: "#8B5E2A",
                color: "#fff",
                padding: "12px 24px",
                borderRadius: 8,
                textDecoration: "none",
                fontWeight: 600
            }}>Kembali ke Dashboard</Link>
        </div>
    );
}