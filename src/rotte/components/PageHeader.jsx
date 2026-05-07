const MAROON = "#7B1C1C";
const MAROON_MUTED = "#F9EFEF";

export default function PageHeader({ title, breadcrumb = [], children }) {
    return (
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: 20,
        }}>
            <div>
                <h1 style={{
                    margin: 0,
                    fontSize: 22,
                    fontWeight: 800,
                    color: "#1A1A1A",
                    lineHeight: 1,
                }}>
                    {title}
                </h1>
                {breadcrumb.length > 0 && (
                    <div style={{
                        marginTop: 6,
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        fontSize: 12,
                        color: "#AAA",
                    }}>
                        {breadcrumb.map((crumb, i) => (
                            <span key={i} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                                {i > 0 && <span style={{ color: "#DDD" }}>/</span>}
                                <span style={{ color: i === breadcrumb.length - 1 ? MAROON : "#AAA", fontWeight: i === breadcrumb.length - 1 ? 600 : 400 }}>
                                    {crumb}
                                </span>
                            </span>
                        ))}
                    </div>
                )}
            </div>
            {children && (
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                    {children}
                </div>
            )}
        </div>
    );
}