import axios from "axios";
import { useState } from "react";
import { AlertCircle, Loader2, Eye, EyeOff, Lock, User, Mail } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

// Rotte Bakery Color Scheme
const BROWN = "#8B5E2A";
const BROWN_DARK = "#5C3D1E";
const BROWN_LIGHT = "#C17C2E";
const CREAM = "#FDF6ED";
const WARM_WHITE = "#FFFBF5";

export default function Register() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [dataForm, setDataForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({ ...dataForm, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email, username, password, confirmPassword } = dataForm;

    if (!firstName || !lastName || !email || !username || !password || !confirmPassword) {
      setError("Semua field wajib diisi");
      return;
    }

    if (password !== confirmPassword) {
      setError("Password dan konfirmasi password tidak cocok");
      return;
    }

    if (password.length < 6) {
      setError("Password minimal 6 karakter");
      return;
    }

    setLoading(true);
    setError("");

    // Simulate registration (replace with actual API call)
    setTimeout(() => {
      try {
        localStorage.setItem("user", JSON.stringify({ firstName, lastName, email, username }));
        navigate("/auth/login");
      } catch {
        setError("Registrasi gagal, silakan coba lagi");
      } finally {
        setLoading(false);
      }
    }, 1500);
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: `linear-gradient(135deg, ${BROWN_DARK} 0%, ${BROWN} 50%, ${BROWN_LIGHT} 100%)`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "24px",
      position: "relative",
      overflow: "hidden"
    }}>

      {/* Decorative circles */}
      <div style={{
        position: "absolute",
        top: "-100px",
        right: "-100px",
        width: "300px",
        height: "300px",
        borderRadius: "50%",
        background: "rgba(193,124,46,0.15)",
        pointerEvents: "none"
      }} />
      <div style={{
        position: "absolute",
        bottom: "-80px",
        left: "-80px",
        width: "250px",
        height: "250px",
        borderRadius: "50%",
        background: "rgba(193,124,46,0.1)",
        pointerEvents: "none"
      }} />

      <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: "420px" }}>
        {/* Card */}
        <div style={{
          background: WARM_WHITE,
          borderRadius: "28px",
          padding: "44px 40px",
          boxShadow: "0 32px 80px rgba(0,0,0,0.3)"
        }}>

          {/* Brand */}
          <div style={{ textAlign: "center", marginBottom: 28 }}>
            <div style={{
              width: 64,
              height: 64,
              borderRadius: 20,
              background: `linear-gradient(135deg, ${BROWN_LIGHT} 0%, ${BROWN_DARK} 100%)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 24px",
              fontSize: 28,
              boxShadow: `0 8px 24px rgba(193,124,46,0.4)`
            }}>
              🥐
            </div>
            <h2 style={{
              margin: 0,
              fontSize: 22,
              fontWeight: 800,
              color: "#2C1810",
              letterSpacing: "-0.5px"
            }}>
              Daftar Sekarang
            </h2>
            <p style={{
              margin: "6px 0 0",
              fontSize: 13,
              color: "#A07850"
            }}>
              Buat akun untuk dashboard Rotte Bakery CRM
            </p>
          </div>

          {/* Error Alert */}
          {error && (
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(138,58,58,0.1)",
              border: `1.5px solid #8A3A3A`,
              borderRadius: 14,
              padding: "12px 16px",
              marginBottom: 18,
              fontSize: 13,
              color: "#8A3A3A"
            }}>
              <AlertCircle size={16} style={{ flexShrink: 0 }} />
              <span>{error}</span>
            </div>
          )}

          {/* Loading Alert */}
          {loading && (
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(193,124,46,0.08)",
              borderRadius: 14,
              padding: "12px 16px",
              marginBottom: 18,
              fontSize: 13,
              color: "#6B4C35"
            }}>
              <Loader2 size={16} style={{ flexShrink: 0, animation: "spin 1s linear infinite" }} />
              <span>Memproses...</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>

            {/* Name Fields */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 18 }}>
              <div>
                <label style={{
                  fontSize: 12.5,
                  fontWeight: 600,
                  color: "#6B4C35",
                  display: "block",
                  marginBottom: 8
                }}>
                  Nama Depan
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={dataForm.firstName}
                  onChange={handleChange}
                  placeholder="Nama depan"
                  style={{
                    width: "100%",
                    paddingLeft: 14,
                    paddingRight: 14,
                    paddingTop: 11,
                    paddingBottom: 11,
                    border: "1.5px solid #EDD9B8",
                    borderRadius: 12,
                    fontSize: 13,
                    outline: "none",
                    boxSizing: "border-box",
                    transition: "all 0.2s",
                    background: "#FDF6ED",
                    color: "#2C1810",
                    fontFamily: "inherit"
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = BROWN_LIGHT;
                    e.target.style.boxShadow = `0 0 0 3px rgba(193,124,46,0.1)`;
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#EDD9B8";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>
              <div>
                <label style={{
                  fontSize: 12.5,
                  fontWeight: 600,
                  color: "#6B4C35",
                  display: "block",
                  marginBottom: 8
                }}>
                  Nama Belakang
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={dataForm.lastName}
                  onChange={handleChange}
                  placeholder="Nama belakang"
                  style={{
                    width: "100%",
                    paddingLeft: 14,
                    paddingRight: 14,
                    paddingTop: 11,
                    paddingBottom: 11,
                    border: "1.5px solid #EDD9B8",
                    borderRadius: 12,
                    fontSize: 13,
                    outline: "none",
                    boxSizing: "border-box",
                    transition: "all 0.2s",
                    background: "#FDF6ED",
                    color: "#2C1810",
                    fontFamily: "inherit"
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = BROWN_LIGHT;
                    e.target.style.boxShadow = `0 0 0 3px rgba(193,124,46,0.1)`;
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#EDD9B8";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>
            </div>

            {/* Email Field */}
            <div style={{ marginBottom: 18 }}>
              <label style={{
                fontSize: 12.5,
                fontWeight: 600,
                color: "#6B4C35",
                display: "block",
                marginBottom: 8
              }}>
                Email
              </label>
              <div style={{ position: "relative" }}>
                <Mail size={15} style={{
                  position: "absolute",
                  left: 14,
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#A07850",
                  flexShrink: 0
                }} />
                <input
                  type="email"
                  name="email"
                  value={dataForm.email}
                  onChange={handleChange}
                  placeholder="email@example.com"
                  style={{
                    width: "100%",
                    paddingLeft: 42,
                    paddingRight: 14,
                    paddingTop: 11,
                    paddingBottom: 11,
                    border: "1.5px solid #EDD9B8",
                    borderRadius: 12,
                    fontSize: 13,
                    outline: "none",
                    boxSizing: "border-box",
                    transition: "all 0.2s",
                    background: "#FDF6ED",
                    color: "#2C1810",
                    fontFamily: "inherit"
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = BROWN_LIGHT;
                    e.target.style.boxShadow = `0 0 0 3px rgba(193,124,46,0.1)`;
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#EDD9B8";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>
            </div>

            {/* Username Field */}
            <div style={{ marginBottom: 18 }}>
              <label style={{
                fontSize: 12.5,
                fontWeight: 600,
                color: "#6B4C35",
                display: "block",
                marginBottom: 8
              }}>
                Username
              </label>
              <div style={{ position: "relative" }}>
                <User size={15} style={{
                  position: "absolute",
                  left: 14,
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#A07850",
                  flexShrink: 0
                }} />
                <input
                  type="text"
                  name="username"
                  value={dataForm.username}
                  onChange={handleChange}
                  placeholder="username"
                  style={{
                    width: "100%",
                    paddingLeft: 42,
                    paddingRight: 14,
                    paddingTop: 11,
                    paddingBottom: 11,
                    border: "1.5px solid #EDD9B8",
                    borderRadius: 12,
                    fontSize: 13,
                    outline: "none",
                    boxSizing: "border-box",
                    transition: "all 0.2s",
                    background: "#FDF6ED",
                    color: "#2C1810",
                    fontFamily: "inherit"
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = BROWN_LIGHT;
                    e.target.style.boxShadow = `0 0 0 3px rgba(193,124,46,0.1)`;
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#EDD9B8";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>
            </div>

            {/* Password Field */}
            <div style={{ marginBottom: 18 }}>
              <label style={{
                fontSize: 12.5,
                fontWeight: 600,
                color: "#6B4C35",
                display: "block",
                marginBottom: 8
              }}>
                Password
              </label>
              <div style={{ position: "relative" }}>
                <Lock size={15} style={{
                  position: "absolute",
                  left: 14,
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#A07850",
                  flexShrink: 0
                }} />
                <input
                  type={showPass ? "text" : "password"}
                  name="password"
                  value={dataForm.password}
                  onChange={handleChange}
                  placeholder="minimal 6 karakter"
                  style={{
                    width: "100%",
                    paddingLeft: 42,
                    paddingRight: 14,
                    paddingTop: 11,
                    paddingBottom: 11,
                    border: "1.5px solid #EDD9B8",
                    borderRadius: 12,
                    fontSize: 13,
                    outline: "none",
                    boxSizing: "border-box",
                    transition: "all 0.2s",
                    background: "#FDF6ED",
                    color: "#2C1810",
                    fontFamily: "inherit"
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = BROWN_LIGHT;
                    e.target.style.boxShadow = `0 0 0 3px rgba(193,124,46,0.1)`;
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#EDD9B8";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>
            </div>

            {/* Confirm Password Field */}
            <div style={{ marginBottom: 18 }}>
              <label style={{
                fontSize: 12.5,
                fontWeight: 600,
                color: "#6B4C35",
                display: "block",
                marginBottom: 8
              }}>
                Konfirmasi Password
              </label>
              <div style={{ position: "relative" }}>
                <Lock size={15} style={{
                  position: "absolute",
                  left: 14,
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#A07850",
                  flexShrink: 0
                }} />
                <input
                  type={showPass ? "text" : "password"}
                  name="confirmPassword"
                  value={dataForm.confirmPassword}
                  onChange={handleChange}
                  placeholder="ulangi password"
                  style={{
                    width: "100%",
                    paddingLeft: 42,
                    paddingRight: 42,
                    paddingTop: 11,
                    paddingBottom: 11,
                    border: "1.5px solid #EDD9B8",
                    borderRadius: 12,
                    fontSize: 13,
                    outline: "none",
                    boxSizing: "border-box",
                    transition: "all 0.2s",
                    background: "#FDF6ED",
                    color: "#2C1810",
                    fontFamily: "inherit"
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = BROWN_LIGHT;
                    e.target.style.boxShadow = `0 0 0 3px rgba(193,124,46,0.1)`;
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#EDD9B8";
                    e.target.style.boxShadow = "none";
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  style={{
                    position: "absolute",
                    right: 14,
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "#A07850",
                    display: "flex",
                    padding: 0,
                    transition: "color 0.2s"
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = BROWN; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "#A07850"; }}
                >
                  {showPass ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              style={{
                width: "100%",
                background: loading
                  ? "#D4A96A"
                  : `linear-gradient(135deg, ${BROWN_LIGHT} 0%, ${BROWN_DARK} 100%)`,
                color: "#fff",
                border: "none",
                borderRadius: 12,
                padding: 13,
                fontSize: 15,
                fontWeight: 700,
                cursor: loading ? "not-allowed" : "pointer",
                transition: "all 0.25s",
                boxShadow: loading ? "none" : `0 4px 16px rgba(193,124,46,0.35)`,
                fontFamily: "inherit"
              }}
              onMouseEnter={(e) => {
                if (!loading) {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = `0 8px 24px rgba(193,124,46,0.45)`;
                }
              }}
              onMouseLeave={(e) => {
                if (!loading) {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = `0 4px 16px rgba(193,124,46,0.35)`;
                }
              }}
            >
              Daftar
            </button>
          </form>

          {/* Sign In Link */}
          <div style={{ textAlign: "center", fontSize: 13, color: "#A07850" }}>
            Sudah punya akun?{" "}
            <Link
              to="/auth/login"
              style={{
                color: BROWN_LIGHT,
                fontWeight: 700,
                textDecoration: "none",
                cursor: "pointer",
                transition: "color 0.2s"
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = BROWN_DARK; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = BROWN_LIGHT; }}
            >
              Masuk di sini
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div style={{
          textAlign: "center",
          marginTop: 24,
          fontSize: 11.5,
          color: "rgba(255,255,255,0.3)"
        }}>
          © 2025 Rotte Bakery CRM. All rights reserved.
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}