import axios from "axios";
import { useState } from "react";
import {
  AlertCircle,
  Loader2,
  Eye,
  EyeOff,
  Lock,
  User,
  Croissant,
  ArrowRight,
} from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { mockLogin } from "../../utils/mockAuth";

const theme = {
  dark: "#2B1808",
  brown: "#7A4A20",
  gold: "#C17C2E",
  cream: "#FFF7EA",
  white: "#FFFCF7",
  border: "#EAD6B8",
  text: "#2C1810",
  muted: "#9B7552",
};

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [dataForm, setDataForm] = useState({
    username: "emilys",
    password: "emilyspass",
  });

  const handleChange = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  if (!dataForm.username || !dataForm.password) {
    setError("Username dan password wajib diisi");
    return;
  }

  setLoading(true);
  setError("");

  try {
    const res = await mockLogin(dataForm.username, dataForm.password);

    const token = res.accessToken || res.token;
    
    if (token) {
      localStorage.setItem("token", token);
      navigate("/", { replace: true });
    } else {
      setError("Token tidak ditemukan dalam response");
    }
  } catch (err) {
    console.error("Login error:", err.message);
    setError(err.message || "Terjadi kesalahan saat login");
  } finally {
    setLoading(false);
  }
};

  const inputBase = {
    width: "100%",
    height: 52,
    borderRadius: 16,
    border: `1px solid ${theme.border}`,
    background: "#FFF9F0",
    padding: "0 48px",
    color: theme.text,
    fontSize: 14,
    outline: "none",
    boxSizing: "border-box",
    transition: "0.25s ease",
    fontFamily: "inherit",
  };

  const labelStyle = {
    display: "block",
    marginBottom: 9,
    color: theme.text,
    fontSize: 13,
    fontWeight: 800,
  };

  const leftIcon = {
    position: "absolute",
    left: 16,
    top: "50%",
    transform: "translateY(-50%)",
    color: theme.muted,
  };

  const handleFocus = (e) => {
    e.target.style.background = "#FFFFFF";
    e.target.style.borderColor = theme.gold;
    e.target.style.boxShadow = "0 0 0 4px rgba(193,124,46,0.13)";
  };

  const handleBlur = (e) => {
    e.target.style.background = "#FFF9F0";
    e.target.style.borderColor = theme.border;
    e.target.style.boxShadow = "none";
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #FFF7EA 0%, #F3D8AE 48%, #D69B55 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        fontFamily: "Inter, Barlow, system-ui, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="shape shape-one" />
      <div className="shape shape-two" />

      <div
        style={{
          width: "100%",
          maxWidth: 1080,
          minHeight: 620,
          background: "rgba(255,252,247,0.78)",
          border: "1px solid rgba(255,255,255,0.7)",
          borderRadius: 38,
          display: "grid",
          gridTemplateColumns: "1.05fr 0.95fr",
          overflow: "hidden",
          boxShadow: "0 35px 90px rgba(77,43,12,0.24)",
          backdropFilter: "blur(18px)",
          position: "relative",
          zIndex: 2,
        }}
        className="login-wrapper"
      >
        <section
          style={{
            padding: 54,
            background:
              "linear-gradient(145deg, #2B1808 0%, #623917 55%, #A8682A 100%)",
            color: "#fff",
            position: "relative",
            overflow: "hidden",
          }}
          className="brand-panel"
        >
          <div
            style={{
              position: "absolute",
              right: -70,
              bottom: -90,
              fontSize: 230,
              opacity: 0.09,
              transform: "rotate(-12deg)",
            }}
          >
            🥐
          </div>

          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 18,
              background: "rgba(255,255,255,0.14)",
              border: "1px solid rgba(255,255,255,0.18)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 36,
            }}
          >
            <Croissant size={31} />
          </div>

          <div style={{ position: "relative", zIndex: 2 }}>
            <p
              style={{
                margin: "0 0 14px",
                color: "#F0C878",
                fontSize: 13,
                fontWeight: 900,
                letterSpacing: 2.2,
              }}
            >
              ROTTE BAKERY CRM
            </p>

            <h1
              style={{
                margin: 0,
                fontSize: 48,
                lineHeight: 1.05,
                letterSpacing: "-1.7px",
                maxWidth: 480,
              }}
            >
              Fresh bread, clean data, better service.
            </h1>

            <p
              style={{
                marginTop: 22,
                color: "rgba(255,255,255,0.72)",
                fontSize: 15,
                lineHeight: 1.8,
                maxWidth: 420,
              }}
            >
              Dashboard profesional untuk mengelola pesanan, pelanggan,
              promosi, loyalty, dan laporan penjualan Rotte Bakery.
            </p>
          </div>

          <div
            style={{
              position: "absolute",
              left: 54,
              right: 54,
              bottom: 46,
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 14,
              zIndex: 2,
            }}
            className="stats"
          >
            {[
              ["24/7", "Monitoring"],
              ["CRM", "Management"],
              ["Secure", "Access"],
            ].map(([top, bottom]) => (
              <div
                key={top}
                style={{
                  background: "rgba(255,255,255,0.11)",
                  border: "1px solid rgba(255,255,255,0.14)",
                  borderRadius: 18,
                  padding: 16,
                }}
              >
                <div style={{ fontSize: 20, fontWeight: 900 }}>{top}</div>
                <div
                  style={{
                    marginTop: 4,
                    fontSize: 11,
                    color: "rgba(255,255,255,0.62)",
                  }}
                >
                  {bottom}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          style={{
            padding: "54px 48px",
            background: theme.white,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div style={{ marginBottom: 32 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "8px 12px",
                borderRadius: 999,
                background: theme.cream,
                border: `1px solid ${theme.border}`,
                color: theme.brown,
                fontSize: 12,
                fontWeight: 900,
                marginBottom: 18,
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: theme.gold,
                }}
              />
              Admin Login
            </div>

            <h2
              style={{
                margin: 0,
                color: theme.text,
                fontSize: 34,
                fontWeight: 950,
                letterSpacing: "-1px",
              }}
            >
              Selamat Datang
            </h2>

            <p
              style={{
                margin: "10px 0 0",
                color: theme.muted,
                fontSize: 14,
                lineHeight: 1.7,
              }}
            >
              Masuk ke akun admin untuk melanjutkan ke dashboard Rotte Bakery.
            </p>
          </div>

          {error && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "14px 16px",
                borderRadius: 16,
                background: "#FFF1F1",
                border: "1px solid #E9A5A5",
                color: "#9B2C2C",
                fontSize: 13,
                fontWeight: 800,
                marginBottom: 20,
              }}
            >
              <AlertCircle size={18} />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: 18 }}>
              <label style={labelStyle}>Username</label>

              <div style={{ position: "relative" }}>
                <User size={18} style={leftIcon} />

                <input
                  type="text"
                  name="username"
                  value={dataForm.username}
                  onChange={handleChange}
                  placeholder="Masukkan username"
                  style={inputBase}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>
            </div>

            <div style={{ marginBottom: 14 }}>
              <label style={labelStyle}>Password</label>

              <div style={{ position: "relative" }}>
                <Lock size={18} style={leftIcon} />

                <input
                  type={showPass ? "text" : "password"}
                  name="password"
                  value={dataForm.password}
                  onChange={handleChange}
                  placeholder="Masukkan password"
                  style={inputBase}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />

                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  style={{
                    position: "absolute",
                    right: 16,
                    top: "50%",
                    transform: "translateY(-50%)",
                    border: "none",
                    background: "transparent",
                    cursor: "pointer",
                    color: theme.muted,
                    display: "flex",
                    padding: 0,
                  }}
                >
                  {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 26,
              }}
            >
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 9,
                  color: theme.muted,
                  fontSize: 13,
                  cursor: "pointer",
                }}
              >
                <input type="checkbox" />
                Ingat saya
              </label>

              <Link
                to="/auth/forgot"
                style={{
                  color: theme.brown,
                  fontSize: 13,
                  fontWeight: 900,
                  textDecoration: "none",
                }}
              >
                Lupa password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{
                width: "100%",
                height: 54,
                border: "none",
                borderRadius: 17,
                background: loading
                  ? "#D8B17A"
                  : `linear-gradient(135deg, ${theme.gold}, ${theme.brown}, ${theme.dark})`,
                color: "#fff",
                fontSize: 15,
                fontWeight: 950,
                cursor: loading ? "not-allowed" : "pointer",
                boxShadow: loading
                  ? "none"
                  : "0 16px 30px rgba(122,74,32,0.28)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                transition: "0.25s ease",
                fontFamily: "inherit",
              }}
              onMouseEnter={(e) => {
                if (!loading) {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 36px rgba(122,74,32,0.34)";
                }
              }}
              onMouseLeave={(e) => {
                if (!loading) {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 16px 30px rgba(122,74,32,0.28)";
                }
              }}
            >
              {loading ? (
                <>
                  <Loader2 size={18} className="spin" />
                  Memproses...
                </>
              ) : (
                <>
                  Masuk ke Dashboard
                  <ArrowRight size={18} />
                </>
              )}
            </button>
          </form>

          <div
            style={{
              marginTop: 28,
              paddingTop: 24,
              borderTop: `1px solid ${theme.border}`,
              textAlign: "center",
              color: theme.muted,
              fontSize: 13,
            }}
          >
            Belum punya akun?{" "}
            <Link
              to="/auth/register"
              style={{
                color: theme.brown,
                fontWeight: 950,
                textDecoration: "none",
              }}
            >
              Daftar sekarang
            </Link>
          </div>
        </section>
      </div>

      <style>{`
        .shape {
          position: absolute;
          border-radius: 999px;
          filter: blur(1px);
          pointer-events: none;
        }

        .shape-one {
          width: 360px;
          height: 360px;
          background: rgba(255, 255, 255, 0.35);
          top: -120px;
          right: -80px;
        }

        .shape-two {
          width: 260px;
          height: 260px;
          background: rgba(122, 74, 32, 0.16);
          bottom: -90px;
          left: -60px;
        }

        .spin {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        input::placeholder {
          color: #B69573;
        }

        input[type="checkbox"] {
          accent-color: #8B5E2A;
        }

        @media (max-width: 920px) {
          .login-wrapper {
            grid-template-columns: 1fr !important;
            max-width: 480px !important;
            min-height: auto !important;
          }

          .brand-panel {
            display: none !important;
          }
        }

        @media (max-width: 520px) {
          .login-wrapper {
            border-radius: 26px !important;
          }

          section {
            padding: 36px 24px !important;
          }
        }
      `}</style>
    </div>
  );
}