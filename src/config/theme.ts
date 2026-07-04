export const theme = {
  colors: {
    primary: "#6D5DFB",
    secondary: "#9A5CFF",
    accentPink: "#EC4899",
    accentOrange: "#F97316",
    background: "#FFFFFF",
    backgroundSoft: "#F7F5FF",
    text: "#171717",
    textMuted: "#666666",
    border: "#E9E5F5",
  },
  gradients: {
    primary:
      "linear-gradient(135deg, #4F7CFF 0%, #7C5CFC 42%, #EC4899 72%, #F97316 100%)",
    soft:
      "linear-gradient(135deg, rgba(79, 124, 255, 0.12), rgba(124, 92, 252, 0.12), rgba(236, 72, 153, 0.08))",
  },
  radius: {
    card: "1.5rem",
    button: "9999px",
  },
  shadow: {
    card: "0 20px 60px rgba(79, 70, 140, 0.12)",
    elevated: "0 28px 80px rgba(79, 70, 140, 0.18)",
  },
} as const;
