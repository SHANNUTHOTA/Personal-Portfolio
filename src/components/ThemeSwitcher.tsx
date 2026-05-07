import { useState, useEffect } from "react";

const themes = [
  {
    name: "Electric Blue",
    emoji: "🔵",
    vars: {
      "--background": "222 25% 6%",
      "--foreground": "0 0% 98%",
      "--card": "222 25% 6%",
      "--card-foreground": "0 0% 98%",
      "--popover": "222 25% 6%",
      "--popover-foreground": "0 0% 98%",
      "--primary": "213 95% 62%",
      "--primary-foreground": "222 25% 6%",
      "--primary-glow": "213 95% 72%",
      "--secondary": "222 20% 13%",
      "--secondary-foreground": "0 0% 98%",
      "--muted": "222 20% 12%",
      "--muted-foreground": "220 12% 56%",
      "--accent": "222 20% 13%",
      "--accent-foreground": "0 0% 98%",
      "--border": "222 20% 14%",
      "--input": "222 20% 14%",
      "--ring": "213 95% 62%",
      "--gradient-primary": "linear-gradient(135deg, hsl(213 95% 62%), hsl(240 80% 65%), hsl(260 70% 60%))",
      "--gradient-text": "linear-gradient(135deg, hsl(213 95% 70%), hsl(240 80% 72%))",
      "--gradient-hero": "radial-gradient(ellipse 80% 80% at 50% -20%, hsl(213 95% 62% / 0.22), transparent)",
      "--shadow-glow": "0 0 40px hsl(213 95% 62% / 0.3)",
      "--shadow-glow-lg": "0 0 60px hsl(213 95% 62% / 0.4), 0 0 100px hsl(240 80% 65% / 0.2)",
    },
    card: "rgba(59, 147, 255, 0.07)",
    border: "rgba(59, 147, 255, 0.15)",
    hover: "rgba(59, 147, 255, 0.25)",
    bg: "#0A0F1C",
  },
  {
    name: "Emerald Green",
    emoji: "🟢",
    vars: {
      "--background": "160 20% 5%",
      "--foreground": "140 30% 96%",
      "--card": "160 20% 5%",
      "--card-foreground": "140 30% 96%",
      "--popover": "160 20% 5%",
      "--popover-foreground": "140 30% 96%",
      "--primary": "158 80% 45%",
      "--primary-foreground": "160 20% 5%",
      "--primary-glow": "158 80% 55%",
      "--secondary": "160 15% 12%",
      "--secondary-foreground": "140 30% 96%",
      "--muted": "160 15% 11%",
      "--muted-foreground": "160 10% 55%",
      "--accent": "160 15% 12%",
      "--accent-foreground": "140 30% 96%",
      "--border": "160 15% 13%",
      "--input": "160 15% 13%",
      "--ring": "158 80% 45%",
      "--gradient-primary": "linear-gradient(135deg, hsl(158 80% 45%), hsl(142 70% 42%), hsl(170 75% 48%))",
      "--gradient-text": "linear-gradient(135deg, hsl(158 80% 55%), hsl(142 70% 58%))",
      "--gradient-hero": "radial-gradient(ellipse 80% 80% at 50% -20%, hsl(158 80% 45% / 0.2), transparent)",
      "--shadow-glow": "0 0 40px hsl(158 80% 45% / 0.3)",
      "--shadow-glow-lg": "0 0 60px hsl(158 80% 45% / 0.4), 0 0 100px hsl(142 70% 42% / 0.2)",
    },
    card: "rgba(20, 200, 122, 0.07)",
    border: "rgba(20, 200, 122, 0.15)",
    hover: "rgba(20, 200, 122, 0.25)",
    bg: "#090F0D",
  },
  {
    name: "Gold Luxury",
    emoji: "🟡",
    vars: {
      "--background": "30 18% 6%",
      "--foreground": "40 50% 95%",
      "--card": "30 18% 6%",
      "--card-foreground": "40 50% 95%",
      "--popover": "30 18% 6%",
      "--popover-foreground": "40 50% 95%",
      "--primary": "42 95% 55%",
      "--primary-foreground": "30 18% 6%",
      "--primary-glow": "42 95% 65%",
      "--secondary": "30 14% 12%",
      "--secondary-foreground": "40 50% 95%",
      "--muted": "30 14% 11%",
      "--muted-foreground": "30 8% 55%",
      "--accent": "30 14% 12%",
      "--accent-foreground": "40 50% 95%",
      "--border": "30 14% 14%",
      "--input": "30 14% 14%",
      "--ring": "42 95% 55%",
      "--gradient-primary": "linear-gradient(135deg, hsl(42 95% 55%), hsl(32 90% 52%), hsl(22 85% 50%))",
      "--gradient-text": "linear-gradient(135deg, hsl(42 95% 65%), hsl(32 90% 62%))",
      "--gradient-hero": "radial-gradient(ellipse 80% 80% at 50% -20%, hsl(42 95% 55% / 0.18), transparent)",
      "--shadow-glow": "0 0 40px hsl(42 95% 55% / 0.28)",
      "--shadow-glow-lg": "0 0 60px hsl(42 95% 55% / 0.38), 0 0 100px hsl(32 90% 52% / 0.18)",
    },
    card: "rgba(213, 165, 40, 0.07)",
    border: "rgba(213, 165, 40, 0.16)",
    hover: "rgba(213, 165, 40, 0.26)",
    bg: "#100D07",
  },
  {
    name: "Violet Refined",
    emoji: "🟣",
    vars: {
      "--background": "248 22% 6%",
      "--foreground": "0 0% 98%",
      "--card": "248 22% 6%",
      "--card-foreground": "0 0% 98%",
      "--popover": "248 22% 6%",
      "--popover-foreground": "0 0% 98%",
      "--primary": "258 85% 64%",
      "--primary-foreground": "0 0% 98%",
      "--primary-glow": "258 85% 74%",
      "--secondary": "248 18% 13%",
      "--secondary-foreground": "0 0% 98%",
      "--muted": "248 18% 12%",
      "--muted-foreground": "248 10% 56%",
      "--accent": "248 18% 13%",
      "--accent-foreground": "0 0% 98%",
      "--border": "248 18% 14%",
      "--input": "248 18% 14%",
      "--ring": "258 85% 64%",
      "--gradient-primary": "linear-gradient(135deg, hsl(258 85% 64%), hsl(280 75% 60%), hsl(238 80% 66%))",
      "--gradient-text": "linear-gradient(135deg, hsl(258 85% 74%), hsl(280 75% 70%))",
      "--gradient-hero": "radial-gradient(ellipse 80% 80% at 50% -20%, hsl(258 85% 64% / 0.22), transparent)",
      "--shadow-glow": "0 0 40px hsl(258 85% 64% / 0.3)",
      "--shadow-glow-lg": "0 0 60px hsl(258 85% 64% / 0.4), 0 0 100px hsl(280 75% 60% / 0.2)",
    },
    card: "rgba(139, 92, 246, 0.07)",
    border: "rgba(139, 92, 246, 0.15)",
    hover: "rgba(139, 92, 246, 0.25)",
    bg: "#0D0B14",
  },
];

