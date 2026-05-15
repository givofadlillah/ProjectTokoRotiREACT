const BROWN_DARK = "#3D2509";
const BROWN = "#8B5E2A";
const BROWN_LIGHT = "#C17C2E";
const CREAM = "#FDF6ED";
const BORDER = "#EDD9B8";

export default function PageHeader({ title, breadcrumb = [], children }) {
  return (
    <div
      style={{
        background: "#FFFBF5",
        border: `1px solid ${BORDER}`,
        borderRadius: 22,
        padding: "22px 24px",
        marginBottom: 24,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 18,
        boxShadow: "0 14px 32px rgba(139,94,42,0.07)",
      }}
    >
      <div>
        <h1
          style={{
            margin: 0,
            fontSize: 26,
            fontWeight: 950,
            color: BROWN_DARK,
            letterSpacing: "-0.5px",
            lineHeight: 1.2,
          }}
        >
          {title}
        </h1>

        {breadcrumb.length > 0 && (
          <div
            style={{
              marginTop: 8,
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 7,
              fontSize: 13,
              color: "#A07850",
            }}
          >
            {breadcrumb.map((crumb, i) => (
              <span
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 7,
                }}
              >
                {i > 0 && <span style={{ color: "#D7B98D" }}>/</span>}
                <span
                  style={{
                    color: i === breadcrumb.length - 1 ? BROWN : "#A07850",
                    fontWeight: i === breadcrumb.length - 1 ? 900 : 600,
                  }}
                >
                  {crumb}
                </span>
              </span>
            ))}
          </div>
        )}
      </div>

      {children && (
        <div
          style={{
            display: "flex",
            gap: 10,
            alignItems: "center",
            flexShrink: 0,
          }}
        >
          {children}
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          div[style*="justify-content: space-between"] {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
        }
      `}</style>
    </div>
  );
}