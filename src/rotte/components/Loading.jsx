export default function Loading() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            background: "#FDF6ED"
        }}>
            <div style={{
                width: 48,
                height: 48,
                border: "4px solid #D4A96A",
                borderTop: "4px solid #8B5E2A",
                borderRadius: "50%",
                animation: "spin 1s linear infinite",
                marginBottom: 16
            }} />
            <p style={{ color: "#8B5E2A", fontSize: 18, fontWeight: 600 }}>Loading...</p>
            <style>{`
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
}