export const ThemeSwitcher = () => {
  const [active, setActive] = useState(0);
  const [collapsed, setCollapsed] = useState(false);

  const applyTheme = (index: number) => {
    const theme = themes[index];
    const root = document.documentElement;

    Object.entries(theme.vars).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });

    // Update modern-card styles via a dynamic style tag
    let styleTag = document.getElementById("dynamic-theme-style") as HTMLStyleElement;
    if (!styleTag) {
      styleTag = document.createElement("style");
      styleTag.id = "dynamic-theme-style";
      document.head.appendChild(styleTag);
    }
    styleTag.textContent = `
      .modern-card {
        background: linear-gradient(145deg, ${theme.card} 0%, rgba(10,12,18,0.55) 50%, ${theme.card} 100%) !important;
        border: 1px solid ${theme.border} !important;
        box-shadow: 0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05) !important;
        transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1) !important;
      }
      .modern-card:hover {
        border-color: ${theme.hover} !important;
        box-shadow: 0 16px 48px rgba(0,0,0,0.6), 0 0 28px ${theme.border} !important;
        transform: translateY(-3px) !important;
      }
    `;

    setActive(index);
  };

  useEffect(() => {
    applyTheme(0);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: "10px",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* Theme buttons */}
      {!collapsed && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            alignItems: "flex-end",
          }}
        >
          {themes.map((theme, i) => (
            <button
              key={i}
              onClick={() => applyTheme(i)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 16px",
                borderRadius: "999px",
                border: active === i ? "2px solid white" : "2px solid rgba(255,255,255,0.15)",
                background: active === i
                  ? "rgba(255,255,255,0.18)"
                  : "rgba(10,12,18,0.85)",
                backdropFilter: "blur(12px)",
                color: "#fff",
                fontSize: "13px",
                fontWeight: active === i ? 600 : 400,
                cursor: "pointer",
                transition: "all 0.2s ease",
                whiteSpace: "nowrap",
                boxShadow: active === i
                  ? "0 4px 20px rgba(0,0,0,0.5)"
                  : "0 2px 10px rgba(0,0,0,0.3)",
              }}
            >
              <span>{theme.emoji}</span>
              <span>{theme.name}</span>
              {active === i && (
                <span style={{ fontSize: "10px", opacity: 0.8 }}>✓ Active</span>
              )}
            </button>
          ))}
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        style={{
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          border: "2px solid rgba(255,255,255,0.2)",
          background: "rgba(10,12,18,0.9)",
          backdropFilter: "blur(12px)",
          color: "#fff",
          fontSize: "20px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
          transition: "all 0.2s ease",
        }}
        title="Switch Theme"
      >
        🎨
      </button>
    </div>
  );
};
