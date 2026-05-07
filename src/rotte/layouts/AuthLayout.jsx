import { Outlet } from "react-router-dom";

const BROWN_DARK = "#3D2509";
const WARM_WHITE = "#FFFBF5";

export default function AuthLayout() {
    return (
        <div style={{
            minHeight: "100vh",
            background: `linear-gradient(135deg, ${BROWN_DARK} 0%, #5C3D1E 40%, #8B5E2A 100%)`,
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
                width: "400px",
                height: "400px",
                borderRadius: "50%",
                background: "rgba(193,124,46,0.15)",
                pointerEvents: "none"
            }} />
            <div style={{
                position: "absolute",
                bottom: "-80px",
                left: "-80px",
                width: "350px",
                height: "350px",
                borderRadius: "50%",
                background: "rgba(193,124,46,0.1)",
                pointerEvents: "none"
            }} />

            <div style={{
                position: "relative",
                zIndex: 1,
                width: "100%",
                maxWidth: "420px"
            }}>
                <div style={{
                    background: WARM_WHITE,
                    borderRadius: "28px",
                    padding: "44px 40px",
                    boxShadow: "0 32px 80px rgba(0,0,0,0.3)"
                }}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}